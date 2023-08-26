import { PaymentTypeEnum } from '../../general';
import { OrderPaymentCardEntity } from './order-payment-card.entity';
import { OrderPaymentCashEntity } from './order-payment-cash.entity';
import { OrderPaymentPixEntity } from './order-payment-pix.entity';
import { OrderPaymentWalletEntity } from './order-payment-wallet.entity';

export class OrderPaymentMethodEntity {
    // #region Properties (11)

    card?: OrderPaymentCardEntity | null = null;
    cash?: OrderPaymentCashEntity | null = null;
    public code: string = '';
    public currency: string = 'BRL';
    public id: string = '';
    public method: PaymentTypeEnum = PaymentTypeEnum.CASH;
    pix?: OrderPaymentPixEntity | null = null;
    public prepaid: boolean = false;
    public type: 'ONLINE' | 'OFFLINE' = 'OFFLINE';
    public value: number = 0;
    wallet?: OrderPaymentWalletEntity | null = null;

    // #endregion Properties (11)

    // #region Constructors (1)

    constructor(data?: Partial<OrderPaymentMethodEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }

    // #endregion Constructors (1)
}
