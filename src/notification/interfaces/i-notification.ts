import { NotificationCategoryEnum, NotificationPriorityEnum, NotificationStatusEnum } from '../enums';
import { INotificationAction } from './i-notification-action';

export interface INotification {
    // #region Properties (9)

    action: INotificationAction;
    priority: NotificationPriorityEnum;
    category: NotificationCategoryEnum;
    createdAt: Date;
    title: string;
    description: string;
    expirationTime: number;
    status: NotificationStatusEnum;
    imageURL: string;
    sound: boolean;
    id: string;
    data: string;
    topicName: string;
    // #endregion Properties (9)
}
