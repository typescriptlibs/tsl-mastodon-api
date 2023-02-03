/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import Account from './Account.js';
import Status from './Status.js';
/**
 * Represents a notification of an event relevant to the user.
 * @since 0.9.9
 */
export interface Notification {
    /**
     * The account that performed the action that generated the notification.
     * @since 0.9.9
     */
    account: Account;
    /**
     * The timestamp of the notification.
     * @since 0.9.9
     */
    created_at: string;
    /**
     * The id of the notification in the database.
     * @since 0.9.9
     */
    id: string;
    /**
     * Report that was the object of the notification. Attached when `type` of
     * the notification is `admin.report`.
     * @since 4.0.0
     */
    report?: unknown;
    /**
     * The type of event that resulted in the notification.
     * @since 0.9.9
     */
    type: NotificationType;
    /**
     * Status that was the object of the notification. Attached when `type` of
     * the notification is `favourite`, `reblog`, `status`, `mention`, `poll`,
     * or `update`.
     * @since 0.9.9
     */
    status?: Status;
}
/**
 * The type of event that resulted in the notification.
 *
 * Possible notification types:
 * - 'mention' = Someone mentioned you in their status.
 * - 'status' = Someone you enabled notifications for has posted a status.
 *              (since 3.3.0)
 * - 'reblog' = Someone boosted one of your statuses.
 * - 'follow' = Someone followed you.
 * - 'follow_request' = Someone requested to follow you. (since 3.1.0)
 * - 'favourite' = Someone favourited one of your statuses.
 * - 'poll' = A poll you have voted in or created has ended. (since 2.8.0)
 * - 'update' = A status you boosted with has been edited. (since 3.5.0)
 * - 'admin.sign_up' = Someone signed up (optionally sent to admins).
 *                     (since 3.5.0)
 * - 'admin.report' = A new report has been filed. (since 4.0.0)
 *
 * @since 0.9.9
 */
export type NotificationType = 'mention' | 'status' | 'reblog' | 'follow' | 'follow_request' | 'favourite' | 'poll' | 'update' | 'admin.sign_up' | 'admin.report';
/**
 * Tests the JSON object for a Notification structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Notification structure.
 */
export declare function isNotification(json: Partial<Notification>): json is Notification;
/**
 * Tests a JSON array for a Notification structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Notification structure.
 */
export declare function isNotifications(json: Partial<Array<Partial<Notification>>>): json is Array<Notification>;
/**
 * Tests the type string for a known Notification type.
 *
 * @param type
 * Type string to test.
 *
 * @return
 * True, if the type string is a known Notification type.
 */
export declare function isNotificationType(type: string): type is NotificationType;
export default Notification;
