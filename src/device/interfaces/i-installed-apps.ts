import { AppConfigType } from '../../app';

export interface IDeviceInstalledApps {
    // #region Properties (13)

    activationDate: Date;
    active: boolean;
    appId: string;
    id: string;
    createdAt: Date;
    customConfig: AppConfigType;
    expirationDate: Date;
    isPaid: boolean;
    orderId: string;
    subscriptionId: string;
    renewPaymentDate: Date;
    title: string;
    topicSubscriptions: string[];
    updatedAt: Date;
    version: string;

    // #endregion Properties (13)
}
