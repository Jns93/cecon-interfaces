import { IGlobalSettingMaster } from '../interfaces/i-global-setting-master';

export class GlobalSettingMasterEntity implements IGlobalSettingMaster {
  // #region Properties (8)

  public billingDays: number = 10;
  public deleteInvoicesPlacedDays: number = 10;
  public deleteSubscriptionsPlacedDays: number = 10;
  public subscriptionSuspendedTimes: number = 3;
  public subscriptionsCancelDays: number = 3;
  public subscriptionsExpireDays: number = 1;
  public subscriptionsSuspendDays: number = 1;

  // #endregion Properties (8)

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
