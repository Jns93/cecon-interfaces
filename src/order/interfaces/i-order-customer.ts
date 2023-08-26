import { IOrdersCustomerPhone } from './i-order-customer-phone';

export interface IOrderCustomer {
    // #region Properties (7)

    documentNumber: string;
    email: string;
    id: string;
    name: string;
    ordersCountOnMerchant: number;
    phone: IOrdersCustomerPhone;
    picture: string;

    // #endregion Properties (7)
}
