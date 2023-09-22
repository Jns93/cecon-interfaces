import { InvoiceStatusEnum } from '../enums';
import { IInvoice } from '../interfaces';
import { InvoiceItemEntity } from './invoice-item.entity';
import { InvoicePaymentMethodEntity } from './invoice-payment-method.entity';

export class InvoiceEntity implements IInvoice {
    // #region Properties (16)

    public companyId: string = '';
    public containerId: string = '';
    public createdAt: Date = new Date();
    public discounts: number = 0;
    public dueDateAt: Date = new Date();
    public id: string = '';
    public invoiceNumber: string = '';
    public items: InvoiceItemEntity[] = [];
    public notes: string = '';
    public paidDateAt: Date = new Date();
    public paymentMethod: InvoicePaymentMethodEntity[] = [];
    public status: InvoiceStatusEnum = InvoiceStatusEnum.PENDING;
    public subtotal: number = 0;
    public taxes: number = 0;
    public total: number = 0;
    public updatedAt: Date = new Date();

    // #endregion Properties (16)

    // #region Constructors (1)

    constructor(data?: Partial<InvoiceEntity>) {
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
