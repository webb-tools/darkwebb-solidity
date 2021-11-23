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
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SemaphoreAnchorClientInterface extends utils.Interface {
  functions: {
    "broadcastSignal(bytes,uint256[8],bytes,uint256,uint232)": FunctionFragment;
    "getExternalNullifierBySignalIndex(uint256)": FunctionFragment;
    "getSignalBySignalIndex(uint256)": FunctionFragment;
    "nextSignalIndex()": FunctionFragment;
    "semaphore()": FunctionFragment;
    "signalIndexToExternalNullifier(uint256)": FunctionFragment;
    "signalIndexToSignal(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "broadcastSignal",
    values: [
      BytesLike,
      [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      BytesLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getExternalNullifierBySignalIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSignalBySignalIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextSignalIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "semaphore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "signalIndexToExternalNullifier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalIndexToSignal",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "broadcastSignal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExternalNullifierBySignalIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSignalBySignalIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextSignalIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "semaphore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "signalIndexToExternalNullifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalIndexToSignal",
    data: BytesLike
  ): Result;

  events: {
    "SignalBroadcastByClient(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SignalBroadcastByClient"): EventFragment;
}

export type SignalBroadcastByClientEvent = TypedEvent<
  [BigNumber],
  { signalIndex: BigNumber }
>;

export type SignalBroadcastByClientEventFilter =
  TypedEventFilter<SignalBroadcastByClientEvent>;

export interface SemaphoreAnchorClient extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SemaphoreAnchorClientInterface;

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
    broadcastSignal(
      _signal: BytesLike,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _roots: BytesLike,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getExternalNullifierBySignalIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSignalBySignalIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    nextSignalIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    semaphore(overrides?: CallOverrides): Promise<[string]>;

    signalIndexToExternalNullifier(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    signalIndexToSignal(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  broadcastSignal(
    _signal: BytesLike,
    _proof: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    _roots: BytesLike,
    _nullifiersHash: BigNumberish,
    _externalNullifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getExternalNullifierBySignalIndex(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSignalBySignalIndex(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  nextSignalIndex(overrides?: CallOverrides): Promise<BigNumber>;

  semaphore(overrides?: CallOverrides): Promise<string>;

  signalIndexToExternalNullifier(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  signalIndexToSignal(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    broadcastSignal(
      _signal: BytesLike,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _roots: BytesLike,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getExternalNullifierBySignalIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSignalBySignalIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    nextSignalIndex(overrides?: CallOverrides): Promise<BigNumber>;

    semaphore(overrides?: CallOverrides): Promise<string>;

    signalIndexToExternalNullifier(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signalIndexToSignal(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "SignalBroadcastByClient(uint256)"(
      signalIndex?: BigNumberish | null
    ): SignalBroadcastByClientEventFilter;
    SignalBroadcastByClient(
      signalIndex?: BigNumberish | null
    ): SignalBroadcastByClientEventFilter;
  };

  estimateGas: {
    broadcastSignal(
      _signal: BytesLike,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _roots: BytesLike,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getExternalNullifierBySignalIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSignalBySignalIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextSignalIndex(overrides?: CallOverrides): Promise<BigNumber>;

    semaphore(overrides?: CallOverrides): Promise<BigNumber>;

    signalIndexToExternalNullifier(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signalIndexToSignal(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    broadcastSignal(
      _signal: BytesLike,
      _proof: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _roots: BytesLike,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getExternalNullifierBySignalIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSignalBySignalIndex(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextSignalIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    semaphore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    signalIndexToExternalNullifier(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signalIndexToSignal(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
