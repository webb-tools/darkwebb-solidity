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
import type { Bridge, BridgeInterface } from "../Bridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "initialRelayers",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "initialRelayerThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationChainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
    ],
    name: "Deposit",
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
        indexed: false,
        internalType: "uint256",
        name: "originChainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "enum Bridge.ProposalStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "ProposalEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "originChainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "enum Bridge.ProposalStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "ProposalVote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newThreshold",
        type: "uint256",
      },
    ],
    name: "RelayerThresholdChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "MAX_RELAYERS",
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
    name: "RELAYER_ROLE",
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
    name: "_chainID",
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
    inputs: [],
    name: "_expiry",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_fee",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint72",
        name: "destNonce",
        type: "uint72",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "_hasVotedOnProposal",
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
    name: "_relayerThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    inputs: [],
    name: "_totalRelayers",
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
        name: "relayerAddress",
        type: "address",
      },
    ],
    name: "adminAddRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "adminChangeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newThreshold",
        type: "uint256",
      },
    ],
    name: "adminChangeRelayerThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adminPauseTransfers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "relayerAddress",
        type: "address",
      },
    ],
    name: "adminRemoveRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "handlerAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "executionContextAddress",
        type: "address",
      },
    ],
    name: "adminSetResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adminUnpauseTransfers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "cancelProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
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
        internalType: "uint256",
        name: "originChainID",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "getProposal",
    outputs: [
      {
        components: [
          {
            internalType: "enum Bridge.ProposalStatus",
            name: "_status",
            type: "uint8",
          },
          {
            internalType: "uint200",
            name: "_yesVotes",
            type: "uint200",
          },
          {
            internalType: "uint8",
            name: "_yesVotesTotal",
            type: "uint8",
          },
          {
            internalType: "uint40",
            name: "_proposedBlock",
            type: "uint40",
          },
        ],
        internalType: "struct Bridge.Proposal",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getRoleMemberIndex",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "isRelayer",
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
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "renounceAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable[]",
        name: "addrs",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "transferFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "voteProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620029b0380380620029b0833981016040819052620000349162000458565b6000805460ff1916905560028590556200005a8362000176602090811b620017ad17901c565b600360006101000a81548160ff021916908360ff1602179055506200008a82620001d360201b620018041760201c565b600360016101000a8154816001600160801b0302191690836001600160801b03160217905550620000c6816200022a60201b620018591760201c565b6003805464ffffffffff92909216600160881b0264ffffffffff60881b19909216919091179055620000fa60003362000283565b60005b84518110156200016a57620001557fe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc486838151811062000141576200014162000582565b60200260200101516200029360201b60201c565b80620001618162000558565b915050620000fd565b505050505050620005ae565b60006101008210620001cf5760405162461bcd60e51b815260206004820152601c60248201527f76616c756520646f6573206e6f742066697420696e203820626974730000000060448201526064015b60405180910390fd5b5090565b6000600160801b8210620001cf5760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e20313238206269747300006044820152606401620001c6565b6000650100000000008210620001cf5760405162461bcd60e51b815260206004820152601d60248201527f76616c756520646f6573206e6f742066697420696e20343020626974730000006044820152606401620001c6565b6200028f828262000317565b5050565b600082815260016020526040902060020154620002b1903362000380565b620002835760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526e0818591b5a5b881d1bc819dc985b9d608a1b6064820152608401620001c6565b60008281526001602090815260409091206200033e918390620018b0620003af821b17901c565b156200028f5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526001602090815260408220620003a6918490620018c5620003c6821b17901c565b90505b92915050565b6000620003a6836001600160a01b038416620003e9565b6001600160a01b03811660009081526001830160205260408120541515620003a6565b60008181526001830160205260408120546200043257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620003a9565b506000620003a9565b80516001600160a01b03811681146200045357600080fd5b919050565b600080600080600060a086880312156200047157600080fd5b8551602080880151919650906001600160401b03808211156200049357600080fd5b818901915089601f830112620004a857600080fd5b815181811115620004bd57620004bd62000598565b8060051b604051601f19603f83011681018181108582111715620004e557620004e562000598565b604052828152858101935084860182860187018e10156200050557600080fd5b600095505b8386101562000533576200051e816200043b565b8552600195909501949386019386016200050a565b5060408c015160608d01516080909d01519b9e919d509b9a9950975050505050505050565b60006000198214156200057b57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6123f280620005be6000396000f3fe6080604052600436106101fd5760003560e01c8063926d7d7f1161010d578063c5ec8970116100a0578063d547741f1161006f578063d547741f14610615578063d75a068314610635578063d7a9cd7914610685578063dfef9a53146106b1578063ffaac0eb146106d157600080fd5b8063c5ec89701461057a578063ca15c873146105b5578063cb10f215146105d5578063cdb0f73a146105f557600080fd5b8063a06fa09b116100dc578063a06fa09b146104f2578063a217fddf14610512578063beab713114610527578063c5b37c221461053d57600080fd5b8063926d7d7f1461046e5780639b303d7a146104905780639d82dd63146104bd5780639debb3bd146104dd57600080fd5b80635e1fab0f1161019057806380ae1c281161015f57806380ae1c28146103ab57806384db809f146103c05780639010d07c1461040e57806391c404ac1461042e57806391d148541461044e57600080fd5b80635e1fab0f14610336578063709940e6146103565780637febe63f14610376578063802aabe81461039657600080fd5b80634e056005116101cc5780634e056005146102ae5780634e0df3f6146102ce578063541d5548146102ee5780635c975abb1461031e57600080fd5b8063248a9ca3146102095780632f2ff15d1461024c57806336568abe1461026e5780634603ae381461028e57600080fd5b3661020457005b600080fd5b34801561021557600080fd5b50610239610224366004611fd2565b60009081526001602052604090206002015490565b6040519081526020015b60405180910390f35b34801561025857600080fd5b5061026c610267366004611feb565b6106e6565b005b34801561027a57600080fd5b5061026c610289366004611feb565b610779565b34801561029a57600080fd5b5061026c6102a9366004611f66565b6107f3565b3480156102ba57600080fd5b5061026c6102c9366004611fd2565b610897565b3480156102da57600080fd5b506102396102e9366004611feb565b6108f3565b3480156102fa57600080fd5b5061030e610309366004611f07565b61091f565b6040519015158152602001610243565b34801561032a57600080fd5b5060005460ff1661030e565b34801561034257600080fd5b5061026c610351366004611f07565b610939565b34801561036257600080fd5b5061026c61037136600461203d565b6109b3565b34801561038257600080fd5b5061030e61039136600461213c565b610c48565b3480156103a257600080fd5b50610239610cec565b3480156103b757600080fd5b5061026c610d0a565b3480156103cc57600080fd5b506103f66103db366004611fd2565b6005602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610243565b34801561041a57600080fd5b506103f661042936600461201b565b610d1c565b34801561043a57600080fd5b5061026c610449366004611fd2565b610d3b565b34801561045a57600080fd5b5061030e610469366004611feb565b610dd5565b34801561047a57600080fd5b5061023960008051602061237d83398151915281565b34801561049c57600080fd5b506104b06104ab36600461203d565b610ded565b6040516102439190612241565b3480156104c957600080fd5b5061026c6104d8366004611f07565b610ebb565b3480156104e957600080fd5b5061023960c881565b3480156104fe57600080fd5b5061026c61050d366004612072565b610f70565b34801561051e57600080fd5b50610239600081565b34801561053357600080fd5b5061023960025481565b34801561054957600080fd5b506003546105629061010090046001600160801b031681565b6040516001600160801b039091168152602001610243565b34801561058657600080fd5b5060035461059f90600160881b900464ffffffffff1681565b60405164ffffffffff9091168152602001610243565b3480156105c157600080fd5b506102396105d0366004611fd2565b6113d1565b3480156105e157600080fd5b5061026c6105f0366004611f24565b6113e8565b34801561060157600080fd5b5061026c610610366004611f07565b61147c565b34801561062157600080fd5b5061026c610630366004611feb565b611582565b34801561064157600080fd5b5061066c610650366004611fd2565b60046020526000908152604090205467ffffffffffffffff1681565b60405167ffffffffffffffff9091168152602001610243565b34801561069157600080fd5b5060035461069f9060ff1681565b60405160ff9091168152602001610243565b3480156106bd57600080fd5b5061026c6106cc3660046120ad565b611603565b3480156106dd57600080fd5b5061026c61179d565b6000828152600160205260409020600201546107029033610dd5565b61076b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526e0818591b5a5b881d1bc819dc985b9d608a1b60648201526084015b60405180910390fd5b61077582826118e7565b5050565b6001600160a01b03811633146107e95760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610762565b6107758282611940565b6107fb611999565b60005b838110156108905784848281811061081857610818612351565b905060200201602081019061082d9190611f07565b6001600160a01b03166108fc84848481811061084b5761084b612351565b905060200201359081150290604051600060405180830381858888f1935050505015801561087d573d6000803e3d6000fd5b5080610888816122d4565b9150506107fe565b5050505050565b61089f611999565b6108a8816117ad565b6003805460ff191660ff929092169190911790556040518181527fa20d6b84cd798a24038be305eff8a45ca82ef54a2aa2082005d8e14c0a4746c8906020015b60405180910390a150565b60008281526001602081815260408084206001600160a01b038616855290920190529020545b92915050565b600061091960008051602061237d83398151915283610dd5565b610941611999565b336001600160a01b038216141561099a5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f742072656e6f756e6365206f6e6573656c660000000000000000006044820152606401610762565b6109a56000826106e6565b6109b0600033610779565b50565b6109bb6119f0565b600882901b68ffffffffffffffff00166001600160481b03841681176000908152600660209081526040808320858452909152808220815160808101909252805493871793829060ff166004811115610a1657610a16612325565b6004811115610a2757610a27612325565b8152905461010081046001600160c81b03166020830152600160d01b810460ff166040830152600160d81b900464ffffffffff1660609091015280519091506001816004811115610a7a57610a7a612325565b1480610a9757506002816004811115610a9557610a95612325565b145b610ae35760405162461bcd60e51b815260206004820152601c60248201527f50726f706f73616c2063616e6e6f742062652063616e63656c6c6564000000006044820152606401610762565b600354606083015164ffffffffff600160881b909204821691610b0891439116611a65565b64ffffffffff1611610b5c5760405162461bcd60e51b815260206004820181905260248201527f50726f706f73616c206e6f7420617420657870697279207468726573686f6c646044820152606401610762565b60048083526001600160481b03841660009081526006602090815260408083208884529091529020835181548593839160ff1916906001908490811115610ba557610ba5612325565b02179055506020820151815460408085015160609095015164ffffffffff16600160d81b026001600160d81b0360ff909616600160d01b0260ff60d01b196001600160c81b039095166101000294909416610100600160d81b03199093169290921792909217939093169290921790555160008051602061239d83398151915290610c389088908890600490899061228a565b60405180910390a1505050505050565b6001600160481b03831660009081526006602090815260408083208584529091528082208151608081019092528054610ce4929190829060ff166004811115610c9357610c93612325565b6004811115610ca457610ca4612325565b8152905461010081046001600160c81b03166020830152600160d01b810460ff166040830152600160d81b900464ffffffffff1660609091015283611aa7565b949350505050565b6000610d0560008051602061237d8339815191526113d1565b905090565b610d12611999565b610d1a611aca565b565b6000828152600160205260408120610d349083611b15565b9392505050565b610d43611999565b60035461010090046001600160801b0316811415610da35760405162461bcd60e51b815260206004820152601f60248201527f43757272656e742066656520697320657175616c20746f206e657720666565006044820152606401610762565b610dac81611804565b600360016101000a8154816001600160801b0302191690836001600160801b0316021790555050565b6000828152600160205260408120610d3490836118c5565b60408051608080820183526000808352602080840182905283850182905260608401829052600887901b68ffffffffffffffff00166001600160481b03891681178352600682528583208784529091529084902084519283019094528354929390871792829060ff166004811115610e6757610e67612325565b6004811115610e7857610e78612325565b8152905461010081046001600160c81b03166020830152600160d01b810460ff166040830152600160d81b900464ffffffffff1660609091015295945050505050565b610ed360008051602061237d83398151915282610dd5565b610f1f5760405162461bcd60e51b815260206004820152601f60248201527f6164647220646f65736e277420686176652072656c6179657220726f6c6521006044820152606401610762565b610f3760008051602061237d83398151915282611582565b6040516001600160a01b03821681527f10e1f7ce9fd7d1b90a66d13a2ab3cb8dd7f29f3f8d520b143b063ccfbab6906b906020016108e8565b610f78611b21565b610f80611b85565b600883901b68ffffffffffffffff00166001600160481b03851681176000908152600660209081526040808320858452909152808220815160808101909252805493881793829060ff166004811115610fdb57610fdb612325565b6004811115610fec57610fec612325565b8152905461010081046001600160c81b0316602080840191909152600160d01b820460ff16604080850191909152600160d81b90920464ffffffffff16606090930192909252600087815260059092529020549091506001600160a01b03166110975760405162461bcd60e51b815260206004820152601960248201527f6e6f2068616e646c657220666f72207265736f757263654944000000000000006044820152606401610762565b805160019060048111156110ad576110ad612325565b111561110e5760405162461bcd60e51b815260206004820152602a60248201527f70726f706f73616c20616c7265616479207061737365642f65786563757465646044820152690bd8d85b98d95b1b195960b21b6064820152608401610762565b6111188133611aa7565b1561115d5760405162461bcd60e51b81526020600482015260156024820152741c995b185e595c88185b1c9958591e481d9bdd1959605a1b6044820152606401610762565b60008151600481111561117257611172612325565b14156111d357506040805160808101825260018082526000602083018190528284015264ffffffffff431660608301529151909160008051602061239d833981519152916111c6918991899190889061228a565b60405180910390a1611235565b600354606082015164ffffffffff600160881b9092048216916111f891439116611a65565b64ffffffffff16111561123557600480825260405160008051602061239d8339815191529161122c9189918991889061228a565b60405180910390a15b60048151600481111561124a5761124a612325565b146113155761126f61125b33611bcb565b82602001516001600160c81b031617611bf9565b6001600160c81b031660208201526040810180519061128d826122ef565b60ff1690525080516040517f9bce7387b7d9942d29cffae8898ffe045a4b66dc7b0a6fa81606e41772ed12a9916112c99189918991889061228a565b60405180910390a1600354604082015160ff91821691161061131557600280825260405160008051602061239d8339815191529161130c9189918991889061228a565b60405180910390a15b6001600160481b038216600090815260066020908152604080832086845290915290208151815483929190829060ff1916600183600481111561135a5761135a612325565b021790555060208201518154604084015160609094015164ffffffffff16600160d81b026001600160d81b0360ff909516600160d01b0260ff60d01b196001600160c81b039094166101000293909316610100600160d81b0319909216919091179190911792909216919091179055505050505050565b600081815260016020526040812061091990611c4e565b6113f0611999565b6000828152600560205260409081902080546001600160a01b0319166001600160a01b038681169182179092559151635c7d1b9b60e11b815260048101859052908316602482015284919063b8fa373690604401600060405180830381600087803b15801561145e57600080fd5b505af1158015611472573d6000803e3d6000fd5b5050505050505050565b61149460008051602061237d83398151915282610dd5565b156114e15760405162461bcd60e51b815260206004820152601e60248201527f6164647220616c7265616479206861732072656c6179657220726f6c652100006044820152606401610762565b60c86114eb610cec565b106115315760405162461bcd60e51b81526020600482015260166024820152751c995b185e595c9cc81b1a5b5a5d081c995858da195960521b6044820152606401610762565b61154960008051602061237d833981519152826106e6565b6040516001600160a01b03821681527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c5906020016108e8565b60008281526001602052604090206002015461159e9033610dd5565b6107e95760405162461bcd60e51b815260206004820152603060248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526f2061646d696e20746f207265766f6b6560801b6064820152608401610762565b61160b611b21565b611613611b85565b60008181526005602090815260408083205490516001600160a01b039091169268ffffffffffffffff00600889901b168917929091611658918591899189910161218a565b60408051601f1981840301815291815281516020928301206001600160481b03851660009081526006845282812082825290935291209091506002815460ff1660048111156116a9576116a9612325565b146116f65760405162461bcd60e51b815260206004820181905260248201527f50726f706f73616c206d757374206861766520506173736564207374617475736044820152606401610762565b805460ff1916600317815560405163712467f960e11b815284906001600160a01b0382169063e248cff2906117339089908c908c906004016121b6565b600060405180830381600087803b15801561174d57600080fd5b505af1158015611761573d6000803e3d6000fd5b5050505060008051602061239d8339815191528a8a600386604051611789949392919061228a565b60405180910390a150505050505050505050565b6117a5611999565b610d1a611c58565b600061010082106118005760405162461bcd60e51b815260206004820152601c60248201527f76616c756520646f6573206e6f742066697420696e20382062697473000000006044820152606401610762565b5090565b6000600160801b82106118005760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e20313238206269747300006044820152606401610762565b60006501000000000082106118005760405162461bcd60e51b815260206004820152601d60248201527f76616c756520646f6573206e6f742066697420696e20343020626974730000006044820152606401610762565b6000610d34836001600160a01b038416611c9a565b6001600160a01b03811660009081526001830160205260408120541515610d34565b60008281526001602052604090206118ff90826118b0565b156107755760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526001602052604090206119589082611ce9565b156107755760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b6119a4600033610dd5565b610d1a5760405162461bcd60e51b815260206004820152601e60248201527f73656e64657220646f65736e277420686176652061646d696e20726f6c6500006044820152606401610762565b6119fb600033610dd5565b80611a195750611a1960008051602061237d83398151915233610dd5565b610d1a5760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206973206e6f742072656c61796572206f722061646d696e00006044820152606401610762565b6000610d3483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611cfe565b60008083602001516001600160c81b0316611ac184611bcb565b16119392505050565b611ad2611b85565b6000805460ff191660011790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258906020015b60405180910390a1565b6000610d348383611d38565b611b3960008051602061237d83398151915233610dd5565b610d1a5760405162461bcd60e51b815260206004820181905260248201527f73656e64657220646f65736e277420686176652072656c6179657220726f6c656044820152606401610762565b60005460ff1615610d1a5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610762565b6000611bef611be860008051602061237d833981519152846108f3565b6001611a65565b6001901b92915050565b6000600160c81b82106118005760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e20323030206269747300006044820152606401610762565b6000610919825490565b611c60611d62565b6000805460ff191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602001611b0b565b6000818152600183016020526040812054611ce157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610919565b506000610919565b6000610d34836001600160a01b038416611dab565b60008184841115611d225760405162461bcd60e51b815260040161076291906121ec565b506000611d2f84866122bd565b95945050505050565b6000826000018281548110611d4f57611d4f612351565b9060005260206000200154905092915050565b60005460ff16610d1a5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610762565b60008181526001830160205260408120548015611e94576000611dcf6001836122bd565b8554909150600090611de3906001906122bd565b9050818114611e48576000866000018281548110611e0357611e03612351565b9060005260206000200154905080876000018481548110611e2657611e26612351565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611e5957611e5961233b565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610919565b6000915050610919565b60008083601f840112611eb057600080fd5b50813567ffffffffffffffff811115611ec857600080fd5b6020830191508360208260051b8501011115611ee357600080fd5b9250929050565b803567ffffffffffffffff81168114611f0257600080fd5b919050565b600060208284031215611f1957600080fd5b8135610d3481612367565b600080600060608486031215611f3957600080fd5b8335611f4481612367565b9250602084013591506040840135611f5b81612367565b809150509250925092565b60008060008060408587031215611f7c57600080fd5b843567ffffffffffffffff80821115611f9457600080fd5b611fa088838901611e9e565b90965094506020870135915080821115611fb957600080fd5b50611fc687828801611e9e565b95989497509550505050565b600060208284031215611fe457600080fd5b5035919050565b60008060408385031215611ffe57600080fd5b82359150602083013561201081612367565b809150509250929050565b6000806040838503121561202e57600080fd5b50508035926020909101359150565b60008060006060848603121561205257600080fd5b8335925061206260208501611eea565b9150604084013590509250925092565b6000806000806080858703121561208857600080fd5b8435935061209860208601611eea565b93969395505050506040820135916060013590565b6000806000806000608086880312156120c557600080fd5b853594506120d560208701611eea565b9350604086013567ffffffffffffffff808211156120f257600080fd5b818801915088601f83011261210657600080fd5b81358181111561211557600080fd5b89602082850101111561212757600080fd5b96999598505060200195606001359392505050565b60008060006060848603121561215157600080fd5b83356001600160481b0381168114611f4457600080fd5b6005811061218657634e487b7160e01b600052602160045260246000fd5b9052565b6bffffffffffffffffffffffff198460601b168152818360148301376000910160140190815292915050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b600060208083528351808285015260005b81811015612219578581018301518582016040015282016121fd565b8181111561222b576000604083870101525b50601f01601f1916929092016040019392505050565b6000608082019050612254828451612168565b60018060c81b03602084015116602083015260ff604084015116604083015264ffffffffff606084015116606083015292915050565b84815267ffffffffffffffff84166020820152608081016122ae6040830185612168565b82606083015295945050505050565b6000828210156122cf576122cf61230f565b500390565b60006000198214156122e8576122e861230f565b5060010190565b600060ff821660ff8114156123065761230661230f565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03811681146109b057600080fdfee2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc44cb7956f27653ed00ab0902269b3f51178752f9eb2b4ec82146afdddc5a0d41ca264697066735822122004fb3853518b3d0002757a3380427f8f14860ff390d6e53f9a26e15a5065fc5c64736f6c63430008050033";

export class Bridge__factory extends ContractFactory {
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
    chainID: BigNumberish,
    initialRelayers: string[],
    initialRelayerThreshold: BigNumberish,
    fee: BigNumberish,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Bridge> {
    return super.deploy(
      chainID,
      initialRelayers,
      initialRelayerThreshold,
      fee,
      expiry,
      overrides || {}
    ) as Promise<Bridge>;
  }
  getDeployTransaction(
    chainID: BigNumberish,
    initialRelayers: string[],
    initialRelayerThreshold: BigNumberish,
    fee: BigNumberish,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      chainID,
      initialRelayers,
      initialRelayerThreshold,
      fee,
      expiry,
      overrides || {}
    );
  }
  attach(address: string): Bridge {
    return super.attach(address) as Bridge;
  }
  connect(signer: Signer): Bridge__factory {
    return super.connect(signer) as Bridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeInterface {
    return new utils.Interface(_abi) as BridgeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bridge {
    return new Contract(address, _abi, signerOrProvider) as Bridge;
  }
}
