import { IFeature } from '../../feature';
import { ICustomVariable, IntervalTypeEnum } from '../../general';
import { IPayment } from '../../general/interfaces';
import { IInvoice } from '../../invoice';
import { ESubscriptionStatus } from '../enums';
import { ISubscriptionCompany } from './i-subscription-company';
import { ISubscriptionItem } from './i-subscription-item';
import { ISubscriptionLog } from './i-subscription-log';

export interface ISubscription {
  // #region Properties (27)

  amount: number;
  appId: string;
  appName: string;
  cancellationReason: string;
  company: ISubscriptionCompany;
  createdAt: Date;
  customVariables: ICustomVariable[];
  cycledAt: Date;
  expiresAt: Date;
  features: IFeature[];
  id: string;
  interval: number;
  intervalType: IntervalTypeEnum;
  invoices: IInvoice[];
  items: ISubscriptionItem[];
  logs: ISubscriptionLog[];
  notes: string;
  partnerId: string | null;
  payment: IPayment;
  planId: string;
  planName: string;
  phoneNumberNotification: string;
  renewPaymentDate: Date;
  renovatedAt: Date;
  startsAt: Date;
  status: ESubscriptionStatus;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (27)
}
