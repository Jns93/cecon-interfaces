import { PaymentStatusEnum, PaymentTypeEnum } from '../../general';
import { IInvoicePaymentMethod } from '../interfaces';

export class InvoicePaymentMethodEntity implements IInvoicePaymentMethod {
    // #region Properties (15)

    public amount: number = 0;
    public brand: string = '';
    public createdAt: Date = new Date();
    public currency: string = '';
    public expMonth: number = 0;
    public expYear: number = 0;
    public id: string = '';
    public last4: string = '';
    public name: string = '';
    public pixQrCode: string = '';
    public pixUrl: string = '';
    public status: PaymentStatusEnum = PaymentStatusEnum.PENDING;
    public transactionId: string = '';
    public type: PaymentTypeEnum = PaymentTypeEnum.CREDIT_CARD;
    public updatedAt: Date = new Date();

    // #endregion Properties (15)

    // #region Constructors (1)

    constructor(data?: Partial<InvoicePaymentMethodEntity>) {
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
