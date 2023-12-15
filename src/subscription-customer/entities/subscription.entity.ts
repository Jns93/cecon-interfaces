import { SubscriptionBaseEntity } from '../../subscription-base';
import { ISubscriptionCustomer } from '../interfaces/i-subscription';
import { SubscriptionCustomerCustomerEntity } from './subscription-customer.entity';

export class SubscriptionCustomerEntity extends SubscriptionBaseEntity implements ISubscriptionCustomer {
  // #region Properties (1)

  public customer: SubscriptionCustomerCustomerEntity = new SubscriptionCustomerCustomerEntity();

  // #endregion Properties (1)

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
}
