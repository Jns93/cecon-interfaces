export interface IInvoiceItem {
    // #region Properties (8)

    description: string;
    discounts: number;
    id: string;
    quantity: number;
    sku: string;
    taxes: number;
    totalPrice: number;
    unitPrice: number;

    // #endregion Properties (8)
}
