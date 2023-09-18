import { IAddress, IPaymentMethod, IPaymentProvider } from '../../general';
import { DocTypeEnum } from '../../general/enums';

export interface IPartner {
    // #region Properties (18)

    active: boolean;
    address: IAddress;
    doc: string;
    docType: DocTypeEnum;
    email: string;
    fullName: string;
    id: string;
    imageURL?: string;
    internationalCode: string;
    logoURL?: string;
    name: string;
    paymentProvider: IPaymentProvider;
    paymentsMethods: IPaymentMethod[];
    phoneNumber: string;
    pubsubTopic: string;
    sandbox: boolean;
    tags: string[];
    updatedAt: Date;
    version: string;

    // #endregion Properties (18)
}
