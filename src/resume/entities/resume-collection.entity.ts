import { IResumeCollection } from '../interfaces';

export class ResumeCollectionEntity implements IResumeCollection {
  // #region Properties (4)

  public actived: number = 0;
  public deactived: number = 0;
  public collectionName: string = '';
  public total: number = 0;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeCollectionEntity>) {
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
