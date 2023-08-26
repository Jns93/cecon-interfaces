import { IPlanFeature } from '../interfaces';

export class PlanFeatureEntity implements IPlanFeature {
    // #region Properties (9)

    public createdAt: number = Date.now();
    public id: string = '';
    public identifier: string = '';
    public important: boolean = false;
    public name: string = '';
    public planId: string = '';
    public position: number = 0;
    public updatedAt: number = Date.now();
    public value: number = 0;

    // #endregion Properties (9)

    // #region Constructors (1)

    constructor(data?: Partial<PlanFeatureEntity>) {
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