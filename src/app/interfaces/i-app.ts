import { ICarouselImage, IRating, IntervalTypeEnum } from '../../general';
import { OsEnum } from '../../general/enums/os.enum';
import { PlatfomrEnum } from '../../general/enums/platform.enum';
import { AppModeEnum } from '../enums';
import { AppCategoryEnum } from '../enums/app-category.enum';
import { AppHeaderTypeEnum } from '../enums/header-type.enum';

export interface IApp {
    // #region Properties (21)

    active: boolean;
    activeInstalls: number;
    carousel: ICarouselImage[];
    categories: AppCategoryEnum[];
    createdBy: string;
    mode: AppModeEnum;
    description: string;
    downloadUrl: string;
    features: string[];
    headerImage: string;
    headerType: AppHeaderTypeEnum;
    headerVideo: string;
    /**
     * Indica se permite adicionar a assinatura
     */
    allowAddSubscription: boolean;
    /**
     * Indica se o app é gratuito ou não
     */
    isFree: boolean;
    price: number;
    /**
     * Tipo de intervalo para o preço
     * @example
     * Mensal, Semanal, Diário
     */
    intervalType: IntervalTypeEnum;
    /**
     * Intervalo de tempo para o preço
     * @example
     * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     * Para intervalType = MONTHS
     * 1 = 1 mês (mensal)
     * 
     */
    interval: number;
    icon: string;
    id: string;
    os: OsEnum[];
    platforms: PlatfomrEnum[];
    ratings: IRating[];
    tags: string[];
    name: string;
    totalInstalls: number;
    versionName: string;
    versionCode: number;

    // #endregion Properties (21)
}