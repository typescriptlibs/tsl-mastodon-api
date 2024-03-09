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
 * Tests the JSON object for a Poll structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Poll structure.
 */
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
/**
 * Tests a JSON array for a PollOption structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a PollOption structure.
 */
export function isPollOptions(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            typeof json[0]?.title === 'string'));
}
//# sourceMappingURL=Poll.js.map