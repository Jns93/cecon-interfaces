import { AppConfigType, AppModeEnum } from '../../app';

export interface IDeviceInstalledApps {
    // #region Properties (16)

    activationDate: Date;
    active: boolean;
    appId: string;
    createdAt: Date;
    customConfig: AppConfigType;
    expirationDate: Date;
    iconUrl: string;
    id: string;
    isPaid: boolean;
    name: string;
    mode: AppModeEnum;
    orderId: string;
    renewPaymentDate: Date;
    subscriptionId: string;
    updatedAt: Date;
    version: string;

    // #endregion Properties (16)
}
