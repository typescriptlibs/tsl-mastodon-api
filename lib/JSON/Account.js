/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON for a Account structure.
 *
 * @param json
 * JSON to test.
 *
 * @return
 * True, if the JSON has a Account structure.
 */
export function isAccount(json) {
    return (typeof json === 'object' &&
        typeof json.acct === 'string' &&
        typeof json.avatar === 'string' &&
        typeof json.avatar_static === 'string' &&
        typeof json.created_at === 'string' &&
        typeof json.display_name === 'string' &&
        typeof json.emojis === 'object' &&
        typeof json.fields === 'object' &&
        typeof json.followers_count === 'number' &&
        typeof json.following_count === 'number' &&
        typeof json.header === 'string' &&
        typeof json.header_static === 'string' &&
        typeof json.id === 'string' &&
        typeof json.note === 'string' &&
        typeof json.statuses_count === 'number' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string' &&
        json.emojis instanceof Array &&
        json.fields instanceof Array);
}
/**
 * Tests the JSON array for a Account structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains Account structure.
 */
export function isAccounts(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isAccount(json[0] || {})));
}
//# sourceMappingURL=Account.js.map