import Account from './Account.js';
import Status from './Status.js';
export interface Notification {
    account: Account;
    created_at: string;
    id: string;
    type: NotificationType;
    status: Status;
}
export type NotificationType = 'mention' | 'status' | 'reblog' | 'follow' | 'follow_request' | 'favourite' | 'poll' | 'update' | 'admin.sign_up' | 'admin.report';
export declare function isNotifications(json: Partial<Array<Partial<Notification>>>): json is Array<Notification>;
export declare function isNotification(json: Partial<Notification>): json is Notification;
export declare function isNotificationType(type?: string): type is NotificationType;
export default Notification;
