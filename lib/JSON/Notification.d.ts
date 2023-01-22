/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import Account from './Account.js';
import Status from './Status.js';
export interface Notification {
    account: Account;
    created_at: string;
    id: string;
    type: NotificationType;
    status: Status;
}
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
export type NotificationType = 'mention' | 'status' | 'reblog' | 'follow' | 'follow_request' | 'favourite' | 'poll' | 'update' | 'admin.sign_up' | 'admin.report';
export declare function isNotification(json: Partial<Notification>): json is Notification;
export declare function isNotifications(json: Partial<Array<Partial<Notification>>>): json is Array<Notification>;
export declare function isNotificationType(type: string): type is NotificationType;
export default Notification;
