import { GTINTypeEnum } from "../enums";
import { IProductBrand } from "./i-brand";
import { IProductGpc } from "./i-gpc";
import { IProductNcm } from "./i-ncm";

export interface IProduct {
  // #region Properties (25)

  /**
   * Indicates whether the product is active.
   * @default true
   * @example true
   */
  active: boolean;
  /**
   * Contains brand information of the product.
   * @example { "id": "5e4f1b1b1b1b1b1b1b1b1b1b", "name": "Brand name" }
   *
   */
  brand: IProductBrand;
  /**
   * CEST Code.
   * @minlength 7
   * @maxlength 7
   */
  cest: string;
  /**
   * Date of product creation.
   * @format date-time
   * @example "2019-01-01T00:00:00.000Z"
   * @default Date.now()
   * @readonly
   */
  createdAt: Date;
  /**
   * Company ID. Optional if the product is from root.
   * @minlength 24
   * @maxlength 24
   * @example "63A3094D46B94B618CDEF2236640E3B3"
   * @default ""
   */
  companyId?: string;
  /**
   * Container ID. Optional if the product is from root.
   * @minlength 24
   * @maxlength 24
   * @example "63A3094D46B94B618CDEF2236640E3B3"
   * @default ""
   */
  containerId?: string;
  /**
   * To be filled with the Bar Code itself or third parties that is different
   * from the GTIN standard.
   * @minlength 3
   * @maxlength 30
   * @example "123456789"
   */
  customEAN: string;
  /**
   * Description of the product or service.
   * @minlength 1
   * @maxlength 120
   * @example "Product description"
   */
  description: string;
  /**
   * @minlength 2
   * @maxlength 3
   * @example "01"
   */
  exTipi: string;
  /**
   * GPC information of the product.
   * @example { "code": "10000043", "description": "Açúcar / Substitutos do Açúcar (Não perecível)" }
   */
  gpc: IProductGpc;
  /**
   * Gross weight of the product.
   * @example 1.5
   * @default 0
   */
  grossWeight: number;
  /**
   * Unit of measurement of gross weight.
   * @minlength 1
   * @maxlength 6
   */
  grossWeightUnit: string;
  /**
   * To be filled with the GTIN-8, GTIN-12, GTIN-13 or GTIN-14 code
   * (old EAN, UPC and DUN-14 codes).
   * For products that do not have a bar code with GTIN,
   * the literal "WITHOUT GTIN" must be informed.
   * @minlength 1
   * @maxlength 14
   * @example "123456789"
   */
  gtin: string;
  /**
   * Type of GTIN.
   * @default GTINTypeEnum.GTIN_13
   * @minlength 1
   * @maxlength 8
   */
  gtinType: GTINTypeEnum;
  /**
   * Height of the product.
   * @example 15
   * @default 0
   */
  height: number;
  /**
   * Identifier of the product.
   * @minlength 24
   * @maxlength 24
   * @example "5e4f1b1b1b1b1b1b1b1b1b1b"
   */
  id: string;
  /**
   * URL of the product image.
   * @minlength 1
   * @maxlength 120
   * @example "https://www.example.com/image.jpg"
   * @default ""
   */
  imageUrl: string;
  /**
   * Length of the product.
   * @example 15
   * @default 0
   */
  length: number;
  /**
   * Name of the product.
   * @minlength 1
   * @maxlength 120
   * @example "Product name"
   */
  name: string;
  /**
   * Fill in with the full NCM Code (position and sub-item) or, if you do not have it,
   * with the NCM code "00" (two zeros). Format: "99999999" or "00"
   * @minlength 2
   * @maxlength 8
   */
  ncm: IProductNcm;
  /**
   * Net weight of the product.
   * @example 1.5
   * @default 0
   * @minimum 0
   * @maximum 9999999999999.999
   * @multipleOf 0.001
   */
  netWeight: number;
  /**
   * Unit of measurement of net weight.
   * @minlength 1
   * @maxlength 6
   * @example "KG"
   * @default "UN"
   * @pattern ^[A-Z]+$
   */
  netWeightUnit: string;
  /**
   * Price of the product.
   * @example 1.5
   * @default 0
   * @minimum 0
   * @maximum 9999999999999.99
   * @multipleOf 0.01
   */
  price: number;
  /**
   * Code of the product.
   * @minlength 1
   * @maxlength 60
   * @pattern ^[a-zA-Z0-9]+$
   * @example "123456789"
   */
  sku: string;
  /**
   * Tags associated with the product.
   * @example ["tag1", "tag2"]
   * @default []
   * @uniqueItems true
   * @minItems 0
   * @maxItems 50
   * @items
   * @minlength 1
   * @maxlength 60
   */
  tags: string[];
  /**
   * Date when the product was last updated.
   * @format date-time
   * @example "2019-01-01T00:00:00.000Z"
   * @default Date.now()
   */
  updatedAt: Date;
  /**
   * Width of the product.
   * @example 15
   * @default 0
   *
   */
  width: number;

  // #endregion Properties (25)
}
