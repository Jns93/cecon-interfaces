import { IBillingOrder } from '../../billing-order';
import { EBillingStatus } from '../enums';
import { IBilling, IBillingPayment, IBillingTotal } from '../interfaces';
import { BillingTotalEntity } from './billing-total.entity';

export class BillingEntity implements IBilling {
  // #region Properties (8)

  public createdAt: Date = new Date();
  public dueDateAt: Date = new Date();
  public id: string = '';
  public orders: IBillingOrder[] = [];
  public payments: IBillingPayment[] = [];
  public status: EBillingStatus = EBillingStatus.PENDING;
  public total: IBillingTotal = new BillingTotalEntity();
  public updatedAt: Date = new Date();

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(data?: Partial<BillingEntity>) {
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
