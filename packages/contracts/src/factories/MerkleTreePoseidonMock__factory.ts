/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerkleTreePoseidonMock,
  MerkleTreePoseidonMockInterface,
} from "../MerkleTreePoseidonMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_treeLevels",
        type: "uint32",
      },
      {
        internalType: "contract IPoseidonT3",
        name: "_hasher",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
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
    name: "ROOT_HISTORY_SIZE",
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
    name: "ZERO_VALUE",
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
    name: "currentRootIndex",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
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
    name: "getLastRoot",
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
        internalType: "contract IPoseidonT3",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IPoseidonT3",
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
        name: "_leaf",
        type: "bytes32",
      },
    ],
    name: "insert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
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
    name: "levels",
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
    name: "nextIndex",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
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
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600280546001600160401b03191690553480156200002157600080fd5b50604051620019fb380380620019fb8339810160408190526200004491620007ca565b8181818160008263ffffffff16116200007a5760405162461bcd60e51b8152600401620000719062000850565b60405180910390fd5b60208263ffffffff1610620000a35760405162461bcd60e51b8152600401620000719062000819565b60e09190911b6001600160e01b03191660a05260601b6001600160601b03191660805260005b8263ffffffff168163ffffffff1610156200011a57620000ef63ffffffff82166200016e565b63ffffffff8216600090815260208190526040902055806200011181620008f2565b915050620000c9565b50620001386200012c600184620008ca565b63ffffffff166200016e565b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4955506200092f92505050565b6000816200019e57507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c620007c5565b8160011415620001d057507f13e37f2d6cb86c78ccc1788607c2b199788c6bb0a615a21f2e7a8e88384222f8620007c5565b81600214156200020257507f217126fa352c326896e8c2803eec8fd63ad50cf65edfef27a41a9e32dc622765620007c5565b81600314156200023457507f0e28a61a9b3e91007d5a9e3ada18e1b24d6d230c618388ee5df34cacd7397eee620007c5565b81600414156200026657507f27953447a6979839536badc5425ed15fadb0e292e9bc36f92f0aa5cfa5013587620007c5565b81600514156200029857507f194191edbfb91d10f6a7afd315f33095410c7801c47175c2df6dc2cce0e3affc620007c5565b8160061415620002ca57507f1733dece17d71190516dbaf1927936fa643dc7079fc0cc731de9d6845a47741f620007c5565b8160071415620002fc57507f267855a7dc75db39d81d17f95d0a7aa572bf5ae19f4db0e84221d2b2ef999219620007c5565b81600814156200032e57507f1184e11836b4c36ad8238a340ecc0985eeba665327e33e9b0e3641027c27620d620007c5565b81600914156200036057507f0702ab83a135d7f55350ab1bfaa90babd8fc1d2b3e6a7215381a7b2213d6c5ce620007c5565b81600a14156200039257507f2eecc0de814cfd8c57ce882babb2e30d1da56621aef7a47f3291cffeaec26ad7620007c5565b81600b1415620003c457507f280bc02145c155d5833585b6c7b08501055157dd30ce005319621dc462d33b47620007c5565b81600c1415620003f657507f045132221d1fa0a7f4aed8acd2cbec1e2189b7732ccb2ec272b9c60f0d5afc5b620007c5565b81600d14156200042857507f27f427ccbf58a44b1270abbe4eda6ba53bd6ac4d88cf1e00a13c4371ce71d366620007c5565b81600e14156200045a57507f1617eaae5064f26e8f8a6493ae92bfded7fde71b65df1ca6d5dcec0df70b2cef620007c5565b81600f14156200048c57507f20c6b400d0ea1b15435703c31c31ee63ad7ba5c8da66cec2796feacea575abca620007c5565b8160101415620004be57507f09589ddb438723f53a8e57bdada7c5f8ed67e8fece3889a73618732965645eec620007c5565b8160111415620004ef57507e64b6a738a5ff537db7b220f3394f0ecbd35bfd355c5425dc1166bf3236079b620007c5565b81601214156200052157507f095de56281b1d5055e897c3574ff790d5ee81dbc5df784ad2d67795e557c9e9f620007c5565b81601314156200055357507f11cf2e2887aa21963a6ec14289183efe4d4c60f14ecd3d6fe0beebdf855a9b63620007c5565b81601414156200058557507f2b0f6fc0179fa65b6f73627c0e1e84c7374d2eaec44c9a48f2571393ea77bcbb620007c5565b8160151415620005b757507f16fdb637c2abf9c0f988dbf2fd64258c46fb6a273d537b2cf1603ea460b13279620007c5565b8160161415620005e957507f21bbd7e944f6124dad4c376df9cc12e7ca66e47dff703ff7cedb1a454edcf0ff620007c5565b81601714156200061b57507f2784f8220b1c963e468f590f137baaa1625b3b92a27ad9b6e84eb0d3454d9962620007c5565b81601814156200064d57507f16ace1a65b7534142f8cc1aad810b3d6a7a74ca905d9c275cb98ba57e509fc10620007c5565b81601914156200067f57507f2328068c6a8c24265124debd8fe10d3f29f0665ea725a65e3638f6192a96a013620007c5565b81601a1415620006b157507f2ddb991be1f028022411b4c4d2c22043e5e751c120736f00adf54acab1c9ac14620007c5565b81601b1415620006e357507f0113798410eaeb95056a464f70521eb58377c0155f2fe518a5594d38cc209cc0620007c5565b81601c14156200071557507f202d1ae61526f0d0d01ef80fb5d4055a7af45721024c2c24cffd6a3798f54d50620007c5565b81601d14156200074757507f23ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f187620007c5565b81601e14156200077957507f1f15585f8947e378bcf8bd918716799da909acdb944c57150b1eb4565fda8aa0620007c5565b81601f1415620007ab57507f1eb064b21055ac6a350cf41eb30e4ce2cb19680217df3a243617c2838185ad06620007c5565b60405162461bcd60e51b8152600401620000719062000893565b919050565b60008060408385031215620007dd578182fd5b825163ffffffff81168114620007f1578283fd5b60208401519092506001600160a01b03811681146200080e578182fd5b809150509250929050565b6020808252601e908201527f5f6c6576656c732073686f756c64206265206c657373207468616e2033320000604082015260600190565b60208082526023908201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60408201526265726f60e81b606082015260800190565b60208082526013908201527f496e646578206f7574206f6620626f756e647300000000000000000000000000604082015260600190565b600063ffffffff83811690831681811015620008ea57620008ea62000919565b039392505050565b600063ffffffff808316818114156200090f576200090f62000919565b6001019392505050565b634e487b7160e01b600052601160045260246000fd5b60805160601c60a05160e01c61108b620009706000396000818161021301528181610ab70152610b10015260008181610a520152610ba9015261108b6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063c2b40ae41161008c578063ec73295911610066578063ec732959146101a8578063ed33639f146101b0578063f178e47c146101c5578063fc7e9c6f146101d8576100ea565b8063c2b40ae41461017a578063cd87a3b41461018d578063e829558814610195576100ea565b80636d9833e3116100c85780636d9833e3146101375780638ea3099e1461015757806390eeb02b1461016a578063ba70f75714610172576100ea565b80632d287e43146100ef578063414a37ba146101045780634ecf518b14610122575b600080fd5b6101026100fd366004610c83565b6101e0565b005b61010c6101ed565b6040516101199190610d2e565b60405180910390f35b61012a610211565b6040516101199190610e3e565b61014a610145366004610c83565b610235565b6040516101199190610d23565b61010c610165366004610c9b565b6102b3565b61012a6103d9565b61010c6103e5565b61010c610188366004610c83565b610400565b61012a610412565b61010c6101a3366004610c83565b610417565b61010c610a2c565b6101b8610a50565b6040516101199190610d37565b61010c6101d3366004610c83565b610a74565b61012a610a86565b6101e981610a9a565b5050565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181565b7f000000000000000000000000000000000000000000000000000000000000000081565b600081610244575060006102ae565b60025463ffffffff16805b63ffffffff8116600090815260016020526040902054841415610277576001925050506102ae565b63ffffffff81166102865750601e5b8061029081610fc2565b9150508163ffffffff168163ffffffff16141561024f576000925050505b919050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183106102fd5760405162461bcd60e51b81526004016102f490610d4b565b60405180910390fd5b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001821061033c5760405162461bcd60e51b81526004016102f490610d80565b6040805180820182528481526020810184905290516314d2f97b60e11b8152849184916001600160a01b038816916329a5f2f69161037d9190600401610cf2565b60206040518083038186803b15801561039557600080fd5b505afa1580156103a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cd9190610cda565b925050505b9392505050565b60025463ffffffff1681565b60025463ffffffff1660009081526001602052604090205490565b60016020526000908152604090205481565b601e81565b60008161044557507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c6102ae565b816001141561047557507f13e37f2d6cb86c78ccc1788607c2b199788c6bb0a615a21f2e7a8e88384222f86102ae565b81600214156104a557507f217126fa352c326896e8c2803eec8fd63ad50cf65edfef27a41a9e32dc6227656102ae565b81600314156104d557507f0e28a61a9b3e91007d5a9e3ada18e1b24d6d230c618388ee5df34cacd7397eee6102ae565b816004141561050557507f27953447a6979839536badc5425ed15fadb0e292e9bc36f92f0aa5cfa50135876102ae565b816005141561053557507f194191edbfb91d10f6a7afd315f33095410c7801c47175c2df6dc2cce0e3affc6102ae565b816006141561056557507f1733dece17d71190516dbaf1927936fa643dc7079fc0cc731de9d6845a47741f6102ae565b816007141561059557507f267855a7dc75db39d81d17f95d0a7aa572bf5ae19f4db0e84221d2b2ef9992196102ae565b81600814156105c557507f1184e11836b4c36ad8238a340ecc0985eeba665327e33e9b0e3641027c27620d6102ae565b81600914156105f557507f0702ab83a135d7f55350ab1bfaa90babd8fc1d2b3e6a7215381a7b2213d6c5ce6102ae565b81600a141561062557507f2eecc0de814cfd8c57ce882babb2e30d1da56621aef7a47f3291cffeaec26ad76102ae565b81600b141561065557507f280bc02145c155d5833585b6c7b08501055157dd30ce005319621dc462d33b476102ae565b81600c141561068557507f045132221d1fa0a7f4aed8acd2cbec1e2189b7732ccb2ec272b9c60f0d5afc5b6102ae565b81600d14156106b557507f27f427ccbf58a44b1270abbe4eda6ba53bd6ac4d88cf1e00a13c4371ce71d3666102ae565b81600e14156106e557507f1617eaae5064f26e8f8a6493ae92bfded7fde71b65df1ca6d5dcec0df70b2cef6102ae565b81600f141561071557507f20c6b400d0ea1b15435703c31c31ee63ad7ba5c8da66cec2796feacea575abca6102ae565b816010141561074557507f09589ddb438723f53a8e57bdada7c5f8ed67e8fece3889a73618732965645eec6102ae565b816011141561077457507e64b6a738a5ff537db7b220f3394f0ecbd35bfd355c5425dc1166bf3236079b6102ae565b81601214156107a457507f095de56281b1d5055e897c3574ff790d5ee81dbc5df784ad2d67795e557c9e9f6102ae565b81601314156107d457507f11cf2e2887aa21963a6ec14289183efe4d4c60f14ecd3d6fe0beebdf855a9b636102ae565b816014141561080457507f2b0f6fc0179fa65b6f73627c0e1e84c7374d2eaec44c9a48f2571393ea77bcbb6102ae565b816015141561083457507f16fdb637c2abf9c0f988dbf2fd64258c46fb6a273d537b2cf1603ea460b132796102ae565b816016141561086457507f21bbd7e944f6124dad4c376df9cc12e7ca66e47dff703ff7cedb1a454edcf0ff6102ae565b816017141561089457507f2784f8220b1c963e468f590f137baaa1625b3b92a27ad9b6e84eb0d3454d99626102ae565b81601814156108c457507f16ace1a65b7534142f8cc1aad810b3d6a7a74ca905d9c275cb98ba57e509fc106102ae565b81601914156108f457507f2328068c6a8c24265124debd8fe10d3f29f0665ea725a65e3638f6192a96a0136102ae565b81601a141561092457507f2ddb991be1f028022411b4c4d2c22043e5e751c120736f00adf54acab1c9ac146102ae565b81601b141561095457507f0113798410eaeb95056a464f70521eb58377c0155f2fe518a5594d38cc209cc06102ae565b81601c141561098457507f202d1ae61526f0d0d01ef80fb5d4055a7af45721024c2c24cffd6a3798f54d506102ae565b81601d14156109b457507f23ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f1876102ae565b81601e14156109e457507f1f15585f8947e378bcf8bd918716799da909acdb944c57150b1eb4565fda8aa06102ae565b81601f1415610a1457507f1eb064b21055ac6a350cf41eb30e4ce2cb19680217df3a243617c2838185ad066102ae565b60405162461bcd60e51b81526004016102f490610dc1565b7f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006020819052908152604090205481565b600254640100000000900463ffffffff1681565b6002805460009164010000000090910463ffffffff1690610adc907f000000000000000000000000000000000000000000000000000000000000000090610ee0565b63ffffffff168163ffffffff161415610b075760405162461bcd60e51b81526004016102f490610dee565b8083600080805b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff161015610bf057610b4d600286611006565b63ffffffff16610b8857839250610b698163ffffffff16610417565b63ffffffff821660009081526020819052604090208590559150610ba4565b63ffffffff811660009081526020819052604090205492508391505b610bcf7f000000000000000000000000000000000000000000000000000000000000000084846102b3565b9350610bdc600286610e77565b945080610be881610fe2565b915050610b0e565b50600254600090601e90610c0b9063ffffffff166001610e4f565b610c159190611006565b6002805463ffffffff191663ffffffff83169081179091556000908152600160208190526040909120869055909150610c4f908790610e4f565b6002805463ffffffff929092166401000000000267ffffffff00000000199092169190911790555093945050505050919050565b600060208284031215610c94578081fd5b5035919050565b600080600060608486031215610caf578182fd5b83356001600160a01b0381168114610cc5578283fd5b95602085013595506040909401359392505050565b600060208284031215610ceb578081fd5b5051919050565b60408101818360005b6002811015610d1a578151835260209283019290910190600101610cfb565b50505092915050565b901515815260200190565b90815260200190565b6001600160a01b0391909116815260200190565b6020808252818101527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c64604082015260600190565b60208082526021908201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6040820152601960fa1b606082015260800190565b602080825260139082015272496e646578206f7574206f6620626f756e647360681b604082015260600190565b60208082526030908201527f4d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c656160408201526f1d995cc818d85b88189948185919195960821b606082015260800190565b63ffffffff91909116815260200190565b600063ffffffff808316818516808303821115610e6e57610e6e611029565b01949350505050565b600063ffffffff80841680610e8e57610e8e61103f565b92169190910492915050565b80825b6001808611610eac5750610ed7565b818704821115610ebe57610ebe611029565b80861615610ecb57918102915b9490941c938002610e9d565b94509492505050565b600063ffffffff610ef681828616838616610efe565b949350505050565b600082610f0d575060016103d2565b81610f1a575060006103d2565b8160018114610f305760028114610f3a57610f67565b60019150506103d2565b60ff841115610f4b57610f4b611029565b6001841b915084821115610f6157610f61611029565b506103d2565b5060208310610133831016604e8410600b8410161715610f9a575081810a83811115610f9557610f95611029565b6103d2565b610fa78484846001610e9a565b808604821115610fb957610fb9611029565b02949350505050565b600063ffffffff821680610fd857610fd8611029565b6000190192915050565b600063ffffffff80831681811415610ffc57610ffc611029565b6001019392505050565b600063ffffffff8084168061101d5761101d61103f565b92169190910692915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220641e7a35d33e6f4d6e33c228b4cc677e3de3adac53fe62b1937395743db3400c64736f6c63430008000033";

type MerkleTreePoseidonMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleTreePoseidonMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleTreePoseidonMock__factory extends ContractFactory {
  constructor(...args: MerkleTreePoseidonMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _treeLevels: BigNumberish,
    _hasher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleTreePoseidonMock> {
    return super.deploy(
      _treeLevels,
      _hasher,
      overrides || {}
    ) as Promise<MerkleTreePoseidonMock>;
  }
  getDeployTransaction(
    _treeLevels: BigNumberish,
    _hasher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_treeLevels, _hasher, overrides || {});
  }
  attach(address: string): MerkleTreePoseidonMock {
    return super.attach(address) as MerkleTreePoseidonMock;
  }
  connect(signer: Signer): MerkleTreePoseidonMock__factory {
    return super.connect(signer) as MerkleTreePoseidonMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreePoseidonMockInterface {
    return new utils.Interface(_abi) as MerkleTreePoseidonMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleTreePoseidonMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MerkleTreePoseidonMock;
  }
}
