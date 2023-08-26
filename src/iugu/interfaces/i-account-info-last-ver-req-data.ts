import { BooleanStringEnum } from '../../general/enums';
import { LegalEntiyEnum } from '../../general/enums/person-type.enum';

export interface IIuguAccountLastVerificationRequestData {
    // #region Properties (19)

    accountType: string;
    address: string;
    automaticTransfer: BooleanStringEnum;
    bank: string;
    bankAg: string;
    bankCc: string;
    businessType: string;
    cep: string;
    city: string;
    cpf: string;
    documentActivity: string;
    documentCpf: string;
    documentId: string;
    name: string;
    personType: LegalEntiyEnum;
    physicalProducts: BooleanStringEnum;
    priceRange: string;
    state: string;
    telephone: string;

    // #endregion Properties (19)
}
