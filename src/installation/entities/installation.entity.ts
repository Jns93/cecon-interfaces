import { AppConfigType, AppModeEnum } from '../../app';
import { IInstallation } from '../interfaces/i-installation';

export class InstallationEntity implements IInstallation {
    // #region Properties (16)

    public active: boolean = false;
    public appIconUrl: string = '';
    public appId: string = '';
    public appName: string = '';
    public createdAt: Date = new Date();
    public customConfig: AppConfigType = null;
    public expirationDate: Date = new Date();
    public featureId: string = '';
    public id: string = '';
    public lastCheckAt: Date = new Date();
    public mode: AppModeEnum = AppModeEnum.NATI_GO;
    public subscriptionId: string = '';
    public suspended: boolean = false;
    public tags: string[] = [];
    public updatedAt: Date = new Date();
    public version: string = '';

    // #endregion Properties (16)

    // #region Constructors (1)

    constructor(data?: Partial<InstallationEntity>) {
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
