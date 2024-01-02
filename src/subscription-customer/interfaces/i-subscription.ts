import { ISubscriptionBase } from '../../subscription-base';
import { ISubscriptionCustomerProfile } from './i-subscription-customer';

export interface ISubscriptionCustomer extends ISubscriptionBase {
  // #region Properties (1)

  profile: ISubscriptionCustomerProfile;

  // #endregion Properties (1)
}
