import { AppModeEnum } from '../../app';

export interface IFeature {
    // #region Properties (16)

    appId: string;
    appMode: AppModeEnum | null;
    createdAt: Date;
    subscriptionId: string;
    companyId: string;
    containerId: string;
    id: string;
    deviceId: string;
    planId: string;
    installationId: string;

    // #endregion Properties (16)
}
