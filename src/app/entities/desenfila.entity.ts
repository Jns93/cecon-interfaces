import { IDesenfila } from '../interfaces';

export class DesenfilaEntity implements IDesenfila {
  // #region Properties (3)

  public accountId: string = '';
  public email: string | null = null;
  public token: string = '';

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<DesenfilaEntity>) {
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
