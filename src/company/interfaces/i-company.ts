import {
  DocTypeEnum,
  IAddress,
  IDeliveryArea,
  IDeliveryAreaFixed,
  IMessagerChannel,
  IMobyoApiConfig,
  IOrigin,
  IPaymentProvider,
} from '../../general';

export interface ICompany {
  // #region Properties (25)

  active: boolean;
  address: IAddress;
  bgImageUrl?: string;
  config: IMobyoApiConfig;
  containerId: string;
  createdAt: Date;
  deliveryArea: IDeliveryArea[];
  deliveryAreaFixed?: IDeliveryAreaFixed | null;
  doc: string;
  docType: DocTypeEnum;
  email: string;
  fullName: string;
  id: string;
  imageUrl?: string;
  internationalCode: string;
  logoUrl?: string;
  messagerChannels: IMessagerChannel[];
  name: string;
  origin: IOrigin;
  paymentProvider: IPaymentProvider;
  phoneNumber: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  version: string;

  // #endregion Properties (25)
}
