import { INatigo } from '../interfaces/i-natigo';

export class NatiGoEntity implements INatigo {
    // #region Properties (4)

    public isForAdultsOnly: boolean = false;
    public logoUrl: string = '';
    public openLockRequired: boolean = true;
    public siteDescription: string = '';

    // #endregion Properties (4)

    // #region Constructors (1)

    constructor(data?: Partial<NatiGoEntity>) {
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
