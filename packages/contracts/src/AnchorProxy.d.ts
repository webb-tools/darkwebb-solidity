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

interface AnchorProxyInterface extends ethers.utils.Interface {
  functions: {
    "anchorTrees()": FunctionFragment;
    "backupNotes(bytes[])": FunctionFragment;
    "deposit(address,bytes32,bytes)": FunctionFragment;
    "governance()": FunctionFragment;
    "instances(address)": FunctionFragment;
    "withdraw(address,bytes,(bytes,bytes32,bytes32,address,address,uint256,uint256,bytes32))": FunctionFragment;
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
    values: [
      string,
      BytesLike,
      {
        _roots: BytesLike;
        _nullifierHash: BytesLike;
        _refreshCommitment: BytesLike;
        _recipient: string;
        _relayer: string;
        _fee: BigNumberish;
        _refund: BigNumberish;
        _extDataHash: BytesLike;
      }
    ]
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
  [string, string, BigNumber] & {
    anchor: string;
    commitment: string;
    timestamp: BigNumber;
  }
>;

export type EncryptedNoteEvent = TypedEvent<
  [string, string] & { sender: string; encryptedNote: string }
>;

export type InstanceStateUpdatedEvent = TypedEvent<
  [string, number] & { instance: string; state: number }
>;

export class AnchorProxy extends BaseContract {
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

  interface: AnchorProxyInterface;

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
      _publicInputs: {
        _roots: BytesLike;
        _nullifierHash: BytesLike;
        _refreshCommitment: BytesLike;
        _recipient: string;
        _relayer: string;
        _fee: BigNumberish;
        _refund: BigNumberish;
        _extDataHash: BytesLike;
      },
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
    _publicInputs: {
      _roots: BytesLike;
      _nullifierHash: BytesLike;
      _refreshCommitment: BytesLike;
      _recipient: string;
      _relayer: string;
      _fee: BigNumberish;
      _refund: BigNumberish;
      _extDataHash: BytesLike;
    },
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
      _publicInputs: {
        _roots: BytesLike;
        _nullifierHash: BytesLike;
        _refreshCommitment: BytesLike;
        _recipient: string;
        _relayer: string;
        _fee: BigNumberish;
        _refund: BigNumberish;
        _extDataHash: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AnchorProxyDeposit(address,bytes32,uint256)"(
      anchor?: string | null,
      commitment?: BytesLike | null,
      timestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { anchor: string; commitment: string; timestamp: BigNumber }
    >;

    AnchorProxyDeposit(
      anchor?: string | null,
      commitment?: BytesLike | null,
      timestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { anchor: string; commitment: string; timestamp: BigNumber }
    >;

    "EncryptedNote(address,bytes)"(
      sender?: string | null,
      encryptedNote?: null
    ): TypedEventFilter<
      [string, string],
      { sender: string; encryptedNote: string }
    >;

    EncryptedNote(
      sender?: string | null,
      encryptedNote?: null
    ): TypedEventFilter<
      [string, string],
      { sender: string; encryptedNote: string }
    >;

    "InstanceStateUpdated(address,uint8)"(
      instance?: string | null,
      state?: null
    ): TypedEventFilter<[string, number], { instance: string; state: number }>;

    InstanceStateUpdated(
      instance?: string | null,
      state?: null
    ): TypedEventFilter<[string, number], { instance: string; state: number }>;
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
      _publicInputs: {
        _roots: BytesLike;
        _nullifierHash: BytesLike;
        _refreshCommitment: BytesLike;
        _recipient: string;
        _relayer: string;
        _fee: BigNumberish;
        _refund: BigNumberish;
        _extDataHash: BytesLike;
      },
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
      _publicInputs: {
        _roots: BytesLike;
        _nullifierHash: BytesLike;
        _refreshCommitment: BytesLike;
        _recipient: string;
        _relayer: string;
        _fee: BigNumberish;
        _refund: BigNumberish;
        _extDataHash: BytesLike;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
