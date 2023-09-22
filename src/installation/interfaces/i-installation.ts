import { AppConfigType, AppModeEnum } from '../../app';

export interface IInstallation {
    // #region Properties (17)

    active: boolean;
    suspended: boolean;
    appIconUrl: string;
    appId: string;
    appName: string;
    createdAt: Date;
    customConfig: AppConfigType;
    expirationDate: Date;
    id: string;
    mode: AppModeEnum;
    subscriptionId: string;
    featureId: string;
    tags: string[];
    updatedAt: Date;
    lastCheckAt: Date;
    version: string;

    // #endregion Properties (17)
}
