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
 * Tests JSON object for CustomEmoji structure.
 *
 * @param json
 * JSON to test.
 *
 * @return
 * True, if the JSON has CustomEmoji structure.
 */
export function isEmoji(json) {
    return (typeof json === 'object' &&
        typeof json.category === 'string' &&
        typeof json.shortcode === 'string' &&
        typeof json.static_url === 'string' &&
        typeof json.url === 'string' &&
        typeof json.visible_in_picker === 'boolean');
}
//# sourceMappingURL=Emoji.js.map