import { IPaymentProviderAgent } from './i-payment-provider-agent';
import { IPaymentToken } from './i-payment-tokens';

export interface IPaymentProvider {
    // #region Properties (13)

    accountId: string;
    active: boolean;
    agent: IPaymentProviderAgent;
    customerId: string;
    liveApiToken: string;
    name: string;
    paymentTokens: IPaymentToken;
    subscriptionId: string;
    subscriptions?: string;
    testApiToken: string;
    userToken: string;
    verified: boolean;
    verifiedAt: number;

    // #endregion Properties (13)
}
