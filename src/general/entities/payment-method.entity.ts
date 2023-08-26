import { PaymentChannelEnum } from '../enums/payment-channel.enum';
import { PaymentModeEnum } from '../enums/payment-mode.enum';
import { PaymentTypeEnum } from '../enums/payment-type.enum';

export class PaymentMethodEntity {
    // #region Properties (13)

    public active: boolean = false;
    public channel: PaymentChannelEnum = PaymentChannelEnum.Automation;
    public createdAt: number = 0;
    public fee: number = 0;
    public id: string = '';
    public index: number = 0;
    public maxAmount: number = 0;
    public minAmount: number = 0;
    public mode: PaymentModeEnum = PaymentModeEnum.Manual;
    public name: string = '';
    public token: string = '';
    public type: PaymentTypeEnum = PaymentTypeEnum.CreditCard;
    public updatedAt: number = Date.now();

    // #endregion Properties (13)

    // #region Constructors (1)

    constructor(data?: Partial<PaymentMethodEntity>) {
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
