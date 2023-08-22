// src/models/base.entity.ts

import { IPaymentTokenData } from './i-payment-tokens-data';


export interface IPaymentToken {
    // #region Properties (5)

    customerId: string;
    data: IPaymentTokenData;
    description: string;
    id: string;
    itemType: string;

    // #endregion Properties (5)
}
