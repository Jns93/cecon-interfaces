import { IntervalTypeEnum } from '../../general';
import { SubscriptionStatusEnum } from '../enums';
import { ISubscriptionInvoiceHistory } from './i-subscription-invoice-history';

export interface ISubscription {
    // #region Properties (16)

    cancellationReason: string;
    createdAt: Date;
    customerId: string;
    endDate: Date;
    trialEndDate: Date;
    id: string;
    interval: number;
    intervalType: IntervalTypeEnum;
    notes: string;
    invoiceHistory: ISubscriptionInvoiceHistory[];
    planId: string;
    renewPaymentDate: Date;
    startDate: Date;
    status: SubscriptionStatusEnum;
    updatedAt: Date;

    // #endregion Properties (16)
}
