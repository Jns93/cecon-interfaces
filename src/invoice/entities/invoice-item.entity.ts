import { IInvoiceItem } from '../interfaces';

export class InvoiceItemEntity implements IInvoiceItem {
    // #region Properties (8)

    public description: string = '';
    public discounts: number = 0;
    public id: string = '';
    public quantity: number = 1;
    public sku: string = '';
    public taxes: number = 0;
    public totalPrice: number = 0;
    public unitPrice: number = 0;

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
