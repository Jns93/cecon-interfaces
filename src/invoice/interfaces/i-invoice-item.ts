export interface IInvoiceItem {
  // #region Properties (8)

  description: string;
  quantity: number;
  isRefunded: boolean;
  unitPrice: number;
  totalPrice: number;

  // #endregion Properties (8)
}
