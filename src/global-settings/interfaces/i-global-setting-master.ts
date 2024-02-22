export interface IGlobalSettingMaster {
  // #region Properties (14)

  billingDays: number;
  deleteInvoicesPlacedDays: number;
  deleteSubscriptionsPlacedDays: number;
  subscriptionSuspendedTimes: number;
  subscriptionsCancelDays: number;
  subscriptionsCustomerBillingDays: number;
  subscriptionsCustomerSuspendDays: number;
  subscriptionsExpireDays: number;
  subscriptionsSuspendDays: number;
  waServerApikey: string;
  waServerBaseUrl: string;
  waServerGlobalKey: string;
  waServerInstanceName: string;
  waServerNumber: string;

  // #endregion Properties (14)
}
