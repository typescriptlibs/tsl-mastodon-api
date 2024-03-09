/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/Emoji" />
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON object for a Emoji structure.
 *
 * @param json
 * JSON to test.
 *
 * @return
 * True, if the JSON has a Emoji structure.
 */
export function isEmoji(json) {
    return (typeof json === 'object' &&
        typeof json.category === 'string' &&
        typeof json.shortcode === 'string' &&
        typeof json.static_url === 'string' &&
        typeof json.url === 'string' &&
        typeof json.visible_in_picker === 'boolean');
}
/**
 * Tests the JSON array for a Emoji structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Emoji structure.
 */
export function isEmojis(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isEmoji(json[0] || {})));
}
//# sourceMappingURL=Emoji.js.map