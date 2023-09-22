
export interface IToken {
    // #region Properties (18)

    active: boolean;
    createdAt: number;
    expiresAt: number;
    id: string;
    name: string;
    companyId: string;
    partnerId: string;
    containerId: string;
    sandbox: boolean;
    lastAccessAt: number;
    description: string;
    value: string;

    // #endregion Properties (18)
}
