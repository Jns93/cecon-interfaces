import { InvoiceStatusEnum } from '../enums';
import { IInvoiceItem } from './i-invoice-item';
import { IInvoicePaymentMethod } from './i-invoice-payment-method';

export interface IInvoice {
    // #region Properties (16)

    companyId: string;
    containerId: string;
    createdAt: Date;
    discounts: number;
    dueDateAt: Date;
    id: string;
    invoiceNumber: string;
    items: IInvoiceItem[];
    notes: string;
    paidDateAt: Date;
    paymentMethod: IInvoicePaymentMethod[];
    status: InvoiceStatusEnum;
    subtotal: number;
    taxes: number;
    total: number;
    updatedAt: Date;

    // #endregion Properties (16)
}
