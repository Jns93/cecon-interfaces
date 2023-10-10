import { ISubscriptionLog } from "../interfaces/i-subscription-log";

export class SubscriptionLogEntity implements ISubscriptionLog {
  // #region Properties (4)

  public createdAt: Date = new Date();
  public description: string = "";
  public id: string = "";
  public notes: string = "";

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionLogEntity>) {
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
