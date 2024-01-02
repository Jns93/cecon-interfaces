import { GTINTypeEnum } from '../enums';
import { IProductBase } from '../interfaces';
import { ProductBrandEntity } from './product-brand.entity';
import { ProductNcmEntity } from './product-ncm.entity';

export class ProductBaseEntity implements IProductBase {
  // #region Properties (29)

  public active: boolean = true;
  public avgPrice: number = 0;
  public barcodeImage: string | null = null;
  public brand: ProductBrandEntity = new ProductBrandEntity();
  public cest: string | null = null;
  public createdAt: Date = new Date();
  public description: string = '';
  public grossWeight: number = 0;
  public grossWeightUnit: string | null = null;
  public gtin: string = '';
  public gtinType: GTINTypeEnum = GTINTypeEnum.THIRTEEN;
  public height: number = 0;
  public id: string = '';
  public length: number = 0;
  public maxPrice: number = 0;
  public measureQuantity: number = 1;
  public measureUnit: string = 'UN';
  public minPrice: number = 0;
  public name: string = '';
  public ncm: ProductNcmEntity = new ProductNcmEntity();
  public netWeight: number = 0;
  public netWeightUnit: string | null = null;
  public price: number = 0;
  public sku: string = '';
  public tags: string[] = [];
  public thumbnail: string | null = null;
  public updatedAt: Date = new Date();
  public width: number = 0;

  // #endregion Properties (29)

  // #region Constructors (1)

  constructor(data?: Partial<ProductBaseEntity>) {
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
