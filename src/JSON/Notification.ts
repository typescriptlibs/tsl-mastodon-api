/* *
 *
 *  Imports
 *
 * */

import Account, { isAccount } from './Account.js';
import Status, { isStatus } from './Status.js';

/* *
 *
 *  Declarations
 *
 * */

export interface Notification {
  account: Account;
  created_at: string;
  id: string;
  type: NotificationType;
  status: Status;
};

export type NotificationType =
  | 'mention'
  | 'status'
  | 'reblog'
  | 'follow'
  | 'follow_request'
  | 'favourite'
  | 'poll'
  | 'update'
  | 'admin.sign_up'
  | 'admin.report';

/* *
 *
 *  Functions
 *
 * */

export function isNotifications (
    json: Partial<Array<Partial<Notification>>>
): json is Array<Notification> {
    return (
        json instanceof Array &&
        (
            !json.length ||
            isNotification( json[0] || {} )
        )
    );
}

export function isNotification(
    json: Partial<Notification>
): json is Notification {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        isNotificationType( json.type ) &&
        typeof json.created_at === 'string' &&
        (!json.status || isStatus( json.status )) &&
        (!json.account || isAccount( json.account ))
    );
}

export function isNotificationType(
    type?: string
): type is NotificationType {
    return (
        type === 'mention' ||
        type === 'status' ||
        type === 'reblog' ||
        type === 'follow' ||
        type === 'follow_request' ||
        type === 'favourite' ||
        type === 'poll' ||
        type === 'update' ||
        type === 'admin.sign_up' ||
        type === 'admin.report'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Notification;
