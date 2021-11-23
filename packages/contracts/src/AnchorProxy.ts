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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type InstanceStruct = { token: string; state: BigNumberish };

export type InstanceStructOutput = [string, number] & {
  token: string;
  state: number;
};

export type AnchorStructStruct = { addr: string; instance: InstanceStruct };

export type AnchorStructStructOutput = [string, InstanceStructOutput] & {
  addr: string;
  instance: InstanceStructOutput;
};

export type PublicInputsStruct = {
  _roots: BytesLike;
  _nullifierHash: BytesLike;
  _refreshCommitment: BytesLike;
  _recipient: string;
  _relayer: string;
  _fee: BigNumberish;
  _refund: BigNumberish;
};

export type PublicInputsStructOutput = [
  string,
  string,
  string,
  string,
  string,
  BigNumber,
  BigNumber
] & {
  _roots: string;
  _nullifierHash: string;
  _refreshCommitment: string;
  _recipient: string;
  _relayer: string;
  _fee: BigNumber;
  _refund: BigNumber;
};

export interface AnchorProxyInterface extends utils.Interface {
  functions: {
    "anchorTrees()": FunctionFragment;
    "backupNotes(bytes[])": FunctionFragment;
    "deposit(address,bytes32,bytes)": FunctionFragment;
    "governance()": FunctionFragment;
    "instances(address)": FunctionFragment;
    "withdraw(address,bytes,(bytes,bytes32,bytes32,address,address,uint256,uint256))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "anchorTrees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "backupNotes",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "instances", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BytesLike, PublicInputsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "anchorTrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backupNotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "instances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AnchorProxyDeposit(address,bytes32,uint256)": EventFragment;
    "EncryptedNote(address,bytes)": EventFragment;
    "InstanceStateUpdated(address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnchorProxyDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EncryptedNote"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InstanceStateUpdated"): EventFragment;
}

export type AnchorProxyDepositEvent = TypedEvent<
  [string, string, BigNumber],
  { anchor: string; commitment: string; timestamp: BigNumber }
>;

export type AnchorProxyDepositEventFilter =
  TypedEventFilter<AnchorProxyDepositEvent>;

export type EncryptedNoteEvent = TypedEvent<
  [string, string],
  { sender: string; encryptedNote: string }
>;

export type EncryptedNoteEventFilter = TypedEventFilter<EncryptedNoteEvent>;

export type InstanceStateUpdatedEvent = TypedEvent<
  [string, number],
  { instance: string; state: number }
>;

export type InstanceStateUpdatedEventFilter =
  TypedEventFilter<InstanceStateUpdatedEvent>;

export interface AnchorProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AnchorProxyInterface;

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
    anchorTrees(overrides?: CallOverrides): Promise<[string]>;

    backupNotes(
      _encryptedNotes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _anchor: string,
      _commitment: BytesLike,
      _encryptedNote: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    instances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, number] & { token: string; state: number }>;

    withdraw(
      _anchor: string,
      _proof: BytesLike,
      _publicInputs: PublicInputsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  anchorTrees(overrides?: CallOverrides): Promise<string>;

  backupNotes(
    _encryptedNotes: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _anchor: string,
    _commitment: BytesLike,
    _encryptedNote: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  governance(overrides?: CallOverrides): Promise<string>;

  instances(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[string, number] & { token: string; state: number }>;

  withdraw(
    _anchor: string,
    _proof: BytesLike,
    _publicInputs: PublicInputsStruct,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    anchorTrees(overrides?: CallOverrides): Promise<string>;

    backupNotes(
      _encryptedNotes: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _anchor: string,
      _commitment: BytesLike,
      _encryptedNote: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    governance(overrides?: CallOverrides): Promise<string>;

    instances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, number] & { token: string; state: number }>;

    withdraw(
      _anchor: string,
      _proof: BytesLike,
      _publicInputs: PublicInputsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AnchorProxyDeposit(address,bytes32,uint256)"(
      anchor?: string | null,
      commitment?: BytesLike | null,
      timestamp?: null
    ): AnchorProxyDepositEventFilter;
    AnchorProxyDeposit(
      anchor?: string | null,
      commitment?: BytesLike | null,
      timestamp?: null
    ): AnchorProxyDepositEventFilter;

    "EncryptedNote(address,bytes)"(
      sender?: string | null,
      encryptedNote?: null
    ): EncryptedNoteEventFilter;
    EncryptedNote(
      sender?: string | null,
      encryptedNote?: null
    ): EncryptedNoteEventFilter;

    "InstanceStateUpdated(address,uint8)"(
      instance?: string | null,
      state?: null
    ): InstanceStateUpdatedEventFilter;
    InstanceStateUpdated(
      instance?: string | null,
      state?: null
    ): InstanceStateUpdatedEventFilter;
  };

  estimateGas: {
    anchorTrees(overrides?: CallOverrides): Promise<BigNumber>;

    backupNotes(
      _encryptedNotes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _anchor: string,
      _commitment: BytesLike,
      _encryptedNote: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    instances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _anchor: string,
      _proof: BytesLike,
      _publicInputs: PublicInputsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    anchorTrees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    backupNotes(
      _encryptedNotes: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _anchor: string,
      _commitment: BytesLike,
      _encryptedNote: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    instances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _anchor: string,
      _proof: BytesLike,
      _publicInputs: PublicInputsStruct,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
