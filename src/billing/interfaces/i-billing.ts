import { IBillingOrder } from '../../billing-order';
import { EBillingStatus } from '../enums/billing-status.enum';
import { IBillingPayment } from './i-billing-payment';
import { IBillingTotal } from './i-billing-total';

export interface IBilling {
  // #region Properties (8)

  createdAt: Date;
  dueDateAt: Date;
  id: string;
  orders: IBillingOrder[];
  payments: IBillingPayment[];
  status: EBillingStatus;
  total: IBillingTotal;
  updatedAt: Date;

  // #endregion Properties (8)
}
