import { IEvolutionInstance } from '../interfaces';

export class EvolutionInstanceEntity implements IEvolutionInstance {
  // #region Properties (7)

  public apikey: string = '';
  public instanceName: string = '';
  public instanceId: string = '';
  public serverUrl: string = '';
  public status: string = '';

  // #endregion Properties (7)

  // #region Constructors (1)

  constructor(data?: Partial<EvolutionInstanceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
