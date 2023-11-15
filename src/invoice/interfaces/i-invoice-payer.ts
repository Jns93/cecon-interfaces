import { DocTypeEnum, IAddress } from '../../general';

export interface IInvoicePayer {
  // #region Properties (6)

  address: IAddress;
  doc: string;
  docType: DocTypeEnum;
  email: string;
  name: string;
  phoneNumber: string | null;

  // #endregion Properties (6)
}
