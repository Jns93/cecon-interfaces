import { ICarouselImage, IRating } from '../../general';
import { OsEnum } from '../../general/enums/os.enum';
import { PlatfomrEnum } from '../../general/enums/platform.enum';
import { AppCategoryEnum } from '../enums/app-category.enum';
import { AppHeaderTypeEnum } from '../enums/header-type.enum';
import { INatigo } from './i-natigo';

export interface IApp {
    // #region Properties (21)

    active: boolean;
    activeInstalls: number;
    carousel: ICarouselImage[];
    categories: AppCategoryEnum[];
    config: null | INatigo;
    createdBy: string;
    description: string;
    downloadUrl: string;
    features: string[];
    headerImage: string;
    headerType: AppHeaderTypeEnum;
    headerVideo: string;
    icon: string;
    id: string;
    os: OsEnum[];
    platforms: PlatfomrEnum[];
    ratings: IRating[];
    tags: string[];
    title: string;
    totalInstalls: number;
    version: string;

    // #endregion Properties (21)
}