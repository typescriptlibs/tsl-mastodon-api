/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/Announcement" />
import type Emoji from './Emoji.js';
import type Reaction from './Reaction.js';
import type Tag from './Tag.js';
/**
 * Represents an announcement set by an administrator.
 * @since 3.1.0
 */
export interface Announcement {
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
    ends_at?: (string | null);
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
    published?: boolean;
    /**
     * When the announcement was published.
     * @since 3.1.0
     */
    published_at?: (string | null);
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
    starts_at?: (string | null);
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
    updated_at?: (string | null);
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
/**
 * Tests the JSON object for a Announcement structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Announcement structure.
 */
export declare function isAnnouncement(json: Partial<Announcement>): json is Announcement;
/**
 * Tests the JSON object for a AnnouncementAccount structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementAccount structure.
 */
export declare function isAnnouncementAccount(json: Partial<AnnouncementAccount>): json is AnnouncementAccount;
/**
 * Tests the JSON object for a AnnouncementAccount structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementAccount structure.
 */
export declare function isAnnouncementAccounts(json: Partial<Array<Partial<AnnouncementAccount>>>): json is Array<AnnouncementAccount>;
/**
 * Tests the JSON array for a Announcement structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Announcement structure.
 */
export declare function isAnnouncements(json: Partial<Array<Partial<Announcement>>>): json is Array<Announcement>;
/**
 * Tests the JSON object for a AnnouncementStatus structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementStatus structure.
 */
export declare function isAnnouncementStatus(json: Partial<AnnouncementStatus>): json is AnnouncementStatus;
/**
 * Tests the JSON object for a AnnouncementStatus structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementStatus structure.
 */
export declare function isAnnouncementStatuses(json: Partial<Array<Partial<AnnouncementStatus>>>): json is Array<AnnouncementStatus>;
export default Announcement;
