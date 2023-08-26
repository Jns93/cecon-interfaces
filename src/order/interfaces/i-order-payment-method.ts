import { PaymentTypeEnum } from '../../general';
import { IOrderPaymentCard } from './i-order-payment-card';
import { IOrderPaymentCash } from './i-order-payment-cash';
import { IOrderPaymentPix } from './i-order-payment-pix';
import { IOrderPaymentWallet } from './i-order-payment-wallet';

export interface IOrderPaymentMethod {
    // #region Properties (11)

    card?: IOrderPaymentCard;
    cash?: IOrderPaymentCash;
    code: string;
    currency: 'BRL';
    id: string;
    method: PaymentTypeEnum;
    pix?: IOrderPaymentPix;
    prepaid: boolean;
    type: 'ONLINE' | 'OFFLINE';
    value: number;
    wallet?: IOrderPaymentWallet;

    // #endregion Properties (11)
}
