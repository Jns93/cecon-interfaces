import { IntervalTypeEnum } from '../../general';
import { SubscriptionStatusEnum } from '../enums';
import { ISubscription } from '../interfaces/i-subscription';
import { SubscriptionInvoiceHistoryEntity } from './subscription-invoice-history.entity';

export class SubscriptionEntity implements ISubscription {
    // #region Properties (15)

    public cancellationReason: string = '';
    public createdAt: Date = new Date();
    public customerId: string = '';
    public endDate: Date = new Date();
    public id: string = '';
    public interval: number = 0;
    public intervalType: IntervalTypeEnum = IntervalTypeEnum.MONTHS;
    public invoiceHistory: SubscriptionInvoiceHistoryEntity[] = [];
    public notes: string = '';
    public planId: string = '';
    public renewPaymentDate: Date = new Date();
    public startDate: Date = new Date();
    public status: SubscriptionStatusEnum = SubscriptionStatusEnum.PENDING;
    public trialEndDate: Date = new Date();
    public updatedAt: Date = new Date();

    // #endregion Properties (15)

    // #region Constructors (1)

    constructor(data?: Partial<SubscriptionEntity>) {
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
