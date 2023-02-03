/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
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
/**
 * Tests the JSON object for a Tag structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Tag structure.
 */
export declare function isTag(json: Partial<Tag>): json is Tag;
export declare function isTags(json: Partial<Array<Partial<Tag>>>): json is Array<Tag>;
/**
 * Tests the JSON object for a TagStatistic structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a TagStatistic structure.
 */
export declare function isTagStatistic(json: Partial<TagStatistic>): json is TagStatistic;
export default Tag;
