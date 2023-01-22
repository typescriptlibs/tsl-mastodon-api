/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { isAccount } from './Account.js';
import { isStatus } from './Status.js';
import { isTag } from './Tag.js';
/* *
 *
 *  Functions
 *
 * */
export function isSearch(json) {
    return (typeof json === 'object' &&
        typeof json.q === 'string');
}
export function isSearchResults(json) {
    return (typeof json === 'object' &&
        json.accounts instanceof Array &&
        json.hashtags instanceof Array &&
        json.statuses instanceof Array &&
        (!json.accounts.length ||
            isAccount(json.accounts[0])) &&
        (!json.hashtags.length ||
            isTag(json.hashtags[0])) &&
        (!json.statuses.length ||
            isStatus(json.statuses[0])));
}
//# sourceMappingURL=Search.js.map