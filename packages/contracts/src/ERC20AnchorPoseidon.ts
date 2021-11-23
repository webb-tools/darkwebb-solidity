/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC20AnchorPoseidonInterface extends utils.Interface {
  functions: {
    "FIELD_SIZE()": FunctionFragment;
    "ROOT_HISTORY_SIZE()": FunctionFragment;
    "ZERO_VALUE()": FunctionFragment;
    "admin()": FunctionFragment;
    "bridge()": FunctionFragment;
    "commitments(bytes32)": FunctionFragment;
    "currentRootIndex()": FunctionFragment;
    "denomination()": FunctionFragment;
    "deposit(bytes32)": FunctionFragment;
    "filledSubtrees(uint256)": FunctionFragment;
    "getLastRoot()": FunctionFragment;
    "handler()": FunctionFragment;
    "hashLeftRight(address,bytes32,bytes32)": FunctionFragment;
    "hasher()": FunctionFragment;
    "isKnownRoot(bytes32)": FunctionFragment;
    "isSpent(bytes32)": FunctionFragment;
    "isSpentArray(bytes32[])": FunctionFragment;
    "levels()": FunctionFragment;
    "nextIndex()": FunctionFragment;
    "nullifierHashes(bytes32)": FunctionFragment;
    "roots(uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "verifier()": FunctionFragment;
    "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)": FunctionFragment;
    "zeros(uint256)": FunctionFragment;
  };

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
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "commitments",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "denomination",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deposit", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "handler", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "isSpentArray",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      string,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "commitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "denomination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSpentArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;

  events: {
    "Deposit(bytes32,uint32,uint256)": EventFragment;
    "Withdrawal(address,bytes32,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, number, BigNumber],
  { commitment: string; leafIndex: number; timestamp: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type WithdrawalEvent = TypedEvent<
  [string, string, string, BigNumber],
  { to: string; nullifierHash: string; relayer: string; fee: BigNumber }
>;

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;

export interface ERC20AnchorPoseidon extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20AnchorPoseidonInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<[number]>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    bridge(overrides?: CallOverrides): Promise<[string]>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    currentRootIndex(overrides?: CallOverrides): Promise<[number]>;

    denomination(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _commitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLastRoot(overrides?: CallOverrides): Promise<[string]>;

    handler(overrides?: CallOverrides): Promise<[string]>;

    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasher(overrides?: CallOverrides): Promise<[string]>;

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
    ): Promise<[boolean[]] & { spent: boolean[] }>;

    levels(overrides?: CallOverrides): Promise<[number]>;

    nextIndex(overrides?: CallOverrides): Promise<[number]>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    verifier(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: string,
      _relayer: string,
      _fee: BigNumberish,
      _refund: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zeros(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

  ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  bridge(overrides?: CallOverrides): Promise<string>;

  commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  currentRootIndex(overrides?: CallOverrides): Promise<number>;

  denomination(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _commitment: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  filledSubtrees(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getLastRoot(overrides?: CallOverrides): Promise<string>;

  handler(overrides?: CallOverrides): Promise<string>;

  hashLeftRight(
    _hasher: string,
    _left: BytesLike,
    _right: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  hasher(overrides?: CallOverrides): Promise<string>;

  isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isSpent(
    _nullifierHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSpentArray(
    _nullifierHashes: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  levels(overrides?: CallOverrides): Promise<number>;

  nextIndex(overrides?: CallOverrides): Promise<number>;

  nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  verifier(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _proof: BytesLike,
    _root: BytesLike,
    _nullifierHash: BytesLike,
    _recipient: string,
    _relayer: string,
    _fee: BigNumberish,
    _refund: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zeros(i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    bridge(overrides?: CallOverrides): Promise<string>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    currentRootIndex(overrides?: CallOverrides): Promise<number>;

    denomination(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_commitment: BytesLike, overrides?: CallOverrides): Promise<void>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getLastRoot(overrides?: CallOverrides): Promise<string>;

    handler(overrides?: CallOverrides): Promise<string>;

    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    hasher(overrides?: CallOverrides): Promise<string>;

    isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSpentArray(
      _nullifierHashes: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    levels(overrides?: CallOverrides): Promise<number>;

    nextIndex(overrides?: CallOverrides): Promise<number>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    verifier(overrides?: CallOverrides): Promise<string>;

    withdraw(
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: string,
      _relayer: string,
      _fee: BigNumberish,
      _refund: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    zeros(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Deposit(bytes32,uint32,uint256)"(
      commitment?: BytesLike | null,
      leafIndex?: null,
      timestamp?: null
    ): DepositEventFilter;
    Deposit(
      commitment?: BytesLike | null,
      leafIndex?: null,
      timestamp?: null
    ): DepositEventFilter;

    "Withdrawal(address,bytes32,address,uint256)"(
      to?: null,
      nullifierHash?: null,
      relayer?: string | null,
      fee?: null
    ): WithdrawalEventFilter;
    Withdrawal(
      to?: null,
      nullifierHash?: null,
      relayer?: string | null,
      fee?: null
    ): WithdrawalEventFilter;
  };

  estimateGas: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    commitments(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<BigNumber>;

    denomination(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _commitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastRoot(overrides?: CallOverrides): Promise<BigNumber>;

    handler(overrides?: CallOverrides): Promise<BigNumber>;

    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasher(overrides?: CallOverrides): Promise<BigNumber>;

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

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    nextIndex(overrides?: CallOverrides): Promise<BigNumber>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    verifier(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: string,
      _relayer: string,
      _fee: BigNumberish,
      _refund: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zeros(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    commitments(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRootIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    denomination(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _commitment: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLastRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hashLeftRight(
      _hasher: string,
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: string,
      _relayer: string,
      _fee: BigNumberish,
      _refund: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zeros(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
