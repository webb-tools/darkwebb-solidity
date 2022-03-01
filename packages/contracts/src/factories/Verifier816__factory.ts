/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier816, Verifier816Interface } from "../Verifier816";

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
        internalType: "uint256[29]",
        name: "input",
        type: "uint256[29]",
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
  "0x608060405234801561001057600080fd5b50611ea7806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806354b8a14614610030575b600080fd5b61004361003e366004611c4a565b610057565b604051901515815260200160405180910390f35b6000610061611ab8565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151601d8082526103c08201909352600092909182016103a08036833701905050905060005b601d811015610143578481601d811061010f5761010f611e45565b602002015182828151811061012657610126611e45565b60209081029190910101528061013b81611df2565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae9190611da4565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e6578387828151811061022857610228611e45565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd85608001518460016102969190611da4565b815181106102a6576102a6611e45565b60200260200101518a85815181106102c0576102c0611e45565b6020026020010151611403565b61149f565b9150806102de81611df2565b91505061020c565b5061030f81836080015160008151811061030257610302611e45565b602002602001015161149f565b90506103456103218660000151611537565b8660200151846000015185602001518587604001518b6040015189606001516115d6565b610355576001935050505061035d565b600093505050505b92915050565b61036b611b09565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f1b9e37fba4b6d3bfbb071410698569b82360f854fc10da59b30ddb02fa2aa8278185019081527f169ab0f152ace0e687f4c7ec7625f4bc897e6fef19dba80fef3a1031ea749cc3828401528152835180850185527f28a20fb694c1ab8bbf16f5311abf82627835bdfc957e0cbc7bd477f857810dc681527f017af23ebb3020b0ff226e3ca7383b85dc5ef28e29ca118b08cb70f91d6128208185015281840152908401528151601e8082526103e08201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f1851bd15e91a8cea5cb6b28d5a0b86505ca6c8625e4ca1d2f6f4c729b8d2b76581527f12cb87cf82e4ef2de353629479841752fb4505493f6cf9fb97f29c06a41695eb60208201529051805160009061067a5761067a611e45565b602002602001018190525060405180604001604052807f05daeb2f3c2f9509464e97265234e4c6d580b44c69ef2e2d1e39b851ab1dab7d81526020017f2ff63441961c69acdf3d809014aa7ec8a80a9818d45512c50bd8787063dddd4081525081608001516001815181106106f1576106f1611e45565b602002602001018190525060405180604001604052807f035c7eedc89d914b9e7c25e70a9dc2e03a69594b952b2c598958c1e5e7892fcb81526020017f27a5b2ab4a068405152c4376fe523046b84d00ea8dee4b03fed8b1318caae2a7815250816080015160028151811061076857610768611e45565b602002602001018190525060405180604001604052807f28e03c161a9a368c58d4c1ba72f6b24a71d06da0c608354116fcd5f6bd03dbcc81526020017f2db9b289f5567b1fc40a34181bc0049dc5a42155774df11a72125da6b1e9810681525081608001516003815181106107df576107df611e45565b602002602001018190525060405180604001604052807f18b99028d938522e366461425399d2a934a7bcee90e86264bdcfb4bd5270ae0b81526020017f29292edc75d47b2a0a60af173d081afb059e8cee5a424d6ff692c9d21419e9f8815250816080015160048151811061085657610856611e45565b602002602001018190525060405180604001604052807f0d053ea5aed9302e084453cc3b286c15b37b7f28d8c691cf718722274a23e22481526020017f0efa296bc10dad0eaa9442d636073b4e3cd1ce079f9b9b18744003abe5ebc1b381525081608001516005815181106108cd576108cd611e45565b602002602001018190525060405180604001604052807f2918d19659d1ef30eb27e16e11ccc9b7ae5bcd33a43cd7c042e76c4ec6a0889681526020017f22daf76f2fdca5085e2b5912d3309db8c829f17986e305ff59b166693b4aaeff815250816080015160068151811061094457610944611e45565b602002602001018190525060405180604001604052807f0f5055e461258413c426b3d13c24b1c48b4f4dfc0ea9a2e3e7f02f9ff08b78ff81526020017f218d97309d01a8be356efd5845cf2bc63177e5d0f1565c907a4316594864460481525081608001516007815181106109bb576109bb611e45565b602002602001018190525060405180604001604052807f23ca19dc15cfa927af717c6a4f710cd627b57efd0af35987976c1147580320fe81526020017f1b0346f44c2d4c04fdd137abd6803a146fd810d567d4422b6902149796a5470b8152508160800151600881518110610a3257610a32611e45565b602002602001018190525060405180604001604052807f2734687af85bd0a07a58e5405e8e1cf78ea4bdc6067c9174663c562999cc6c5781526020017f09dd3b7a5bad830112fb1074307605f156ac82aae0d714c9b8f8518c8f78c78e8152508160800151600981518110610aa957610aa9611e45565b602002602001018190525060405180604001604052807f11dca53b6af0aec9170f9c7bbd04b2b3ae50436e589f9c5e3594a56100098a7181526020017f1b6ad2d08009a2a88823c0c87342bba710cbad7e2642f92b5d8a559b389daac48152508160800151600a81518110610b2057610b20611e45565b602002602001018190525060405180604001604052807f3032151509479f22c426c368b5e4f7824a59295b12ef05f1ae085735081b439081526020017f197be0915d5161b1c591cc3b23d0d598a27345edea15bb211240026fd94a4df98152508160800151600b81518110610b9757610b97611e45565b602002602001018190525060405180604001604052807f18ef3ced4b9617e97a05d0f17e3aed14f713a502e3a7f6582e110d4290d9727081526020017f1a859eebd3580224fbb7335193222f96002cfc334fc400134a988a720ed92a818152508160800151600c81518110610c0e57610c0e611e45565b602002602001018190525060405180604001604052807f2a118704d101e582222bae1a1a40a0956b3e947b7acb4f2236d8af826ffece2681526020017f0f46536c2a9c6466c9b46251a22d64de944fca479792a5f8a162f195a284d86f8152508160800151600d81518110610c8557610c85611e45565b602002602001018190525060405180604001604052807f1adc84449785b3e304f41ca703294333cf712a191b54fc0638f3213712282d8581526020017f2c148c5d2a6b1f38f2a901b004d7a6593c030e753e9c059d838cf5d2b04c5fbc8152508160800151600e81518110610cfc57610cfc611e45565b602002602001018190525060405180604001604052807f1136986aa7221711bf254adf3bb414ff4cca84649a8164618ccdf5cd8f46592a81526020017f026472f0c7a3c1f17059d5270bf0e12d1249cd5aad5ca7223c4b2b98bb05990d8152508160800151600f81518110610d7357610d73611e45565b602002602001018190525060405180604001604052807f206048cc511e8a63f41a1e47f6c5b0166475bfdbadceee70b2732823fc8c23fe81526020017f11998f7fa38f2a20211e8785618ab2b5906d6609a2b5125847495cf52c3604968152508160800151601081518110610dea57610dea611e45565b602002602001018190525060405180604001604052807f2317d60911589bfe8e96ee2f7aa70595513aa6a7e20f78708109058f55a6701881526020017f0e42a2b227a404c821a31cbe92b802acef7ee7988bd106ea77a99ada398a7bcc8152508160800151601181518110610e6157610e61611e45565b602002602001018190525060405180604001604052807f2747cf37300716b6640b5cad53fca6336da93b96bc64ef0d4b25f598328b79f581526020017f2d2404e92345b988b34a8a9c4c516e7f4641bf57f4a55913dd64133d439de8ff8152508160800151601281518110610ed857610ed8611e45565b602002602001018190525060405180604001604052807f0e26ea35ae564262c7a4b4af4b9c5d4c085ec6d76068f5246440c65bc5d3d7f181526020017f27376dff9d6e2d07e54480b298b3366c3dec98a65676b15f35c6f9d47b70c3358152508160800151601381518110610f4f57610f4f611e45565b602002602001018190525060405180604001604052807f0f7d7543a26decd4c2aa6f87a86a008a61b52d75508a8b13b2c9ae875be0d5be81526020017f1c3a58a036132b455a4684a832fa8de226028a988dffbeb139a10fad16af607e8152508160800151601481518110610fc657610fc6611e45565b602002602001018190525060405180604001604052807f1876abaafef9878c2615394d6cb0c567ed4d4d62e14937d7e052c92f0149de8e81526020017f2b0d810717fafb522a80d898c48cf5fb9df2256f6e1c97cab8699bd35bfc94c4815250816080015160158151811061103d5761103d611e45565b602002602001018190525060405180604001604052807f1a4648b46f459857240aa448e4500c225a479da5658a89fcb5e0c475c17177d981526020017f07f2b662c5a3dc3fba21a071ac60fe0f28918e8288ca88872a1de43fe6ef1e0b81525081608001516016815181106110b4576110b4611e45565b602002602001018190525060405180604001604052807f07fc6576f413f84d66ae0dada0fdd1931c4b4e2b55c92f039ecec7d9e94f5cd981526020017f1d4ae2bd8da6fa558149493eb6c09435e1e71379ca6b776c4148a996e9e13591815250816080015160178151811061112b5761112b611e45565b602002602001018190525060405180604001604052807f2ea5caab15338ba7eaf3148639353de8841cf4f3eb14c4edd92fbda258fb6a5981526020017f1358cd2b3b31313f5960c8d4851057b16e8721048384b434ec583d7676f8953981525081608001516018815181106111a2576111a2611e45565b602002602001018190525060405180604001604052807f1d7008b4e5a883fc5a378cccd3acb18839d3b091e4f071dd9c89dc264f320e0881526020017f0e42873590d36fb10f2a39b1200af274958ff54206c3bb1f70400e3fe4beee7b815250816080015160198151811061121957611219611e45565b602002602001018190525060405180604001604052807f1562d16cdc9410e83282098486120f4862205a028355ce2a2c73230ef0deddea81526020017f27a67c124058158cc15ccfed04bb3dd13de0b615913b56ed883d48493375e2b98152508160800151601a8151811061129057611290611e45565b602002602001018190525060405180604001604052807f0a6d6031179b4e1409347e0e6091c27ec1a53b154336ec46aa4b117ad41251a581526020017f12301703ad5838ce778d184c0cae152ddb75c82542c02bd554f66a63bcddf66a8152508160800151601b8151811061130757611307611e45565b602002602001018190525060405180604001604052807f0803b9bcd3919c096d143ee0304bfdf08002ec37b366f1b071d4a569819f369a81526020017f0a4093fc51b0dea27e7180e5e422964987eabac52e555d73e20f760d5bfaa08c8152508160800151601c8151811061137e5761137e611e45565b602002602001018190525060405180604001604052807f194a249e5a3147f9350140c4e2b6dc1a936ea1c1b501f0fd4a2cf8803973e52981526020017f201117d8d02c947afcd4aa92b9d8fabf42938e07418ddd896a980a00ac07429f8152508160800151601d815181106113f5576113f5611e45565b602002602001018190525090565b604080518082019091526000808252602082015261141f611b5a565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561145257611454565bfe5b50806114975760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b60408051808201909152600080825260208201526114bb611b78565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080156114525750806114975760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479015801561157e57506020830151155b1561159e5750506040805180820190915260008082526020820152919050565b6040518060400160405280846000015181526020018285602001516115c39190611e0d565b6115cd9084611ddb565b90529392505050565b60408051600480825260a08201909252600091829190816020015b60408051808201909152600080825260208201528152602001906001900390816115f157505060408051600480825260a0820190925291925060009190602082015b61163b611b96565b8152602001906001900390816116335790505090508a8260008151811061166457611664611e45565b6020026020010181905250888260018151811061168357611683611e45565b602002602001018190525086826002815181106116a2576116a2611e45565b602002602001018190525084826003815181106116c1576116c1611e45565b602002602001018190525089816000815181106116e0576116e0611e45565b602002602001018190525087816001815181106116ff576116ff611e45565b6020026020010181905250858160028151811061171e5761171e611e45565b6020026020010181905250838160038151811061173d5761173d611e45565b60200260200101819052506117528282611761565b9b9a5050505050505050505050565b600081518351146117ad5760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b825160006117bc826006611dbc565b905060008167ffffffffffffffff8111156117d9576117d9611e5b565b604051908082528060200260200182016040528015611802578160200160208202803683370190505b50905060005b83811015611a3d5786818151811061182257611822611e45565b6020026020010151600001518282600661183c9190611dbc565b611847906000611da4565b8151811061185757611857611e45565b60200260200101818152505086818151811061187557611875611e45565b6020026020010151602001518282600661188f9190611dbc565b61189a906001611da4565b815181106118aa576118aa611e45565b6020026020010181815250508581815181106118c8576118c8611e45565b60209081029190910101515151826118e1836006611dbc565b6118ec906002611da4565b815181106118fc576118fc611e45565b60200260200101818152505085818151811061191a5761191a611e45565b60209081029190910181015151015182611935836006611dbc565b611940906003611da4565b8151811061195057611950611e45565b60200260200101818152505085818151811061196e5761196e611e45565b60200260200101516020015160006002811061198c5761198c611e45565b60200201518261199d836006611dbc565b6119a8906004611da4565b815181106119b8576119b8611e45565b6020026020010181815250508581815181106119d6576119d6611e45565b6020026020010151602001516001600281106119f4576119f4611e45565b602002015182611a05836006611dbc565b611a10906005611da4565b81518110611a2057611a20611e45565b602090810291909101015280611a3581611df2565b915050611808565b50611a46611bb6565b6000602082602086026020860160086107d05a03fa9050808015611452575080611aaa5760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101611ae2611b96565b8152602001611b04604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611b33611b96565b8152602001611b40611b96565b8152602001611b4d611b96565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280611ba9611bd4565b8152602001611b04611bd4565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611c0357600080fd5b611c0b611d3b565b808385604086011115611c1d57600080fd5b60005b6002811015611c3f578135845260209384019390910190600101611c20565b509095945050505050565b6000806000806104a0808688031215611c6257600080fd5b611c6c8787611bf2565b9450604087605f880112611c7f57600080fd5b611c87611d3b565b8082890160c08a018b811115611c9c57600080fd5b60005b6002811015611cc657611cb28d84611bf2565b855260209094019391850191600101611c9f565b50829850611cd48c82611bf2565b975050505050508661011f870112611ceb57600080fd5b611cf3611d72565b80610100880189848a011115611d0857600080fd5b600093505b601d841015611d2d57803583526001939093019260209283019201611d0d565b509598949750929550505050565b6040805190810167ffffffffffffffff81118282101715611d6c57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516103a0810167ffffffffffffffff81118282101715611d6c57634e487b7160e01b600052604160045260246000fd5b60008219821115611db757611db7611e2f565b500190565b6000816000190483118215151615611dd657611dd6611e2f565b500290565b600082821015611ded57611ded611e2f565b500390565b6000600019821415611e0657611e06611e2f565b5060010190565b600082611e2a57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212201e2b2e0c90bfc462a3c105fbcfd71271cab6908bb11fdfbd38043ae4acc6ce1b64736f6c63430008050033";

export class Verifier816__factory extends ContractFactory {
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
  ): Promise<Verifier816> {
    return super.deploy(overrides || {}) as Promise<Verifier816>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier816 {
    return super.attach(address) as Verifier816;
  }
  connect(signer: Signer): Verifier816__factory {
    return super.connect(signer) as Verifier816__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier816Interface {
    return new utils.Interface(_abi) as Verifier816Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier816 {
    return new Contract(address, _abi, signerOrProvider) as Verifier816;
  }
}
