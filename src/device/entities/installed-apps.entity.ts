import { AppConfigType } from '../../app';
import { IDeviceInstalledApps } from '../interfaces/i-installed-apps';

export class DeviceInstalledAppsEntity implements IDeviceInstalledApps {
    // #region Properties (13)

    public activationDate: Date = new Date();
    public active: boolean = false;
    public appId: string = '';
    public id: string = '';
    public createdAt: Date = new Date();
    public customConfig: AppConfigType = null;
    public subscriptionId: string = '';
    public expirationDate: Date = new Date();
    public isPaid: boolean = false;
    public orderId: string = '';
    public renewPaymentDate: Date = new Date();
    public title: string = '';
    public topicSubscriptions: string[] = [];
    public updatedAt: Date = new Date();
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
