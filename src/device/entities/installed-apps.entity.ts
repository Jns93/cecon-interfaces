import { AppConfigType, AppModeEnum } from '../../app';
import { IDeviceInstalledApps } from '../interfaces/i-installed-apps';

export class DeviceInstalledAppsEntity implements IDeviceInstalledApps {
    // #region Properties (16)

    public activationDate: Date = new Date();
    public active: boolean = false;
    public appId: string = '';
    public createdAt: Date = new Date();
    public customConfig: AppConfigType = null;
    public expirationDate: Date = new Date();
    public iconUrl: string = '';
    public id: string = '';
    public isPaid: boolean = false;
    public name: string = '';
    public mode: AppModeEnum = AppModeEnum.NATI_GO;
    public orderId: string = '';
    public renewPaymentDate: Date = new Date();
    public subscriptionId: string = '';
    public updatedAt: Date = new Date();
    public version: string = '';

    // #endregion Properties (16)

    // #region Constructors (1)

    constructor(data?: Partial<DeviceInstalledAppsEntity>) {
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
