/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAnchorTrees, IAnchorTreesInterface } from "../IAnchorTrees";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "instance",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "registerDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "instance",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "nullifier",
        type: "bytes32",
      },
    ],
    name: "registerWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAnchorTrees__factory {
  static readonly abi = _abi;
  static createInterface(): IAnchorTreesInterface {
    return new utils.Interface(_abi) as IAnchorTreesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAnchorTrees {
    return new Contract(address, _abi, signerOrProvider) as IAnchorTrees;
  }
}
