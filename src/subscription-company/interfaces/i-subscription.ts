import { IFeature } from '../../feature';
import { ISubscriptionBase } from '../../subscription-base/interfaces/i-subscription-base';
import { ISubscriptionCompanyCompany } from './i-subscription-company';

export interface ISubscriptionCompany extends ISubscriptionBase {
  // #region Properties (30)

  appId: string;
  appName: string;
  company: ISubscriptionCompanyCompany;
  features: IFeature[];
  partnerId: string | null;
  planId: string;
  planName: string;

  // #endregion Properties (30)
}
