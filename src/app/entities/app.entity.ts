import { CarouselImageEntity, RatingEntity } from '../../general';
import { OsEnum } from '../../general/enums/os.enum';
import { PlatfomrEnum } from '../../general/enums/platform.enum';
import { AppCategoryEnum } from '../enums/app-category.enum';
import { AppHeaderTypeEnum } from '../enums/header-type.enum';
import { IApp } from '../interfaces/i-app';
import { NatiGoEntity } from './natigo.entity';

export class AppEntity implements IApp {
    // #region Properties (21)

    public active: boolean = false;
    public activeInstalls: number = 0;
    public carousel: CarouselImageEntity[] = [];
    public categories: AppCategoryEnum[] = [];
    public config: null | NatiGoEntity = null;
    public createdBy: string = '';
    public description: string = '';
    public downloadUrl: string = '';
    public features: string[] = [];
    public headerImage: string = '';
    public headerType: AppHeaderTypeEnum = AppHeaderTypeEnum.IMAGE;
    public headerVideo: string = '';
    public icon: string = '';
    public id: string = '';
    public os: OsEnum[] = [];
    public platforms: PlatfomrEnum[] = [];
    public ratings: RatingEntity[] = [];
    public tags: string[] = [];
    public title: string = '';
    public totalInstalls: number = 0;
    public version: string = '';

    // #endregion Properties (21)

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