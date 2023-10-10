import { InvoiceStatusEnum } from "../enums";
import { IInvoiceItem } from "./i-invoice-item";
import { IInvoicePaymentMethod } from "./i-invoice-payment-method";

export interface IInvoice {
  // #region Properties (21)

  addition: number;
  companyId: string;
  containerId: string;
  createdAt: Date;
  discount: number;
  dueDateAt: Date;
  ensureDueOnWorkday: boolean;
  expiresIn: number;
  id: string;
  items: IInvoiceItem[];
  notes: string;
  paidAt: Date;
  paymentMethod: IInvoicePaymentMethod[];
  providerInvoiceNumber: string;
  providerInvoiceUrl: string;
  status: InvoiceStatusEnum;
  subscriptionId: string;
  subtotal: number;
  taxes: number;
  total: number;
  updatedAt: Date;

  // #endregion Properties (21)
}
