/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { isAccount } from './Account.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON object for an AdminAccount structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AdminReport structure.
 */
export function isAdminAccount(json) {
    return (typeof json === 'object' &&
        typeof json.created_at === 'string' &&
        typeof json.email === 'string' &&
        typeof json.id === 'string' &&
        typeof json.username === 'string' &&
        (typeof json.account === 'object' &&
            isAccount(json.account)) &&
        (typeof json.domain === 'undefined' ||
            json.domain === null ||
            typeof json.domain === 'string') &&
        (typeof json.ip === 'undefined' ||
            json.ip === null ||
            typeof json.ip === 'string') &&
        (typeof json.ips === 'undefined' ||
            typeof json.ips === 'object' &&
                isAdminAccountIPs(json.ips)));
}
/**
 * Tests the JSON object for an AdminAccountIP structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an AdminAccountIP structure.
 */
export function isAdminAccountIP(json) {
    return (typeof json === 'object' &&
        typeof json.ip === 'string' &&
        typeof json.used_at === 'string');
}
/**
 * Tests the JSON object for an AdminAccountIP array structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an AdminAccountIP array structure.
 */
export function isAdminAccountIPs(json) {
    return (typeof json === 'object' &&
        json instanceof Array &&
        (!json.length ||
            isAdminAccountIP(json[0])));
}
//# sourceMappingURL=AdminAccount.js.map