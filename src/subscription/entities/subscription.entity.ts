import { FeatureEntity } from '../../feature';
import { CustomVariableEntity, EPaymentType, IntervalTypeEnum, PaymentEntity } from '../../general';
import { InvoiceEntity } from '../../invoice';
import { ESubscriptionStatus } from '../enums';
import { ISubscription } from '../interfaces/i-subscription';
import { SubscriptionCompanyEntity } from './subscription-company.entity';
import { SubscriptionItemEntity } from './subscription-item.entity';
import { SubscriptionLogEntity } from './subscription-log.entity';

export class SubscriptionEntity implements ISubscription {
  // #region Properties (31)

  public amount: number = 0;
  public appId: string = '';
  public appName: string = '';
  public cancellationReason: string = '';
  public company: SubscriptionCompanyEntity = new SubscriptionCompanyEntity();
  public createdAt: Date = new Date();
  public customVariables: CustomVariableEntity[] = [];
  public cycledAt: Date = new Date();
  public expiresAt: Date = new Date();
  public features: FeatureEntity[] = [];
  public id: string = '';
  public interval: number = 0;
  public intervalType: IntervalTypeEnum = IntervalTypeEnum.MONTHS;
  public invoices: InvoiceEntity[] = [];
  public items: SubscriptionItemEntity[] = [];
  public logs: SubscriptionLogEntity[] = [];
  public notes: string = '';
  public partnerId: string | null = '';
  public payment: PaymentEntity = new PaymentEntity();
  public paymentType: EPaymentType = EPaymentType.NONE;
  public phoneNumberNotification: string = '';
  public planId: string = '';
  public planName: string = '';
  public recentInvoices: InvoiceEntity[] = [];
  public renewPaymentDate: Date = new Date();
  public renovatedAt: Date = new Date();
  public startsAt: Date = new Date();
  public status: ESubscriptionStatus = ESubscriptionStatus.PENDING;
  public suspendedTimes: number = 0;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (31)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionEntity>) {
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
