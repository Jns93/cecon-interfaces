import { ECustomerInterval } from '../../customer';
import { IInvoice } from '../../invoice';
import { ISubscriptionBase } from '../../subscription-base';
import { ISubscriptionCustomerProfile } from './i-subscription-customer';

export interface ISubscriptionCustomer extends ISubscriptionBase {
  // #region Properties (1)

  profile: ISubscriptionCustomerProfile;
  creditLimit: number;
  preferedDueDate: number;
  customerInterval: ECustomerInterval;
  amountUsed: number;
  currentBalance: number;
  customerId: string | null;
  openedInvoices: IInvoice[];
  // #endregion Properties (1)
}
