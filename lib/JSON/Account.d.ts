/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import type Emoji from './Emoji.js';
/**
 * Represents a user of Mastodon and their associated profile.
 */
export interface Account {
    /**
     * The Webfinger account URI. Equal to `username` for local users, or
     * `username@domain` for remote users.
     * @since 0.1.0
     */
    acct: string;
    /**
     * An image icon that is shown next to statuses and in the profile.
     * @since 0.1.0
     */
    avatar: string;
    /**
     * A static version of the avatar. Equal to `avatar` if its value is a
     * static image; different if `avatar` is an animated GIF.
     * @since 1.1.2
     */
    avatar_static: string;
    /**
     * Indicates that the account may perform automated actions, may not be
     * monitored, or identifies as a robot.
     * @since 2.4.0
     */
    bot: boolean;
    /**
     * When the account was created.
     * @since 0.1.0
     */
    created_at: string;
    /**
     * Whether the account has opted into discovery features such as the profile
     * directory.
     * @since 3.1.0
     */
    discoverable?: boolean;
    /**
     * The profile’s display name.
     * @since 0.1.0
     */
    display_name: string;
    /**
     * Custom emoji entities to be used when rendering the profile.
     * @since 2.4.0
     */
    emojis: Array<Emoji>;
    /**
     * Additional metadata attached to a profile as name-value pairs.
     * @since 2.4.0
     */
    fields: Array<unknown>;
    /**
     * The reported followers of this profile.
     * @since 0.1.0
     */
    followers_count: number;
    /**
     * The reported follows of this profile.
     * @since 0.1.0
     */
    following_count: number;
    /**
     * Indicates that the account represents a Group actor.
     * @since 3.1.0
     */
    group: boolean;
    /**
     * An image banner that is shown above the profile and in profile cards.
     * @since 0.1.0
     */
    header: string;
    /**
     * A static version of the header. Equal to `header` if its value is a
     * static image; different if `header` is an animated GIF.
     * @since 1.1.2
     */
    header_static: string;
    /**
     * The account id.
     * @since 0.1.0
     */
    id: string;
    /**
     * When the most recent status was posted.
     * @since 3.0.0
     */
    last_status_at?: string;
    /**
     * An extra attribute returned only when an account is silenced. If true,
     * indicates that the account should be hidden behind a warning screen.
     * @since 3.5.3
     */
    limited?: boolean;
    /**
     * Whether the account manually approves follow requests.
     * @since 0.1.0
     */
    locked: boolean;
    /**
     * Indicates that the profile is currently inactive and that its user has
     * moved to a new account.
     * @since 2.1.0
     */
    moved?: Account;
    /**
     * Whether the account has opted into discovery features such as the profile
     * directory.
     * @since 4.0.0
     */
    noindex?: boolean;
    /**
     * The profile’s bio or description.
     * @since 0.1.0
     */
    note: string;
    /**
     * How many statuses are attached to this account.
     * @since 0.1.0
     */
    statuses_count: number;
    /**
     * An extra attribute returned only when an account is suspended.
     * @since 3.3.0
     */
    suspended?: boolean;
    /**
     * The location of the user’s profile page.
     * @since 0.1.0
     */
    url: string;
    /**
     * The username of the account, not including domain.
     * @since 0.1.0
     */
    username: string;
}
/**
 * Tests the JSON for a Account structure.
 *
 * @param json
 * JSON to test.
 *
 * @return
 * True, if the JSON has a Account structure.
 */
export declare function isAccount(json: Partial<Account>): json is Account;
/**
 * Tests the JSON array for a Account structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains Account structure.
 */
export declare function isAccounts(json: Partial<Array<Partial<Account>>>): json is Array<Account>;
export default Account;
