/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier6, Verifier6Interface } from "../Verifier6";

const _abi = [
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
        internalType: "uint256[13]",
        name: "input",
        type: "uint256[13]",
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
  "0x608060405234801561001057600080fd5b50611735806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f143a75e14610030575b600080fd5b61004361003e3660046114d8565b610057565b604051901515815260200160405180910390f35b6000610061611346565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600d8082526101c08201909352600092909182016101a08036833701905050905060005b600d811015610143578481600d811061010f5761010f6116d3565b6020020151828281518110610126576101266116d3565b60209081029190910101528061013b81611680565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae9190611632565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e65783878281518110610228576102286116d3565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd85608001518460016102969190611632565b815181106102a6576102a66116d3565b60200260200101518a85815181106102c0576102c06116d3565b6020026020010151610c91565b610d2d565b9150806102de81611680565b91505061020c565b5061030f818360800151600081518110610302576103026116d3565b6020026020010151610d2d565b90506103456103218660000151610dc5565b8660200151846000015185602001518587604001518b604001518960600151610e64565b610355576001935050505061035d565b600093505050505b92915050565b61036b611397565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f25b5d422bad2ceb45dd3602b7ff3c0fe7b3a94e6b9a2dfb64e9e0699ec87eaf88185019081527f2c945a98c51eedb658057bc863882cac27c6bef4a70b24c93ee2c1fcf8030174828401528152835180850185527f27373aef87fa7d189144f4e08add02caa83af809c45f83d45ce2924943dc932481527f098315ee910c999f60dfe06519a10ea7b3482c372723448b828ae2ba1ac00fa78185015281840152908401528151600e8082526101e08201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f01243ea923715f32560405b17d07e7b4d3e1272a41e20bf08086b473c84ed43481527f24732192d613028d7c2bda9e8be45681aabde6f93eaca6bc7809cf7d94a209d560208201529051805160009061067a5761067a6116d3565b602002602001018190525060405180604001604052807f0e2505115d1a667de740b90e4be93e14d7c136af8865797c819b1ee00d2a3e2181526020017f1f4c36e457b43417b3067a31d7c17b9b85a2b3cc60f535168bb1ffcadde24c5581525081608001516001815181106106f1576106f16116d3565b602002602001018190525060405180604001604052807e472f39239753f386760ba1bcfeefb56415ca6eebde1df84b375a33de5d394081526020017f0889876cea9a3ff62a838df05b3086c3c8d9cc96ff49470c73198f00ba2433118152508160800151600281518110610767576107676116d3565b602002602001018190525060405180604001604052807f080a541515221b106f4cf6bdd775705739e5da7a45327b0af6cd2afec07ca1ab81526020017f1a4d80cdebf6ccc7f3fbb0ecac14a05a589182ff1adbb17006d366a05c1e1de681525081608001516003815181106107de576107de6116d3565b602002602001018190525060405180604001604052807e3c9272b7907515de342651d5e9ac066ebc32b47ea064067839dc5285f3845781526020017f10afde3ae982b7e4340eed556ce6067c8554b6d6cabf06a9876affcdb53828978152508160800151600481518110610854576108546116d3565b602002602001018190525060405180604001604052807f1037f6e0380c06c61b5764077a3157d903ab0b41177704daed1ef74c3dc60f2181526020017f015bd1b6bc02d0435efb0fbb7a3a32f2b32f1c19081336e50d3e239b5b24c79681525081608001516005815181106108cb576108cb6116d3565b602002602001018190525060405180604001604052807f22f7cc53d40b5f815144453a275596223b0a2453536363538fda711cc16bd9dc81526020017f0be61368c006938fed8b87c31f64a651213c0e43c8490c17041bf850ae4752b18152508160800151600681518110610942576109426116d3565b602002602001018190525060405180604001604052807f1db9bc4b84a3ab3c3b26e0bd05fe8421d1a23eaaa5eabeccc523ad9645ac22ef81526020017f0f96764349ff9a910bf46cb5bae63c44bba8b068da303ed91bbf3dc68f38c34e81525081608001516007815181106109b9576109b96116d3565b602002602001018190525060405180604001604052807f2f193b00d01dfe33f0b5518a62c5ebd022dd8b29b033aeb75588840c7d1c41db81526020017f038baa4fc3c9560ddb02a6f788020ae5a5e5ad5e95c02d115d33912a343e855e8152508160800151600881518110610a3057610a306116d3565b602002602001018190525060405180604001604052807f11d98b1f4ce34eebbe244691837d308d34e82c01ac04e3816911dc6e513805e681526020017f0cb3e505f69549f728225f788e477d12f2e769e4dd34d6a74f0fda2c97cd98758152508160800151600981518110610aa757610aa76116d3565b602002602001018190525060405180604001604052807f0b69ddb2f104460149676c7495240f603cc53382e41344607696e7e1fcbf3b5881526020017f217820ba99c67926e21db17735319419bf1bc404181285c68d8c45bbec17e2718152508160800151600a81518110610b1e57610b1e6116d3565b602002602001018190525060405180604001604052807f14bea9f45c3282b5a433cff1d8d506478328bde667306a8dc46dcf2a4d3e541c81526020017f0c300802a036eb0822e3c2c63bfd8c4fabf7f3d5043db3b07415481e8e45b5278152508160800151600b81518110610b9557610b956116d3565b602002602001018190525060405180604001604052807f13ccf87edf0f8ba8f9c5358e6117ac2a721a50d2c1371627da23b3e4e1190cf281526020017f1e389b9fe7e6730b3d9eb86d655972e47001e7fb5a37f339fa3e199677f912028152508160800151600c81518110610c0c57610c0c6116d3565b602002602001018190525060405180604001604052807f1d0844415ee5a413b089d16328aa2a9092eb095e7741e1a976e93c3a4098e3c681526020017f0300b1652278f5a89336b8a5ca1424af89d59894ab0ab0740a2fbc8b9e531e958152508160800151600d81518110610c8357610c836116d3565b602002602001018190525090565b6040805180820190915260008082526020820152610cad6113e8565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610ce057610ce2565bfe5b5080610d255760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b6040805180820190915260008082526020820152610d49611406565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610ce0575080610d255760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610e0c57506020830151155b15610e2c5750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610e51919061169b565b610e5b9084611669565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610e7f57505060408051600480825260a0820190925291925060009190602082015b610ec9611424565b815260200190600190039081610ec15790505090508a82600081518110610ef257610ef26116d3565b60200260200101819052508882600181518110610f1157610f116116d3565b60200260200101819052508682600281518110610f3057610f306116d3565b60200260200101819052508482600381518110610f4f57610f4f6116d3565b60200260200101819052508981600081518110610f6e57610f6e6116d3565b60200260200101819052508781600181518110610f8d57610f8d6116d3565b60200260200101819052508581600281518110610fac57610fac6116d3565b60200260200101819052508381600381518110610fcb57610fcb6116d3565b6020026020010181905250610fe08282610fef565b9b9a5050505050505050505050565b6000815183511461103b5760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b8251600061104a82600661164a565b905060008167ffffffffffffffff811115611067576110676116e9565b604051908082528060200260200182016040528015611090578160200160208202803683370190505b50905060005b838110156112cb578681815181106110b0576110b06116d3565b602002602001015160000151828260066110ca919061164a565b6110d5906000611632565b815181106110e5576110e56116d3565b602002602001018181525050868181518110611103576111036116d3565b6020026020010151602001518282600661111d919061164a565b611128906001611632565b81518110611138576111386116d3565b602002602001018181525050858181518110611156576111566116d3565b602090810291909101015151518261116f83600661164a565b61117a906002611632565b8151811061118a5761118a6116d3565b6020026020010181815250508581815181106111a8576111a86116d3565b602090810291909101810151510151826111c383600661164a565b6111ce906003611632565b815181106111de576111de6116d3565b6020026020010181815250508581815181106111fc576111fc6116d3565b60200260200101516020015160006002811061121a5761121a6116d3565b60200201518261122b83600661164a565b611236906004611632565b81518110611246576112466116d3565b602002602001018181525050858181518110611264576112646116d3565b602002602001015160200151600160028110611282576112826116d3565b60200201518261129383600661164a565b61129e906005611632565b815181106112ae576112ae6116d3565b6020908102919091010152806112c381611680565b915050611096565b506112d4611444565b6000602082602086026020860160086107d05a03fa9050808015610ce05750806113385760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101611370611424565b8152602001611392604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c08301919091528152602081016113c1611424565b81526020016113ce611424565b81526020016113db611424565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280611437611462565b8152602001611392611462565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261149157600080fd5b6114996115c9565b8083856040860111156114ab57600080fd5b60005b60028110156114cd5781358452602093840193909101906001016114ae565b509095945050505050565b6000806000806102a08086880312156114f057600080fd5b6114fa8787611480565b9450604087605f88011261150d57600080fd5b6115156115c9565b8082890160c08a018b81111561152a57600080fd5b60005b6002811015611554576115408d84611480565b85526020909401939185019160010161152d565b508298506115628c82611480565b975050505050508661011f87011261157957600080fd5b611581611600565b80610100880189848a01111561159657600080fd5b600093505b600d8410156115bb5780358352600193909301926020928301920161159b565b509598949750929550505050565b6040805190810167ffffffffffffffff811182821017156115fa57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516101a0810167ffffffffffffffff811182821017156115fa57634e487b7160e01b600052604160045260246000fd5b60008219821115611645576116456116bd565b500190565b6000816000190483118215151615611664576116646116bd565b500290565b60008282101561167b5761167b6116bd565b500390565b6000600019821415611694576116946116bd565b5060010190565b6000826116b857634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122089d658f4ab5fed9eb934dbe3fffe29a2ebed83caa3e3d16a2e946bb6060fbefc64736f6c63430008050033";

export class Verifier6__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier6> {
    return super.deploy(overrides || {}) as Promise<Verifier6>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier6 {
    return super.attach(address) as Verifier6;
  }
  connect(signer: Signer): Verifier6__factory {
    return super.connect(signer) as Verifier6__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier6Interface {
    return new utils.Interface(_abi) as Verifier6Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier6 {
    return new Contract(address, _abi, signerOrProvider) as Verifier6;
  }
}
