export interface IGlobalSettingMaster {
  // #region Properties (7)

  billingDays: number;
  deleteInvoicesPlacedDays: number;
  deleteSubscriptionsPlacedDays: number;
  subscriptionSuspendedTimes: number;
  subscriptionsCancelDays: number;
  subscriptionsCustomerBillingDays: number;
  subscriptionsCustomerSuspendDays: number;
  subscriptionsExpireDays: number;
  subscriptionsSuspendDays: number;

  // #endregion Properties (7)
}
