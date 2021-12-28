/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BridgeInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "MAX_RELAYERS()": FunctionFragment;
    "RELAYER_ROLE()": FunctionFragment;
    "_chainID()": FunctionFragment;
    "_counts(uint256)": FunctionFragment;
    "_expiry()": FunctionFragment;
    "_fee()": FunctionFragment;
    "_hasVotedOnProposal(uint72,bytes32,address)": FunctionFragment;
    "_relayerThreshold()": FunctionFragment;
    "_resourceIDToHandlerAddress(bytes32)": FunctionFragment;
    "_totalRelayers()": FunctionFragment;
    "adminAddRelayer(address)": FunctionFragment;
    "adminChangeFee(uint256)": FunctionFragment;
    "adminChangeRelayerThreshold(uint256)": FunctionFragment;
    "adminPauseTransfers()": FunctionFragment;
    "adminRemoveRelayer(address)": FunctionFragment;
    "adminSetResource(address,bytes32,address)": FunctionFragment;
    "adminUnpauseTransfers()": FunctionFragment;
    "cancelProposal(uint256,uint64,bytes32)": FunctionFragment;
    "executeProposal(uint256,uint64,bytes,bytes32)": FunctionFragment;
    "getProposal(uint256,uint64,bytes32)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "getRoleMemberIndex(bytes32,address)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "isRelayer(address)": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceAdmin(address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "transferFunds(address[],uint256[])": FunctionFragment;
    "voteProposal(uint256,uint64,bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_RELAYERS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RELAYER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_chainID", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_counts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "_expiry", values?: undefined): string;
  encodeFunctionData(functionFragment: "_fee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_hasVotedOnProposal",
    values: [BigNumberish, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "_relayerThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_resourceIDToHandlerAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_totalRelayers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adminAddRelayer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "adminChangeFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "adminChangeRelayerThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "adminPauseTransfers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adminRemoveRelayer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "adminSetResource",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "adminUnpauseTransfers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelProposal",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposal",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberIndex",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "isRelayer", values: [string]): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFunds",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "voteProposal",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_RELAYERS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RELAYER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_chainID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_counts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_expiry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_fee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_hasVotedOnProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_relayerThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_resourceIDToHandlerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_totalRelayers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminAddRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminChangeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminChangeRelayerThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminPauseTransfers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminRemoveRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminSetResource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminUnpauseTransfers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isRelayer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteProposal",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(uint256,bytes32,uint64)": EventFragment;
    "Paused(address)": EventFragment;
    "ProposalEvent(uint256,uint64,uint8,bytes32)": EventFragment;
    "ProposalVote(uint256,uint64,uint8,bytes32)": EventFragment;
    "RelayerAdded(address)": EventFragment;
    "RelayerRemoved(address)": EventFragment;
    "RelayerThresholdChanged(uint256)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalVote"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayerThresholdChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    destinationChainID: BigNumber;
    resourceID: string;
    nonce: BigNumber;
  }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type ProposalEventEvent = TypedEvent<
  [BigNumber, BigNumber, number, string] & {
    originChainID: BigNumber;
    nonce: BigNumber;
    status: number;
    dataHash: string;
  }
>;

export type ProposalVoteEvent = TypedEvent<
  [BigNumber, BigNumber, number, string] & {
    originChainID: BigNumber;
    nonce: BigNumber;
    status: number;
    dataHash: string;
  }
>;

export type RelayerAddedEvent = TypedEvent<[string] & { relayer: string }>;

export type RelayerRemovedEvent = TypedEvent<[string] & { relayer: string }>;

