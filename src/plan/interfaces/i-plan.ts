import { IntervalTypeEnum } from '../../general/enums';
import { EPlanIdentifier } from '../enums';
import { IPlanFeature } from './i-feature';

export interface IPlan {
    // #region Properties (10)

    createdAt: Date;
    features: IPlanFeature[];
    id: string;
    identifier: EPlanIdentifier;
    index: number;
    interval: number;
    intervalType: IntervalTypeEnum;
    tags: string[];
    name: string;
    price: number;
    updatedAt: Date;

    // #endregion Properties (10)
}