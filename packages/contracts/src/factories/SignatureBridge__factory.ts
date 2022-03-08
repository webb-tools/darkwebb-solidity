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
    stateMutability: "view",
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
        name: "sig",
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
  "0x608060405260008054600160a81b600160e81b0319168155600280546001600160401b0319166001600160401b031781556003556006819055600a5534801561004757600080fd5b50604051611cfa380380611cfa833981016040819052610066916100c8565b600080546001600160a81b0319166101006001600160a01b0384811682029290921780845542600855604051859492909104909216917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908290a350506100f8565b6000602082840312156100da57600080fd5b81516001600160a01b03811681146100f157600080fd5b9392505050565b611bf3806101076000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80638b7e8782116100de578063bdfadc8411610097578063c944e40811610071578063c944e4081461038b578063cc3c74a11461039e578063d75a0683146103a7578063f3d23d54146103d057600080fd5b8063bdfadc8414610361578063c5eb6b1f1461036a578063c7af33521461037357600080fd5b80638b7e8782146102e7578063935967001461030b5780639d2b1ed7146103225780639e09583c14610335578063a6e94c911461033e578063bac163a21461035157600080fd5b80633a049e021161014b578063715018a611610125578063715018a6146102905780637296b5d81461029857806384db809f146102ab5780638755bcad146102d457600080fd5b80633a049e02146102515780634c830cbd1461025a5780635c975abb1461027957600080fd5b8063016737bb146101935780630c340a24146101c357806313cb01f9146101ed5780631ed13d1b14610219578063241188041461022c5780633408e47014610241575b600080fd5b6002546101a6906001600160401b031681565b6040516001600160401b0390911681526020015b60405180910390f35b60005461010090046001600160a01b03165b6040516001600160a01b0390911681526020016101ba565b60005461020490600160a81b900463ffffffff1681565b60405163ffffffff90911681526020016101ba565b6101d561022736600461161a565b6103e3565b61023f61023a3660046116d9565b610403565b005b465b6040519081526020016101ba565b61024360065481565b6102626105dc565b60405165ffffffffffff90911681526020016101ba565b60005460ff165b60405190151581526020016101ba565b61023f61062a565b61023f6102a636600461167d565b6106a8565b6101d56102b9366004611449565b600c602052600090815260409020546001600160a01b031681565b6102806102e236600461161a565b6107a8565b6102f2600160f81b81565b6040516001600160f01b031990911681526020016101ba565b60005461020490600160c81b900463ffffffff1681565b61023f610330366004611587565b6107dc565b61024360085481565b61023f61034c366004611416565b61095f565b6004546102049063ffffffff1681565b61024360035481565b61024360015481565b60005461010090046001600160a01b03163314610280565b61023f610399366004611462565b610a35565b610243600a5481565b6101a66103b5366004611449565b600b602052600090815260409020546001600160401b031681565b61023f6103de366004611503565b610c3a565b81516020830120600090816103f88285610d9d565b925050505b92915050565b60025461041c906103e8906001600160401b0316611a33565b6001600160401b03166003546104329190611a4d565b60085461043f91906119d0565b42101561048b5760405162461bcd60e51b8152602060048201526015602482015274496e76616c69642074696d6520666f7220766f746560581b60448201526064015b60405180910390fd5b60208101518151339161049f918390610dc1565b6104e25760405162461bcd60e51b815260206004820152601460248201527334b73b30b634b21036b2b935b63290383937b7b360611b6044820152606401610482565b60065460009081526005602090815260408083206001600160a01b038516845290915290205460ff16156105485760405162461bcd60e51b815260206004820152600d60248201526c185b1c9958591e481d9bdd1959609a1b6044820152606401610482565b6006805460009081526005602090815260408083206001600160a01b038087168552908352818420805460ff191660019081179091559454845260078352818420878301519091168452909152812080549091906105ad90849063ffffffff166119e8565b92506101000a81548163ffffffff021916908363ffffffff1602179055506105d88260400151610ef9565b5050565b60408051600160f81b602082018190524660e01b6001600160e01b0319811660228401528351808403600601815260269093019093526000929161061f81611aba565b60d01c935050505090565b60005461010090046001600160a01b031633146106595760405162461bcd60e51b81526004016104829061185b565b600080546040516101009091046001600160a01b0316907f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908390a360008054610100600160a81b0319169055565b60005463ffffffff808416600160a81b90920416106106d95760405162461bcd60e51b8152600401610482906118f0565b6000546106f490600160a81b900463ffffffff1660016119e8565b63ffffffff168263ffffffff16111561071f5760405162461bcd60e51b815260040161048290611917565b825160208085019190912060405190918291610758916107439187918991016117d1565b604051602081830303815290604052846107a8565b6107745760405162461bcd60e51b81526004016104829061185b565b61077d81610f50565b50506000805463ffffffff909316600160a81b0263ffffffff60a81b19909316929092179091555050565b81516020830120600090816107bd8285610d9d565b60005461010090046001600160a01b0390811691161495945050505050565b82828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508492506108209150839050826107a8565b61083c5760405162461bcd60e51b8152600401610482906118a1565b36600061084c602082888a6119a6565b9092509050600061085d8284611a6c565b9050600061086f6020601a85876119a6565b61087891611a8a565b60d01c9050806108866105dc565b65ffffffffffff16146108db5760405162461bcd60e51b815260206004820152601860248201527f657865637574696e67206f6e2077726f6e6720636861696e00000000000000006044820152606401610482565b6000828152600c60205260409081902054905163712467f960e11b81526001600160a01b03909116908190819063e248cff2906109209087908f908f90600401611825565b600060405180830381600087803b15801561093a57600080fd5b505af115801561094e573d6000803e3d6000fd5b505050505050505050505050505050565b60005461010090046001600160a01b0316331461098e5760405162461bcd60e51b81526004016104829061185b565b60005463ffffffff808316600160a81b90920416106109bf5760405162461bcd60e51b8152600401610482906118f0565b6000546109da90600160a81b900463ffffffff1660016119e8565b63ffffffff168163ffffffff161115610a055760405162461bcd60e51b815260040161048290611917565b610a0e82610f50565b6000805463ffffffff909216600160a81b0263ffffffff60a81b1990921691909117905550565b60408051602081018990526001600160e01b03198881168284015260e088901b166044820152604881018690526bffffffffffffffffffffffff19606086811b8216606884015285901b16607c82015281518082036070018152609090910190915281610aa282826107a8565b610abe5760405162461bcd60e51b8152600401610482906118a1565b8663ffffffff16600a5410610ae55760405162461bcd60e51b8152600401610482906118f0565b600a54610af39060016119d0565b8763ffffffff161115610b185760405162461bcd60e51b815260040161048290611917565b6001600160e01b031988166319289c8160e31b14610b9e5760405162461bcd60e51b815260206004820152603960248201527f61646d696e5365745265736f75726365576974685369676e61747572653a204960448201527f6e76616c69642066756e6374696f6e207369676e6174757265000000000000006064820152608401610482565b6000868152600c60205260409081902080546001600160a01b0319166001600160a01b038881169182179092559151635c7d1b9b60e11b815260048101899052908616602482015286919063b8fa373690604401600060405180830381600087803b158015610c0c57600080fd5b505af1158015610c20573d6000803e3d6000fd5b50505063ffffffff909816600a5550505050505050505050565b60005463ffffffff808416600160c81b9092041610610c6b5760405162461bcd60e51b8152600401610482906118f0565b600054610c8690600160c81b900463ffffffff1660016119e8565b63ffffffff168263ffffffff161115610cb15760405162461bcd60e51b815260040161048290611917565b60408051602081018790526001600160c01b031960c087901b16918101919091526001600160e01b031960e085811b8216604884015284901b16604c820152610d0c90605001604051602081830303815290604052826107a8565b610d285760405162461bcd60e51b81526004016104829061185b565b60018590556002805467ffffffffffffffff19166001600160401b0386161790556004805463ffffffff191663ffffffff858116919091179091556000805463ffffffff60c81b1916600160c81b928516929092029190911781556006805491610d9183611af1565b91905055505050505050565b6000806000610dac8585611030565b91509150610db9816110a0565b509392505050565b6040516bffffffffffffffffffffffff19606084901b166020820152600090819060340160408051601f1981840301815291905280516020909101209050808360005b87518160ff161015610eea57610e1b600283611b2c565b63ffffffff16610e7a5782888260ff1681518110610e3b57610e3b611b91565b6020026020010151604051602001610e5d929190918252602082015260400190565b604051602081830303815290604052805190602001209250610ecb565b878160ff1681518110610e8f57610e8f611b91565b602002602001015183604051602001610eb2929190918252602082015260400190565b6040516020818303038152906040528051906020012092505b610ed6600283611a10565b915080610ee281611b0c565b915050610e04565b50506001541495945050505050565b600454610f0e9060029063ffffffff16611a10565b60065460009081526007602090815260408083206001600160a01b038616845290915290205463ffffffff91821691161115610f4d57610f4d81610f50565b50565b6001600160a01b038116610fb85760405162461bcd60e51b815260206004820152602960248201527f476f7665726e61626c653a206e6577206f776e657220697320746865207a65726044820152686f206164647265737360b81b6064820152608401610482565b600080546040516001600160a01b038085169361010090930416917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f791a360008054610100600160a81b0319166101006001600160a01b0384160217815542600855600680549161102883611af1565b919050555050565b6000808251604114156110675760208301516040840151606085015160001a61105b8782858561125b565b94509450505050611099565b8251604014156110915760208301516040840151611086868383611348565b935093505050611099565b506000905060025b9250929050565b60008160048111156110b4576110b4611b7b565b14156110bd5750565b60018160048111156110d1576110d1611b7b565b141561111f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610482565b600281600481111561113357611133611b7b565b14156111815760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610482565b600381600481111561119557611195611b7b565b14156111ee5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610482565b600481600481111561120257611202611b7b565b1415610f4d5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610482565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611292575060009050600361133f565b8460ff16601b141580156112aa57508460ff16601c14155b156112bb575060009050600461133f565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561130f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166113385760006001925092505061133f565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b016113698782888561125b565b935093505050935093915050565b80356001600160a01b038116811461138e57600080fd5b919050565b600082601f8301126113a457600080fd5b81356001600160401b038111156113bd576113bd611ba7565b6113d0601f8201601f1916602001611976565b8181528460208386010111156113e557600080fd5b816020850160208301376000918101602001919091529392505050565b803563ffffffff8116811461138e57600080fd5b6000806040838503121561142957600080fd5b61143283611377565b915061144060208401611402565b90509250929050565b60006020828403121561145b57600080fd5b5035919050565b600080600080600080600060e0888a03121561147d57600080fd5b8735965060208801356001600160e01b03198116811461149c57600080fd5b95506114aa60408901611402565b9450606088013593506114bf60808901611377565b92506114cd60a08901611377565b915060c08801356001600160401b038111156114e857600080fd5b6114f48a828b01611393565b91505092959891949750929550565b600080600080600060a0868803121561151b57600080fd5b8535945060208601356001600160401b03808216821461153a57600080fd5b81955061154960408901611402565b945061155760608901611402565b9350608088013591508082111561156d57600080fd5b5061157a88828901611393565b9150509295509295909350565b60008060006040848603121561159c57600080fd5b83356001600160401b03808211156115b357600080fd5b818601915086601f8301126115c757600080fd5b8135818111156115d657600080fd5b8760208285010111156115e857600080fd5b60209283019550935090850135908082111561160357600080fd5b5061161086828701611393565b9150509250925092565b6000806040838503121561162d57600080fd5b82356001600160401b038082111561164457600080fd5b61165086838701611393565b9350602085013591508082111561166657600080fd5b5061167385828601611393565b9150509250929050565b60008060006060848603121561169257600080fd5b83356001600160401b03808211156116a957600080fd5b6116b587838801611393565b94506116c360208701611402565b9350604086013591508082111561160357600080fd5b600060208083850312156116ec57600080fd5b82356001600160401b038082111561170357600080fd5b908401906060828703121561171757600080fd5b61171f61194e565b61172883611402565b8152838301358281111561173b57600080fd5b8301601f8101881361174c57600080fd5b80358381111561175e5761175e611ba7565b8060051b935061176f868501611976565b8181528681019083880186850189018c101561178a57600080fd5b600096505b838710156117ad57803583526001969096019591880191880161178f565b5084880152506117c291505060408401611377565b60408201529695505050505050565b63ffffffff60e01b8360e01b1681526000825160005b8181101561180457602081860181015160048684010152016117e7565b81811115611816576000600483860101525b50919091016004019392505050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b60208082526026908201527f476f7665726e61626c653a2063616c6c6572206973206e6f742074686520676f6040820152653b32b93737b960d11b606082015260800190565b6020808252602f908201527f7369676e656420627920676f7665726e6f723a204e6f742076616c696420736960408201526e3390333937b69033b7bb32b93737b960891b606082015260800190565b6020808252600d908201526c496e76616c6964206e6f6e636560981b604082015260600190565b60208082526019908201527f4e6f6e6365206d75737420696e6372656d656e74206279203100000000000000604082015260600190565b604051606081016001600160401b038111828210171561197057611970611ba7565b60405290565b604051601f8201601f191681016001600160401b038111828210171561199e5761199e611ba7565b604052919050565b600080858511156119b657600080fd5b838611156119c357600080fd5b5050820193919092039150565b600082198211156119e3576119e3611b4f565b500190565b600063ffffffff808316818516808303821115611a0757611a07611b4f565b01949350505050565b600063ffffffff80841680611a2757611a27611b65565b92169190910492915050565b60006001600160401b0380841680611a2757611a27611b65565b6000816000190483118215151615611a6757611a67611b4f565b500290565b803560208310156103fd57600019602084900360031b1b1692915050565b6001600160d01b03198135818116916006851015611ab25780818660060360031b1b83161692505b505092915050565b805160208201516001600160d01b03198082169291906006831015611ae95780818460060360031b1b83161693505b505050919050565b6000600019821415611b0557611b05611b4f565b5060010190565b600060ff821660ff811415611b2357611b23611b4f565b60010192915050565b600063ffffffff80841680611b4357611b43611b65565b92169190910692915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220caac66886101a72e5d5ecc2ae7eea7319c8aefa25db0e32f3719101afafe9bd064736f6c63430008050033";

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
