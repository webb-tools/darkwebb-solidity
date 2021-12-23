/**
 * Copyright 2021 Webb Technologies
 * SPDX-License-Identifier: GPL-3.0-or-later-only
 */

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "../interfaces/ILinkableAnchor.sol";
import "./HandlerHelpers.sol";
import "../interfaces/IExecutor.sol";

/**
    @title Handles Anchor edge list merkle root updates
    @author Webb Technologies.
    @notice This contract is intended to be used with the Bridge contract.
 */
contract AnchorHandler is IExecutor, HandlerHelpers {
    struct UpdateRecord {
        address _tokenAddress;
        uint256  _sourceChainID;
        bytes32 _resourceID;
        bytes32 _merkleRoot;
        uint256 _leafIndex;
    }

    // sourceChainID => height => Update Record
    mapping (uint256 => mapping(uint256 => UpdateRecord)) public _updateRecords;

    // sourceChainID => number of updates
    mapping(uint256 => uint64) public _counts;

    /**
        @param bridgeAddress Contract address of previously deployed Bridge.
        @param initialResourceIDs Resource IDs are used to identify a specific contract address.
        These are the Resource IDs this contract will initially support.
        @param initialContractAddresses These are the addresses the {initialResourceIDs} will point to, and are the contracts that will be
        called to perform various deposit calls.
        @dev {initialResourceIDs} and {initialContractAddresses} must have the same length (one resourceID for every address).
        Also, these arrays must be ordered in the way that {initialResourceIDs}[0] is the intended resourceID for {initialContractAddresses}[0].
     */
    constructor(
        address          bridgeAddress,
        bytes32[] memory initialResourceIDs,
        address[] memory initialContractAddresses
    ) {
        require(initialResourceIDs.length == initialContractAddresses.length,
            "initialResourceIDs and initialContractAddresses len mismatch");

        _bridgeAddress = bridgeAddress;

        for (uint256 i = 0; i < initialResourceIDs.length; i++) {
            _setResource(initialResourceIDs[i], initialContractAddresses[i]);
        }
    }

    /**
        @param updateNonce This ID will have been generated by the Bridge contract.
        @param sourceChainId ID of chain deposit originated from.
        @return UpdateRecord which consists of:
        - _tokenAddress Address used when {deposit} was executed.
        - _sourceChainID ChainID deposit originated from.
        - _resourceID ResourceID used when {deposit} was executed.
        - _destinationRecipientAddress Address tokens are intended to be deposited to on desitnation chain.
        - _depositer Address that initially called {deposit} in the Bridge contract.
        - _amount Amount of tokens that were deposited.
    */
    function getUpdateRecord(uint64 updateNonce, uint256 sourceChainId) external view returns (UpdateRecord memory) {
        return _updateRecords[sourceChainId][updateNonce];
    }

    /**
        @notice Proposal execution should be initiated when a proposal is finalized in the Bridge contract.
        by a relayer on the deposit's destination chain.
        @param resourceID ResourceID corresponding to a particular set of Anchors
        @param data Consists of {sourceChainID}, {leafIndex}, {merkleRoot} all padded to 32 bytes.
        @notice Data passed into the function should be constructed as follows:
        chainID                                  uint256     bytes  0 - 32
        leafIndex                                uint256     bytes  32 - 64
        merkleRoot                               uint256     bytes  64 - 96
     */
    function executeProposal(bytes32 resourceID, bytes calldata data) external override onlyBridge {
        bytes32       zeros;
        uint256       sourceChainId;
        uint256       leafIndex;
        uint256       merkleRoot;

        (zeros, sourceChainId, leafIndex, merkleRoot) = abi.decode(data, (bytes32, uint256, uint, uint));

        address anchorAddress = _resourceIDToContractAddress[resourceID];

        require(_contractWhitelist[anchorAddress], "provided tokenAddress is not whitelisted");

        ILinkableAnchor anchor = ILinkableAnchor(anchorAddress);

        if (anchor.hasEdge(sourceChainId)) {
            anchor.updateEdge(
                sourceChainId,
                bytes32(merkleRoot),
                leafIndex
            );
        } else {
            anchor.addEdge(
                sourceChainId,
                bytes32(merkleRoot),
                leafIndex
            );
        }

        uint nonce = ++_counts[sourceChainId];
        _updateRecords[sourceChainId][nonce] = UpdateRecord(
            anchorAddress,
            sourceChainId,
            resourceID,
            bytes32(merkleRoot),
            leafIndex
        );
    }
}
