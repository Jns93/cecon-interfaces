import { ISubscriptionItem } from "../interfaces";

export class SubscriptionItemEntity implements ISubscriptionItem {
  // #region Properties (5)

  public description: string = "";
  public quantity: number = 1;
  public recurrent: boolean = true;
  public totalPrice: number = 0;
  public unitPrice: number = 0;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionItemEntity>) {
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
