import { CarouselImageEntity, IntervalTypeEnum, RatingEntity } from '../../general';
import { OsEnum } from '../../general/enums/os.enum';
import { PlatfomrEnum } from '../../general/enums/platform.enum';
import { AppCategoryEnum } from '../enums/app-category.enum';
import { AppHeaderTypeEnum } from '../enums/header-type.enum';
import { AppModeEnum } from '../enums/mode.enum';
import { IApp } from '../interfaces/i-app';

export class AppEntity implements IApp {
    // #region Properties (26)

    public active: boolean = false;
    public activeInstalls: number = 0;
    public carousel: CarouselImageEntity[] = [];
    public categories: AppCategoryEnum[] = [];
    public mode: AppModeEnum = AppModeEnum.NONE;
    public createdBy: string = '';
    public description: string = '';
    public downloadUrl: string = '';
    public features: string[] = [];
    public headerImage: string = '';
    public headerType: AppHeaderTypeEnum = AppHeaderTypeEnum.IMAGE;
    public headerVideo: string = '';
    public icon: string = '';
    public id: string = '';
    /**
     * Intervalo de tempo para o preço
     * @example
     * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
     * Para intervalType = MONTHS
     * 1 = 1 mês (mensal)
     * 
     */
    public interval: number = 0;
    /**
     * Tipo de intervalo para o preço
     * @example
     * Mensal, Semanal, Diário
     */
    public intervalType: IntervalTypeEnum = IntervalTypeEnum.MONTHS;
    /**
     * Indica se permite adicionar a assinatura
     */
    public allowAddSubscription: boolean = false;
    /**
     * Indica se o app é gratuito ou não
     */
    public isFree: boolean = false;
    public os: OsEnum[] = [];
    public platforms: PlatfomrEnum[] = [];
    public price: number = 0;
    public ratings: RatingEntity[] = [];
    public tags: string[] = [];
    public name: string = '';
    public totalInstalls: number = 0;
    public versionName: string = '';
    public versionCode: number = 1;

    // #endregion Properties (26)

    // #region Constructors (1)

    constructor(data?: Partial<AppEntity>) {
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