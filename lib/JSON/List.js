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
/**
 * Tests JSON object for a List structure.
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
 * Tests JSON array contains a List structure.
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