/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/* *
 *
 *  Functions
 *
 * */
export function isAccount(json) {
    return (typeof json === 'object' &&
        typeof json.acct === 'string' &&
        typeof json.created_at === 'string' &&
        typeof json.display_name === 'string' &&
        typeof json.followers_count === 'number' &&
        typeof json.following_count === 'number' &&
        typeof json.id === 'string' &&
        typeof json.last_status_at === 'string' &&
        typeof json.statuses_count === 'number' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string');
}
export function isAccounts(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isAccount(json[0] || {})));
}
//# sourceMappingURL=Account.js.map