import { OsEnum } from '../../general/enums/os.enum';
import { IDevice } from '../interfaces/i-device';
import { DeviceInstalledAppsEntity } from './installed-apps.entity';

export class DeviceEntity implements IDevice {
    // #region Properties (14)

    public active: boolean = false;
    public companyId: string = '';
    public containerId: string = '';
    public createdAt: number = 0;
    public deviceId: string = '';
    public os: OsEnum = OsEnum.UNKNOWN;
    public osVersion: string = '';
    public id: string = '';
    public installedApps: DeviceInstalledAppsEntity[] = [];
    public key: string = '';
    public lastAccess: number = 0;
    public name: string = '';
    public tags: string[] = [];
    public topicSubscriptions: string[] = [];
    public updatedAt: number = 0;

    // #endregion Properties (14)

    // #region Constructors (1)

    constructor(data?: Partial<DeviceEntity>) {
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
