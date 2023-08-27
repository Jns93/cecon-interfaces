import { IBase } from '../../general';
import { MemberRulesEnum } from '../enums';

export interface IMember extends IBase {
    // #region Properties (9)

    companyName: string;
    containerName: string;
    email: string;
    name: string;
    partnerId: string;
    phoneNumber: string;
    photoURL: string;
    rule: MemberRulesEnum;
    uid: string;

    // #endregion Properties (9)
}
