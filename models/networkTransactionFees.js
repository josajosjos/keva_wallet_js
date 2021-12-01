const BlueElectrum = require('../BlueElectrum');

export const NetworkTransactionFeeType = Object.freeze({
  FAST: 'Fast',
  MEDIUM: 'MEDIUM',
  SLOW: 'SLOW',
  CUSTOM: 'CUSTOM',
});

export class NetworkTransactionFee {
  static StorageKey = 'NetworkTransactionFee';

  constructor(fastestFee = 1, mediumFee = 1, slowFee = 1) {
    this.fastestFee = fastestFee;
    this.mediumFee = mediumFee;
    this.slowFee = slowFee;
  }
}

const FALLBACK_FAST_FEE     = 0.02;
const FALLBACK_MEDIUMN_FEE  = 0.01;
const FALLBACK_SLOW_FEE     = 0.005;

export const FALLBACK_DATA_PER_BYTE_FEE = 2000;

export default class NetworkTransactionFees {
  static recommendedFees() {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await BlueElectrum.estimateFees();
        if (typeof response === 'object') {
          const networkFee = new NetworkTransactionFee(response.fast, response.medium, response.slow);
          resolve(networkFee);
        } else {
          const networkFee = new NetworkTransactionFee(1, 1, 1);
          reject(networkFee);
        }
      } catch (err) {
        console.warn(err);
        const networkFee = new NetworkTransactionFee(1, 1, 1);
        reject(networkFee);
      }
    });
  }
}
