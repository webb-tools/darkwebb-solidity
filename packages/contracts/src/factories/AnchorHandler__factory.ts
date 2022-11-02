/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AnchorHandler, AnchorHandlerInterface } from "../AnchorHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeAddress",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "initialResourceIDs",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "initialContractAddresses",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_bridgeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractAddressToResourceID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractWhitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "_resourceIDToContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newBridge",
        type: "address",
      },
    ],
    name: "migrateBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "setResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c7938038062000c7983398101604081905262000034916200022e565b8051825114620000b05760405162461bcd60e51b815260206004820152603c60248201527f696e697469616c5265736f7572636549447320616e6420696e697469616c436f60448201527f6e7472616374416464726573736573206c656e206d69736d6174636800000000606482015260840160405180910390fd5b600080546001600160a01b0319166001600160a01b0385161781555b8251811015620001355762000120838281518110620000ef57620000ef62000393565b60200260200101518383815181106200010c576200010c62000393565b60200260200101516200013f60201b60201c565b806200012c8162000369565b915050620000cc565b50505050620003bf565b600082815260016020818152604080842080546001600160a01b039096166001600160a01b0319909616861790559383526002815283832094909455600390935220805460ff19169091179055565b80516001600160a01b0381168114620001a657600080fd5b919050565b600082601f830112620001bd57600080fd5b81516020620001d6620001d08362000343565b62000310565b80838252828201915082860187848660051b8901011115620001f757600080fd5b60005b8581101562000221576200020e826200018e565b84529284019290840190600101620001fa565b5090979650505050505050565b6000806000606084860312156200024457600080fd5b6200024f846200018e565b602085810151919450906001600160401b03808211156200026f57600080fd5b818701915087601f8301126200028457600080fd5b815162000295620001d08262000343565b8082825285820191508585018b878560051b8801011115620002b657600080fd5b600095505b83861015620002db578051835260019590950194918601918601620002bb565b5060408a01519097509450505080831115620002f657600080fd5b50506200030686828701620001ab565b9150509250925092565b604051601f8201601f191681016001600160401b03811182821017156200033b576200033b620003a9565b604052919050565b60006001600160401b038211156200035f576200035f620003a9565b5060051b60200190565b60006000198214156200038c57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6108aa80620003cf6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c54c2a111161005b578063c54c2a11146100fa578063d7f5b35914610123578063e248cff214610136578063ec97d3b41461014957600080fd5b8063318c136e146100825780637f79bea8146100b2578063b8fa3736146100e5575b600080fd5b600054610095906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d56100c03660046106e5565b60036020526000908152604090205460ff1681565b60405190151581526020016100a9565b6100f86100f3366004610720565b610177565b005b610095610108366004610707565b6001602052600090815260409020546001600160a01b031681565b6100f86101313660046106e5565b6101cf565b6100f861014436600461074c565b6101f9565b6101696101573660046106e5565b60026020526000908152604090205481565b6040519081526020016100a9565b61017f61066d565b600082815260016020818152604080842080546001600160a01b0319166001600160a01b0387169081179091558452600282528084208690556003909152909120805460ff191690911790555050565b6101d761066d565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b61020161066d565b600080368161021360208287896107c8565b61021c91610827565b935061022c6024602087896107c8565b61023591610846565b925061024485602481896107c8565b6000898152600160209081526040808320546001600160a01b03168084526003909252909120549294509092509060ff166102d75760405162461bcd60e51b815260206004820152602860248201527f70726f766964656420746f6b656e41646472657373206973206e6f74207768696044820152671d195b1a5cdd195960c21b60648201526084015b60405180910390fd5b6001600160e01b031984166372c1ad0360e01b141561039c5760006102ff60048285876107c8565b61030891610846565b60e01c9050600061031d6018600486886107c8565b610326916107f2565b6040516372c1ad0360e01b815260609190911c6004820181905263ffffffff8416602483015291506001600160a01b038416906372c1ad03906044015b600060405180830381600087803b15801561037d57600080fd5b505af1158015610391573d6000803e3d6000fd5b505050505050610663565b6001600160e01b0319841663a0d192f560e01b141561042c5760006103c460048285876107c8565b6103cd91610846565b60e01c905060006103e26018600486886107c8565b6103eb916107f2565b60405163a0d192f560e01b815260609190911c6004820181905263ffffffff8416602483015291506001600160a01b0384169063a0d192f590604401610363565b6001600160e01b0319841663a07b7e1d60e01b141561050e57600061045460048285876107c8565b61045d91610846565b60e01c905060006104726024600486886107c8565b61047b91610827565b9050600061048d6044602487896107c8565b61049691610827565b60405163a07b7e1d60e01b81526004810184905263ffffffff85166024820152604481018290529091506001600160a01b0385169063a07b7e1d90606401600060405180830381600087803b1580156104ee57600080fd5b505af1158015610502573d6000803e3d6000fd5b50505050505050610663565b6001600160e01b03198416631f7f99f760e01b141561059957600061053660048285876107c8565b61053f91610846565b60e01c905060006105546024600486886107c8565b61055d91610827565b604051631f7f99f760e01b81526004810182905263ffffffff841660248201529091506001600160a01b03841690631f7f99f790604401610363565b6001600160e01b03198416638c832b1360e01b14156106245760006105c160048285876107c8565b6105ca91610846565b60e01c905060006105df6024600486886107c8565b6105e891610827565b604051638c832b1360e01b81526004810182905263ffffffff841660248201529091506001600160a01b03841690638c832b1390604401610363565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c69642066756e6374696f6e2073696760601b60448201526064016102ce565b5050505050505050565b6000546001600160a01b031633146106c75760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e7472616374000060448201526064016102ce565b565b80356001600160a01b03811681146106e057600080fd5b919050565b6000602082840312156106f757600080fd5b610700826106c9565b9392505050565b60006020828403121561071957600080fd5b5035919050565b6000806040838503121561073357600080fd5b82359150610743602084016106c9565b90509250929050565b60008060006040848603121561076157600080fd5b83359250602084013567ffffffffffffffff8082111561078057600080fd5b818601915086601f83011261079457600080fd5b8135818111156107a357600080fd5b8760208285010111156107b557600080fd5b6020830194508093505050509250925092565b600080858511156107d857600080fd5b838611156107e557600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff19813581811691601485101561081f5780818660140360031b1b83161692505b505092915050565b8035602083101561084057600019602084900360031b1b165b92915050565b6001600160e01b0319813581811691600485101561081f5760049490940360031b84901b169092169291505056fea2646970667358221220cccdd61e3463fe9e6a52f78539954a96c215ac2ba6d07330ce42bf73cce7d45864736f6c63430008050033";

export class AnchorHandler__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    bridgeAddress: string,
    initialResourceIDs: BytesLike[],
    initialContractAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AnchorHandler> {
    return super.deploy(
      bridgeAddress,
      initialResourceIDs,
      initialContractAddresses,
      overrides || {}
    ) as Promise<AnchorHandler>;
  }
  getDeployTransaction(
    bridgeAddress: string,
    initialResourceIDs: BytesLike[],
    initialContractAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      bridgeAddress,
      initialResourceIDs,
      initialContractAddresses,
      overrides || {}
    );
  }
  attach(address: string): AnchorHandler {
    return super.attach(address) as AnchorHandler;
  }
  connect(signer: Signer): AnchorHandler__factory {
    return super.connect(signer) as AnchorHandler__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AnchorHandlerInterface {
    return new utils.Interface(_abi) as AnchorHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AnchorHandler {
    return new Contract(address, _abi, signerOrProvider) as AnchorHandler;
  }
}
