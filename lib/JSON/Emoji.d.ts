/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/Emoji" />
/**
 * Represents a custom emoji.
 * @since 2.0.0
 */
export interface Emoji {
    /**
     * Used for sorting custom emoji in the picker.
     * @since 3.0.0
     */
    category: string;
    /**
     * The name of the custom emoji.
     * @since 2.0.0
     */
    shortcode: string;
    /**
     * A link to a static copy of the custom emoji.
     * @since 2.0.0
     */
    static_url: string;
    /**
     * A link to the custom emoji.
     * @since 2.0.0
     */
    url: string;
    /**
     * Whether this Emoji should be visible in the picker or unlisted.
     * @since 2.0.0
     */
    visible_in_picker: boolean;
}
/**
 * Tests the JSON object for a Emoji structure.
 *
 * @param json
 * JSON to test.
 *
 * @return
 * True, if the JSON has a Emoji structure.
 */
export declare function isEmoji(json: Partial<Emoji>): json is Emoji;
/**
 * Tests the JSON array for a Emoji structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Emoji structure.
 */
export declare function isEmojis(json: Partial<Array<Partial<Emoji>>>): json is Array<Emoji>;
export default Emoji;
