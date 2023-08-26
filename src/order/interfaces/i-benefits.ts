import { ISponsorshipValues } from './i-benefits-sponsor-ship';

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
