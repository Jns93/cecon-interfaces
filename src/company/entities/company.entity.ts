import { DocTypeEnum } from '../../general';
import { AddressEntity } from '../../general/entities/address.entity';
import { DeliveryAreaEntity } from '../../general/entities/delivery-area.entity';
import { DeliveryAreaFixedEntity } from '../../general/entities/dellivery-area-fixed.entity';
import { MessagerChannelEntity } from '../../general/entities/messager-channel.entity';
import { MobyoApiConfigEntity } from '../../general/entities/mobyo-apiconfig.entity';
import { OriginEntity } from '../../general/entities/origin.entity';
import { PaymentMethodEntity } from '../../general/entities/payment-method.entity';
import { PaymentProviderEntity } from '../../general/entities/payment-provider.entity';
import { ICompany } from '../interfaces';

export class CompanyEntity implements ICompany {
    // #region Properties (26)
    public active: boolean = false;
    public address: AddressEntity = new AddressEntity();
    bgImageURL?: string = '';
    public config: MobyoApiConfigEntity = new MobyoApiConfigEntity();
    public containerId: string = '';
    public createdAt: number = Date.now();
    public deliveryArea: DeliveryAreaEntity[] = [];
    deliveryAreaFixed?: DeliveryAreaFixedEntity | null = null;
    public doc: string = '';
    public docType: DocTypeEnum = DocTypeEnum.CNPJ;
    public email: string = '';
    public fullName: string = '';
    public id: string = '';
    imageURL?: string = '';
    public internationalCode: string = '+55';
    logoURL?: string = '';
    public messagerChannels: MessagerChannelEntity[] = [];
    public name: string = '';
    public origin: OriginEntity = new OriginEntity();
    public paymentProvider: PaymentProviderEntity = new PaymentProviderEntity();
    public paymentsMethods: PaymentMethodEntity[] = [];
    public phoneNumber: string = '';
    public pubsubTopic: string = '';
    public sandbox: boolean = false;
    public tags: string[] = [];
    public updatedAt: number = 0;
    public version: string = '1.0.0';

    // #endregion Properties (26)

    // #region Constructors (1)

    constructor(data?: Partial<CompanyEntity>) {
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
