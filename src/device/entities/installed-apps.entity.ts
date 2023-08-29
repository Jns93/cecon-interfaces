import { AppConfigType } from '../../app';
import { IDeviceInstalledApps } from '../interfaces/i-installed-apps';

export class DeviceInstalledAppsEntity implements IDeviceInstalledApps {
    // #region Properties (13)

    public activationDate: number = Date.now();
    public active: boolean = false;
    public appId: string = '';
    public createdAt: number = Date.now();
    public customConfig: AppConfigType = null;
    public expirationDate: number = Date.now();
    public isPaid: boolean = false;
    public orderId: string = '';
    public renewPaymentDate: number = Date.now();
    public title: string = '';
    public topicSubscriptions: string[] = [];
    public updatedAt: number = Date.now();
    public version: string = '';

    // #endregion Properties (13)

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
