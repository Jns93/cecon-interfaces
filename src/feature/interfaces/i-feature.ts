import { EAppMode } from '../../app';

export interface IFeature {
    // #region Properties (10)

    appId: string;
    appMode: EAppMode | null;
    companyId: string;
    containerId: string;
    createdAt: Date;
    deviceId: string;
    id: string;
    installationId: string;
    planId: string | null;
    subscriptionId: string;

    // #endregion Properties (10)
}
