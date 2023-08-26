import { IntervalTypeEnum } from '../../general/enums';
import { PlanIdentifierEnum } from '../enums/plans-identifier.enum';
import { IPlanFeature } from './i-feature';

export interface IPlan {
    id: string;
    name: string;
    identifier: PlanIdentifierEnum;
    interval: number;
    intervalType: IntervalTypeEnum;
    createdAt: number;
    updatedAt: number;
    price: number;
    features: IPlanFeature[];
}