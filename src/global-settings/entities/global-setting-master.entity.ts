import { IGlobalSettingMaster } from '../interfaces/i-global-setting-master';

export class GlobalSettingMasterEntity implements IGlobalSettingMaster {
  // #region Properties (14)

  public billingDays: number = 10;
  public deleteInvoicesPlacedDays: number = 10;
  public deleteSubscriptionsPlacedDays: number = 10;
  public subscriptionSuspendedTimes: number = 3;
  public subscriptionsCancelDays: number = 3;
  public subscriptionsCustomerBillingDays: number = 7;
  public subscriptionsCustomerSuspendDays: number = 1;
  public subscriptionsExpireDays: number = 1;
  public subscriptionsSuspendDays: number = 1;
  public waServerApikey: string = '';
  public waServerBaseUrl: string = '';
  public waServerGlobalKey: string = '';
  public waServerInstanceName: string = '';
  public waServerNumber: string = '';

  // #endregion Properties (14)

  // #region Constructors (1)

  constructor(data?: Partial<GlobalSettingMasterEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
