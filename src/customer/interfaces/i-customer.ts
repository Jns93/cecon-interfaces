import { EAppType } from '../../app';
import { EDocType, IAddress, IDeliveryArea, IDeliveryAreaFixed, IPaymentProvider } from '../../general';
import { ISubscriptionCustomer } from '../../subscription-customer';
import { ECustomerInterval, ECustomerStatus, ECustomerType } from '../enums';

export interface ICustomer {
  // #region Properties (19)

  address: IAddress;
  createdAt: Date;
  deliveryArea: IDeliveryArea[];
  deliveryAreaFixed?: IDeliveryAreaFixed | null;
  doc: string;
  docType: EDocType;
  email: string;
  fullName: string;
  blockedReason: string | null;
  id: string;
  type: ECustomerType;
  imageUrl: string | null;
  interval: ECustomerInterval;
  paymentProvider: IPaymentProvider;
  limit: number;
  name: string;
  phoneNumber: string;
  phoneNumbersNotification: string[];
  phoneNumberVerified: boolean;
  phoneNumberVerifiedAt: Date | null;
  phoneNumberVerifiedApp: EAppType | null;
  token: number | null;
  tokenExpiresAt: number | null;
  sandbox: boolean;
  subscription: ISubscriptionCustomer | null;
  status: ECustomerStatus;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (19)
}
