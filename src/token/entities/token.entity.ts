import { IToken } from '../interfaces';

export class TokenEntity implements IToken {
    // #region Properties (18)
    public active: boolean = true;
    public createdAt: number = Date.now();
    public expiresAt: number = Date.now();
    public id: string = '';
    public name: string = '';
    public companyId: string = '';
    public partnerId: string = '';
    public containerId: string = '';
    public sandbox: boolean = false;
    public lastUsedAt: number = Date.now();
    public description: string = '';
    public value: string = '';

    // #endregion Properties (18)

    // #region Constructors (1)

    constructor(data?: Partial<TokenEntity>) {
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
