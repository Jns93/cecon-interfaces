import { DeviceModeEnum } from '../enums/device-mode.enum';
import { IDevice } from '../interfaces/i-device';
import { MetadataEntity } from './metadata.entity';

export class DeviceEntity implements IDevice  {
    // #region Properties (13)

    public active: boolean = false;
    public companyId: string = '';
    public containerId: string = '';
    public createdAt: number = 0;
    public deviceId: string = '';
    public id: string = '';
    public key: string = '';
    public lastAccess: number = 0;
    // Supondo que INatiGo tenha propriedades que você queira documentar
    public metadata: MetadataEntity = new MetadataEntity();
    public mode: DeviceModeEnum = DeviceModeEnum.Natigo;
    public name: string = '';
    public tags: string[] = [];
    public topicSubscriptions: string[] = [];
    public updatedAt: number = 0;

    // #endregion Properties (13)

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
