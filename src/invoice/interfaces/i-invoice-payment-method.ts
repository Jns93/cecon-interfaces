import { PaymentStatusEnum, PaymentTypeEnum } from '../../general';

export interface IInvoicePaymentMethod {
    // #region Properties (15)

    amount: number;
    brand: string;
    createdAt: Date;
    currency: string;
    expMonth: number;
    expYear: number;
    id: string;
    last4: string;
    name: string;
    pixQrCode: string;
    pixUrl: string;
    status: PaymentStatusEnum;
    transactionId: string;
    type: PaymentTypeEnum;
    updatedAt: Date;

    // #endregion Properties (15)
}
