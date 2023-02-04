/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/* *
 *
 *  Imports
 *
 * */

import type Emoji from './Emoji.js';
import type Reaction from './Reaction.js';
import type Tag from './Tag.js';

import { isEmojis } from './Emoji.js';
import { isReactions } from './Reaction.js';
import { isTags } from './Tag.js';

/* *
 *
 *  Declarations
 *
 * */

/**
 * Represents an announcement set by an administrator.
 * @since 3.1.0
 */
interface Announcement {
    /**
     * Whether the announcement should start and end on dates only instead of
     * datetimes. Will be false if there is no `starts_at` or `ends_at` time.
     * @since 3.1.0
     */
    all_day: boolean;
    /**
     * The text of the announcement.
     * @since 3.1.0
     */
    content: string;
    /**
     * Custom emoji used in the announcement text.
     * @since 3.1.0
     */
    emojis: Array<Emoji>;
    /**
     * When the announcement will start.
     * @since 3.1.0
     */
    ends_at?: ( string | null );
    /**
     * The ID of the announcement in the database.
     * @since 3.1.0
     */
    id: string;
    /**
     * Accounts mentioned in the announcement text.
     * @since 3.1.0
     */
    mentions: Array<AnnouncementAccount>;
    /**
     * Whether the announcement is currently active.
     * @since 3.1.0
     */
    published: boolean;
    /**
     * When the announcement was published.
     * @since 3.1.0
     */
    published_at?: ( string | null );
    /**
     * Whether the announcement has been read by the current user.
     * @since 3.1.0
     */
    read?: boolean;
    /**
     * Emoji reactions attached to the announcement.
     * @since 3.1.0
     */
    reactions: Array<Reaction>;
    /**
     * When the announcement will start.
     * @since 3.1.0
     */
    starts_at?: ( string | null );
    /**
     * Statuses linked in the announcement text.
     * @since 3.1.0
     */
    statuses: Array<AnnouncementStatus>;
    /**
     * Tags linked in the announcement text.
     * @since 3.1.0
     */
    tags: Array<Tag>;
    /**
     * When the announcement was last updated.
     * @since 3.1.0
     */
    updated_at?: ( string | null );
}

/**
 * Account mentioned in the announcement text.
 * @since 3.1.0
 */
export interface AnnouncementAccount {
    /**
     * URI of the mentioned user. Equivalent to `username` for local users, or
     * `username@domain` for remote users.
     * @since 3.1.0
     */
    acct: string;
    /**
     * The account ID of the mentioned user.
     * @since 3.1.0
     */
    id: string;
    /**
     * The location of the mentioned user’s profile.
     * @since 3.1.0
     */
    url: string;
    /**
     * The username of the mentioned user.
     * @since 3.1.0
     */
    username: string;
}

/**
 * Status linked in the announcement text.
 * @since 3.1.0
 */
export interface AnnouncementStatus {
    /**
     * The ID of an attached Status in the database.
     * @since 3.1.0
     */
    id: string;
    /**
     * The URL of an attached Status.
     * @since 3.1.0
     */
    url: string;
}

/* *
 *
 *  Functions
 *
 * */

/**
 * Tests the JSON object for a Announcement structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Announcement structure.
 */
export function isAnnouncement (
    json: Partial<Announcement>
): json is Announcement {
    return (
        typeof json === 'object' &&
        typeof json.all_day === 'boolean' &&
        typeof json.content === 'string' &&
        typeof json.emojis === 'object' &&
        typeof json.id === 'string' &&
        typeof json.mentions === 'object' &&
        typeof json.published === 'boolean' &&
        typeof json.reactions === 'object' &&
        typeof json.statuses === 'object' &&
        typeof json.tags === 'object' &&
        isAnnouncementAccounts( json.mentions ) &&
        isAnnouncementStatuses( json.statuses ) &&
        isEmojis( json.emojis ) &&
        isReactions( json.reactions ) &&
        isTags( json.tags )
    );
}

/**
 * Tests the JSON object for a AnnouncementAccount structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementAccount structure.
 */
export function isAnnouncementAccount (
    json: Partial<AnnouncementAccount>
): json is AnnouncementAccount {
    return (
        typeof json === 'object' &&
        typeof json.acct === 'string' &&
        typeof json.id === 'string' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string'
    );
}

/**
 * Tests the JSON object for a AnnouncementAccount structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementAccount structure.
 */
export function isAnnouncementAccounts (
    json: Partial<Array<Partial<AnnouncementAccount>>>
): json is Array<AnnouncementAccount> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            isAnnouncementAccount( json[0] || {} )
        )
    );
}

/**
 * Tests the JSON array for a Announcement structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Announcement structure.
 */
export function isAnnouncements (
    json: Partial<Array<Partial<Announcement>>>
): json is Array<Announcement> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            isAnnouncement( json[0] || {} )
        )
    );
}


/**
 * Tests the JSON object for a AnnouncementStatus structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementStatus structure.
 */
export function isAnnouncementStatus (
    json: Partial<AnnouncementStatus>
): json is AnnouncementStatus {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.url === 'string'
    );
}

/**
 * Tests the JSON object for a AnnouncementStatus structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementStatus structure.
 */
export function isAnnouncementStatuses (
    json: Partial<Array<Partial<AnnouncementStatus>>>
): json is Array<AnnouncementStatus> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            isAnnouncementStatus( json[0] || {} )
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Announcement;
