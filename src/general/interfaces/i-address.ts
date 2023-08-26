import { ICoords } from './i-coords';

export interface IAddress {
    // #region Properties (7)

    city: string;
    complement?: string;
    neighborhood: string;
    postalCode: string;
    state: string;
    streetName: string;
    streetNumber: string;
    coords?: ICoords;

    // #endregion Properties (7)
}
