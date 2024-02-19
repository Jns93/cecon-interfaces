export interface IEvolutionInstance {
  // #region Properties (7)

  instanceName: string;
  instanceId: string;
  status: 'created' | 'updated' | 'deleted' | string;
  serverUrl: string;
  apikey: string;

  // #endregion Properties (7)
}
