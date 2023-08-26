
export class CoordsEntity {

    latitude: number = 0;

    longitude: number = 0;

    constructor(data?: Partial<CoordsEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
}
