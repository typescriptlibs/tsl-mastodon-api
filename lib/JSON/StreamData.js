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
 * Tests the JSON object for a StreamData structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a StreamData structure.
 */
export function isStreamData(json) {
    return (typeof json === 'object' &&
        typeof json.event === 'string' &&
        Array.isArray(json.stream) &&
        (typeof json.payload === 'undefined' ||
            typeof json.payload === 'string' ||
            typeof json.payload === 'object'));
}
//# sourceMappingURL=StreamData.js.map