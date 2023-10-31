import {
  DocTypeEnum,
  IAddress,
  IDeliveryArea,
  IDeliveryAreaFixed,
  IMessagerChannel,
  IMobyoApiConfig,
  IOrigin,
  IPaymentMethod,
  IPaymentProvider,
} from '../../general';

export interface ICompany {
  // #region Properties (27)

  active: boolean;
  address: IAddress;
  bgImageUrl?: string;
  containerId: string;
  createdAt: Date;
  deliveryArea: IDeliveryArea[];
  deliveryAreaFixed?: IDeliveryAreaFixed | null;
  doc: string;
  docType: DocTypeEnum;
  email: string;
  id: string;
  imageUrl?: string;
  logoUrl?: string;
  internationalCode: string;
  messagerChannels: IMessagerChannel[];
  config: IMobyoApiConfig;
  name: string;
  origin: IOrigin;
  paymentProvider: IPaymentProvider;
  paymentsMethods: IPaymentMethod[];
  phoneNumber: string;
  fullName: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  version: string;

  // #endregion Properties (27)
}
