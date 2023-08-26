import { AddressEntity, BaseEntity, PaymentProviderEntity } from '../../general';
import { DocTypeEnum } from '../../general/enums';
import { IPartner } from '../interfaces';

export class PartnerEntity extends BaseEntity implements IPartner {
    // #region Properties (5)

    public address: AddressEntity = new AddressEntity();
    public doc: string = '';
    public docType: DocTypeEnum = DocTypeEnum.CNPJ;
    public name: string = '';
    public paymentProvider: PaymentProviderEntity = new PaymentProviderEntity();

    // #endregion Properties (5)

    // #region Constructors (1)

    constructor(data?: Partial<PartnerEntity>) {
        super(data);
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }

    // #endregion Constructors (1)
}
