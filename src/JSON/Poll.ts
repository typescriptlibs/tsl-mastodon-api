/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/// <amd-module name="tsl-mastodon-api/JSON/Poll" />

/* *
 *
 *  Imports
 *
 * */

import type Emoji from './Emoji.js';

/* *
 *
 *  Declarations
 *
 * */

/**
 * Represents a poll attached to a status.
 * @since 2.8.0
 */
export interface Poll {
    /**
     * Custom emoji to be used for rendering poll options.
     * @since 2.8.0
     */
    emojis: Array<Emoji>;
    /**
     * Whether the poll is currently expired.
     * @since 2.8.0
     */
    expired: boolean;
    /**
     * When the poll ends.
     * @since 2.8.0
     */
    expires_at?: ( string | null );
    /**
     * The ID of the poll in the database.
     * @since 2.8.0
     */
    id: string;
    /**
     * Whether the poll allow multiple-choice answers.
     * @since 2.8.0
     */
    multiple?: boolean;
    /**
     * Possible answers for the poll.
     * @since 2.8.0
     */
    options: Array<PollOption>;
    /**
     * When called with a user token, which options has the authorized user
     * chosen. Contains an array of index values for `options`.
     * @since 2.8.0
     */
    own_votes?: Array<number>;
    /**
     * When called with a user token, whether the authorized user has voted.
     * @since 2.8.0
     */
    voted?: boolean;
    /**
     * How many unique accounts have voted on a multiple-choice poll.
     * @since 2.8.0
     */
    voters_count?: ( number | null );
    /**
     * How many votes have been received.
     * @since 2.8.0
     */
    votes_count: number;
}

/**
 * Possible answer for the poll.
 * @since 2.8.0
 */
export interface PollOption {
    /**
     * The text value of the poll option.
     * @since 2.8.0
     */
    title: string;
    /**
     * The total number of received votes for this option.
     * @since 2.8.0
     */
    votes_count?: ( number | null );
}

/**
 * Interface to post poll votes.
 */
export interface PollVotePost {
    choices: Array<number>;
}

/* *
 *
 *  Functions
 *
 * */

/**
 * Tests the JSON object for a Poll structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Poll structure.
 */
export function isPoll (
    json: Partial<Poll>
): json is Poll {
    return (
        typeof json === 'object' &&
        typeof json.emojis === 'object' &&
        typeof json.expired === 'boolean' &&
        typeof json.expires_at === 'string' &&
        typeof json.id === 'string' &&
        typeof json.options === 'object' &&
        typeof json.own_votes === 'object' &&
        typeof json.voted === 'boolean' &&
        typeof json.votes_count === 'number' &&
        isPollOptions( json.options )
    );
}

/**
 * Tests a JSON array for a PollOption structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a PollOption structure.
 */
export function isPollOptions (
    json: Partial<Array<Partial<PollOption>>>
): json is Partial<Array<Partial<PollOption>>> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            typeof json[0]?.title === 'string'
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Poll;
