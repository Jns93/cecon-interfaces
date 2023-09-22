import { OrderStatusEnum } from '../../order';
import { ISubscriptionInvoiceHistory } from '../interfaces/i-subscription-invoice-history';

export class SubscriptionInvoiceHistoryEntity implements ISubscriptionInvoiceHistory {
    // #region Properties (6)

    public amount: number = 0;
    public createdAt: Date = new Date();
    public dueDate: Date = new Date();
    public invoiceId: string = '';
    public paidDate: Date = new Date();
    public status: OrderStatusEnum = OrderStatusEnum.PENDING;

    // #endregion Properties (6)

    // #region Constructors (1)

    constructor(data?: Partial<SubscriptionInvoiceHistoryEntity>) {
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
