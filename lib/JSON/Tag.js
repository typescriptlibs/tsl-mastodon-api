/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/Tag" />
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON object for a Tag structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Tag structure.
 */
export function isTag(json) {
    return (typeof json === 'object' &&
        typeof json.name === 'string' &&
        typeof json.url === 'string' &&
        (typeof json.history === 'undefined' ||
            Array.isArray(json.history) &&
                (!json.history.length ||
                    isTagStatistic(json.history[0] || {}))));
}
/**
 * Tests the JSON array for a Tag structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Tag structure.
 */
export function isTags(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isTag(json[0] || {})));
}
/**
 * Tests the JSON object for a TagStatistic structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a TagStatistic structure.
 */
export function isTagStatistic(json) {
    return (typeof json === 'object' &&
        typeof json.accounts === 'number' &&
        typeof json.day === 'number' &&
        typeof json.uses === 'number');
}
//# sourceMappingURL=Tag.js.map