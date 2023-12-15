import { FeatureEntity } from '../../feature';
import { SubscriptionBaseEntity } from '../../subscription-base/entities/subscription-base.entity';
import { ISubscriptionCompany } from '../interfaces/i-subscription';
import { SubscriptionCompanyCompanyEntity } from './subscription-company.entity';

export class SubscriptionCompanyEntity extends SubscriptionBaseEntity implements ISubscriptionCompany {
  // #region Properties (7)

  public appId: string = '';
  public appName: string = '';
  public company: SubscriptionCompanyCompanyEntity = new SubscriptionCompanyCompanyEntity();
  public features: FeatureEntity[] = [];
  public partnerId: string | null = '';
  public planId: string = '';
  public planName: string = '';

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionCompanyEntity>) {
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
