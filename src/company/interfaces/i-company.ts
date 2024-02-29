import {
  EDocType,
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
  bgImageUrl: string | null;
  config: IMobyoApiConfig | null;
  containerId: string;
  createdAt: Date;
  deliveryArea: IDeliveryArea[];
  deliveryAreaFixed?: IDeliveryAreaFixed | null;
  phoneNumbersNotification: string[];
  doc: string;
  docType: EDocType;
  email: string;
  fullName: string;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  logoUrl: string | null;
  /**@deprecated
   * Use phoneNumberNotification instead
   */
  messagerChannels: IMessagerChannel[];
  name: string;
  usedTrialsApps: { id: string; activedAt: Date }[];
  origin: IOrigin;
  paymentProvider: IPaymentProvider;
  phoneNumber: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  version: string;

  // #endregion Properties (25)
}
