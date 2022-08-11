/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
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
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
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
    inputs: [],
    name: "averageSessionLengthInMillisecs",
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
    inputs: [],
    name: "currentVotingPeriod",
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
    name: "lastGovernorUpdateTime",
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
    name: "numOfProposers",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_resourceId",
        type: "bytes32",
      },
    ],
    name: "parseChainIdFromResourceId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "proposerSetRoot",
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
    inputs: [],
    name: "proposerSetUpdateNonce",
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
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "sessionLengthMultiplier",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_proposerSetRoot",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "_averageSessionLengthInMillisecs",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "_numOfProposers",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_proposerSetUpdateNonce",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes",
      },
    ],
    name: "updateProposerSetData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "leafIndex",
            type: "uint32",
          },
          {
            internalType: "bytes32[]",
            name: "siblingPathNodes",
            type: "bytes32[]",
          },
          {
            internalType: "address",
            name: "proposedGovernor",
            type: "address",
          },
        ],
        internalType: "struct Governable.Vote",
        name: "vote",
        type: "tuple",
      },
    ],
    name: "voteInFavorForceSetGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260008054600160a81b600160e81b0319168155600280546001600160401b0319166001600160401b03178155600355600581905560095534801561004757600080fd5b50604051611c95380380611c95833981016040819052610066916100e4565b600080546001600160c81b0319166101006001600160a01b03858116820263ffffffff60a81b191692909217600160a81b63ffffffff86160217808455426008556040518694869493909204909216917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908290a350505050610133565b600080604083850312156100f757600080fd5b82516001600160a01b038116811461010e57600080fd5b602084015190925063ffffffff8116811461012857600080fd5b809150509250929050565b611b53806101426000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80638b7e8782116100de578063bdfadc8411610097578063c7af335211610071578063c7af33521461038c578063c944e408146103a4578063cc3c74a1146103b7578063f3d23d54146103c057600080fd5b8063bdfadc8414610361578063c2230d6e1461036a578063c5eb6b1f1461038357600080fd5b80638b7e8782146102e7578063935967001461030b5780639d2b1ed7146103225780639e09583c14610335578063a6e94c911461033e578063bac163a21461035157600080fd5b80633a049e021161014b578063715018a611610125578063715018a6146102905780637296b5d81461029857806384db809f146102ab5780638755bcad146102d457600080fd5b80633a049e02146102515780634c830cbd1461025a5780635c975abb1461027957600080fd5b8063016737bb146101935780630c340a24146101c357806313cb01f9146101ed5780631ed13d1b14610219578063241188041461022c5780633408e47014610241575b600080fd5b6002546101a6906001600160401b031681565b6040516001600160401b0390911681526020015b60405180910390f35b60005461010090046001600160a01b03165b6040516001600160a01b0390911681526020016101ba565b60005461020490600160a81b900463ffffffff1681565b60405163ffffffff90911681526020016101ba565b6101d561022736600461156a565b6103d3565b61023f61023a366004611629565b6103f3565b005b465b6040519081526020016101ba565b61024360055481565b6102626105cc565b60405165ffffffffffff90911681526020016101ba565b60005460ff165b60405190151581526020016101ba565b61023f61061a565b61023f6102a63660046115cd565b610698565b6101d56102b9366004611399565b600a602052600090815260409020546001600160a01b031681565b6102806102e236600461156a565b6107c8565b6102f2600160f81b81565b6040516001600160f01b031990911681526020016101ba565b60005461020490600160c81b900463ffffffff1681565b61023f6103303660046114d7565b6107fc565b61024360085481565b61023f61034c366004611366565b61097f565b6004546102049063ffffffff1681565b61024360035481565b6101a6610378366004611399565b65ffffffffffff1690565b61024360015481565b60005461010090046001600160a01b03163314610280565b61023f6103b23660046113b2565b6109de565b61024360095481565b61023f6103ce366004611453565b610be3565b81516020830120600090816103e88285610d46565b925050505b92915050565b60025461040c906103e8906001600160401b0316611993565b6001600160401b031660035461042291906119ad565b60085461042f9190611930565b42101561047b5760405162461bcd60e51b8152602060048201526015602482015274496e76616c69642074696d6520666f7220766f746560581b60448201526064015b60405180910390fd5b60208101518151339161048f918390610d6a565b6104d25760405162461bcd60e51b815260206004820152601460248201527334b73b30b634b21036b2b935b63290383937b7b360611b6044820152606401610472565b60055460009081526006602090815260408083206001600160a01b038516845290915290205460ff16156105385760405162461bcd60e51b815260206004820152600d60248201526c185b1c9958591e481d9bdd1959609a1b6044820152606401610472565b6005805460009081526006602090815260408083206001600160a01b038087168552908352818420805460ff1916600190811790915594548452600783528184208783015190911684529091528120805490919061059d90849063ffffffff16611948565b92506101000a81548163ffffffff021916908363ffffffff1602179055506105c88260400151610ea2565b5050565b60408051600160f81b602082018190524660e01b6001600160e01b0319811660228401528351808403600601815260269093019093526000929161060f81611a1a565b60d01c935050505090565b60005461010090046001600160a01b031633146106495760405162461bcd60e51b8152600401610472906117ab565b600080546040516101009091046001600160a01b0316907f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908390a360008054610100600160a81b0319169055565b60005463ffffffff808416600160a81b90920416106106c95760405162461bcd60e51b815260040161047290611840565b6000546106e490600160a81b900463ffffffff166001611948565b63ffffffff168263ffffffff16111561073f5760405162461bcd60e51b815260206004820152601960248201527f4e6f6e6365206d75737420696e6372656d656e742062792031000000000000006044820152606401610472565b82516020808501919091206040519091829161077891610763918791899101611721565b604051602081830303815290604052846107c8565b6107945760405162461bcd60e51b8152600401610472906117ab565b61079d81610ef9565b50506000805463ffffffff909316600160a81b0263ffffffff60a81b19909316929092179091555050565b81516020830120600090816107dd8285610d46565b60005461010090046001600160a01b0390811691161495945050505050565b82828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508492506108409150839050826107c8565b61085c5760405162461bcd60e51b8152600401610472906117f1565b36600061086c602082888a611906565b9092509050600061087d82846119cc565b9050600061088f6020601a8587611906565b610898916119ea565b60d01c9050806108a66105cc565b65ffffffffffff16146108fb5760405162461bcd60e51b815260206004820152601860248201527f657865637574696e67206f6e2077726f6e6720636861696e00000000000000006044820152606401610472565b6000828152600a60205260409081902054905163712467f960e11b81526001600160a01b03909116908190819063e248cff2906109409087908f908f90600401611775565b600060405180830381600087803b15801561095a57600080fd5b505af115801561096e573d6000803e3d6000fd5b505050505050505050505050505050565b60005461010090046001600160a01b031633146109ae5760405162461bcd60e51b8152600401610472906117ab565b6109b782610ef9565b6000805463ffffffff909216600160a81b0263ffffffff60a81b1990921691909117905550565b60408051602081018990526001600160e01b03198881168284015260e088901b166044820152604881018690526bffffffffffffffffffffffff19606086811b8216606884015285901b16607c82015281518082036070018152609090910190915281610a4b82826107c8565b610a675760405162461bcd60e51b8152600401610472906117f1565b8663ffffffff1660095410610a8e5760405162461bcd60e51b815260040161047290611840565b600954610a9d90610418611930565b8763ffffffff1610610ac15760405162461bcd60e51b815260040161047290611867565b6001600160e01b031988166319289c8160e31b14610b475760405162461bcd60e51b815260206004820152603960248201527f61646d696e5365745265736f75726365576974685369676e61747572653a204960448201527f6e76616c69642066756e6374696f6e207369676e6174757265000000000000006064820152608401610472565b6000868152600a60205260409081902080546001600160a01b0319166001600160a01b038881169182179092559151635c7d1b9b60e11b815260048101899052908616602482015286919063b8fa373690604401600060405180830381600087803b158015610bb557600080fd5b505af1158015610bc9573d6000803e3d6000fd5b50505063ffffffff90981660095550505050505050505050565b60005463ffffffff808416600160c81b9092041610610c145760405162461bcd60e51b815260040161047290611840565b600054610c3090600160c81b900463ffffffff16610418611948565b63ffffffff168263ffffffff1610610c5a5760405162461bcd60e51b815260040161047290611867565b60408051602081018790526001600160c01b031960c087901b16918101919091526001600160e01b031960e085811b8216604884015284901b16604c820152610cb590605001604051602081830303815290604052826107c8565b610cd15760405162461bcd60e51b8152600401610472906117ab565b60018590556002805467ffffffffffffffff19166001600160401b0386161790556004805463ffffffff191663ffffffff858116919091179091556000805463ffffffff60c81b1916600160c81b928516929092029190911781556005805491610d3a83611a51565b91905055505050505050565b6000806000610d558585610fd9565b91509150610d628161101f565b509392505050565b6040516bffffffffffffffffffffffff19606084901b166020820152600090819060340160408051601f1981840301815291905280516020909101209050808360005b87518160ff161015610e9357610dc4600283611a8c565b63ffffffff16610e235782888260ff1681518110610de457610de4611af1565b6020026020010151604051602001610e06929190918252602082015260400190565b604051602081830303815290604052805190602001209250610e74565b878160ff1681518110610e3857610e38611af1565b602002602001015183604051602001610e5b929190918252602082015260400190565b6040516020818303038152906040528051906020012092505b610e7f600283611970565b915080610e8b81611a6c565b915050610dad565b50506001541495945050505050565b600454610eb79060029063ffffffff16611970565b60055460009081526007602090815260408083206001600160a01b038616845290915290205463ffffffff91821691161115610ef657610ef681610ef9565b50565b6001600160a01b038116610f615760405162461bcd60e51b815260206004820152602960248201527f476f7665726e61626c653a206e6577206f776e657220697320746865207a65726044820152686f206164647265737360b81b6064820152608401610472565b600080546040516001600160a01b038085169361010090930416917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f791a360008054610100600160a81b0319166101006001600160a01b03841602178155426008556005805491610fd183611a51565b919050555050565b6000808251604114156110105760208301516040840151606085015160001a611004878285856111da565b94509450505050611018565b506000905060025b9250929050565b600081600481111561103357611033611adb565b141561103c5750565b600181600481111561105057611050611adb565b141561109e5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610472565b60028160048111156110b2576110b2611adb565b14156111005760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610472565b600381600481111561111457611114611adb565b141561116d5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610472565b600481600481111561118157611181611adb565b1415610ef65760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610472565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561121157506000905060036112be565b8460ff16601b1415801561122957508460ff16601c14155b1561123a57506000905060046112be565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561128e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166112b7576000600192509250506112be565b9150600090505b94509492505050565b80356001600160a01b03811681146112de57600080fd5b919050565b600082601f8301126112f457600080fd5b81356001600160401b0381111561130d5761130d611b07565b611320601f8201601f19166020016118d6565b81815284602083860101111561133557600080fd5b816020850160208301376000918101602001919091529392505050565b803563ffffffff811681146112de57600080fd5b6000806040838503121561137957600080fd5b611382836112c7565b915061139060208401611352565b90509250929050565b6000602082840312156113ab57600080fd5b5035919050565b600080600080600080600060e0888a0312156113cd57600080fd5b8735965060208801356001600160e01b0319811681146113ec57600080fd5b95506113fa60408901611352565b94506060880135935061140f608089016112c7565b925061141d60a089016112c7565b915060c08801356001600160401b0381111561143857600080fd5b6114448a828b016112e3565b91505092959891949750929550565b600080600080600060a0868803121561146b57600080fd5b8535945060208601356001600160401b03808216821461148a57600080fd5b81955061149960408901611352565b94506114a760608901611352565b935060808801359150808211156114bd57600080fd5b506114ca888289016112e3565b9150509295509295909350565b6000806000604084860312156114ec57600080fd5b83356001600160401b038082111561150357600080fd5b818601915086601f83011261151757600080fd5b81358181111561152657600080fd5b87602082850101111561153857600080fd5b60209283019550935090850135908082111561155357600080fd5b50611560868287016112e3565b9150509250925092565b6000806040838503121561157d57600080fd5b82356001600160401b038082111561159457600080fd5b6115a0868387016112e3565b935060208501359150808211156115b657600080fd5b506115c3858286016112e3565b9150509250929050565b6000806000606084860312156115e257600080fd5b83356001600160401b03808211156115f957600080fd5b611605878388016112e3565b945061161360208701611352565b9350604086013591508082111561155357600080fd5b6000602080838503121561163c57600080fd5b82356001600160401b038082111561165357600080fd5b908401906060828703121561166757600080fd5b61166f6118ae565b61167883611352565b8152838301358281111561168b57600080fd5b8301601f8101881361169c57600080fd5b8035838111156116ae576116ae611b07565b8060051b93506116bf8685016118d6565b8181528681019083880186850189018c10156116da57600080fd5b600096505b838710156116fd5780358352600196909601959188019188016116df565b508488015250611712915050604084016112c7565b60408201529695505050505050565b63ffffffff60e01b8360e01b1681526000825160005b818110156117545760208186018101516004868401015201611737565b81811115611766576000600483860101525b50919091016004019392505050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b60208082526026908201527f476f7665726e61626c653a2063616c6c6572206973206e6f742074686520676f6040820152653b32b93737b960d11b606082015260800190565b6020808252602f908201527f7369676e656420627920676f7665726e6f723a204e6f742076616c696420736960408201526e3390333937b69033b7bb32b93737b960891b606082015260800190565b6020808252600d908201526c496e76616c6964206e6f6e636560981b604082015260600190565b60208082526027908201527f4e6f6e6365206d757374206e6f7420696e6372656d656e74206d6f72652074686040820152660c2dc40626068760cb1b606082015260800190565b604051606081016001600160401b03811182821017156118d0576118d0611b07565b60405290565b604051601f8201601f191681016001600160401b03811182821017156118fe576118fe611b07565b604052919050565b6000808585111561191657600080fd5b8386111561192357600080fd5b5050820193919092039150565b6000821982111561194357611943611aaf565b500190565b600063ffffffff80831681851680830382111561196757611967611aaf565b01949350505050565b600063ffffffff8084168061198757611987611ac5565b92169190910492915050565b60006001600160401b038084168061198757611987611ac5565b60008160001904831182151516156119c7576119c7611aaf565b500290565b803560208310156103ed57600019602084900360031b1b1692915050565b6001600160d01b03198135818116916006851015611a125780818660060360031b1b83161692505b505092915050565b805160208201516001600160d01b03198082169291906006831015611a495780818460060360031b1b83161693505b505050919050565b6000600019821415611a6557611a65611aaf565b5060010190565b600060ff821660ff811415611a8357611a83611aaf565b60010192915050565b600063ffffffff80841680611aa357611aa3611ac5565b92169190910692915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e077585def38c33694644a9d51e3e69782974a9dc4da3479e343e8598f93d88f64736f6c63430008050033";

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
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignatureBridge> {
    return super.deploy(
      initialGovernor,
      nonce,
      overrides || {}
    ) as Promise<SignatureBridge>;
  }
  getDeployTransaction(
    initialGovernor: string,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialGovernor, nonce, overrides || {});
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
