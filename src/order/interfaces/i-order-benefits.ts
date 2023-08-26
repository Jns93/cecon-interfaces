import { ISponsorshipValues } from './i-order-benefits-sponsor-ship';

export interface IOrderBenefits {
    // #region Properties (6)

    description: string;
    id: string;
    sponsorshipValues: ISponsorshipValues[];
    target: string;
    targetId: string;
    value: number;

    // #endregion Properties (6)
}
