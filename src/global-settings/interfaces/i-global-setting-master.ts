export interface IGlobalSettingMaster {
  // #region Properties (2)

  billingDays: number;
  deleteInvoicesPlacedDays: number;
  deleteSubscriptionsPlacedDays: number;
  subscriptionsCancelDays: number;
  subscriptionsSuspendDays: number;
  subscriptionsExpireDays: number;

  // #endregion Properties (2)
}
