import { BaseEntity } from '../../general';
import { MemberRulesEnum } from '../enums';
import { IMember } from '../interfaces';

export class MemberEntity extends BaseEntity implements IMember {
    // #region Properties (10)

    public active: boolean = true;
    public companyName: string = '';
    public containerName: string = '';
    public email: string = '';
    public name: string = '';
    public phoneNumber: string = '';
    public photoURL: string = '';
    public rule: MemberRulesEnum = MemberRulesEnum.User;
    public tags: string[] = [];
    public uid: string = '';

    // #endregion Properties (10)

    // #region Constructors (1)

    constructor(data?: Partial<MemberEntity>) {
        super(data);
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }

    // #endregion Constructors (1)
}
