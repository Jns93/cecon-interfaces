import { IInvoiceItem } from '../interfaces';

export class InvoiceItemEntity implements IInvoiceItem {
  // #region Properties (8)

  public createdAt: Date = new Date();
  public description: string = '';
  public isRefunded: boolean = false;
  public quantity: number = 1;
  public reference: string | null = '';
  public totalPrice: number = 0;
  public unitPrice: number = 0;
  public updatedAt: Date = new Date();

  // #endregion Properties (8)

  // #region Constructors (1)

  constructor(data?: Partial<InvoiceItemEntity>) {
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
