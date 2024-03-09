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
 *  Declarations
 *
 * */

/**
 * Represents a hashtag used within the content of a status.
 * @since 0.9.0
 */
export interface Tag {
    /**
     * Usage statistics for given days (typically the past week).
     * @since 2.4.1
     */
    history?: Array<TagStatistic>;
    /**
     * The value of the hashtag after the # sign.
     * @since 0.9.0
     */
    name: string;
    /**
     * A link to the hashtag on the instance.
     * @since 0.9.0
     */
    url: string;
}

/**
 * Usage statistic for given day.
 * @since 2.4.1
 */
export interface TagStatistic {
    /**
     * The total of accounts using the tag within that day.
     * @since 2.4.1
     */
    accounts: number;
    /**
     * UNIX timestamp on midnight of the given day.
     * @since 2.4.1
     */
    day: number;
    /**
     * Whether the authorized user is following this tag.
     * @since 4.0.0
     */
    following?: boolean;
    /**
     * The counted usage of the tag within that day.
     * @since 2.4.1
     */
    uses: number;
}

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
export function isTag (
    json: Partial<Tag>
): json is Tag {
    return (
        typeof json === 'object' &&
        typeof json.name === 'string' &&
        typeof json.url === 'string' &&
        (
            typeof json.history === 'undefined' ||
            Array.isArray( json.history ) &&
            (
                !json.history.length ||
                isTagStatistic( json.history[0] || {} )
            )
        )
    );
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
export function isTags (
    json: Partial<Array<Partial<Tag>>>
): json is Array<Tag> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            isTag( json[0] || {} )
        )
    );
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
export function isTagStatistic (
    json: Partial<TagStatistic>
): json is TagStatistic {
    return (
        typeof json === 'object' &&
        typeof json.accounts === 'number' &&
        typeof json.day === 'number' &&
        typeof json.uses === 'number'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Tag;
