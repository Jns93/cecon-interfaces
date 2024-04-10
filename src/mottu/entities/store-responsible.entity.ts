import { IMottuStoreResponsible } from '../interfaces';

export class MottuStoreResponsibleEntity implements IMottuStoreResponsible {
  // #region Properties (2)

  public name: string = '';
  public phone: string = '';

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<MottuStoreResponsibleEntity>) {
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
