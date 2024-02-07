export interface IEvolutionInstance {
  instanceName: string;
  status: 'created' | 'updated' | 'deleted' | string;
}
