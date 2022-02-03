/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SignatureBridge,
  SignatureBridgeInterface,
} from "../SignatureBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialGovernor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "GovernanceOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recovered",
        type: "address",
      },
    ],
    name: "RecoveredAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "EVM_CHAIN_ID_TYPE",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_counts",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
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
    name: "_resourceIDToHandlerAddress",
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
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "newResourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "handlerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "executionContextAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "adminSetResourceWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "executeProposalWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainIdType",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
    inputs: [],
    name: "isGovernor",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "isSignatureFromGovernor",
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
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "proposalNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "recover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refreshNonce",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "transferOwnershipWithSignaturePubKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805463ffffffff60a81b1916815560025534801561002357600080fd5b50604051611860380380611860833981016040819052610042916100a0565b600080546001600160a81b0319166101006001600160a01b03848116820292909217808455604051859492909104909216917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908290a350506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b611781806100df6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806384db809f116100a2578063a6e94c9111610071578063a6e94c9114610254578063c7af335214610267578063c944e4081461027f578063cc3c74a114610292578063d75a06831461029b57600080fd5b806384db809f146101e15780638755bcad1461020a5780638b7e87821461021d5780639d2b1ed71461024157600080fd5b80634c830cbd116100de5780634c830cbd146101905780635c975abb146101af578063715018a6146101c65780637296b5d8146101ce57600080fd5b80630c340a241461011057806313cb01f91461013f5780631ed13d1b1461016b5780633408e47014610180575b600080fd5b60005461010090046001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b60005461015690600160a81b900463ffffffff1681565b60405163ffffffff9091168152602001610136565b61017e610179366004611318565b6102de565b005b465b604051908152602001610136565b610198610392565b60405165ffffffffffff9091168152602001610136565b60005460ff165b6040519015158152602001610136565b61017e6103e0565b61017e6101dc36600461137c565b610467565b6101226101ef3660046111c9565b6004602052600090815260409020546001600160a01b031681565b6101b6610218366004611318565b610567565b610228600160f81b81565b6040516001600160f01b03199091168152602001610136565b61017e61024f366004611284565b6106a7565b61017e610262366004611196565b610845565b60005461010090046001600160a01b031633146101b6565b61017e61028d3660046111e2565b61091b565b61018260025481565b6102c56102a93660046111c9565b60036020526000908152604090205467ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610136565b8151602083012060006102f18284610b20565b905061031460405180606001604052806024815260200161170660249139610b44565b60005461032e9061010090046001600160a01b0316610b8a565b61033781610b8a565b61035860405180606001604052806022815260200161172a60229139610b44565b6040516001600160a01b038216907f391f5edd7209ba797e8055bce97cab2d1a480a2849b0c7fe965c370457166dc490600090a250505050565b60408051600160f81b602082018190524660e01b6001600160e01b031981166022840152835180840360060181526026909301909352600092916103d58161165c565b60d01c935050505090565b60005461010090046001600160a01b031633146104185760405162461bcd60e51b815260040161040f906114b1565b60405180910390fd5b600080546040516101009091046001600160a01b0316907f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908390a360008054610100600160a81b0319169055565b60005463ffffffff808416600160a81b90920416106104985760405162461bcd60e51b815260040161040f90611546565b6000546104b390600160a81b900463ffffffff1660016115e6565b63ffffffff168263ffffffff1611156104de5760405162461bcd60e51b815260040161040f9061156d565b82516020808501919091206040519091829161051791610502918791899101611405565b60405160208183030381529060405284610567565b6105335760405162461bcd60e51b815260040161040f906114b1565b61053c81610bd2565b50506000805463ffffffff909316600160a81b0263ffffffff60a81b19909316929092179091555050565b60006105a76040518060400160405280601781526020017f69735369676e617475726546726f6d476f7665726e6f72000000000000000000815250610b44565b6105b083610ca0565b825160208401206105c081610ce3565b60006105cc8285610b20565b90506106106040518060400160405280600981526020016823b7bb32b93737b91d60b91b81525061060b6000546001600160a01b036101009091041690565b610d28565b6106396040518060400160405280600781526020016629b4b3b732b91d60c91b81525082610d28565b6106776040518060400160405280601e81526020017f4c6f676765642069735369676e617475726546726f6d476f7665726e6f720000815250610b44565b60005461010090046001600160a01b03166001600160a01b0316816001600160a01b031614925050505b92915050565b82828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508492506106eb915083905082610567565b6107075760405162461bcd60e51b815260040161040f906114f7565b366000610717602082888a6115a4565b90925090506000610728828461160e565b9050600061073a6020601a85876115a4565b6107439161162c565b60d01c905080610751610392565b65ffffffffffff16146107a65760405162461bcd60e51b815260206004820152601860248201527f657865637574696e67206f6e2077726f6e6720636861696e0000000000000000604482015260640161040f565b60006004600084815260200190815260200160002060009054906101000a90046001600160a01b031690506000819050806001600160a01b031663e248cff2858d8d6040518463ffffffff1660e01b815260040161080693929190611437565b600060405180830381600087803b15801561082057600080fd5b505af1158015610834573d6000803e3d6000fd5b505050505050505050505050505050565b60005461010090046001600160a01b031633146108745760405162461bcd60e51b815260040161040f906114b1565b60005463ffffffff808316600160a81b90920416106108a55760405162461bcd60e51b815260040161040f90611546565b6000546108c090600160a81b900463ffffffff1660016115e6565b63ffffffff168163ffffffff1611156108eb5760405162461bcd60e51b815260040161040f9061156d565b6108f482610bd2565b6000805463ffffffff909216600160a81b0263ffffffff60a81b1990921691909117905550565b60408051602081018990526001600160e01b03198881168284015260e088901b166044820152604881018690526bffffffffffffffffffffffff19606086811b8216606884015285901b16607c820152815180820360700181526090909101909152816109888282610567565b6109a45760405162461bcd60e51b815260040161040f906114f7565b8663ffffffff16600254106109cb5760405162461bcd60e51b815260040161040f90611546565b6002546109d99060016115ce565b8763ffffffff1611156109fe5760405162461bcd60e51b815260040161040f9061156d565b6001600160e01b031988166319289c8160e31b14610a845760405162461bcd60e51b815260206004820152603960248201527f61646d696e5365745265736f75726365576974685369676e61747572653a204960448201527f6e76616c69642066756e6374696f6e207369676e617475726500000000000000606482015260840161040f565b60008681526004602081905260409182902080546001600160a01b0319166001600160a01b038981169182179092559251635c7d1b9b60e11b81529182018990528616602482015286919063b8fa373690604401600060405180830381600087803b158015610af257600080fd5b505af1158015610b06573d6000803e3d6000fd5b50505063ffffffff90981660025550505050505050505050565b6000806000610b2f8585610d71565b91509150610b3c81610de1565b509392505050565b610b8781604051602401610b58919061146d565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610f9c565b50565b6040516001600160a01b0382166024820152610b879060440160408051601f198184030181529190526020810180516001600160e01b031663161765e160e11b179052610f9c565b6001600160a01b038116610c3a5760405162461bcd60e51b815260206004820152602960248201527f476f7665726e61626c653a206e6577206f776e657220697320746865207a65726044820152686f206164647265737360b81b606482015260840161040f565b600080546040516001600160a01b038085169361010090930416917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f791a3600080546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b610b8781604051602401610cb4919061146d565b60408051601f198184030181529190526020810180516001600160e01b03166305f3bfab60e11b179052610f9c565b610b8781604051602401610cf991815260200190565b60408051601f198184030181529190526020810180516001600160e01b03166327b7cf8560e01b179052610f9c565b610d6d8282604051602401610d3e929190611487565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052610f9c565b5050565b600080825160411415610da85760208301516040840151606085015160001a610d9c87828585610fbd565b94509450505050610dda565b825160401415610dd25760208301516040840151610dc78683836110aa565b935093505050610dda565b506000905060025b9250929050565b6000816004811115610df557610df56116d9565b1415610dfe5750565b6001816004811115610e1257610e126116d9565b1415610e605760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161040f565b6002816004811115610e7457610e746116d9565b1415610ec25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161040f565b6003816004811115610ed657610ed66116d9565b1415610f2f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161040f565b6004816004811115610f4357610f436116d9565b1415610b875760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161040f565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610ff457506000905060036110a1565b8460ff16601b1415801561100c57508460ff16601c14155b1561101d57506000905060046110a1565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611071573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661109a576000600192509250506110a1565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b016110cb87828885610fbd565b935093505050935093915050565b80356001600160a01b03811681146110f057600080fd5b919050565b600082601f83011261110657600080fd5b813567ffffffffffffffff80821115611121576111216116ef565b604051601f8301601f19908116603f01168101908282118183101715611149576111496116ef565b8160405283815286602085880101111561116257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803563ffffffff811681146110f057600080fd5b600080604083850312156111a957600080fd5b6111b2836110d9565b91506111c060208401611182565b90509250929050565b6000602082840312156111db57600080fd5b5035919050565b600080600080600080600060e0888a0312156111fd57600080fd5b8735965060208801356001600160e01b03198116811461121c57600080fd5b955061122a60408901611182565b94506060880135935061123f608089016110d9565b925061124d60a089016110d9565b915060c088013567ffffffffffffffff81111561126957600080fd5b6112758a828b016110f5565b91505092959891949750929550565b60008060006040848603121561129957600080fd5b833567ffffffffffffffff808211156112b157600080fd5b818601915086601f8301126112c557600080fd5b8135818111156112d457600080fd5b8760208285010111156112e657600080fd5b60209283019550935090850135908082111561130157600080fd5b5061130e868287016110f5565b9150509250925092565b6000806040838503121561132b57600080fd5b823567ffffffffffffffff8082111561134357600080fd5b61134f868387016110f5565b9350602085013591508082111561136557600080fd5b50611372858286016110f5565b9150509250929050565b60008060006060848603121561139157600080fd5b833567ffffffffffffffff808211156113a957600080fd5b6113b5878388016110f5565b94506113c360208701611182565b9350604086013591508082111561130157600080fd5b600081518084526113f1816020860160208601611693565b601f01601f19169290920160200192915050565b63ffffffff60e01b8360e01b16815260008251611429816004850160208701611693565b919091016004019392505050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b60208152600061148060208301846113d9565b9392505050565b60408152600061149a60408301856113d9565b905060018060a01b03831660208301529392505050565b60208082526026908201527f476f7665726e61626c653a2063616c6c6572206973206e6f742074686520676f6040820152653b32b93737b960d11b606082015260800190565b6020808252602f908201527f7369676e656420627920676f7665726e6f723a204e6f742076616c696420736960408201526e3390333937b69033b7bb32b93737b960891b606082015260800190565b6020808252600d908201526c496e76616c6964206e6f6e636560981b604082015260600190565b60208082526019908201527f4e6f6e6365206d75737420696e6372656d656e74206279203100000000000000604082015260600190565b600080858511156115b457600080fd5b838611156115c157600080fd5b5050820193919092039150565b600082198211156115e1576115e16116c3565b500190565b600063ffffffff808316818516808303821115611605576116056116c3565b01949350505050565b803560208310156106a157600019602084900360031b1b1692915050565b6001600160d01b031981358181169160068510156116545780818660060360031b1b83161692505b505092915050565b805160208201516001600160d01b0319808216929190600683101561168b5780818460060360031b1b83161693505b505050919050565b60005b838110156116ae578181015183820152602001611696565b838111156116bd576000848401525b50505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe7374617274207265636f7665722066756e6374696f6e206f6e20676f7665726e61626c65656e64207265636f7665722066756e6374696f6e206f6e20676f7665726e61626c65a2646970667358221220c9f3041028256873e7c5c834bf9149a5db4161d95241e4cd122065c7f4b40e4664736f6c63430008050033";

export class SignatureBridge__factory extends ContractFactory {
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
    initialGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignatureBridge> {
    return super.deploy(
      initialGovernor,
      overrides || {}
    ) as Promise<SignatureBridge>;
  }
  getDeployTransaction(
    initialGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialGovernor, overrides || {});
  }
  attach(address: string): SignatureBridge {
    return super.attach(address) as SignatureBridge;
  }
  connect(signer: Signer): SignatureBridge__factory {
    return super.connect(signer) as SignatureBridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureBridgeInterface {
    return new utils.Interface(_abi) as SignatureBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureBridge {
    return new Contract(address, _abi, signerOrProvider) as SignatureBridge;
  }
}
