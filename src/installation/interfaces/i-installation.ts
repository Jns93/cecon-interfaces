import { AppConfigType, AppModeEnum } from '../../app';

export interface IInstallation {
    // #region Properties (17)

    activationDate: Date;
    active: boolean;
    appId: string;
    createdAt: Date;
    customConfig: AppConfigType;
    expirationDate: Date;
    appIconUrl: string;
    id: string;
    isPaid: boolean;
    mode: AppModeEnum;
    appName: string;
    orderId: string;
    renewPaymentDate: Date;
    subscriptionId: string;
    tags: string[];
    updatedAt: Date;
    version: string;

    // #endregion Properties (17)
}
