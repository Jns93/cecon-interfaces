import { AddressEntity } from '../../general';
import { EFiscalDocModelCode } from '../../general/enums/fiscal-doc-model-code.enum';
import { IRabbit } from '../interfaces/i-rabbit';

export class RabbitEntity implements IRabbit {
  // #region Properties (15)

  public address: AddressEntity = new AddressEntity();
  public api: string = 'http://localhost:8089';
  public cityCode: string = '';
  public doc: string = '';
  public ie: string = '';
  public ignoreCpfCnpj: boolean = false;
  public model: EFiscalDocModelCode = EFiscalDocModelCode.NFCE;
  public name: string = '';
  public onlyCash: boolean = false;
  public pdvId: string = '';
  public percentage: number = 50;
  public regime: 1 | 2 | 3 = 1;
  public serialNumber: string = '';
  public signature: string = '';
  public version: string = '1.0.0';

  // #endregion Properties (15)

  // #region Constructors (1)

  constructor(data?: Partial<RabbitEntity>) {
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
