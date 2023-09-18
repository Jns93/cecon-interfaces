import { OsEnum } from '../../general/enums/os.enum';
import { IDeviceInstalledApps } from './i-installed-apps';

export interface IDevice {
    // #region Properties (14)
    active: boolean;
    companyId: string;
    containerId: string;
    createdAt: Date;
    deviceId: string;
    id: string;
    key: string;
    lastAccess: number;
    installedApps: IDeviceInstalledApps[];
    os: OsEnum;
    osVersion: string; 
    name: string;
    tags: string[];
    topicSubscriptions: string[];
    updatedAt: Date;

    // #endregion Properties (14)
}