export type RelayerThresholdChangedEvent = TypedEvent<
  [BigNumber] & { newThreshold: BigNumber }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class Bridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BridgeInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MAX_RELAYERS(overrides?: CallOverrides): Promise<[BigNumber]>;

    RELAYER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    _chainID(overrides?: CallOverrides): Promise<[BigNumber]>;

    _counts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _expiry(overrides?: CallOverrides): Promise<[number]>;

    _fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    _hasVotedOnProposal(
      destNonce: BigNumberish,
      dataHash: BytesLike,
      relayer: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _relayerThreshold(overrides?: CallOverrides): Promise<[number]>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _totalRelayers(overrides?: CallOverrides): Promise<[BigNumber]>;

    adminAddRelayer(
      relayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminChangeFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminChangeRelayerThreshold(
      newThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminPauseTransfers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminRemoveRelayer(
      relayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminSetResource(
      handlerAddress: string,
      resourceID: BytesLike,
      executionContextAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adminUnpauseTransfers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      data: BytesLike,
      resourceID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getProposal(
      originChainID: BigNumberish,
      nonce: BigNumberish,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, BigNumber, number, number] & {
          _status: number;
          _yesVotes: BigNumber;
          _yesVotesTotal: number;
          _proposedBlock: number;
        }
      ]
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoleMemberIndex(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isRelayer(relayer: string, overrides?: CallOverrides): Promise<[boolean]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFunds(
      addrs: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voteProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      resourceID: BytesLike,
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  MAX_RELAYERS(overrides?: CallOverrides): Promise<BigNumber>;

  RELAYER_ROLE(overrides?: CallOverrides): Promise<string>;

  _chainID(overrides?: CallOverrides): Promise<BigNumber>;

  _counts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  _expiry(overrides?: CallOverrides): Promise<number>;

  _fee(overrides?: CallOverrides): Promise<BigNumber>;

  _hasVotedOnProposal(
    destNonce: BigNumberish,
    dataHash: BytesLike,
    relayer: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  _relayerThreshold(overrides?: CallOverrides): Promise<number>;

  _resourceIDToHandlerAddress(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  _totalRelayers(overrides?: CallOverrides): Promise<BigNumber>;

  adminAddRelayer(
    relayerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminChangeFee(
    newFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminChangeRelayerThreshold(
    newThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminPauseTransfers(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminRemoveRelayer(
    relayerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminSetResource(
    handlerAddress: string,
    resourceID: BytesLike,
    executionContextAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adminUnpauseTransfers(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelProposal(
    chainID: BigNumberish,
    nonce: BigNumberish,
    dataHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeProposal(
    chainID: BigNumberish,
    nonce: BigNumberish,
    data: BytesLike,
    resourceID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getProposal(
    originChainID: BigNumberish,
    nonce: BigNumberish,
    dataHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, number, number] & {
      _status: number;
      _yesVotes: BigNumber;
      _yesVotesTotal: number;
      _proposedBlock: number;
    }
  >;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoleMemberIndex(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isRelayer(relayer: string, overrides?: CallOverrides): Promise<boolean>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceAdmin(
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFunds(
    addrs: string[],
    amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voteProposal(
    chainID: BigNumberish,
    nonce: BigNumberish,
    resourceID: BytesLike,
    dataHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    MAX_RELAYERS(overrides?: CallOverrides): Promise<BigNumber>;

    RELAYER_ROLE(overrides?: CallOverrides): Promise<string>;

    _chainID(overrides?: CallOverrides): Promise<BigNumber>;

    _counts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    _expiry(overrides?: CallOverrides): Promise<number>;

    _fee(overrides?: CallOverrides): Promise<BigNumber>;

    _hasVotedOnProposal(
      destNonce: BigNumberish,
      dataHash: BytesLike,
      relayer: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _relayerThreshold(overrides?: CallOverrides): Promise<number>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    _totalRelayers(overrides?: CallOverrides): Promise<BigNumber>;

    adminAddRelayer(
      relayerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    adminChangeFee(
      newFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    adminChangeRelayerThreshold(
      newThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    adminPauseTransfers(overrides?: CallOverrides): Promise<void>;

    adminRemoveRelayer(
      relayerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    adminSetResource(
      handlerAddress: string,
      resourceID: BytesLike,
      executionContextAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    adminUnpauseTransfers(overrides?: CallOverrides): Promise<void>;

    cancelProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    executeProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      data: BytesLike,
      resourceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getProposal(
      originChainID: BigNumberish,
      nonce: BigNumberish,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, number, number] & {
        _status: number;
        _yesVotes: BigNumber;
        _yesVotesTotal: number;
        _proposedBlock: number;
      }
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberIndex(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isRelayer(relayer: string, overrides?: CallOverrides): Promise<boolean>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceAdmin(newAdmin: string, overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferFunds(
      addrs: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    voteProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      resourceID: BytesLike,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(uint256,bytes32,uint64)"(
      destinationChainID?: null,
      resourceID?: null,
      nonce?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { destinationChainID: BigNumber; resourceID: string; nonce: BigNumber }
    >;

    Deposit(
      destinationChainID?: null,
      resourceID?: null,
      nonce?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { destinationChainID: BigNumber; resourceID: string; nonce: BigNumber }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "ProposalEvent(uint256,uint64,uint8,bytes32)"(
      originChainID?: null,
      nonce?: null,
      status?: null,
      dataHash?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        originChainID: BigNumber;
        nonce: BigNumber;
        status: number;
        dataHash: string;
      }
    >;

    ProposalEvent(
      originChainID?: null,
      nonce?: null,
      status?: null,
      dataHash?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        originChainID: BigNumber;
        nonce: BigNumber;
        status: number;
        dataHash: string;
      }
    >;

    "ProposalVote(uint256,uint64,uint8,bytes32)"(
      originChainID?: null,
      nonce?: null,
      status?: null,
      dataHash?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        originChainID: BigNumber;
        nonce: BigNumber;
        status: number;
        dataHash: string;
      }
    >;

    ProposalVote(
      originChainID?: null,
      nonce?: null,
      status?: null,
      dataHash?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        originChainID: BigNumber;
        nonce: BigNumber;
        status: number;
        dataHash: string;
      }
    >;

    "RelayerAdded(address)"(
      relayer?: null
    ): TypedEventFilter<[string], { relayer: string }>;

    RelayerAdded(
      relayer?: null
    ): TypedEventFilter<[string], { relayer: string }>;

    "RelayerRemoved(address)"(
      relayer?: null
    ): TypedEventFilter<[string], { relayer: string }>;

    RelayerRemoved(
      relayer?: null
    ): TypedEventFilter<[string], { relayer: string }>;

    "RelayerThresholdChanged(uint256)"(
      newThreshold?: null
    ): TypedEventFilter<[BigNumber], { newThreshold: BigNumber }>;

    RelayerThresholdChanged(
      newThreshold?: null
    ): TypedEventFilter<[BigNumber], { newThreshold: BigNumber }>;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_RELAYERS(overrides?: CallOverrides): Promise<BigNumber>;

    RELAYER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    _chainID(overrides?: CallOverrides): Promise<BigNumber>;

    _counts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    _expiry(overrides?: CallOverrides): Promise<BigNumber>;

    _fee(overrides?: CallOverrides): Promise<BigNumber>;

    _hasVotedOnProposal(
      destNonce: BigNumberish,
      dataHash: BytesLike,
      relayer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _relayerThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _totalRelayers(overrides?: CallOverrides): Promise<BigNumber>;

    adminAddRelayer(
      relayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminChangeFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminChangeRelayerThreshold(
      newThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminPauseTransfers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminRemoveRelayer(
      relayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminSetResource(
      handlerAddress: string,
      resourceID: BytesLike,
      executionContextAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adminUnpauseTransfers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      data: BytesLike,
      resourceID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getProposal(
      originChainID: BigNumberish,
      nonce: BigNumberish,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberIndex(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isRelayer(relayer: string, overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFunds(
      addrs: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voteProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      resourceID: BytesLike,
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_RELAYERS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RELAYER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _chainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _counts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _expiry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _hasVotedOnProposal(
      destNonce: BigNumberish,
      dataHash: BytesLike,
      relayer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _relayerThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _totalRelayers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminAddRelayer(
      relayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminChangeFee(
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminChangeRelayerThreshold(
      newThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminPauseTransfers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminRemoveRelayer(
      relayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminSetResource(
      handlerAddress: string,
      resourceID: BytesLike,
      executionContextAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adminUnpauseTransfers(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      data: BytesLike,
      resourceID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getProposal(
      originChainID: BigNumberish,
      nonce: BigNumberish,
      dataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberIndex(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRelayer(
      relayer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFunds(
      addrs: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voteProposal(
      chainID: BigNumberish,
      nonce: BigNumberish,
      resourceID: BytesLike,
      dataHash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
