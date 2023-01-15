/* *
 *
 *  Imports
 *
 * */
import { isAccount } from './Account.js';
import { isStatus } from './Status.js';
;
/* *
 *
 *  Functions
 *
 * */
export function isNotification(json) {
    return (typeof json === 'object' &&
        typeof json.account === 'object' &&
        typeof json.created_at === 'string' &&
        typeof json.id === 'string' &&
        typeof json.status === 'object' &&
        typeof json.type === 'string' &&
        isAccount(json.account) &&
        isNotificationType(json.type) &&
        isStatus(json.status));
}
export function isNotifications(json) {
    return (json instanceof Array &&
        (!json.length ||
            isNotification(json[0] || {})));
}
export function isNotificationType(type) {
    return (type === 'mention' ||
        type === 'status' ||
        type === 'reblog' ||
        type === 'follow' ||
        type === 'follow_request' ||
        type === 'favourite' ||
        type === 'poll' ||
        type === 'update' ||
        type === 'admin.sign_up' ||
        type === 'admin.report');
}
//# sourceMappingURL=Notification.js.map