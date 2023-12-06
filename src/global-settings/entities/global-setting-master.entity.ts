import { IGlobalSettingMaster } from '../interfaces/i-global-setting-master';

export class GlobalSettingMasterEntity implements IGlobalSettingMaster {
  // #region Properties (6)

  /**
   * Prazo de dias para o vencimento da fatura.
   */
  public deleteInvoicesPlacedDays: number = 10;
  public deleteSubscriptionsPlacedDays: number = 10;
  /**
   *  Dias em que a fatura expira após o vencimento
   *
   * */
  public subscriptionsCancelDays: number = 3;
  public subscriptionsExpireDays: number = 1;
  public subscriptionsSuspendDays: number = 1;
  /**
   * Dias em que a fatura é suspensa após o vencimento
   */
  public suspendDays: number = 3;

  // #endregion Properties (6)

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
  billingDays: number;

  // #endregion Constructors (1)
}
