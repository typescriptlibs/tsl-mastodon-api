/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/Notification" />
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
/**
 * Tests the JSON object for a Notification structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Notification structure.
 */
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
/**
 * Tests the JSON array for a Notification structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Notification structure.
 */
export function isNotifications(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isNotification(json[0] || {})));
}
/**
 * Tests the type string for a known Notification type.
 *
 * @param type
 * Type string to test.
 *
 * @return
 * True, if the type string is a known Notification type.
 */
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