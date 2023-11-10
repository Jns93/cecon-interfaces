import { IAddress, IPaymentProvider } from '../../general';
import { DocTypeEnum } from '../../general/enums';

export interface IPartner {
  // #region Properties (18)

  active: boolean;
  address: IAddress;
  doc: string;
  docType: DocTypeEnum;
  email: string;
  fullName: string;
  id: string;
  imageUrl?: string;
  internationalCode: string;
  logoUrl?: string;
  name: string;
  paymentProvider: IPaymentProvider;
  phoneNumber: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  version: string;

  // #endregion Properties (18)
}
