import { OrderStatusEnum } from '../enums';
import { IOrderAdditionalFee } from './i-order-additional-fee';
import { IOrderBenefits } from './i-order-benefits';
import { IOrderCancellation } from './i-order-cancellation';
import { IOrderCustomer } from './i-order-customer';
import { IOrderItem } from './i-order-item';
import { IOrderPayment } from './i-order-payment';
import { IOrderTotal } from './i-order-total';

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
    payments: IOrderPayment;
    salesChannel: string;
    status: OrderStatusEnum;
    total: IOrderTotal;
    updatedAt: number;
    version: string;

    // #endregion Properties (23)
}
