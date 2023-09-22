import { AppConfigType, AppModeEnum } from '../../app';
import { IInstallation } from '../interfaces/i-installation';

export class InstallationEntity implements IInstallation {
    // #region Properties (17)

    public activationDate: Date = new Date();
    public active: boolean = false;
    public appId: string = '';
    public createdAt: Date = new Date();
    public customConfig: AppConfigType = null;
    public expirationDate: Date = new Date();
    public appIconUrl: string = '';
    public id: string = '';
    public isPaid: boolean = false;
    public mode: AppModeEnum = AppModeEnum.NATI_GO;
    public appName: string = '';
    public orderId: string = '';
    public renewPaymentDate: Date = new Date();
    public subscriptionId: string = '';
    public tags: string[] = [];
    public updatedAt: Date = new Date();
    public version: string = '';

    // #endregion Properties (17)

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
