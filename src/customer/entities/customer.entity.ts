import { AddressEntity, DeliveryAreaEntity, DeliveryAreaFixedEntity, EDocType, PaymentProviderEntity } from '../../general';
import { ECustomerInterval, ECustomerStatus, ECustomerType } from '../enums';
import { ICustomer } from '../interfaces';

export class CustomerEntity implements ICustomer {
  // #region Properties (20)

  public address: AddressEntity = new AddressEntity();
  public blockedReason: string | null = null;
  public createdAt: Date = new Date();
  public deliveryArea: DeliveryAreaEntity[] = [];
  deliveryAreaFixed?: DeliveryAreaFixedEntity | null | undefined = undefined;
  public doc: string = '';
  public docType: EDocType = EDocType.CPF;
  public email: string = '';
  public fullName: string = '';
  public paymentProvider: PaymentProviderEntity = new PaymentProviderEntity();
  public id: string = '';
  public imageUrl: string | null = null;
  public interval: ECustomerInterval = ECustomerInterval.MONTHLY;
  public limit: number = 0;
  public name: string = '';
  public phoneNumber: string = '';
  public phoneNumberNotification: string | null = null;
  public sandbox: boolean = false;
  public status: ECustomerStatus = ECustomerStatus.WAITING_CREDIT_ANALYSIS;
  public tags: string[] = [];
  public type: ECustomerType = ECustomerType.SINGLE;
  public updatedAt: Date = new Date();

  // #endregion Properties (20)

  // #region Constructors (1)

  constructor(data?: Partial<CustomerEntity>) {
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
