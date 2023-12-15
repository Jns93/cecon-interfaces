import { ISubscriptionBase } from '../../subscription-base';
import { ISubscriptionCustomerCustomer } from './i-subscription-customer';

export interface ISubscriptionCustomer extends ISubscriptionBase {
  // #region Properties (1)

  customer: ISubscriptionCustomerCustomer;

  // #endregion Properties (1)
}
