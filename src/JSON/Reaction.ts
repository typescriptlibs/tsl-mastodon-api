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
 *  Declarations
 *
 * */

/**
 * Represents an emoji reaction to an Announcement.
 * @since 3.1.0
 */
export interface Reaction {
    /**
     * The total number of users who have added this reaction.
     * @since 3.1.0
     */
    count: number;
    /**
     * True, if the authorized user added this reaction.
     * @since 3.1.0
     */
    me?: boolean;
    /**
     * The emoji used for the reaction. Either a unicode emoji, or a custom
     * emoji’s shortcode.
     * @since 3.1.0
     */
    name: string;
    /**
     * A link to a non-animated version of the custom emoji, if the reaction is
     * a custom emoji
     * @since 3.1.0
     */
    static_url?: string;
    /**
     * A link to the custom emoji, if the reaction is a custom emoji.
     * @since 3.1.0
     */
    url?: string;
}

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
export function isReaction (
    json: Partial<Reaction>
): json is Reaction {
    return (
        typeof json === 'object' &&
        typeof json.count === 'number' &&
        typeof json.name === 'string'
    );
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
export function isReactions (
    json: Partial<Array<Partial<Reaction>>>
): json is Array<Reaction> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            isReaction( json[0] || {} )
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Reaction;
