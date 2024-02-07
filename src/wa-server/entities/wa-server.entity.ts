import { EWaServerStatus } from '../enums';
import { IWaServer } from '../interfaces';

export class WaServerEntity implements IWaServer {
  // #region Properties (11)

  public active: boolean = false;
  public baseUrl: string = '';
  public createdAt: Date = new Date();
  public globalApiKey: string = '';
  public id: string = '';
  public installIds: string[] = [];
  public name: string = '';
  public sessions: number = 0;
  public stack: string = '';
  public status: EWaServerStatus = EWaServerStatus.STOPPED;
  public updatedAt: Date = new Date();

  constructor(data?: Partial<WaServerEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
  // #endregion Properties (11)
}
