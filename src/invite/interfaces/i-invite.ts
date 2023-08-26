import { DocTypeEnum } from '../../general';
import { InviteStatusEnum } from '../enums';

export interface IInvite {
    // #region Properties (17)

    companyId: string;
    companyName: string;
    containerId: string;
    createdAt: number;
    doc: string;
    docType: DocTypeEnum;
    email: string;
    expireAt: number;
    expired: boolean;
    id: string;
    internationalCode: string;
    name: string;
    phoneNumber: string;
    photoURL: string;
    status: InviteStatusEnum;
    uid: string;
    updatedAt: number;

    // #endregion Properties (17)
}
