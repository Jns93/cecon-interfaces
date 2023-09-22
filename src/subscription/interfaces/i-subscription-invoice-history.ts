import { OrderStatusEnum } from '../../order';

export interface ISubscriptionInvoiceHistory {
    // #region Properties (16)

    invoiceId: string;
    amount: number;
    createdAt: Date;
    dueDate: Date;
    paidDate: Date;
    status: OrderStatusEnum;

    // #endregion Properties (16)
}
