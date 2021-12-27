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

interface LinkableTreeHandlerInterface extends ethers.utils.Interface {
  functions: {
    "_bridgeAddress()": FunctionFragment;
    "_contractAddressToResourceID(address)": FunctionFragment;
    "_contractWhitelist(address)": FunctionFragment;
    "_counts(uint256)": FunctionFragment;
    "_resourceIDToContractAddress(bytes32)": FunctionFragment;
    "_updateRecords(uint256,uint256)": FunctionFragment;
    "executeProposal(bytes32,bytes)": FunctionFragment;
    "getUpdateRecord(uint64,uint256)": FunctionFragment;
    "migrateBridge(address)": FunctionFragment;
    "setResource(bytes32,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_bridgeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_contractAddressToResourceID",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_contractWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_counts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_resourceIDToContractAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_updateRecords",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpdateRecord",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateBridge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setResource",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_bridgeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_contractAddressToResourceID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_contractWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_counts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_resourceIDToContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_updateRecords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpdateRecord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setResource",
    data: BytesLike
  ): Result;

  events: {};
}

export class LinkableTreeHandler extends BaseContract {
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

  interface: LinkableTreeHandlerInterface;

  functions: {
    _bridgeAddress(overrides?: CallOverrides): Promise<[string]>;

    _contractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _counts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _resourceIDToContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _updateRecords(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string, BigNumber] & {
        _tokenAddress: string;
        _sourceChainID: BigNumber;
        _resourceID: string;
        _merkleRoot: string;
        _leafIndex: BigNumber;
      }
    >;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getUpdateRecord(
      updateNonce: BigNumberish,
      sourceChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, BigNumber, string, string, BigNumber] & {
          _tokenAddress: string;
          _sourceChainID: BigNumber;
          _resourceID: string;
          _merkleRoot: string;
          _leafIndex: BigNumber;
        }
      ]
    >;

    migrateBridge(
      newBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _bridgeAddress(overrides?: CallOverrides): Promise<string>;

  _contractAddressToResourceID(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  _contractWhitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _counts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  _resourceIDToContractAddress(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  _updateRecords(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, string, BigNumber] & {
      _tokenAddress: string;
      _sourceChainID: BigNumber;
      _resourceID: string;
      _merkleRoot: string;
      _leafIndex: BigNumber;
    }
  >;

  executeProposal(
    resourceID: BytesLike,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getUpdateRecord(
    updateNonce: BigNumberish,
    sourceChainId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, string, BigNumber] & {
      _tokenAddress: string;
      _sourceChainID: BigNumber;
      _resourceID: string;
      _merkleRoot: string;
      _leafIndex: BigNumber;
    }
  >;

  migrateBridge(
    newBridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setResource(
    resourceID: BytesLike,
    contractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _bridgeAddress(overrides?: CallOverrides): Promise<string>;

    _contractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _counts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    _resourceIDToContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    _updateRecords(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string, BigNumber] & {
        _tokenAddress: string;
        _sourceChainID: BigNumber;
        _resourceID: string;
        _merkleRoot: string;
        _leafIndex: BigNumber;
      }
    >;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getUpdateRecord(
      updateNonce: BigNumberish,
      sourceChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, string, BigNumber] & {
        _tokenAddress: string;
        _sourceChainID: BigNumber;
        _resourceID: string;
        _merkleRoot: string;
        _leafIndex: BigNumber;
      }
    >;

    migrateBridge(newBridge: string, overrides?: CallOverrides): Promise<void>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _bridgeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    _contractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _counts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    _resourceIDToContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _updateRecords(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getUpdateRecord(
      updateNonce: BigNumberish,
      sourceChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    migrateBridge(
      newBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _bridgeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _contractAddressToResourceID(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _contractWhitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _counts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _resourceIDToContractAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _updateRecords(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeProposal(
      resourceID: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getUpdateRecord(
      updateNonce: BigNumberish,
      sourceChainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    migrateBridge(
      newBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setResource(
      resourceID: BytesLike,
      contractAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
