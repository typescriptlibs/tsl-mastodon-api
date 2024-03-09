/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { isAccount } from './Account.js';
import { isStatus } from './Status.js';
import { isTag } from './Tag.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON object for a Search structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Search structure.
 */
export function isSearch(json) {
    return (typeof json === 'object' &&
        typeof json.q === 'string');
}
/**
 * Tests the JSON object for a SearchResults structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a SearchResults structure.
 */
export function isSearchResults(json) {
    return (typeof json === 'object' &&
        Array.isArray(json.accounts) &&
        Array.isArray(json.hashtags) &&
        Array.isArray(json.statuses) &&
        (!json.accounts.length ||
            isAccount(json.accounts[0])) &&
        (!json.hashtags.length ||
            isTag(json.hashtags[0])) &&
        (!json.statuses.length ||
            isStatus(json.statuses[0])));
}
//# sourceMappingURL=Search.js.map