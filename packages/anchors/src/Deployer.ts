import { BigNumber, BigNumberish, Signer, ethers } from 'ethers';
import {
  VAnchor as VAnchorContract,
  VAnchor__factory,
  ChainalysisVAnchor as ChainalysisVAnchorContract,
  DeterministicDeployFactory as DeterministicDeployFactoryContract,
  IdentityVAnchor as IdentityVAnchorContract,
  VAnchorForest as VAnchorForestContract,
  VAnchorEncodeInputs__factory,
  TokenWrapper__factory,
} from '@webb-tools/contracts';
import {
  toHex,
  Keypair,
  toFixedHex,
  Utxo,
  MerkleTree,
  median,
  mean,
  max,
  min,
  randomBN,
  CircomProvingManager,
  ProvingManagerSetupInput,
  MerkleProof,
  UtxoGenInput,
  CircomUtxo,
  FIELD_SIZE,
  LeafIdentifier,
} from '@webb-tools/sdk-core';
import { hexToU8a, u8aToHex, getChainIdType, ZkComponents } from '@webb-tools/utils';

export class Deployer {
  signer: ethers.Signer;
  contract: DeterministicDeployFactoryContract;

  constructor(contract: DeterministicDeployFactoryContract) {
    this.contract = contract;
  }
  get address(): string {
    return this.contract.address;
  }

  public static encode(types, values) {
    const abiCoder = ethers.utils.defaultAbiCoder;
    const encodedParams = abiCoder.encode(types, values);
    return encodedParams.slice(2);
  }

  public static create2Address(factoryAddress, saltHex, initCode) {
    const create2Addr = ethers.utils.getCreate2Address(
      factoryAddress,
      saltHex,
      ethers.utils.keccak256(initCode)
    );
    return create2Addr;
  }
  public async deploy(
    factory: any,
    saltHex: string,
    signer: Signer,
    libraryAddresses?: any,
    argTypes?: string[],
    args?: any[]
  ): Promise<{ contract; receipt }> {
    let verifierFactory;
    if (libraryAddresses === undefined) {
      verifierFactory = new factory(signer);
    } else {
      verifierFactory = new factory(libraryAddresses, signer);
    }
    const verifierBytecode = verifierFactory['bytecode'];
    let initCode: string;
    if (argTypes && args) {
      const encodedParams = Deployer.encode(argTypes, args);
      initCode = verifierBytecode + encodedParams;
    } else {
      initCode = verifierBytecode + Deployer.encode([], []);
    }
    // console.log('typeof initCode', typeof initCode);
    const verifierCreate2Addr = Deployer.create2Address(this.contract.address, saltHex, initCode);
    const tx = await this.contract.deploy(initCode, saltHex);
    const receipt = await tx.wait();
    const deployEventIdx = receipt.events.length - 1;
    const deployEvent = receipt.events[deployEventIdx];
    if (deployEvent.args[0] !== verifierCreate2Addr) {
      throw new Error('create2 address mismatch');
    }
    const contract = await verifierFactory.attach(deployEvent.args[0]);
    return { contract, receipt };
  }
  public async deployInitCode(
    saltHex: string,
    signer: Signer,
    initCode: any
  ): Promise<{ address }> {
    // console.log('typeof initCode', typeof initCode);
    const verifierCreate2Addr = Deployer.create2Address(this.contract.address, saltHex, initCode);
    const tx = await this.contract.deploy(initCode, saltHex);
    const receipt = await tx.wait();
    const deployEventIdx = receipt.events.length - 1;
    const deployEvent = receipt.events[deployEventIdx];
    if (deployEvent.args[0] !== verifierCreate2Addr) {
      throw new Error('create2 address mismatch');
    }
    let address = deployEvent.args[0];
    return { address };
  }
}
export default Deployer;
