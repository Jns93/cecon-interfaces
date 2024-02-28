import { IOrder } from "src/order";

export interface IDelivererMobyo {
    cellPhone: string;
    email?: string;
    name: string;
    nickName: string;
    tags: string[];
    ordersCountDeliveredOnRestaurant: IOrder[];
    pictureUrl?: string;
}