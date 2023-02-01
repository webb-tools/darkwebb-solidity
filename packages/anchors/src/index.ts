import { IVariableAnchorExtData, IVariableAnchorPublicInputs } from '@webb-tools/interfaces';
import { BigNumber } from 'ethers';

export { AnchorHandler } from './AnchorHandler';
export { VAnchor } from './VAnchor';
export { VAnchorForest } from './VAnchorForest';
export { ChainalysisVAnchor } from './ChainalysisVAnchor';
export { IdentityVAnchor } from './IdentityVAnchor';
export { OpenVAnchor } from './OpenVAnchor';
export { PoseidonHasher } from './PoseidonHasher';
export { Deployer } from './Deployer';
export { BatchTreeUpdater } from './BatchTreeUpdater';

export interface TransactionOptions {
  relaying: boolean;
  gasLimit: string | number;
  gasPrice: string | number;
}

export interface SetupTransactionResult {
  extAmount: BigNumber;
  extData: IVariableAnchorExtData;
  publicInputs: IVariableAnchorPublicInputs;
}
