import { DocTypeEnum } from '../enums/doc-type.enum';
import { IAddress } from './i-address';
import { IDeliveryArea } from './i-delivery-area';
import { IDeliveryAreaFixed } from './i-delivery-area-fixed';
import { IMessagerChannel } from './i-messager-channel';
import { IMobyoApiConfig } from './i-mobyo-server-api';
import { IOrigin } from './i-origin';
import { IPaymentMethod } from './i-payment-method';
import { IPaymentProvider } from './i-payment-provider';

export interface ICompany {
    // #region Properties (27)

    active: boolean;
    address: IAddress;
    bgImageURL?: string;
    containerId: string;
    createdAt: Date;
    deliveryArea: IDeliveryArea[];
    deliveryAreaFixed?: IDeliveryAreaFixed;
    doc: string;
    docType: DocTypeEnum;
    email: string;
    id: string;
    imageURL?: string;
    logoURL?: string;
    internationalCode: string;
    messagerChannels: IMessagerChannel[];
    config: IMobyoApiConfig;
    name: string;
    origin: IOrigin;
    paymentProvider: IPaymentProvider;
    paymentsMethods: IPaymentMethod[];
    phoneNumber: string;
    pubsubTopic: string;
    fullName: string;
    sandbox: boolean;
    updatedAt: number;
    version: string;

    // #endregion Properties (27)
}
