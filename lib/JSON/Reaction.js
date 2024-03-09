/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/Reaction" />
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON object for a Reaction structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Reaction structure.
 */
export function isReaction(json) {
    return (typeof json === 'object' &&
        typeof json.count === 'number' &&
        typeof json.name === 'string');
}
/**
 * Tests the JSON array for a Reaction structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Reaction structure.
 */
export function isReactions(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isReaction(json[0] || {})));
}
//# sourceMappingURL=Reaction.js.map