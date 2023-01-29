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
export function isPoll(json) {
    return (typeof json === 'object' &&
        typeof json.emojis === 'object' &&
        typeof json.expired === 'boolean' &&
        typeof json.expires_at === 'string' &&
        typeof json.id === 'string' &&
        typeof json.options === 'object' &&
        typeof json.own_votes === 'object' &&
        typeof json.voted === 'boolean' &&
        typeof json.votes_count === 'number' &&
        isPollOptions(json.options));
}
export function isPollOptions(json) {
    return (typeof json === 'object');
}
//# sourceMappingURL=Poll.js.map