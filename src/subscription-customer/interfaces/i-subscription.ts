import { ECustomerInterval } from '../../customer';
import { IInvoice } from '../../invoice';
import { ISubscriptionBase } from '../../subscription-base';
import { ISubscriptionCustomerProfile } from './i-subscription-customer';

export interface ISubscriptionCustomer extends ISubscriptionBase {
  // #region Properties (8)

  amountUsed: number;
  creditLimit: number;
  currentBalance: number;
  customerId: string | null;
  customerInterval: ECustomerInterval;
  openedInvoices: IInvoice[];
  preferedDueDate: number;
  profile: ISubscriptionCustomerProfile;

  // #endregion Properties (8)
}
