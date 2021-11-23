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
  "0x608060405234801561001057600080fd5b5060405161098a38038061098a83398101604081905261002f91610082565b600080546001600160a01b039586166001600160a01b03199182161790915560018054948616948216949094179093556002805492851692841692909217909155600380549190931691161790556100f8565b60008060008060808587031215610097578384fd5b84516100a2816100e0565b60208601519094506100b3816100e0565b60408601519093506100c4816100e0565b60608601519092506100d5816100e0565b939692955090935050565b6001600160a01b03811681146100f557600080fd5b50565b610883806101076000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e4286861461005c57806330ba9e4d1461007a5780638041ca5314610082578063e65f86af146100a2578063f8d50636146100aa575b600080fd5b6100646100b2565b60405161007191906107c7565b60405180910390f35b6100646100c1565b6100956100903660046104e7565b6100d0565b60405161007191906107bc565b610064610290565b61006461029f565b6000546001600160a01b031681565b6002546001600160a01b031681565b60008260ff16600114156101d6578115610189576000848060200190518101906100fa91906105cd565b60005460405163c542c93b60e01b81529192506001600160a01b03169063c542c93b90610131908b908b908b90879060040161076b565b60206040518083038186803b15801561014957600080fd5b505afa15801561015d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018191906105f9565b915050610286565b60008480602001905181019061019f9190610488565b60015460405163506150cd60e11b81529192506001600160a01b03169063a0c2a19a90610131908b908b908b9087906004016106c9565b8260ff1660071415610282578115610235576000848060200190518101906101fe9190610403565b60025460405163f054a9a360e01b81529192506001600160a01b03169063f054a9a390610131908b908b908b90879060040161066c565b60008480602001905181019061024b91906104bb565b600354604051632a5c50a360e11b81529192506001600160a01b0316906354b8a14690610131908b908b908b90879060040161071a565b5060005b9695505050505050565b6003546001600160a01b031681565b6001546001600160a01b031681565b60006102c16102bc84610805565b6107db565b90508082602086818702860111156102d857600080fd5b60005b868110156102f7578251845292810192918101916001016102db565b505050509392505050565b600082601f830112610312578081fd5b6040516040810181811067ffffffffffffffff8211171561033557610335610826565b806040525080838560408601111561034b578384fd5b835b600281101561036c57813583526020928301929091019060010161034d565b509195945050505050565b80356103828161083c565b919050565b600082601f830112610397578081fd5b813567ffffffffffffffff8111156103b1576103b1610826565b6103c4601f8201601f19166020016107db565b8181528460208386010111156103d8578283fd5b816020850160208301379081016020019190915292915050565b803560ff8116811461038257600080fd5b60006101e0808385031215610416578182fd5b83601f840112610424578182fd5b60405181810181811067ffffffffffffffff8211171561044657610446610826565b6040528084838101871015610459578485fd5b8493505b600f84101561047d5780518252600193909301926020918201910161045d565b509095945050505050565b60006102e0828403121561049a578081fd5b82601f8301126104a8578081fd5b6104b4836017846102ae565b9392505050565b60006103a082840312156104cd578081fd5b82601f8301126104db578081fd5b6104b483601d846102ae565b6000806000806000806101608789031215610500578182fd5b61050a8888610302565b9550604088605f89011261051c578283fd5b600261052a6102bc82610805565b80838b0160c08c018d81111561053e578788fd5b875b85811015610566576105528f84610302565b855260209094019391860191600101610540565b50829a506105748e82610302565b995050505050505061010087013567ffffffffffffffff811115610596578283fd5b6105a289828a01610387565b9350506105b261012088016103f2565b91506105c16101408801610377565b90509295509295509295565b600061012082840312156105df578081fd5b82601f8301126105ed578081fd5b6104b4836009846102ae565b60006020828403121561060a578081fd5b81516104b48161083c565b8060005b60028110156106435761062d848351610649565b6040939093019260209190910190600101610619565b50505050565b8060005b600281101561064357815184526020938401939091019060010161064d565b6102e0810161067b8287610649565b6106886040830186610615565b61069560c0830185610649565b61010082018360005b600f8110156106bd57815183526020928301929091019060010161069e565b50505095945050505050565b6103e081016106d88287610649565b6106e56040830186610615565b6106f260c0830185610649565b61010082018360005b60178110156106bd5781518352602092830192909101906001016106fb565b6104a081016107298287610649565b6107366040830186610615565b61074360c0830185610649565b61010082018360005b601d8110156106bd57815183526020928301929091019060010161074c565b610220810161077a8287610649565b6107876040830186610615565b61079460c0830185610649565b61010082018360005b60098110156106bd57815183526020928301929091019060010161079d565b901515815260200190565b6001600160a01b0391909116815260200190565b60405181810167ffffffffffffffff811182821017156107fd576107fd610826565b604052919050565b600067ffffffffffffffff82111561081f5761081f610826565b5060200290565b634e487b7160e01b600052604160045260246000fd5b801515811461084a57600080fd5b5056fea264697066735822122080c7a0608329e7d5869d0064ee32aa4394742360e698b2ea686b496809f0760964736f6c63430008000033";

type VAnchorVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VAnchorVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VAnchorVerifier__factory extends ContractFactory {
  constructor(...args: VAnchorVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
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
