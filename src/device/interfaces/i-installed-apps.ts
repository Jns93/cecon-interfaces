import { AppConfigType } from '../../app';

export interface IDeviceInstalledApps {
    // #region Properties (13)

    activationDate: number;
    active: boolean;
    appId: string;
    createdAt: number;
    customConfig: AppConfigType;
    expirationDate: number;
    isPaid: boolean;
    orderId: string;
    renewPaymentDate: number;
    title: string;
    topicSubscriptions: string[];
    updatedAt: number;
    version: string;

    // #endregion Properties (13)
}
