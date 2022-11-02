/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VAnchorVerifier,
  VAnchorVerifierInterface,
} from "../VAnchorVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVAnchorVerifier2_2",
        name: "_verifier_2_2",
        type: "address",
      },
      {
        internalType: "contract IVAnchorVerifier2_16",
        name: "_verifier_2_16",
        type: "address",
      },
      {
        internalType: "contract IVAnchorVerifier8_2",
        name: "_verifier_8_2",
        type: "address",
      },
      {
        internalType: "contract IVAnchorVerifier8_16",
        name: "_verifier_8_16",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "v2_16",
    outputs: [
      {
        internalType: "contract IVAnchorVerifier2_16",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v2_2",
    outputs: [
      {
        internalType: "contract IVAnchorVerifier2_2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v8_16",
    outputs: [
      {
        internalType: "contract IVAnchorVerifier8_16",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v8_2",
    outputs: [
      {
        internalType: "contract IVAnchorVerifier8_2",
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
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "maxEdges",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "smallInputs",
        type: "bool",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516109e43803806109e483398101604081905261002f91610082565b600080546001600160a01b039586166001600160a01b03199182161790915560018054948616948216949094179093556002805492851692841692909217909155600380549190931691161790556100f9565b6000806000806080858703121561009857600080fd5b84516100a3816100e1565b60208601519094506100b4816100e1565b60408601519093506100c5816100e1565b60608601519092506100d6816100e1565b939692955090935050565b6001600160a01b03811681146100f657600080fd5b50565b6108dc806101086000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e4286861461005c57806330ba9e4d1461008c5780638041ca531461009f578063e65f86af146100c2578063f8d50636146100d5575b600080fd5b60005461006f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60025461006f906001600160a01b031681565b6100b26100ad366004610528565b6100e8565b6040519015158152602001610083565b60035461006f906001600160a01b031681565b60015461006f906001600160a01b031681565b60008260ff16600114156101ee5781156101a157600084806020019051810190610112919061060d565b60005460405163c542c93b60e01b81529192506001600160a01b03169063c542c93b90610149908b908b908b908790600401610805565b60206040518083038186803b15801561016157600080fd5b505afa158015610175573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610199919061068b565b91505061029e565b6000848060200190518101906101b7919061042c565b60015460405163506150cd60e11b81529192506001600160a01b03169063a0c2a19a90610149908b908b908b908790600401610763565b8260ff166007141561029a57811561024d5760008480602001905181019061021691906103ae565b60025460405163f054a9a360e01b81529192506001600160a01b03169063f054a9a390610149908b908b908b908790600401610706565b60008480602001905181019061026391906104aa565b600354604051632a5c50a360e11b81529192506001600160a01b0316906354b8a14690610149908b908b908b9087906004016107b4565b5060005b9695505050505050565b600082601f8301126102b957600080fd5b6102c1610856565b8083856040860111156102d357600080fd5b60005b60028110156102f55781358452602093840193909101906001016102d6565b509095945050505050565b803561030b81610895565b919050565b600082601f83011261032157600080fd5b813567ffffffffffffffff8082111561033c5761033c61087f565b604051601f8301601f19908116603f011681019082821181831017156103645761036461087f565b8160405283815286602085880101111561037d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff8116811461030b57600080fd5b60006101e08083850312156103c257600080fd5b83601f8401126103d157600080fd5b60405181810181811067ffffffffffffffff821117156103f3576103f361087f565b604052808483810187101561040757600080fd5b600093505b600f8410156102f55780518252600193909301926020918201910161040c565b60006102e080838503121561044057600080fd5b83601f84011261044f57600080fd5b60405181810181811067ffffffffffffffff821117156104715761047161087f565b604052808483810187101561048557600080fd5b600093505b60178410156102f55780518252600193909301926020918201910161048a565b60006103a08083850312156104be57600080fd5b83601f8401126104cd57600080fd5b60405181810181811067ffffffffffffffff821117156104ef576104ef61087f565b604052808483810187101561050357600080fd5b600093505b601d8410156102f557805182526001939093019260209182019101610508565b600080600080600080610160878903121561054257600080fd5b61054c88886102a8565b9550604088605f89011261055f57600080fd5b610567610856565b80828a0160c08b018c81111561057c57600080fd5b60005b60028110156105a6576105928e846102a8565b85526020909401939185019160010161057f565b508299506105b48d826102a8565b9850505050505061010087013567ffffffffffffffff8111156105d657600080fd5b6105e289828a01610310565b9350506105f2610120880161039d565b91506106016101408801610300565b90509295509295509295565b600061012080838503121561062157600080fd5b83601f84011261063057600080fd5b60405181810181811067ffffffffffffffff821117156106525761065261087f565b604052808483810187101561066657600080fd5b600093505b60098410156102f55780518252600193909301926020918201910161066b565b60006020828403121561069d57600080fd5b81516106a881610895565b9392505050565b8060005b60028110156106dd576106c78483516106e3565b60409390930192602091909101906001016106b3565b50505050565b8060005b60028110156106dd5781518452602093840193909101906001016106e7565b6102e0810161071582876106e3565b61072260408301866106af565b61072f60c08301856106e3565b61010082018360005b600f811015610757578151835260209283019290910190600101610738565b50505095945050505050565b6103e0810161077282876106e3565b61077f60408301866106af565b61078c60c08301856106e3565b61010082018360005b6017811015610757578151835260209283019290910190600101610795565b6104a081016107c382876106e3565b6107d060408301866106af565b6107dd60c08301856106e3565b61010082018360005b601d8110156107575781518352602092830192909101906001016107e6565b610220810161081482876106e3565b61082160408301866106af565b61082e60c08301856106e3565b61010082018360005b6009811015610757578151835260209283019290910190600101610837565b6040805190810167ffffffffffffffff811182821017156108795761087961087f565b60405290565b634e487b7160e01b600052604160045260246000fd5b80151581146108a357600080fd5b5056fea264697066735822122089bcdf1957c34ad690a23718b44a6d57cfe49e4421d6ba2b62aade889ed10db664736f6c63430008050033";

export class VAnchorVerifier__factory extends ContractFactory {
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
    _verifier_2_2: string,
    _verifier_2_16: string,
    _verifier_8_2: string,
    _verifier_8_16: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VAnchorVerifier> {
    return super.deploy(
      _verifier_2_2,
      _verifier_2_16,
      _verifier_8_2,
      _verifier_8_16,
      overrides || {}
    ) as Promise<VAnchorVerifier>;
  }
  getDeployTransaction(
    _verifier_2_2: string,
    _verifier_2_16: string,
    _verifier_8_2: string,
    _verifier_8_16: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _verifier_2_2,
      _verifier_2_16,
      _verifier_8_2,
      _verifier_8_16,
      overrides || {}
    );
  }
  attach(address: string): VAnchorVerifier {
    return super.attach(address) as VAnchorVerifier;
  }
  connect(signer: Signer): VAnchorVerifier__factory {
    return super.connect(signer) as VAnchorVerifier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VAnchorVerifierInterface {
    return new utils.Interface(_abi) as VAnchorVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VAnchorVerifier {
    return new Contract(address, _abi, signerOrProvider) as VAnchorVerifier;
  }
}
