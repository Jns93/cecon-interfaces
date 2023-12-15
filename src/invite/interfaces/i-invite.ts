import { EDocType } from '../../general';
import { InviteStatusEnum } from '../enums';

export interface IInvite {
  // #region Properties (17)

  companyId: string;
  companyName: string;
  containerId: string;
  createdAt: Date;
  doc: string;
  docType: EDocType;
  email: string;
  expireAt: Date;
  expired: boolean;
  id: string;
  internationalCode: string;
  name: string;
  phoneNumber: string;
  photoUrl: string;
  status: InviteStatusEnum;
  uid: string;
  updatedAt: Date;

  // #endregion Properties (17)
}
