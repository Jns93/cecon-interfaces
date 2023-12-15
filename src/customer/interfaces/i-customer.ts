import { EDocType, IAddress, IDeliveryArea, IDeliveryAreaFixed } from '../../general';
import { ECustomerInterval, ECustomerStatus } from '../enums';

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
  imageUrl: string | null;
  interval: ECustomerInterval;
  limit: number;
  name: string;
  phoneNumber: string;
  phoneNumberNotification: string | null;
  sandbox: boolean;
  status: ECustomerStatus;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (19)
}
