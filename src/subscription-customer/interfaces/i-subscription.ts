import { IInvoice } from '../../invoice';
import { ISubscriptionBase } from '../../subscription-base';
import { ISubscriptionCustomerProfile } from './i-subscription-customer';

export interface ISubscriptionCustomer extends ISubscriptionBase {
  // #region Properties (1)

  profile: ISubscriptionCustomerProfile;
  creditLimit: number;
  amountUsed: number;
  currentBalance: number;
  openedInvoices: IInvoice[];
  // #endregion Properties (1)
}
