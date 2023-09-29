import { ICarouselImage, IRating, IntervalTypeEnum } from '../../general';
import { OsEnum } from '../../general/enums/os.enum';
import { PlatfomrEnum } from '../../general/enums/platform.enum';
import { AppModeEnum } from '../enums';
import { AppCategoryEnum } from '../enums/app-category.enum';
import { AppTypeEnum } from '../enums/app-type.enum';
import { AppHeaderTypeEnum } from '../enums/header-type.enum';

export interface IApp {
    // #region Properties (29)

    active: boolean;
    activeInstalls: number;
    /**
     * Indica se permite adicionar a assinatura
     */
    allowAddSubscription: boolean;
    carousel: ICarouselImage[];
    categories: AppCategoryEnum[];
    createdBy: string;
    description: string;
    downloadUrl: string;
    features: string[];
    headerImage: string;
    headerType: AppHeaderTypeEnum;
    headerVideo: string;
    icon: string;
    type: AppTypeEnum;
    id: string;
    /**
     * Intervalo de tempo para o preço
     * @example
     * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     * Para intervalType = MONTHS
     * 1 = 1 mês (mensal)
     * 
     */
    interval: number;
    /**
     * Tipo de intervalo para o preço
     * @example
     * Mensal, Semanal, Diário
     */
    intervalType: IntervalTypeEnum;
    /**
     * Indica se o app é gratuito ou não
     */
    mode: AppModeEnum;
    name: string;
    os: OsEnum[];
    platforms: PlatfomrEnum[];
    price: number;
    ratings: IRating[];
    tags: string[];
    totalInstalls: number;
    trialTime: number;
    versionCode: number;
    versionName: string;

    // #endregion Properties (29)
}