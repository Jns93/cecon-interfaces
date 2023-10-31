import { IFeature } from '../../feature';
import { ICustomVariable, IntervalTypeEnum } from '../../general';
import { SubscriptionStatusEnum } from '../enums';
import { ISubscriptionCompany } from './i-subscription-company';
import { ISubscriptionItem } from './i-subscription-item';
import { ISubscriptionLog } from './i-subscription-log';

export interface ISubscription {
  // #region Properties (24)

  cancellationReason: string;
  company: ISubscriptionCompany;
  createdAt: Date;
  customVariables: ICustomVariable[];
  expiresAt: Date;
  features: IFeature[];
  id: string;
  interval: number;
  intervalType: IntervalTypeEnum;
  items: ISubscriptionItem[];
  logs: ISubscriptionLog[];
  notes: string;
  partnerId: string | null;
  planId: string;
  planName: string;
  renewPaymentDate: Date;
  renovatedAt: Date;
  startsAt: Date;
  status: SubscriptionStatusEnum;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (24)
}
