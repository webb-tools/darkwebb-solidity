/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier2, Verifier2Interface } from "../Verifier2";

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
        internalType: "uint256[9]",
        name: "input",
        type: "uint256[9]",
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
  "0x608060405234801561001057600080fd5b50611781806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c542c93b14610030575b600080fd5b61004361003e366004611476565b610059565b6040516100509190611526565b60405180910390f35b600061006361126a565b60408051808201825287518152602080890151818301529083528151608081018352875151818401908152885183015160608301528152825180840184528883018051518252518301518184015281830152838201528151808301835286518152868201518183015283830152815160098082526101408201909352600092909182016101208036833701905050905060005b60098110156101615784816009811061011f57634e487b7160e01b600052603260045260246000fd5b602002015182828151811061014457634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610159816116e4565b9150506100f6565b5061016c818361018a565b61017b57600192505050610182565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816101b6610368565b9050806080015151855160016101cc9190611696565b146101f25760405162461bcd60e51b81526004016101e990611531565b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102dd578387828151811061023357634e487b7160e01b600052603260045260246000fd5b6020026020010151106102585760405162461bcd60e51b81526004016101e990611589565b6102c9826102c485608001518460016102719190611696565b8151811061028f57634e487b7160e01b600052603260045260246000fd5b60200260200101518a85815181106102b757634e487b7160e01b600052603260045260246000fd5b6020026020010151610b3c565b610ba7565b9150806102d5816116e4565b915050610209565b5061031481836080015160008151811061030757634e487b7160e01b600052603260045260246000fd5b6020026020010151610ba7565b905061034a6103268660000151610c0e565b8660200151846000015185602001518587604001518b604001518960600151610ca3565b61035a5760019350505050610362565b600093505050505b92915050565b61037061129c565b6040805180820182527f144eb091c16ba8b33a5dc5f67230ab8037fdbc24e8434d4d145e2e86090ac99181527f0bfd7814aef9058cc4afab73eac966a9926b1fb5bf44e869a5097bbd8f0136386020808301919091529083528151608080820184527f01be67363af78c013e78be060fbf5908f614ddf21b64fd550111a9e71aba7d388285019081527f094e0cbcf6c5d9edbb40880709beeea4955614321b1cf743cf9d35e37362e51c606080850191909152908352845180860186527f2413ad2058836d73d4737ee5494c7022c043320c664ddeb7e6214f40a2e40f6781527f0af19d8be2408e789be51a423fff1a7331e062709739f35aa6f8257f392b60d9818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f2cea5a5c569620a241f25e95f9c1f1f14ab7f374c660d7c423975a2a369935518185019081527f068d2090f5d65c502ddd68dec213303abc8fe9cf7a04a73dc018ca834204b40d828401528152835180850185527f2d18b67244aabda0e275dee778682c61caa387a19ac198154d83c41e11fb1a2b81527f03e477633e06e37bc0a989c7f17223fb6953dd9ff1ff3cbebf5b1999d0a7dd778185015281840152908401528151600a8082526101608201909352919082015b6105f46112e3565b8152602001906001900390816105ec57505060808201908152604080518082019091527f14d1f6ad7bafa9d1fe1a8427bba28b36bf7d21a74b7cd696ca22d25f4031003781527f161ca0b7a6d3e9309187a0bbe290fd830c76d5694c6dcacf2ff259e9c2f84ff260208201529051805160009061068157634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1db4481474890d2910860c48a2e5700e7116999df1f293ce38a470fb1ca1eb6b81526020017f22186c7a32707fdf7f85afc892dc39c744fba6c8220eb7ac0199f430b64a7e61815250816080015160018151811061070657634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0b4ff23728222481b5e70fc2651024f7cd38683e891d3abc712de80e568bfe0381526020017f2db6a571880cb8374536db88aab6e9cb9b27279f153847ff7e48f89c154b4d62815250816080015160028151811061078b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1c9be89629cedfa6151bdbd69cadc86fa282329a2d407fde4abe82baaa5466cf81526020017f23687e22627b76af969de1d9ef9f2a0749d726b58867e3e16d6127aec46f7cd1815250816080015160038151811061081057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0deeb218fd2166ffa07fc7082f2eebe22736d62788658d436b887a41b1c8575881526020017f03632373ef3c78afb74baf763e699407859ec25683c31f47921ea1a1606b4135815250816080015160048151811061089557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2a8936e1df9642008a77bdbddc08ad7e39446d2a1cc4b8630eac44a005b5c32481526020017f0540ff65e06b29bd2f0debda84e6166b606903542c8012215a26fca25326df2f815250816080015160058151811061091a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0959eceaf52f7b25d8dfe09fb7991403de31123b060b9a1f2277e3aa14e0076381526020017f22271626f34cef316a9aae90a38232f97e0b835a646cf7f23eb5bab28be1c726815250816080015160068151811061099f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0afb8ae4bffcce850b9dc1da5c6b2d8e61f8389ff3c500773f899322164711d081526020017f2926bd9aacc023d4d4d2b92cb3f412c831d4d477682e255576470e43edfdbdf48152508160800151600781518110610a2457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0d0642ecf049d78e8a7196fc8837c2988ebd84723745e6c9e01816276ad0c14381526020017f06e345b46afb38bdd6b59af7124e525c92eeba2fc21e72c621f298db8c6152eb8152508160800151600881518110610aa957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2c8a1b40eb72111c6b55f33c27e36468ecde1172ee211b9369b3e75fe51c7c9581526020017f24aac13b6904f1077a814f42a22efb3d952b472156d818c27f487a2437dfafb78152508160800151600981518110610b2e57634e487b7160e01b600052603260045260246000fd5b602002602001018190525090565b610b446112e3565b610b4c6112fd565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610b7f57610b81565bfe5b5080610b9f5760405162461bcd60e51b81526004016101e99061155d565b505092915050565b610baf6112e3565b610bb761131b565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610b7f575080610b9f5760405162461bcd60e51b81526004016101e9906115f0565b610c166112e3565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610c4957506020830151155b15610c695750506040805180820190915260008082526020820152610c9e565b604051806040016040528084600001518152602001828560200151610c8e91906116ff565b610c9890846116cd565b90529150505b919050565b60408051600480825260a08201909252600091829190816020015b610cc66112e3565b815260200190600190039081610cbe57505060408051600480825260a0820190925291925060009190602082015b610cfc611339565b815260200190600190039081610cf45790505090508a82600081518110610d3357634e487b7160e01b600052603260045260246000fd5b60200260200101819052508882600181518110610d6057634e487b7160e01b600052603260045260246000fd5b60200260200101819052508682600281518110610d8d57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508482600381518110610dba57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508981600081518110610de757634e487b7160e01b600052603260045260246000fd5b60200260200101819052508781600181518110610e1457634e487b7160e01b600052603260045260246000fd5b60200260200101819052508581600281518110610e4157634e487b7160e01b600052603260045260246000fd5b60200260200101819052508381600381518110610e6e57634e487b7160e01b600052603260045260246000fd5b6020026020010181905250610e838282610e92565b9b9a5050505050505050505050565b60008151835114610eb55760405162461bcd60e51b81526004016101e9906115c0565b82516000610ec48260066116ae565b905060008167ffffffffffffffff811115610eef57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610f18578160200160208202803683370190505b50905060005b8381101561121757868181518110610f4657634e487b7160e01b600052603260045260246000fd5b60200260200101516000015182826006610f6091906116ae565b610f6b906000611696565b81518110610f8957634e487b7160e01b600052603260045260246000fd5b602002602001018181525050868181518110610fb557634e487b7160e01b600052603260045260246000fd5b60200260200101516020015182826006610fcf91906116ae565b610fda906001611696565b81518110610ff857634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061102457634e487b7160e01b600052603260045260246000fd5b602090810291909101015151518261103d8360066116ae565b611048906002611696565b8151811061106657634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061109257634e487b7160e01b600052603260045260246000fd5b602090810291909101810151510151826110ad8360066116ae565b6110b8906003611696565b815181106110d657634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061110257634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160006002811061112e57634e487b7160e01b600052603260045260246000fd5b60200201518261113f8360066116ae565b61114a906004611696565b8151811061116857634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061119457634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516001600281106111c057634e487b7160e01b600052603260045260246000fd5b6020020151826111d18360066116ae565b6111dc906005611696565b815181106111fa57634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061120f816116e4565b915050610f1e565b50611220611359565b6000602082602086026020860160086107d05a03fa9050808015610b7f57508061125c5760405162461bcd60e51b81526004016101e99061161c565b505115159695505050505050565b604051806060016040528061127d6112e3565b815260200161128a611339565b81526020016112976112e3565b905290565b6040518060a001604052806112af6112e3565b81526020016112bc611339565b81526020016112c9611339565b81526020016112d6611339565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b604051806040016040528061134c611377565b8152602001611297611377565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126113a5578081fd5b6040516040810181811067ffffffffffffffff821117156113c8576113c8611735565b80604052508083856040860111156113de578384fd5b835b60028110156113ff5781358352602092830192909101906001016113e0565b509195945050505050565b600082601f83011261141a578081fd5b60405161012080820182811067ffffffffffffffff8211171561143f5761143f611735565b6040528184828101871015611452578485fd5b8492505b60098310156113ff57803582526001929092019160209182019101611456565b600080600080610220858703121561148c578384fd5b6114968686611395565b9350604086605f8701126114a8578384fd5b60026114bb6114b682611675565b61164b565b8083890160c08a018b8111156114cf578889fd5b885b858110156114f7576114e38d84611395565b8552602090940193918601916001016114d1565b508298506115058c82611395565b975050505050505061151b86610100870161140a565b905092959194509250565b901515815260200190565b6020808252601290820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604082015260600190565b6020808252601f908201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604082015260600190565b6020808252601690820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5859190b59985a5b195960721b604082015260600190565b6020808252601590820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604082015260600190565b60405181810167ffffffffffffffff8111828210171561166d5761166d611735565b604052919050565b600067ffffffffffffffff82111561168f5761168f611735565b5060200290565b600082198211156116a9576116a961171f565b500190565b60008160001904831182151516156116c8576116c861171f565b500290565b6000828210156116df576116df61171f565b500390565b60006000198214156116f8576116f861171f565b5060010190565b60008261171a57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220bf5c9d2a1913cdca60c33b03d9f821561df76554acf27148473b11376035832564736f6c63430008000033";

type Verifier2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Verifier2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier2__factory extends ContractFactory {
  constructor(...args: Verifier2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier2> {
    return super.deploy(overrides || {}) as Promise<Verifier2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier2 {
    return super.attach(address) as Verifier2;
  }
  connect(signer: Signer): Verifier2__factory {
    return super.connect(signer) as Verifier2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier2Interface {
    return new utils.Interface(_abi) as Verifier2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier2 {
    return new Contract(address, _abi, signerOrProvider) as Verifier2;
  }
}
