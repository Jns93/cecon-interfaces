import { OrderStatusEnum } from '../enums';
import { OrderAdditionalFeeEntity } from './order-additional-fees.entity';
import { OrderBenefitsEntity } from './order-benefits.entity';
import { OrderCancellationEntity } from './order-cancellation.entity';
import { OrderCustomerEntity } from './order-customer.entity';
import { OrderItemEntity } from './order-item.entity';
import { OrderPaymentEntity } from './order-payment.entity';
import { OrderTotalEntity } from './order-total.entity';

export class OrderEntity {
    // #region Properties (16)

    public additionalFees: OrderAdditionalFeeEntity[] = [];
    public benefits: OrderBenefitsEntity[] = [];
    public cancellation: OrderCancellationEntity = new OrderCancellationEntity();
    public companyId: string = '';
    public containerId: string = '';
    public createdAt: number = Date.now();
    public customer: OrderCustomerEntity = new OrderCustomerEntity();
    public id: string = '';
    public items: OrderItemEntity[] = [];
    public payments: OrderPaymentEntity = new OrderPaymentEntity();
    public salesChannel: string = '';
    public sandbox: boolean = false;
    public status: OrderStatusEnum = OrderStatusEnum.PENDING;
    public total: OrderTotalEntity = new OrderTotalEntity();
    public updatedAt: number = Date.now();
    public version: string = '';
    constructor(data?: Partial<OrderEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }

    // #endregion Properties (16)
}
