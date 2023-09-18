import { OrderStatusEnum } from '../enums';
import { IOrderAdditionalFee } from './i-additional-fee';
import { IOrderBenefits } from './i-benefits';
import { IOrderCancellation } from './i-cancellation';
import { IOrderCustomer } from './i-customer';
import { IOrderItem } from './i-item';
import { IOrderPayment } from './i-payment';
import { IOrderTotal } from './i-total';

export interface IOrder {
    // #region Properties (23)

    additionalFees: IOrderAdditionalFee[];
    benefits: IOrderBenefits[];
    cancellation: IOrderCancellation;
    companyId: string;
    containerId: string;
    createdAt: Date;
    customer: IOrderCustomer;
    id: string;
    sandbox: boolean;
    items: IOrderItem[];
    payments: IOrderPayment | null;
    salesChannel: string;
    status: OrderStatusEnum;
    total: IOrderTotal;
    updatedAt: Date;
    version: string;

    // #endregion Properties (23)
}
