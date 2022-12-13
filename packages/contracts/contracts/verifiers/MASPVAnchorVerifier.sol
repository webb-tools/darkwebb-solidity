/**
 * Copyright 2021-2022 Webb Technologies
 * SPDX-License-Identifier: GPL-3.0-or-later-only
 */

pragma solidity ^0.8.0;

import "../interfaces/verifiers/IAnchorVerifier.sol";
import "../interfaces/verifiers/IVAnchorVerifier.sol";

contract MASPVAnchorVerifier is IAnchorVerifier {
	IMASPVAnchorVerifier2_2 public v2_2;
	IMASPVAnchorVerifier2_16 public v2_16;

	IMASPVAnchorVerifier8_2 public v8_2;
	IMASPVAnchorVerifier8_16 public v8_16;

	constructor(
		IMASPVAnchorVerifier2_2 _verifier_2_2,
		IMASPVAnchorVerifier2_16 _verifier_2_16,
		IMASPVAnchorVerifier8_2 _verifier_8_2,
		IMASPVAnchorVerifier8_16 _verifier_8_16
	) {
		v2_2 = _verifier_2_2;
		v2_16 = _verifier_2_16;
		v8_2 = _verifier_8_2;
		v8_16 = _verifier_8_16;
	}

	function verifyProof(
		uint[2] memory a,
		uint[2][2] memory b,
		uint[2] memory c,
		bytes memory input,
		uint8 maxEdges,
		bool smallInputs
	) external view override returns (bool r) {
		if (maxEdges == 1) {
			if (smallInputs) {
				uint256[11] memory _inputs = abi.decode(input, (uint256[11]));
				return v2_2.verifyProof(a, b, c, _inputs);
			} else {
				uint256[25] memory _inputs = abi.decode(input, (uint256[25]));
				return v2_16.verifyProof(a, b, c, _inputs);
			}
		} else if (maxEdges == 7) {
			if (smallInputs) {
				uint256[17] memory _inputs = abi.decode(input, (uint256[17]));
				return v8_2.verifyProof(a, b, c, _inputs);
			} else {
				uint256[31] memory _inputs = abi.decode(input, (uint256[31]));
				return v8_16.verifyProof(a, b, c, _inputs);
			}
		} else {
			return false;
		}
	}
}
