import { IAddress, IBase, IPaymentProvider } from '../../general';
import { DocTypeEnum } from '../../general/enums';

export interface IPartner extends IBase {
    // #region Properties (4)

    doc: string;
    docType: DocTypeEnum;
    name: string;
    paymentProvider: IPaymentProvider;
    address: IAddress;

    // #endregion Properties (4)
}
