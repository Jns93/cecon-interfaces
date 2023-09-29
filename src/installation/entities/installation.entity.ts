import { AppConfigType } from '../../app';
import { InstallationStatusEnum } from '../enums';
import { IInstallation } from '../interfaces/i-installation';
import { InstallationAppEntity } from './installation-app.entity';

export class InstallationEntity implements IInstallation {
    // #region Properties (13)

    public app: InstallationAppEntity = new InstallationAppEntity();
    public createdAt: Date = new Date();
    public customConfig: AppConfigType = null;
    public expirationDate: Date = new Date();
    public featureId: string = '';
    public id: string = '';
    public lastCheckAt: Date = new Date();
    public status: InstallationStatusEnum = InstallationStatusEnum.PENDING;
    public subscriptionId: string = '';
    public tags: string[] = [];
    public trialEndDate: Date = new Date();
    public trialStartDate: Date = new Date();
    public updatedAt: Date = new Date();

    // #endregion Properties (13)

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
