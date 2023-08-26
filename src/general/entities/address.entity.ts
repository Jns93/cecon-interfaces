import { CoordsEntity } from './coords.entity';

export class AddressEntity {
    // #region Properties (7)

    public city: string = '';
    complement?: string = '';
    public neighborhood: string = '';
    public postalCode: string = '';
    public state: string = '';
    public streetName: string = '';
    public streetNumber: string = '';
    public coords: CoordsEntity = new CoordsEntity();

    // #endregion Properties (7)

    // #region Constructors (1)

    constructor(data?: Partial<AddressEntity>) {
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
