import { ECustomerInterval } from '../../customer';
import { IInvoice } from '../../invoice';
import { SubscriptionBaseEntity } from '../../subscription-base';
import { ISubscriptionCustomer } from '../interfaces/i-subscription';
import { SubscriptionCustomerProfileEntity } from './subscription-customer.entity';

export class SubscriptionCustomerEntity extends SubscriptionBaseEntity implements ISubscriptionCustomer {
  // #region Properties (8)

  public amountUsed: number = 0;
  public creditLimit: number = 0;
  public currentBalance: number = 0;
  public customerId: string | null = null;
  public customerInterval: ECustomerInterval = ECustomerInterval.MONTHLY;
  public openedInvoices: IInvoice[] = [];
  public preferedDueDate: number = 7;
  public profile: SubscriptionCustomerProfileEntity = new SubscriptionCustomerProfileEntity();

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionCustomerEntity>) {
    super(data);
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
