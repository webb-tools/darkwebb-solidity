/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier82, Verifier82Interface } from "../Verifier82";

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
        internalType: "uint256[15]",
        name: "input",
        type: "uint256[15]",
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
  "0x608060405234801561001057600080fd5b50611825806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f054a9a314610030575b600080fd5b61004361003e3660046115c8565b610057565b604051901515815260200160405180910390f35b6000610061611436565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600f8082526102008201909352600092909182016101e08036833701905050905060005b600f811015610143578481600f811061010f5761010f6117c3565b6020020151828281518110610126576101266117c3565b60209081029190910101528061013b81611770565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae9190611722565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e65783878281518110610228576102286117c3565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd85608001518460016102969190611722565b815181106102a6576102a66117c3565b60200260200101518a85815181106102c0576102c06117c3565b6020026020010151610d81565b610e1d565b9150806102de81611770565b91505061020c565b5061030f818360800151600081518110610302576103026117c3565b6020026020010151610e1d565b90506103456103218660000151610eb5565b8660200151846000015185602001518587604001518b604001518960600151610f54565b610355576001935050505061035d565b600093505050505b92915050565b61036b611487565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f092de49fb6057d1c083c1408c3a9b2ee3bb55c72cdd7845f01b414223995c8f38185019081527f28d4dba509217583f4ea8f776e64aa655382bd4d8d3728502ea24be0c08fc6f6828401528152835180850185527f08c2405d03ab472f67e25022552063509e27f09b6a27f65448a17a61abd82e5781527f0bf07d2e3e6495de6b909d0821ed008f6431e837cf7bcb67902c06d03864a058818501528184015290840152815160108082526102208201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f1ea477f55cf1c468ddd8cfd842a2c2136b9ea3248930d6b201f33555c137ed5481527f1e79864123b61ee3fc32c06ea312019e3ccfd732076e1d9ac86c66494151867960208201529051805160009061067a5761067a6117c3565b602002602001018190525060405180604001604052807f017df0476fd0c627349a0f3572bf6dd7d7dfb693fd09670c57fe050a1f7e627481526020017f173cdc76dfe7927b84575ea08c7f72edc22a125779aed0d6556409a95c06426a81525081608001516001815181106106f1576106f16117c3565b602002602001018190525060405180604001604052807f28bf112c79aecb43fe6563690d06e667f0f6fe6b3415446188bd19f622e7ce8481526020017f15001b4ebd18771c5835bbbcf62ffed664cf0b0c88a51f0e65dd095679e74e298152508160800151600281518110610768576107686117c3565b602002602001018190525060405180604001604052807f214fa59ffef25d02f5ac6ced0e984704730be69d0afcba853f9ee85d8fe9790681526020017f10186de62bb2f20729443503ede6597e0930c0ab6fca3e233f06cc3b7227ca0381525081608001516003815181106107df576107df6117c3565b602002602001018190525060405180604001604052807f1f772f4f38ae2296248068b4b7c9f943471520263e8b081f5aff8f72e6dfabeb81526020017f0360418675283d638739dfa23822fa9637b6f895178ed53e0c54ec5a7fc1f51b8152508160800151600481518110610856576108566117c3565b602002602001018190525060405180604001604052807f1e839f2d1584eee2c9d6b33ecdc1713149bcd0dfcbb803b23d38c64bb1a2a0ed81526020017f2d61bb8e5a44dbeae6c3e9d5172a932dfe6e663d04e5b4b92bdea3a5607c795c81525081608001516005815181106108cd576108cd6117c3565b602002602001018190525060405180604001604052807f246057a8f5b65fe7e0005e4d9af0b724a7a1ceb31d77d6355ac534af295e079281526020017f28790c2a54659f22d8a466e47de6205e9cbd5a09a08c8e7e817a9d3f672036d38152508160800151600681518110610944576109446117c3565b602002602001018190525060405180604001604052807f0714eafd75178081d9ed7eb76aa0d9f12c59df6c9dfb1cabc496ff6077ab48e781526020017f2322c0cab9cb965abe7a0bc36e46159c75f22c534019dcfd66d6a8311f1f45e681525081608001516007815181106109bb576109bb6117c3565b602002602001018190525060405180604001604052807f2e0b541820b9f7235be443292d00415409bf68cacce7ccc0b574ef7f9c9ec55481526020017f28118ebb382a9c7391d201b1b33e0e4931751625e6f358551bff3c7a20ad8bc18152508160800151600881518110610a3257610a326117c3565b602002602001018190525060405180604001604052807f2e56ea7abb12b56ab16f66765d82e0b38cc654cca13da1e84e5d1b2e388ad8ef81526020017f1613cb034b21d99575b6f4e7890e8c8c2d31cbc8407b14a9e1157db7d46220a48152508160800151600981518110610aa957610aa96117c3565b602002602001018190525060405180604001604052807f0b3575b378885d5b8418cf8fcd4313886f018a4d8c9e70fc99ba11c5c3504a9d81526020017f171a51f2bfc357b4ae4831d095272b29abebbfcebe758d6d80d081dbc01c9e358152508160800151600a81518110610b2057610b206117c3565b602002602001018190525060405180604001604052807f0c1860c863213e4415eec532e5e82609605bf572a5e5845ce7dcf7d46db9e34481526020017f1b2b83d19cfef669fea530f9f9715cfe8ae2a488c9882bedf24988b8c6d70bc18152508160800151600b81518110610b9757610b976117c3565b602002602001018190525060405180604001604052807f2344bcb194a6d38229ff3f54d4efc3ce69cf4d0ce23c8dfdc1eacd5edd9b168481526020017f15e1fd1eeaecc607703fab00ba2d7a62c98a0b3a7fa277f11be16a9d5135ce238152508160800151600c81518110610c0e57610c0e6117c3565b602002602001018190525060405180604001604052807f2cb31ffc94a275a606628db2dd19afdfc77270fdcc5a791e2cb40f317fcbf52081526020017f0645ecad438db7b1eb79e27f7301e591ffafb6a2b0b1ada87f1088f85a980ab18152508160800151600d81518110610c8557610c856117c3565b602002602001018190525060405180604001604052807f1faac7d896e2e0c3c5cdee743ef75c2b89524d23ef14f0f9693204b2a22b506081526020017f1649b99aa03e6cb12605b50002571b5e1fcf9513fa79a42232bf4ef4a016ebe88152508160800151600e81518110610cfc57610cfc6117c3565b602002602001018190525060405180604001604052807f24b9f0fd46c7e96555da54ea56ed22caea03cbb65ac45ee13b47cf962241374081526020017f0d4c0c81ad0c637a4c82eb9633ecba767b4ec3cd6fee8846893d556400be971e8152508160800151600f81518110610d7357610d736117c3565b602002602001018190525090565b6040805180820190915260008082526020820152610d9d6114d8565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610dd057610dd2565bfe5b5080610e155760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b6040805180820190915260008082526020820152610e396114f6565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610dd0575080610e155760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610efc57506020830151155b15610f1c5750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610f41919061178b565b610f4b9084611759565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610f6f57505060408051600480825260a0820190925291925060009190602082015b610fb9611514565b815260200190600190039081610fb15790505090508a82600081518110610fe257610fe26117c3565b60200260200101819052508882600181518110611001576110016117c3565b60200260200101819052508682600281518110611020576110206117c3565b6020026020010181905250848260038151811061103f5761103f6117c3565b6020026020010181905250898160008151811061105e5761105e6117c3565b6020026020010181905250878160018151811061107d5761107d6117c3565b6020026020010181905250858160028151811061109c5761109c6117c3565b602002602001018190525083816003815181106110bb576110bb6117c3565b60200260200101819052506110d082826110df565b9b9a5050505050505050505050565b6000815183511461112b5760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b8251600061113a82600661173a565b905060008167ffffffffffffffff811115611157576111576117d9565b604051908082528060200260200182016040528015611180578160200160208202803683370190505b50905060005b838110156113bb578681815181106111a0576111a06117c3565b602002602001015160000151828260066111ba919061173a565b6111c5906000611722565b815181106111d5576111d56117c3565b6020026020010181815250508681815181106111f3576111f36117c3565b6020026020010151602001518282600661120d919061173a565b611218906001611722565b81518110611228576112286117c3565b602002602001018181525050858181518110611246576112466117c3565b602090810291909101015151518261125f83600661173a565b61126a906002611722565b8151811061127a5761127a6117c3565b602002602001018181525050858181518110611298576112986117c3565b602090810291909101810151510151826112b383600661173a565b6112be906003611722565b815181106112ce576112ce6117c3565b6020026020010181815250508581815181106112ec576112ec6117c3565b60200260200101516020015160006002811061130a5761130a6117c3565b60200201518261131b83600661173a565b611326906004611722565b81518110611336576113366117c3565b602002602001018181525050858181518110611354576113546117c3565b602002602001015160200151600160028110611372576113726117c3565b60200201518261138383600661173a565b61138e906005611722565b8151811061139e5761139e6117c3565b6020908102919091010152806113b381611770565b915050611186565b506113c4611534565b6000602082602086026020860160086107d05a03fa9050808015610dd05750806114285760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101611460611514565b8152602001611482604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c08301919091528152602081016114b1611514565b81526020016114be611514565b81526020016114cb611514565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280611527611552565b8152602001611482611552565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261158157600080fd5b6115896116b9565b80838560408601111561159b57600080fd5b60005b60028110156115bd57813584526020938401939091019060010161159e565b509095945050505050565b6000806000806102e08086880312156115e057600080fd5b6115ea8787611570565b9450604087605f8801126115fd57600080fd5b6116056116b9565b8082890160c08a018b81111561161a57600080fd5b60005b6002811015611644576116308d84611570565b85526020909401939185019160010161161d565b508298506116528c82611570565b975050505050508661011f87011261166957600080fd5b6116716116f0565b80610100880189848a01111561168657600080fd5b600093505b600f8410156116ab5780358352600193909301926020928301920161168b565b509598949750929550505050565b6040805190810167ffffffffffffffff811182821017156116ea57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516101e0810167ffffffffffffffff811182821017156116ea57634e487b7160e01b600052604160045260246000fd5b60008219821115611735576117356117ad565b500190565b6000816000190483118215151615611754576117546117ad565b500290565b60008282101561176b5761176b6117ad565b500390565b6000600019821415611784576117846117ad565b5060010190565b6000826117a857634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e9a9279b7b0e80cd37f7e6d27958c041749bfa484f6dab6aae570dbef8349f6e64736f6c63430008050033";

export class Verifier82__factory extends ContractFactory {
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
  ): Promise<Verifier82> {
    return super.deploy(overrides || {}) as Promise<Verifier82>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier82 {
    return super.attach(address) as Verifier82;
  }
  connect(signer: Signer): Verifier82__factory {
    return super.connect(signer) as Verifier82__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier82Interface {
    return new utils.Interface(_abi) as Verifier82Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier82 {
    return new Contract(address, _abi, signerOrProvider) as Verifier82;
  }
}
