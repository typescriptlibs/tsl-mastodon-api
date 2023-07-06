/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/JSON/Status" />
import type Account from './Account.js';
import type Application from './Application.js';
import type Card from './Card.js';
import type Emoji from './Emoji.js';
import type MediaAttachment from './MediaAttachment.js';
import type Poll from './Poll.js';
import type Tag from './Tag.js';
export interface MediaStatusPost {
    id?: string;
    in_reply_to_id?: string;
    media_ids: Array<string>;
    poll?: undefined;
    scheduled_at?: Date;
    sensitive?: boolean;
    spoiler_text?: string;
    status?: string;
    visibility?: StatusVisibility;
}
/**
 * Represents a status posted by an account.
 * @since 0.1.0
 */
export interface Status {
    /**
     * The account that authored this status.
     * @since 0.1.0
     */
    account: Account;
    /**
     * The application used to post this status.
     * @since 0.9.9
     */
    application?: Application;
    /**
     * Whether the authorized user has bookmarked this status.
     * @since 3.1.0
     */
    bookmarked?: boolean;
    /**
     * Preview card for links included within status content.
     * @since 2.6.0
     */
    card?: (Card | null);
    /**
     * The date when this status was created.
     * @since 0.1.0
     */
    created_at: string;
    /**
     * HTML-encoded status content.
     * @since 0.1.0
     */
    content: string;
    /**
     * Timestamp of when the status was last edited.
     * @since 3.5.0
     */
    edited_at?: string;
    /**
     * Custom emoji to be used when rendering status content.
     * @since 2.0.0
     */
    emojis: Array<Emoji>;
    /**
     * Whether the authorized user has favourited this status.
     * @since 0.1.0
     */
    favourited?: boolean;
    /**
     * How many favourites this status has received.
     * @since 0.1.0
     */
    favourites_count: number;
    /**
     * The authorized user's filter and keywords that matched this status.
     * @since 4.0.0
     */
    filtered?: Array<unknown>;
    /**
     * ID of the status in the database.
     * @since 0.1.0
     */
    id: string;
    /**
     * ID of the account that authored the status being replied to.
     * @since 0.1.0
     */
    in_reply_to_account_id?: (string | null);
    /**
     * ID of the status being replied to.
     * @since 0.1.0
     */
    in_reply_to_id?: (string | null);
    /**
     * Primary language of this status.
     * @since 1.4.0
     */
    language?: (string | null);
    /**
     * Media that is attached to this status.
     * @since 0.6.0
     */
    media_attachments: Array<MediaAttachment>;
    /**
     * Mentions of users within the status content.
     * @since 0.6.0
     */
    mentions: Array<StatusMention>;
    /**
     * Whether the authorized user has muted notifications for this status's
     * conversation.
     * @since 1.4.0
     */
    muted?: boolean;
    /**
     * Whether the authorized user has pinned this status. Only appears if the
     * status is pinnable.
     * @since 1.6.0
     */
    pinned?: boolean;
    /**
     * The poll attached to the status.
     * @since 2.8.0
     */
    poll?: (Poll | null);
    /**
     * The status being reblogged.
     * @since 0.1.0
     */
    reblog?: (Status | null);
    /**
     * Whether the authorized user has boosted this status.
     * @since 0.1.0
     */
    reblogged?: boolean;
    /**
     * How many boosts this status has received.
     * @since 0.1.0
     */
    reblogs_count: number;
    /**
     * How many replies this status has received.
     * @since 2.5.0
     */
    replies_count: number;
    /**
     * Is this status marked as sensitive content?
     * @since 0.9.9
     */
    sensitive: boolean;
    /**
     * Subject or summary line, below which status content is collapsed until
     * expanded.
     * @since 1.0.0
     */
    spoiler_text: string;
    /**
     * Hashtags used within the status content.
     * @since 0.6.0
     */
    tags: Array<Tag>;
    /**
     * Plain-text source of a status. Returned instead of content when status is
     * deleted, so the user may redraft from the source text without the client
     * having to reverse-engineer the original text from the HTML content.
     * @since 2.9.0
     */
    text?: (string | null);
    /**
     * URI of the status used for federation.
     * @since 0.1.0
     */
    uri: string;
    /**
     * A link to the status’s HTML representation.
     * @since 0.1.0
     */
    url?: (string | null);
    /**
     * Visibility of this status.
     * @since 0.9.9
     */
    visibility: StatusVisibility;
}
export interface StatusContext {
    ancestors: Array<Status>;
    descendants: Array<Status>;
}
/**
 * Mention of a user within the status content.
 * @since 0.6.0
 */
export interface StatusMention {
    /**
     * URI of the mentioned user. Equivalent to `username` for local users, or
     * `username@domain` for remote users.
     * @since 0.6.0
     */
    acct: string;
    /**
     * The account ID of the mentioned user.
     * @since 0.6.0
     */
    id: string;
    /**
     * The username of the mentioned user.
     * @since 0.6.0
     */
    username: string;
    /**
     * The location of the mentioned user’s profile.
     * @since 0.6.0
     */
    url: string;
}
export type StatusPost = (MediaStatusPost | TextStatusPost);
export interface StatusSchedule {
    id: string;
    media_attachments: Array<MediaAttachment>;
    params: Partial<Status>;
    scheduled_at: string;
}
/**
 * Visibility of a status.
 *
 * - `public` = Visible to everyone, shown in public timelines.
 * - `unlisted` = Visible to public, but not included in public timelines.
 * - `private` = Visible to followers only, and to any mentioned users.
 * - `direct` = Visible only to mentioned users.
 *
 * @since 0.9.9
 */
export type StatusVisibility = ('direct' | 'private' | 'public' | 'unlisted');
export interface TextStatusPost {
    id?: string;
    in_reply_to_id?: string;
    media_ids?: undefined;
    poll?: TextStatusPostPoll;
    scheduled_at?: Date;
    sensitive?: boolean;
    spoiler_text?: string;
    status: string;
    visibility?: StatusVisibility;
}
export interface TextStatusPostPoll {
    expires_in: number;
    hide_totals?: boolean;
    multiple?: boolean;
    options: Array<string>;
}
/**
 * Tests the JSON object for a Status structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Status structure.
 */
export declare function isStatus(json: Partial<Status>): json is Status;
/**
 * Tests the JSON object for a StatusContext structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a StatusContext structure.
 */
export declare function isStatusContext(json: Partial<StatusContext>): json is StatusContext;
/**
 * Tests a JSON array for a Status structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Status structure.
 */
export declare function isStatuses(json: Partial<Array<Partial<Status>>>): json is Array<Status>;
/**
 * Tests the JSON object for a StatusMention structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a StatusMention structure.
 */
export declare function isStatusMention(json: Partial<StatusMention>): json is StatusMention;
/**
 * Tests the JSON object for a StatusSchedule structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a StatusSchedule structure.
 */
export declare function isStatusSchedule(json: Partial<StatusSchedule>): json is StatusSchedule;
export default Status;
