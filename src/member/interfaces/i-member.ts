import { IBase } from '../../general';
import { MemberRulesEnum, MemberTypeEnum } from '../enums';

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
    type: MemberTypeEnum;
    tags: string[];
    uid: string;

    // #endregion Properties (9)
}
