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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AnchorBaseInterface extends ethers.utils.Interface {
  functions: {
    "EVM_CHAIN_ID_TYPE()": FunctionFragment;
    "FIELD_SIZE()": FunctionFragment;
    "ROOT_HISTORY_SIZE()": FunctionFragment;
    "ZERO_VALUE()": FunctionFragment;
    "commitments(bytes32)": FunctionFragment;
    "configureMaximumDepositLimit(uint256,uint32)": FunctionFragment;
    "configureMinimalWithdrawalLimit(uint256,uint32)": FunctionFragment;
    "currentNeighborRootIndex(uint256)": FunctionFragment;
    "currentRootIndex()": FunctionFragment;
    "edgeExistsForChain(uint256)": FunctionFragment;
    "edgeIndex(uint256)": FunctionFragment;
    "edgeList(uint256)": FunctionFragment;
    "filledSubtrees(uint256)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getChainIdType()": FunctionFragment;
    "getLastRoot()": FunctionFragment;
    "getLatestNeighborEdges()": FunctionFragment;
    "getLatestNeighborRoots()": FunctionFragment;
    "getProposalNonce()": FunctionFragment;
    "handler()": FunctionFragment;
    "hasEdge(uint256)": FunctionFragment;
    "hashLeftRight(address,bytes32,bytes32)": FunctionFragment;
    "hasher()": FunctionFragment;
    "isKnownNeighborRoot(uint256,bytes32)": FunctionFragment;
    "isKnownRoot(bytes32)": FunctionFragment;
    "isSpent(bytes32)": FunctionFragment;
    "isSpentArray(bytes32[])": FunctionFragment;
    "isValidRoots(bytes32[])": FunctionFragment;
    "levels()": FunctionFragment;
    "maxEdges()": FunctionFragment;
    "neighborRoots(uint256,uint32)": FunctionFragment;
    "nextIndex()": FunctionFragment;
    "nullifierHashes(bytes32)": FunctionFragment;
    "parseChainIdFromResourceId(bytes32)": FunctionFragment;
    "roots(uint256)": FunctionFragment;
    "setHandler(address,uint32)": FunctionFragment;
    "updateEdge(bytes32,uint32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "EVM_CHAIN_ID_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commitments",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "configureMaximumDepositLimit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "configureMinimalWithdrawalLimit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentNeighborRootIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "edgeExistsForChain",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "edgeIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "edgeList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainIdType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestNeighborEdges",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestNeighborRoots",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalNonce",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "handler", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasEdge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isKnownNeighborRoot",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "isSpentArray",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidRoots",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxEdges", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "neighborRoots",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "parseChainIdFromResourceId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEdge",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "EVM_CHAIN_ID_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "commitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureMaximumDepositLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureMinimalWithdrawalLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentNeighborRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "edgeExistsForChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "edgeIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "edgeList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getChainIdType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestNeighborEdges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestNeighborRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasEdge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isKnownNeighborRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSpentArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxEdges", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "neighborRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseChainIdFromResourceId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateEdge", data: BytesLike): Result;

  events: {
    "EdgeAddition(uint256,uint256,bytes32)": EventFragment;
    "EdgeUpdate(uint256,uint256,bytes32)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Insertion(bytes32,uint32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EdgeAddition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EdgeUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Insertion"): EventFragment;
}

export type EdgeAdditionEvent = TypedEvent<
  [BigNumber, BigNumber, string] & {
    chainID: BigNumber;
    latestLeafIndex: BigNumber;
    merkleRoot: string;
  }
>;

export type EdgeUpdateEvent = TypedEvent<
  [BigNumber, BigNumber, string] & {
    chainID: BigNumber;
    latestLeafIndex: BigNumber;
    merkleRoot: string;
  }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type InsertionEvent = TypedEvent<
  [string, number, BigNumber] & {
    commitment: string;
    leafIndex: number;
    timestamp: BigNumber;
  }
>;

export class AnchorBase extends BaseContract {
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

  interface: AnchorBaseInterface;

  functions: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<[string]>;

    FIELD_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<[number]>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    configureMaximumDepositLimit(
      maximumDepositAmount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    configureMinimalWithdrawalLimit(
      minimalWithdrawalAmount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentNeighborRootIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    currentRootIndex(overrides?: CallOverrides): Promise<[number]>;

    edgeExistsForChain(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    edgeIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    edgeList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string] & {
        chainID: BigNumber;
        root: string;
        latestLeafIndex: BigNumber;
        srcResourceID: string;
      }
    >;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getChainIdType(overrides?: CallOverrides): Promise<[number]>;

    getLastRoot(overrides?: CallOverrides): Promise<[string]>;

    getLatestNeighborEdges(
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, string, BigNumber, string] & {
          chainID: BigNumber;
          root: string;
          latestLeafIndex: BigNumber;
          srcResourceID: string;
        })[]
      ]
    >;

    getLatestNeighborRoots(overrides?: CallOverrides): Promise<[string[]]>;

    getProposalNonce(overrides?: CallOverrides): Promise<[number]>;

    handler(overrides?: CallOverrides): Promise<[string]>;

    hasEdge(
      _chainID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasher(overrides?: CallOverrides): Promise<[string]>;

    isKnownNeighborRoot(
      _neighborChainID: BigNumberish,
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSpentArray(
      _nullifierHashes: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean[]]>;

    isValidRoots(
      _roots: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    levels(overrides?: CallOverrides): Promise<[number]>;

    maxEdges(overrides?: CallOverrides): Promise<[number]>;

    neighborRoots(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    nextIndex(overrides?: CallOverrides): Promise<[number]>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    parseChainIdFromResourceId(
      _resourceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    roots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { root: string; latestLeafindex: BigNumber }
    >;

    setHandler(
      _handler: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateEdge(
      _root: BytesLike,
      _leafIndex: BigNumberish,
      _srcResourceID: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

  ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  configureMaximumDepositLimit(
    maximumDepositAmount: BigNumberish,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  configureMinimalWithdrawalLimit(
    minimalWithdrawalAmount: BigNumberish,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentNeighborRootIndex(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  currentRootIndex(overrides?: CallOverrides): Promise<number>;

  edgeExistsForChain(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  edgeIndex(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  edgeList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, string] & {
      chainID: BigNumber;
      root: string;
      latestLeafIndex: BigNumber;
      srcResourceID: string;
    }
  >;

  filledSubtrees(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getChainIdType(overrides?: CallOverrides): Promise<number>;

  getLastRoot(overrides?: CallOverrides): Promise<string>;

  getLatestNeighborEdges(
    overrides?: CallOverrides
  ): Promise<
    ([BigNumber, string, BigNumber, string] & {
      chainID: BigNumber;
      root: string;
      latestLeafIndex: BigNumber;
      srcResourceID: string;
    })[]
  >;

  getLatestNeighborRoots(overrides?: CallOverrides): Promise<string[]>;

  getProposalNonce(overrides?: CallOverrides): Promise<number>;

  handler(overrides?: CallOverrides): Promise<string>;

  hasEdge(_chainID: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  hashLeftRight(
    _hasher: string,
    _left: BytesLike,
    _right: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  hasher(overrides?: CallOverrides): Promise<string>;

  isKnownNeighborRoot(
    _neighborChainID: BigNumberish,
    _root: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isSpent(
    _nullifierHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSpentArray(
    _nullifierHashes: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  isValidRoots(
    _roots: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  levels(overrides?: CallOverrides): Promise<number>;

  maxEdges(overrides?: CallOverrides): Promise<number>;

  neighborRoots(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  nextIndex(overrides?: CallOverrides): Promise<number>;

  nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  parseChainIdFromResourceId(
    _resourceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  roots(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber] & { root: string; latestLeafindex: BigNumber }
  >;

  setHandler(
    _handler: string,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateEdge(
    _root: BytesLike,
    _leafIndex: BigNumberish,
    _srcResourceID: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    configureMaximumDepositLimit(
      maximumDepositAmount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    configureMinimalWithdrawalLimit(
      minimalWithdrawalAmount: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    currentNeighborRootIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    currentRootIndex(overrides?: CallOverrides): Promise<number>;

    edgeExistsForChain(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    edgeIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    edgeList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, string] & {
        chainID: BigNumber;
        root: string;
        latestLeafIndex: BigNumber;
        srcResourceID: string;
      }
    >;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdType(overrides?: CallOverrides): Promise<number>;

    getLastRoot(overrides?: CallOverrides): Promise<string>;

    getLatestNeighborEdges(
      overrides?: CallOverrides
    ): Promise<
      ([BigNumber, string, BigNumber, string] & {
        chainID: BigNumber;
        root: string;
        latestLeafIndex: BigNumber;
        srcResourceID: string;
      })[]
    >;

    getLatestNeighborRoots(overrides?: CallOverrides): Promise<string[]>;

    getProposalNonce(overrides?: CallOverrides): Promise<number>;

    handler(overrides?: CallOverrides): Promise<string>;

    hasEdge(
      _chainID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    hasher(overrides?: CallOverrides): Promise<string>;

    isKnownNeighborRoot(
      _neighborChainID: BigNumberish,
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSpentArray(
      _nullifierHashes: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    isValidRoots(
      _roots: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    levels(overrides?: CallOverrides): Promise<number>;

    maxEdges(overrides?: CallOverrides): Promise<number>;

    neighborRoots(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    nextIndex(overrides?: CallOverrides): Promise<number>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    parseChainIdFromResourceId(
      _resourceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { root: string; latestLeafindex: BigNumber }
    >;

    setHandler(
      _handler: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEdge(
      _root: BytesLike,
      _leafIndex: BigNumberish,
      _srcResourceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EdgeAddition(uint256,uint256,bytes32)"(
      chainID?: null,
      latestLeafIndex?: null,
      merkleRoot?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { chainID: BigNumber; latestLeafIndex: BigNumber; merkleRoot: string }
    >;

    EdgeAddition(
      chainID?: null,
      latestLeafIndex?: null,
      merkleRoot?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { chainID: BigNumber; latestLeafIndex: BigNumber; merkleRoot: string }
    >;

    "EdgeUpdate(uint256,uint256,bytes32)"(
      chainID?: null,
      latestLeafIndex?: null,
      merkleRoot?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { chainID: BigNumber; latestLeafIndex: BigNumber; merkleRoot: string }
    >;

    EdgeUpdate(
      chainID?: null,
      latestLeafIndex?: null,
      merkleRoot?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string],
      { chainID: BigNumber; latestLeafIndex: BigNumber; merkleRoot: string }
    >;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "Insertion(bytes32,uint32,uint256)"(
      commitment?: BytesLike | null,
      leafIndex?: null,
      timestamp?: null
    ): TypedEventFilter<
      [string, number, BigNumber],
      { commitment: string; leafIndex: number; timestamp: BigNumber }
    >;

    Insertion(
      commitment?: BytesLike | null,
      leafIndex?: null,
      timestamp?: null
    ): TypedEventFilter<
      [string, number, BigNumber],
      { commitment: string; leafIndex: number; timestamp: BigNumber }
    >;
  };

  estimateGas: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    configureMaximumDepositLimit(
      maximumDepositAmount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    configureMinimalWithdrawalLimit(
      minimalWithdrawalAmount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentNeighborRootIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<BigNumber>;

    edgeExistsForChain(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    edgeIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    edgeList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdType(overrides?: CallOverrides): Promise<BigNumber>;

    getLastRoot(overrides?: CallOverrides): Promise<BigNumber>;

    getLatestNeighborEdges(overrides?: CallOverrides): Promise<BigNumber>;

    getLatestNeighborRoots(overrides?: CallOverrides): Promise<BigNumber>;

    getProposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

    handler(overrides?: CallOverrides): Promise<BigNumber>;

    hasEdge(
      _chainID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasher(overrides?: CallOverrides): Promise<BigNumber>;

    isKnownNeighborRoot(
      _neighborChainID: BigNumberish,
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSpentArray(
      _nullifierHashes: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidRoots(
      _roots: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    maxEdges(overrides?: CallOverrides): Promise<BigNumber>;

    neighborRoots(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextIndex(overrides?: CallOverrides): Promise<BigNumber>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseChainIdFromResourceId(
      _resourceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setHandler(
      _handler: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateEdge(
      _root: BytesLike,
      _leafIndex: BigNumberish,
      _srcResourceID: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    commitments(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    configureMaximumDepositLimit(
      maximumDepositAmount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    configureMinimalWithdrawalLimit(
      minimalWithdrawalAmount: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentNeighborRootIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRootIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    edgeExistsForChain(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    edgeIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    edgeList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainIdType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLastRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLatestNeighborEdges(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestNeighborRoots(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasEdge(
      _chainID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isKnownNeighborRoot(
      _neighborChainID: BigNumberish,
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSpentArray(
      _nullifierHashes: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidRoots(
      _roots: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxEdges(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    neighborRoots(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseChainIdFromResourceId(
      _resourceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setHandler(
      _handler: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateEdge(
      _root: BytesLike,
      _leafIndex: BigNumberish,
      _srcResourceID: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
