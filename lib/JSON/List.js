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
 * Tests the JSON object for a List structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a List structure.
 */
export function isList(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.title === 'string');
}
/**
 * Tests the JSON array for a List structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a List structure.
 */
export function isLists(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isList(json[0] || {})));
}
//# sourceMappingURL=List.js.map