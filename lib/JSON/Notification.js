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
export function isNotifications(json) {
    return (json instanceof Array &&
        (!json.length ||
            isNotification(json[0] || {})));
}
export function isNotification(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        isNotificationType(json.type) &&
        typeof json.created_at === 'string' &&
        (!json.status || isStatus(json.status)) &&
        (!json.account || isAccount(json.account)));
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