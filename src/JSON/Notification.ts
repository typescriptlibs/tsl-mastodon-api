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

/**
 * Possible notification types:
 * - 'mention' = Someone mentioned you in their status.
 * - 'status' = Someone you enabled notifications for has posted a status.
 * - 'reblog' = Someone boosted one of your statuses.
 * - 'follow' = Someone followed you.
 * - 'follow_request' = Someone requested to follow you.
 * - 'favourite' = Someone favourited one of your statuses.
 * - 'poll' = A poll you have voted in or created has ended.
 * - 'update' = A status you boosted with has been edited.
 * - 'admin.sign_up' = Someone signed up (optionally sent to admins).
 * - 'admin.report' = A new report has been filed.
 */
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

export function isNotification (
    json: Partial<Notification>
): json is Notification {
    return (
        typeof json === 'object' &&
        typeof json.account === 'object' &&
        typeof json.created_at === 'string' &&
        typeof json.id === 'string' &&
        typeof json.status === 'object' &&
        typeof json.type === 'string' &&
        isAccount( json.account ) &&
        isNotificationType( json.type ) &&
        isStatus( json.status )
    );
}

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

export function isNotificationType (
    type: string
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
