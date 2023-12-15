import { AppConfigType } from '../../app';
import { ESubscriptionStatus } from '../../subscription-base';
import { IInstallationApp } from './i-installation-app';

export interface IInstallation {
  // #region Properties (13)

  app: IInstallationApp;
  createdAt: Date;
  customConfig: AppConfigType;
  expirationDate: Date;
  featureId: string;
  id: string;
  lastCheckAt: Date;
  status: ESubscriptionStatus;
  subscriptionId: string;
  tags: string[];
  trialEndDate: Date;
  trialStartDate: Date;
  updatedAt: Date;

  // #endregion Properties (13)
}
