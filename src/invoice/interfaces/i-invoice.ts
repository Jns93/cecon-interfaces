import { IPaymentProvider, PaymentTypeEnum } from '../../general';
import { EInvoiceStatus } from '../enums';
import { IInvoiceBankSlip } from './i-invoice-bank-slip';
import { IInvoiceCreditCard } from './i-invoice-credit-card';
import { IInvoiceItem } from './i-invoice-item';
import { IInvoiceLog } from './i-invoice-log';
import { IInvoicePayer } from './i-invoice-payer';
import { IInvoicePix } from './i-invoice-pix';

export interface IInvoice {
  // #region Properties (41)

  addition: number;
  bankSlip: IInvoiceBankSlip | null;
  bankSlipExtraDue: number;
  ccEmails: string[];
  companyId: string;
  containerId: string;
  createdAt: Date;
  creditCard: IInvoiceCreditCard | null;
  currency: string;
  discount: number;
  dueDateAt: Date;
  returnUrl: string;
  returnExpiredUrl: string;
  notificationUrl: string;
  email: string;
  ensureDueOnWorkday: boolean;
  expiresIn: number;
  fineForlatePayment: number;
  id: string;
  items: IInvoiceItem[];
  log: IInvoiceLog[];
  notes: string;
  orderId: string;
  paidAt: Date | null;
  partnerId: string | null;
  payer: IInvoicePayer;
  paymentMethod: PaymentTypeEnum;
  paymentProvider: IPaymentProvider | null;
  phoneNumberNotification: number | null;
  pix: IInvoicePix | null;
  externalInvoiceId: string;
  externalInvoiceUrl: string;
  secureId: string;
  secureUrl: string;
  status: EInvoiceStatus;
  subscriptionId: string;
  subtotal: number;
  totalAmount: number;
  password: string | null;
  totalFee: number;
  totalOverPaid: number;
  totalPaid: number;
  totalRefunded: number;
  updatedAt: Date;

  // #endregion Properties (41)
}
