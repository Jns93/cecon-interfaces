import { InvoiceStatusEnum } from '../enums';
import { IInvoice } from '../interfaces';
import { InvoiceItemEntity } from './invoice-item.entity';
import { InvoicePaymentMethodEntity } from './invoice-payment-method.entity';

export class InvoiceEntity implements IInvoice {
    // #region Properties (21)

    public addition: number = 0;
    public companyId: string = '';
    public containerId: string = '';
    public createdAt: Date = new Date();
    public discount: number = 0;
    public dueDateAt: Date = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    public ensureDueOnWorkday: boolean = true;
    public expiresIn: number = 5;
    public id: string = '';
    public items: InvoiceItemEntity[] = [];
    public notes: string = '';
    public paidAt: Date = new Date();
    public paymentMethod: InvoicePaymentMethodEntity[] = [];
    public providerInvoiceNumber: string = '';
    public providerInvoiceUrl: string = '';
    public status: InvoiceStatusEnum = InvoiceStatusEnum.PENDING;
    public subscriptionId: string = '';
    public subtotal: number = 0;
    public taxes: number = 0;
    public total: number = 0;
    public updatedAt: Date = new Date();

    // #endregion Properties (21)

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
