import { DeviceModeEnum } from '../enums/device-mode.enum';
import { IDeviceMetadata } from './i-device-metadata';

export interface IDevice {
    // #region Properties (14)
    active: boolean;
    companyId: string;
    containerId: string;
    createdAt: number;
    deviceId: string;
    metadata: IDeviceMetadata;
    id: string;
    key: string;
    lastAccess: Date;
    mode: DeviceModeEnum;
    name: string;
    updatedAt: number;

    // #endregion Properties (14)
}
