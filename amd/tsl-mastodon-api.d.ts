/// <amd-module name="tsl-mastodon-api/lib/JSON/Emoji" />
declare module "tsl-mastodon-api/lib/JSON/Emoji" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
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
    export function isEmoji(json: Partial<Emoji>): json is Emoji;
    /**
     * Tests the JSON array for a Emoji structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Emoji structure.
     */
    export function isEmojis(json: Partial<Array<Partial<Emoji>>>): json is Array<Emoji>;
    export default Emoji;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Account" />
declare module "tsl-mastodon-api/lib/JSON/Account" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import type Emoji from "tsl-mastodon-api/lib/JSON/Emoji";
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
    export function isAccount(json: Partial<Account>): json is Account;
    /**
     * Tests the JSON array for a Account structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains Account structure.
     */
    export function isAccounts(json: Partial<Array<Partial<Account>>>): json is Array<Account>;
    export default Account;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Reaction" />
declare module "tsl-mastodon-api/lib/JSON/Reaction" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
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
    /**
     * Tests the JSON object for a Reaction structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Reaction structure.
     */
    export function isReaction(json: Partial<Reaction>): json is Reaction;
    /**
     * Tests the JSON array for a Reaction structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Reaction structure.
     */
    export function isReactions(json: Partial<Array<Partial<Reaction>>>): json is Array<Reaction>;
    export default Reaction;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Tag" />
declare module "tsl-mastodon-api/lib/JSON/Tag" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
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
    export function isTag(json: Partial<Tag>): json is Tag;
    /**
     * Tests the JSON array for a Tag structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Tag structure.
     */
    export function isTags(json: Partial<Array<Partial<Tag>>>): json is Array<Tag>;
    /**
     * Tests the JSON object for a TagStatistic structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a TagStatistic structure.
     */
    export function isTagStatistic(json: Partial<TagStatistic>): json is TagStatistic;
    export default Tag;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Announcement" />
declare module "tsl-mastodon-api/lib/JSON/Announcement" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import type Emoji from "tsl-mastodon-api/lib/JSON/Emoji";
    import type Reaction from "tsl-mastodon-api/lib/JSON/Reaction";
    import type Tag from "tsl-mastodon-api/lib/JSON/Tag";
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
    export function isAnnouncement(json: Partial<Announcement>): json is Announcement;
    /**
     * Tests the JSON object for a AnnouncementAccount structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AnnouncementAccount structure.
     */
    export function isAnnouncementAccount(json: Partial<AnnouncementAccount>): json is AnnouncementAccount;
    /**
     * Tests the JSON object for a AnnouncementAccount structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AnnouncementAccount structure.
     */
    export function isAnnouncementAccounts(json: Partial<Array<Partial<AnnouncementAccount>>>): json is Array<AnnouncementAccount>;
    /**
     * Tests the JSON array for a Announcement structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Announcement structure.
     */
    export function isAnnouncements(json: Partial<Array<Partial<Announcement>>>): json is Array<Announcement>;
    /**
     * Tests the JSON object for a AnnouncementStatus structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AnnouncementStatus structure.
     */
    export function isAnnouncementStatus(json: Partial<AnnouncementStatus>): json is AnnouncementStatus;
    /**
     * Tests the JSON object for a AnnouncementStatus structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AnnouncementStatus structure.
     */
    export function isAnnouncementStatuses(json: Partial<Array<Partial<AnnouncementStatus>>>): json is Array<AnnouncementStatus>;
    export default Announcement;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Application" />
declare module "tsl-mastodon-api/lib/JSON/Application" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    /**
     * Represents an application that interfaces with the REST API to access
     * accounts or post statuses.
     */
    export interface Application {
        /**
         * Client ID key, to be used for obtaining OAuth tokens.
         * @since 0.9.9
         */
        client_id?: string;
        /**
         * Client secret key, to be used for obtaining OAuth tokens.
         * @since 0.9.9
         */
        client_secret?: string;
        /**
         * The name of your application.
         * @since 0.9.9
         */
        name: string;
        /**
         * Used for Push Streaming API. Returned with POST /api/v1/apps. Equivalent
         * to WebPushSubscription#server_key.
         * @since 2.8.0
         */
        vapid_key?: string;
        /**
         * The website associated with your application.
         * @since 0.9.9
         */
        website?: (string | null);
    }
    export default Application;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Card" />
declare module "tsl-mastodon-api/lib/JSON/Card" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    /**
     * Represents a rich preview card that is generated using OpenGraph tags from a
     * URL.
     */
    interface BaseCard {
        /**
         * Description of preview.
         * @since 1.0.0
         */
        description: string;
        /**
         * Title of linked resource.
         * @since 1.0.0
         */
        title: string;
        /**
         * The type of the preview card.
         * @since 1.3.0
         */
        type: string;
        /**
         * Location of linked resource.
         * @since 1.0.0
         */
        url: string;
    }
    /**
     * Represents a rich preview card that is generated using OpenGraph tags from an
     * URL.
     */
    export type Card = (LinkCard | PhotoCard | IframeCard | VideoCard);
    /**
     * Represents an iframe preview card that is generated using OpenGraph tags from
     * an URL. Iframe is not currently accepted, so won’t show up in practice.
     */
    export interface IframeCard extends BaseCard {
        /**
         * The type of the preview card.
         * @since 1.3.0
         */
        type: 'rich';
    }
    /**
     * Represents a link preview card that is generated using OpenGraph tags from an
     * URL.
     */
    export interface LinkCard extends BaseCard {
        /**
         * The type of the preview card.
         * @since 1.3.0
         */
        type: 'link';
    }
    /**
     * Represents a photo preview card that is generated using OpenGraph tags from
     * an URL.
     */
    export interface PhotoCard extends BaseCard {
        /**
         * The author of the original resource.
         * @since 1.3.0
         */
        author_name: string;
        /**
         * A link to the author of the original resource.
         * @since 1.3.0
         */
        author_url: string;
        /**
         * A hash computed by
         * [the BlurHash algorithm](https://github.com/woltapp/blurhash), for
         * generating colorful preview thumbnails when media has not been downloaded
         * yet.
         * @since 3.2.0
         */
        blurhash: string;
        /**
         * Used for photo embeds, instead of custom `html`.
         * @since 2.1.0
         */
        embed_url: string;
        /**
         * Height of preview, in pixels.
         * @since 1.3.0
         */
        height: number;
        /**
         * Preview thumbnail.
         * @since 1.0.0
         */
        image?: string;
        /**
         * The provider of the original resource.
         * @since 1.3.0
         */
        provider_name: string;
        /**
         * A link to the provider of the original resource.
         * @since 1.3.0
         */
        provider_url: string;
        /**
         * The type of the preview card.
         * @since 1.3.0
         */
        type: 'photo';
        /**
         * Width of preview, in pixels.
         * @since 1.3.0
         */
        width: number;
    }
    /**
     * Represents a video preview card that is generated using OpenGraph tags from
     * an URL.
     */
    export interface VideoCard extends BaseCard {
        /**
         * The author of the original resource.
         * @since 1.3.0
         */
        author_name: string;
        /**
         * A link to the author of the original resource.
         * @since 1.3.0
         */
        author_url: string;
        /**
         * A hash computed by
         * [the BlurHash algorithm](https://github.com/woltapp/blurhash), for
         * generating colorful preview thumbnails when media has not been downloaded
         * yet.
         * @since 3.2.0
         */
        blurhash?: string;
        /**
         * Height of preview, in pixels.
         * @since 1.3.0
         */
        height: number;
        /**
         * HTML to be used for generating the preview card.
         * @since 1.3.0
         */
        html: string;
        /**
         * Preview thumbnail.
         * @since 1.0.0
         */
        image?: string;
        /**
         * The provider of the original resource.
         * @since 1.3.0
         */
        provider_name: string;
        /**
         * A link to the provider of the original resource.
         * @since 1.3.0
         */
        provider_url: string;
        /**
         * The type of the preview card.
         * @since 1.3.0
         */
        type: 'video';
        /**
         * Width of preview, in pixels.
         * @since 1.3.0
         */
        width: number;
    }
    export default Card;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/List" />
declare module "tsl-mastodon-api/lib/JSON/List" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import Account from "tsl-mastodon-api/lib/JSON/Account";
    /**
     * Represents a list of some users that the authenticated user follows.
     * @since 2.1.0
     */
    export interface List {
        /**
         * The internal database ID of the list.
         * @since 2.1.0
         */
        id: string;
        /**
         * Which replies should be shown in the list.
         * @since 3.3.0
         */
        replies_policy?: ListReplyPolicy;
        /**
         * The user-defined title of the list.
         * @since 2.1.0
         */
        title: string;
    }
    export type ListAccounts = Array<Account>;
    /**
     * Interface to remove accounts from a list.
     */
    export interface ListAccountsDelete {
        account_ids: Array<string>;
    }
    /**
     * Interface to add accounts to a list.
     */
    export interface ListAccountsPost {
        account_ids: Array<string>;
    }
    /**
     * Interface to post a new list, or update an existing list.
     */
    export interface ListPost {
        /**
         * The internal database ID of the list.
         * @since 2.1.0
         */
        id?: string;
        /**
         * Which replies should be shown in the list.
         * @since 3.3.0
         */
        replies_policy?: string;
        /**
         * The user-defined title of the list.
         * @since 2.1.0
         */
        title: string;
    }
    /**
     * Which replies should be shown in the list.
     * @since 3.3.0
     */
    export type ListReplyPolicy = ('followed' | 'list' | 'none');
    /**
     * Tests the JSON object for a List structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a List structure.
     */
    export function isList(json: Partial<List>): json is List;
    /**
     * Tests the JSON array for a List structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a List structure.
     */
    export function isLists(json: Partial<Array<Partial<List>>>): json is Array<List>;
    export default List;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/MediaAttachment" />
declare module "tsl-mastodon-api/lib/JSON/MediaAttachment" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    /**
     * Represents a file or media attachment that can be added to a status.
     * @since 2.9.1
     */
    export interface AudioAttachment {
        /**
         * A hash computed by the BlurHash algorithm, for generating colorful
         * preview thumbnails when media has not been downloaded yet.
         * @since 2.8.1
         */
        blurhash?: (string | null);
        /**
         * Alternate text that describes what is in the media attachment, to be used
         * for the visually impaired or when media attachments do not load.
         * @since 2.0.0
         */
        description?: (string | null);
        /**
         * The ID of the attachment in the database.
         * @since 0.6.0
         */
        id: string;
        /**
         * Metadata returned by Paperclip.
         * @since 1.5.0
         */
        meta: AudioAttachmentMeta;
        /**
         * The location of a scaled-down preview of the attachment.
         * @since 0.6.0
         */
        preview_url: string;
        /**
         * The location of the full-size original attachment on the remote
         * @since 0.6.0
         */
        remote_url?: (string | null);
        /**
         * A shorter URL for the attachment.
         * @deprecated
         * @since 3.5.0
         */
        text_url?: (string | null);
        /**
         * The type of the attachment.
         * @since 0.6.0
         */
        type: 'audio';
        /**
         * The location of the original full-size attachment.
         * @since 0.6.0
         */
        url: string;
    }
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    export interface AudioAttachmentMeta {
        audio_bitrate: string;
        audio_channels: string;
        audio_encode: string;
        duration: number;
        length: string;
        original: AudioAttachmentMetaOriginal;
    }
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    export interface AudioAttachmentMetaOriginal {
        bitrate: number;
        duration: number;
    }
    /**
     * Represents a looping, soundless animation attachment that can be added to a
     * status.
     * @since 0.6.0
     */
    export interface GIFVAttachment {
        /**
         * A hash computed by the BlurHash algorithm, for generating colorful
         * preview thumbnails when media has not been downloaded yet.
         * @since 2.8.1
         */
        blurhash: string;
        /**
         * Alternate text that describes what is in the media attachment, to be used
         * for the visually impaired or when media attachments do not load.
         * @since 2.0.0
         */
        description?: (string | null);
        /**
         * The ID of the attachment in the database.
         * @since 0.6.0
         */
        id: string;
        /**
         * Metadata returned by Paperclip.
         * @since 1.5.0
         */
        meta: GIFVAttachmentMeta;
        /**
         * The location of a scaled-down preview of the attachment.
         * @since 0.6.0
         */
        preview_url: string;
        /**
         * The location of the full-size original attachment on the remote
         * @since 0.6.0
         */
        remote_url?: (string | null);
        /**
         * A shorter URL for the attachment.
         * @deprecated
         * @since 3.5.0
         */
        text_url?: (string | null);
        /**
         * The type of the attachment.
         * @since 0.6.0
         */
        type: 'gifv';
        /**
         * The location of the original full-size attachment.
         *
         * Since Mastodon v3.1.2 the URL can be `null`, when the full-size file is
         * still being processed in the background. However, the preview_url should
         * be available. Use `API.getMediaAttachment` to check the status of the
         * media attachment.
         *
         * @since 0.6.0
         */
        url: string;
    }
    export interface GIFVAttachmentMeta {
        aspect: number;
        duration: number;
        fps: number;
        height: number;
        length: string;
        original: GIFVAttachmentMetaOriginal;
        size: string;
        small: GIFVAttachmentMetaSmall;
        width: number;
    }
    export interface GIFVAttachmentMetaOriginal {
        bitrate: number;
        duration: number;
        frame_rate: string;
        height: number;
        width: number;
    }
    export interface GIFVAttachmentMetaSmall {
        aspect: number;
        height: number;
        size: string;
        width: number;
    }
    /**
     * Represents a static image attachment that can be added to a status.
     * @since 0.6.0
     */
    export interface ImageAttachment {
        /**
         * A hash computed by the BlurHash algorithm, for generating colorful
         * preview thumbnails when media has not been downloaded yet.
         * @since 2.8.1
         */
        blurhash: string;
        /**
         * Alternate text that describes what is in the media attachment, to be used
         * for the visually impaired or when media attachments do not load.
         * @since 2.0.0
         */
        description?: (string | null);
        /**
         * The ID of the attachment in the database.
         * @since 0.6.0
         */
        id: string;
        /**
         * Metadata returned by Paperclip.
         * @since 1.5.0
         */
        meta: ImageAttachmentMeta;
        /**
         * @since unknown
         */
        preview_remote_url?: (string | null);
        /**
         * The location of a scaled-down preview of the attachment.
         * @since 0.6.0
         */
        preview_url: string;
        /**
         * The location of the full-size original attachment on the remote
         * @since 0.6.0
         */
        remote_url?: (string | null);
        /**
         * A shorter URL for the attachment.
         * @deprecated
         * @since 3.5.0
         */
        text_url?: (string | null);
        /**
         * The type of the attachment.
         * @since 0.6.0
         */
        type: 'image';
        /**
         * The location of the original full-size attachment.
         *
         * Since Mastodon v3.1.2 the URL can be `null`, when the full-size file is
         * still being processed in the background. However, the preview_url should
         * be available. Use `API.getMediaAttachment` to check the status of the
         * media attachment.
         *
         * @since 0.6.0
         */
        url: string;
    }
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    export interface ImageAttachmentMeta {
        focus?: ImageAttachmentMetaFocus;
        original: ImageAttachmentMetaOriginal;
        small: ImageAttachmentMetaSmall;
    }
    /**
     * Metadata returned by Paperclip.
     * @since 2.3.0
     */
    export interface ImageAttachmentMetaFocus {
        x: number;
        y: number;
    }
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    export interface ImageAttachmentMetaOriginal {
        aspect: number;
        height: number;
        size: string;
        width: number;
    }
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    export interface ImageAttachmentMetaSmall {
        aspect: number;
        height: number;
        size: string;
        width: number;
    }
    /**
     * Represents a file or media attachment that can be added to a status.
     * @since 0.6.0
     */
    export type MediaAttachment = (AudioAttachment | GIFVAttachment | ImageAttachment | UnknownAttachment | VideoAttachment);
    /**
     * Interface to post a new media attachment.
     */
    export interface MediaAttachmentPost {
        /**
         * The file to be attached, encoded using multipart form data. The file must
         * have a MIME type.
         */
        file: File;
        /**
         * The custom thumbnail of the media to be attached, encoded using multipart
         * form data.
         */
        thumbnail?: (Blob | File);
        /**
         * A plain-text description of the media, for accessibility purposes.
         */
        description?: string;
        /**
         * Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0.
         */
        focus?: string;
    }
    /**
     * Interface to update the parameters of an existing media attachment.
     */
    export interface MediaAttachmentUpdate {
        /**
         * The custom thumbnail of the media to be attached, encoded using multipart
         * form data.
         */
        thumbnail?: (Blob | File);
        /**
         * A plain-text description of the media, for accessibility purposes.
         */
        description?: string;
        /**
         * Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0.
         */
        focus?: string;
    }
    /**
     * Represents a unsupported or unrecognized file type.
     * @since 0.6.0
     */
    export interface UnknownAttachment {
        /**
         * Alternate text that describes what is in the media attachment, to be used
         * for the visually impaired or when media attachments do not load.
         * @since 2.0.0
         */
        description?: (string | null);
        /**
         * The ID of the attachment in the database.
         * @since 0.6.0
         */
        id: string;
        /**
         * Metadata returned by Paperclip.
         * @since 1.5.0
         */
        meta: Record<string, Record<string, (number | string)>>;
        /**
         * The location of a scaled-down preview of the attachment.
         * @since 0.6.0
         */
        preview_url: string;
        /**
         * The location of the full-size original attachment on the remote
         * @since 0.6.0
         */
        remote_url?: (string | null);
        /**
         * A shorter URL for the attachment.
         * @deprecated
         * @since 3.5.0
         */
        text_url?: (string | null);
        /**
         * The type of the attachment.
         * @since 0.6.0
         */
        type: 'unknown';
        /**
         * The location of the original full-size attachment.
         *
         * Since Mastodon v3.1.2 the URL can be `null`, when the full-size file is
         * still being processed in the background. However, the preview_url should
         * be available. Use `API.getMediaAttachment` to check the status of the
         * media attachment.
         *
         * @since 0.6.0
         */
        url: (string | null);
    }
    /**
     * Represents a video clip attachment that can be added to a status.
     * @since 0.6.0
     */
    export interface VideoAttachment {
        /**
         * A hash computed by the BlurHash algorithm, for generating colorful
         * preview thumbnails when media has not been downloaded yet.
         * @since 2.8.1
         */
        blurhash: string;
        /**
         * Alternate text that describes what is in the media attachment, to be used
         * for the visually impaired or when media attachments do not load.
         * @since 2.0.0
         */
        description?: (string | null);
        /**
         * The ID of the attachment in the database.
         * @since 0.6.0
         */
        id: string;
        /**
         * Metadata returned by Paperclip.
         * @since 1.5.0
         */
        meta: VideoAttachmentMeta;
        /**
         * The location of a scaled-down preview of the attachment.
         * @since 0.6.0
         */
        preview_url: string;
        /**
         * The location of the full-size original attachment on the remote
         * @since 0.6.0
         */
        remote_url?: (string | null);
        /** @deprecated */
        text_url?: (string | null);
        /**
         * The type of the attachment.
         * @since 0.6.0
         */
        type: 'video';
        /**
         * The location of the original full-size attachment.
         *
         * Since Mastodon v3.1.2 the URL can be `null`, when the full-size file is
         * still being processed in the background. However, the preview_url should
         * be available. Use `API.getMediaAttachment` to check the status of the
         * media attachment.
         *
         * @since 0.6.0
         */
        url: (string | null);
    }
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    export interface VideoAttachmentMeta {
        aspect?: number;
        audio_bitrate?: string;
        audio_channels?: string;
        audio_encode?: string;
        duration?: number;
        fps?: number;
        height?: number;
        length?: string;
        original: VideoAttachmentMetaOriginal;
        size?: string;
        small: VideoAttachmentMetaSmall;
        width?: number;
    }
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    export interface VideoAttachmentMetaOriginal {
        bitrate: number;
        duration: number;
        frame_rate: string;
        height: number;
        width: number;
    }
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    export interface VideoAttachmentMetaSmall {
        aspect: number;
        height: number;
        size: string;
        width: number;
    }
    /**
     * Tests the JSON object for an AudioAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an AudioAttachment structure.
     */
    export function isAudioAttachment(json: Partial<AudioAttachment>): json is AudioAttachment;
    /**
     * Tests the JSON object for an AudioAttachmentMeta structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an AudioAttachmentMeta structure.
     */
    export function isAudioAttachmentMeta(json: Partial<AudioAttachmentMeta>): json is AudioAttachmentMeta;
    /**
     * Tests the JSON object for a GIFVAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a GIFVAttachment structure.
     */
    export function isGIFVAttachment(json: Partial<GIFVAttachment>): json is GIFVAttachment;
    /**
     * Tests the JSON object for a GIFVAttachmentMeta structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a GIFVAttachmentMeta structure.
     */
    export function isGIFVAttachmentMeta(json: Partial<GIFVAttachmentMeta>): json is GIFVAttachmentMeta;
    /**
     * Tests the JSON object for an ImageAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an ImageAttachment structure.
     */
    export function isImageAttachment(json: Partial<ImageAttachment>): json is ImageAttachment;
    /**
     * Tests the JSON object for an ImageAttachmentMeta structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an ImageAttachmentMeta structure.
     */
    export function isImageAttachmentMeta(json: Partial<ImageAttachmentMeta>): json is ImageAttachmentMeta;
    /**
     * Tests the JSON object for a MediaAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a MediaAttachment structure.
     */
    export function isMediaAttachment(json: Partial<MediaAttachment>): json is MediaAttachment;
    /**
     * Tests the JSON object for an UnknownAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an UnknownAttachment structure.
     */
    export function isUnknownAttachment(json: Partial<UnknownAttachment>): json is UnknownAttachment;
    /**
     * Tests the JSON object for a VideoAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a VideoAttachment structure.
     */
    export function isVideoAttachment(json: Partial<VideoAttachment>): json is VideoAttachment;
    /**
     * Tests the JSON object for a VideoAttachmentMeta structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a VideoAttachmentMeta structure.
     */
    export function isVideoAttachmentMeta(json: Partial<VideoAttachmentMeta>): json is VideoAttachmentMeta;
    export default MediaAttachment;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Poll" />
declare module "tsl-mastodon-api/lib/JSON/Poll" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import type Emoji from "tsl-mastodon-api/lib/JSON/Emoji";
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
        expires_at?: (string | null);
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
        voters_count?: (number | null);
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
        votes_count?: (number | null);
    }
    /**
     * Interface to post poll votes.
     */
    export interface PollVotePost {
        choices: Array<number>;
    }
    /**
     * Tests the JSON object for a Poll structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Poll structure.
     */
    export function isPoll(json: Partial<Poll>): json is Poll;
    /**
     * Tests a JSON array for a PollOption structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a PollOption structure.
     */
    export function isPollOptions(json: Partial<Array<Partial<PollOption>>>): json is Partial<Array<Partial<PollOption>>>;
    export default Poll;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Status" />
declare module "tsl-mastodon-api/lib/JSON/Status" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import type Account from "tsl-mastodon-api/lib/JSON/Account";
    import type Application from "tsl-mastodon-api/lib/JSON/Application";
    import type Card from "tsl-mastodon-api/lib/JSON/Card";
    import type Emoji from "tsl-mastodon-api/lib/JSON/Emoji";
    import type MediaAttachment from "tsl-mastodon-api/lib/JSON/MediaAttachment";
    import type Poll from "tsl-mastodon-api/lib/JSON/Poll";
    import type Tag from "tsl-mastodon-api/lib/JSON/Tag";
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
    export function isStatus(json: Partial<Status>): json is Status;
    /**
     * Tests the JSON object for a StatusContext structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a StatusContext structure.
     */
    export function isStatusContext(json: Partial<StatusContext>): json is StatusContext;
    /**
     * Tests a JSON array for a Status structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Status structure.
     */
    export function isStatuses(json: Partial<Array<Partial<Status>>>): json is Array<Status>;
    /**
     * Tests the JSON object for a StatusMention structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a StatusMention structure.
     */
    export function isStatusMention(json: Partial<StatusMention>): json is StatusMention;
    /**
     * Tests the JSON object for a StatusSchedule structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a StatusSchedule structure.
     */
    export function isStatusSchedule(json: Partial<StatusSchedule>): json is StatusSchedule;
    export default Status;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Notification" />
declare module "tsl-mastodon-api/lib/JSON/Notification" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import Account from "tsl-mastodon-api/lib/JSON/Account";
    import Status from "tsl-mastodon-api/lib/JSON/Status";
    /**
     * Represents a notification of an event relevant to the user.
     * @since 0.9.9
     */
    export interface Notification {
        /**
         * The account that performed the action that generated the notification.
         * @since 0.9.9
         */
        account: Account;
        /**
         * The timestamp of the notification.
         * @since 0.9.9
         */
        created_at: string;
        /**
         * The id of the notification in the database.
         * @since 0.9.9
         */
        id: string;
        /**
         * Report that was the object of the notification. Attached when `type` of
         * the notification is `admin.report`.
         * @since 4.0.0
         */
        report?: unknown;
        /**
         * The type of event that resulted in the notification.
         * @since 0.9.9
         */
        type: NotificationType;
        /**
         * Status that was the object of the notification. Attached when `type` of
         * the notification is `favourite`, `reblog`, `status`, `mention`, `poll`,
         * or `update`.
         * @since 0.9.9
         */
        status?: Status;
    }
    /**
     * The type of event that resulted in the notification.
     *
     * Possible notification types:
     * - 'mention' = Someone mentioned you in their status.
     * - 'status' = Someone you enabled notifications for has posted a status.
     *              (since 3.3.0)
     * - 'reblog' = Someone boosted one of your statuses.
     * - 'follow' = Someone followed you.
     * - 'follow_request' = Someone requested to follow you. (since 3.1.0)
     * - 'favourite' = Someone favourited one of your statuses.
     * - 'poll' = A poll you have voted in or created has ended. (since 2.8.0)
     * - 'update' = A status you boosted with has been edited. (since 3.5.0)
     * - 'admin.sign_up' = Someone signed up (optionally sent to admins).
     *                     (since 3.5.0)
     * - 'admin.report' = A new report has been filed. (since 4.0.0)
     *
     * @since 0.9.9
     */
    export type NotificationType = 'mention' | 'status' | 'reblog' | 'follow' | 'follow_request' | 'favourite' | 'poll' | 'update' | 'admin.sign_up' | 'admin.report';
    /**
     * Tests the JSON object for a Notification structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Notification structure.
     */
    export function isNotification(json: Partial<Notification>): json is Notification;
    /**
     * Tests the JSON array for a Notification structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Notification structure.
     */
    export function isNotifications(json: Partial<Array<Partial<Notification>>>): json is Array<Notification>;
    /**
     * Tests the type string for a known Notification type.
     *
     * @param type
     * Type string to test.
     *
     * @return
     * True, if the type string is a known Notification type.
     */
    export function isNotificationType(type: string): type is NotificationType;
    export default Notification;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/StreamData" />
declare module "tsl-mastodon-api/lib/JSON/StreamData" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import Notification from "tsl-mastodon-api/lib/JSON/Notification";
    import Status from "tsl-mastodon-api/lib/JSON/Status";
    /**
     * Stream data received.
     * @since 1.0.0
     */
    export interface StreamData {
        /**
         * Event type of the stream data received.
         * @since 1.0.0
         */
        event: StreamEventType;
        /**
         * JSON object related to the event.
         * @since 1.0.0
         */
        payload?: StreamPayload;
        /**
         * Stream types related to the event.
         * @since 1.0.0
         */
        stream: Array<StreamType>;
    }
    /**
     * Event type of the stream data received.
     *
     * - `announcement` = An announcement has been published. Payload contains an
     *                    `Announcement`. (since 3.1.0)
     * - `announcement.delete` = An announcement has been deleted. Payload contains
     *                           the id of the deleted `Announcement`. (since 3.1.0)
     * - `announcement.reaction` = An announcement has received an emoji reaction.
     *                             Payload contains a `Hash`. (since 3.1.0)
     * - `conversation` = A direct conversation has been updated. Payload contains a
     *                    `Conversation`. (since 2.6.0)
     * - `delete` = A status has been deleted. Payload contains the id of the
     *              deleted `Status`. (since 1.0.0)
     * - `update` = A new Status has appeared. Payload contains a `Status`.
     *              (since 1.0.0)
     * - `notification` = A new notification has appeared. Payload contains a
     *                    `Notification`. (since 1.4.2)
     * - `filters_changed` = Keyword filters have been changed. Does not contain a
     *                       payload. (since 2.4.3)
     * - `status.update` = A Status has been edited. Payload contains a `Status`.
     *                     (since 3.5.0)
     * - `encrypted_message` = An encrypted message has been received. (since 3.2.0)
     *
     * @since 1.0.0
     */
    export type StreamEventType = ('announcement' | 'announcement.delete' | 'announcement.reaction' | 'conversation' | 'delete' | 'encrypted_message' | 'filters_changed' | 'notification' | 'status.update' | 'update');
    /**
     * Additional parameter to filter the subscription.
     * @since 1.0.0
     */
    export interface StreamParams {
        /**
         * When stream is set to list, use this parameter to specify the list
         * ID.
         * @since 1.0.0
         */
        list?: string;
        /**
         * When stream is set to hashtag or hashtag:local, use this parameter to
         * specify the tag name.
         * @since 1.0.0
         */
        tag?: string;
    }
    /**
     * Possible JSON objects related to a event.
     */
    export type StreamPayload = (Notification | Status);
    /**
     * Stream types one can subscribe to.
     */
    export type StreamType = ('direct' | 'hashtag' | 'hashtag:local' | 'list' | 'public' | 'public:local' | 'public:local:media' | 'public:media' | 'public:remote' | 'public:remote:media' | 'user' | 'user:notification');
    /**
     * Tests the JSON object for a StreamData structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a StreamData structure.
     */
    export function isStreamData(json: Partial<StreamData>): json is StreamData;
    export default StreamData;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/Search" />
declare module "tsl-mastodon-api/lib/JSON/Search" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import type Account from "tsl-mastodon-api/lib/JSON/Account";
    import type Status from "tsl-mastodon-api/lib/JSON/Status";
    import type Tag from "tsl-mastodon-api/lib/JSON/Tag";
    /**
     * Search parameter to use for a search.
     * @since 1.1.0
     */
    export interface Search {
        account_id?: string;
        exclude_unreviewed?: boolean;
        following?: boolean;
        max_id?: string;
        min_id?: string;
        q: string;
        limit?: number;
        offset?: number;
        resolve?: boolean;
        type?: string;
    }
    /**
     * Search results of a search.
     * @since 1.1.0
     */
    export interface SearchResults {
        /**
         * Accounts which match the given query.
         * @since 1.1.0
         */
        accounts: Array<Account>;
        /**
         * Hashtags which match the given query.
         * @since 3.0.0
         */
        hashtags: Array<Tag>;
        /**
         * Statuses which match the given query.
         * @since 1.1.0
         */
        statuses: Array<Status>;
    }
    /**
     * Tests the JSON object for a Search structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Search structure.
     */
    export function isSearch(json: Partial<Search>): json is Search;
    /**
     * Tests the JSON object for a SearchResults structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a SearchResults structure.
     */
    export function isSearchResults(json: Partial<SearchResults>): json is SearchResults;
    export default Search;
}
/// <amd-module name="tsl-mastodon-api/lib/JSON/index" />
declare module "tsl-mastodon-api/lib/JSON/index" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export * from "tsl-mastodon-api/lib/JSON/Account";
    export * from "tsl-mastodon-api/lib/JSON/Announcement";
    export * from "tsl-mastodon-api/lib/JSON/Application";
    export * from "tsl-mastodon-api/lib/JSON/Card";
    export * from "tsl-mastodon-api/lib/JSON/Emoji";
    export * from "tsl-mastodon-api/lib/JSON/List";
    export * from "tsl-mastodon-api/lib/JSON/MediaAttachment";
    export * from "tsl-mastodon-api/lib/JSON/StreamData";
    export * from "tsl-mastodon-api/lib/JSON/Notification";
    export * from "tsl-mastodon-api/lib/JSON/Poll";
    export * from "tsl-mastodon-api/lib/JSON/Reaction";
    export * from "tsl-mastodon-api/lib/JSON/Search";
    export * from "tsl-mastodon-api/lib/JSON/Status";
    export * from "tsl-mastodon-api/lib/JSON/Tag";
    export const parse: (text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any;
    export const stringify: {
        (value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string;
        (value: any, replacer?: (string | number)[] | null | undefined, space?: string | number | undefined): string;
    };
}
/// <amd-module name="tsl-mastodon-api/lib/Bridge" />
declare module "tsl-mastodon-api/lib/Bridge" {
    export const Bridge: {
        global: typeof globalThis;
        fetch: typeof fetch;
        fileFrom: undefined;
        Blob: {
            new (blobParts?: BlobPart[] | undefined, options?: BlobPropertyBag | undefined): Blob;
            prototype: Blob;
        };
        File: {
            new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
            prototype: File;
        };
        FormData: {
            new (form?: HTMLFormElement | undefined, submitter?: HTMLElement | null | undefined): FormData;
            prototype: FormData;
        };
        Headers: {
            new (init?: HeadersInit | undefined): Headers;
            prototype: Headers;
        };
        Response: {
            new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
            prototype: Response;
            error(): Response;
            json(data: any, init?: ResponseInit | undefined): Response;
            redirect(url: string | URL, status?: number | undefined): Response;
        };
        URL: {
            new (url: string | URL, base?: string | URL | undefined): URL;
            prototype: URL;
            canParse(url: string | URL, base?: string | undefined): boolean;
            createObjectURL(obj: Blob | MediaSource): string;
            revokeObjectURL(url: string): void;
        };
        URLSearchParams: {
            new (init?: string | URLSearchParams | Record<string, string> | string[][] | undefined): URLSearchParams;
            prototype: URLSearchParams;
        };
        WebSocket: {
            new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
            prototype: WebSocket;
            readonly CONNECTING: 0;
            readonly OPEN: 1;
            readonly CLOSING: 2;
            readonly CLOSED: 3;
        };
    };
    export default Bridge;
}
/// <amd-module name="tsl-mastodon-api/lib/Utilities" />
declare module "tsl-mastodon-api/lib/Utilities" {
    export namespace Utilities {
        type Params = (Array<[string, unknown]> | Record<string, unknown>);
        /**
         * Loads a file from a path.
         *
         * @memberof Utilities
         *
         * @param filePath
         * Path to the file.
         *
         * @param mimeType
         * Mime type of the file.
         *
         * @return
         * Promise with the file, if successful.
         *
         * @requires node
         */
        const fileFrom: undefined;
        function buildFormData(params?: Params, target?: FormData): FormData;
        function buildHeaders(params?: Params, target?: Headers): Headers;
        function buildURL(base: string, path?: string, params?: Params): URL;
        function buildURLSearchParams(params?: Params, target?: URLSearchParams): URLSearchParams;
        function transferParams(params: Params, target: (FormData | Headers | URLSearchParams)): void;
    }
    export default Utilities;
}
/// <amd-module name="tsl-mastodon-api/lib/REST" />
declare module "tsl-mastodon-api/lib/REST" {
    global {
        interface RequestInit {
            follow?: number;
        }
    }
    export class REST {
        constructor(config: REST.Config);
        readonly apiURL: string;
        readonly config: Required<REST.Config>;
        delete(path: string, params?: REST.Params): Promise<REST.Result>;
        fetch(method: REST.Method, path: string, params?: REST.Params): Promise<REST.Result>;
        get(path: string, params?: REST.Params): Promise<REST.Result>;
        patch(path: string, params?: REST.Params): Promise<REST.Result>;
        post(path: string, params?: REST.Params): Promise<REST.Result>;
        put(path: string, params?: REST.Params): Promise<REST.Result>;
    }
    export namespace REST {
        interface Config {
            access_token: string;
            api_url: string;
            no_follow?: boolean;
            timeout_ms?: number;
            user_agent?: string;
        }
        type Method = ('DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT');
        type ParamArray = Array<[string, unknown]>;
        type ParamRecord = Record<string, unknown>;
        type Params = (ParamArray | ParamRecord);
        interface Result {
            error?: any;
            json: any;
            path: string;
            response?: Response;
            status: number;
        }
        interface Success<T = unknown> extends Result {
            error?: undefined;
            json: T;
            status: 200;
        }
        function isParamArray(params?: Params): params is ParamArray;
        /**
         * Converts a Params structure into a ParamArray structure. Value arrays of
         * params will be split into multiple pairs of the ParamArray. If no special
         * handling of arrays is needed, then it will convert ParamRecord to
         * ParamArray with help of the `Object.entries` function.
         *
         * @param params
         * Params structure to convert or split.
         *
         * @param [array]
         * ParamArray structure to use.
         *
         * @return
         * ParamArray with params pairs.
         */
        function toParamArray(params?: undefined, array?: ParamArray): undefined;
        function toParamArray(params?: Params, array?: ParamArray): ParamArray;
    }
    export default REST;
}
/// <amd-module name="tsl-mastodon-api/lib/API" />
declare module "tsl-mastodon-api/lib/API" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    import * as JSON from "tsl-mastodon-api/lib/JSON/index";
    import REST from "tsl-mastodon-api/lib/REST";
    /**
     * Mastodon API to fetch, create, and delete content.
     *
     * @class
     */
    export class API {
        /**
         * @param config
         * Configuration with access token and URL to the Mastodon server.
         */
        constructor(config: API.Config);
        /**
         * Expected communication delay (in milliseconds) by the Mastodon server.
         */
        nextDelay: number;
        /**
         * Underlying REST API of this instance.
         */
        readonly rest: REST;
        /**
         * Version that has been provided with `config.api_version` or has been
         * extracted from `config.api_url`.
         *
         * A value of `0` indicates that no version has been found.
         */
        readonly version: number;
        /**
         * Delays an async promise by the expected amount of time (in milliseconds),
         * which the Mastodon server sends during the last communication.
         *
         * @param forcedDelay
         * Forces a certain amount of minimum delay.
         *
         * @return
         * Promise.
         */
        delay(forcedDelay?: number): Promise<void>;
        /**
         * Deletes a path.
         *
         * @param path
         * Path to delete.
         *
         * @param [params]
         * Parameters to use.
         *
         * @return
         * Promise with the result, if successful.
         */
        delete(path: string, params?: object): Promise<API.Result>;
        /**
         * Deletes a list of accounts.
         *
         * @param listId
         * ID of the list to delete.
         *
         * @return
         * Promise with the deleted list, if successful.
         */
        deleteList(listID: string): Promise<API.Success<JSON.List>>;
        /**
         * Deletes a list of accounts.
         *
         * @param listId
         * Related list.
         *
         * @param listAccounts
         * List accounts to delete.
         *
         * @return
         * Promise with an empty object, if successful.
         */
        deleteListAccounts(listID: string, listAccounts: JSON.ListAccountsDelete): Promise<API.Success<object>>;
        /**
         * Deletes reaction from an announcement.
         *
         * @param announcementID
         * ID of the announcement to delete from.
         *
         * @param emojiName
         * Unicode emoji, or the shortcode of a custom emoji.
         *
         * @return
         * Promise with an empty `json`, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        deleteAnnouncementReaction(announcementID: string, emojiName: string): Promise<API.Success<{}>>;
        /**
         * Deletes a status.
         *
         * @param statusID
         * ID of the status to delete.
         *
         * @return
         * Promise with the deleted status, if successful.
         */
        deleteStatus(statusID: string): Promise<API.Success<JSON.Status>>;
        /** @todo Add doclet. */
        protected extractRateLimit(headers: Headers): (number | undefined);
        /** @todo Add doclet. */
        protected fetch(method: ('DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'), path: string, params?: object): Promise<API.Result>;
        /**
         * Get a result from a path.
         *
         * @param path
         * Path to get a result from.
         *
         * @param [params]
         * Parameters to use.
         *
         * @return
         * Promise with the result, if successful.
         */
        get(path: string, params?: object): Promise<API.Result>;
        /**
         * Gets the connected account.
         *
         * @return
         * Promise with the account, if successful.
         */
        getAccount(): Promise<API.Success<JSON.Account>>;
        /**
         * Gets the connected account.
         *
         * @return
         * Promise with the account, if successful.
         */
        getAnnouncements(queryParams?: API.AnnouncementsParams): Promise<API.Success<Array<JSON.Announcement>>>;
        /**
         * Gets a list.
         *
         * @param listID
         * ID of the list to get.
         *
         * @return
         * Promise with the list, if successful.
         */
        getList(listID: string): Promise<API.Success<JSON.List>>;
        /**
         * Gets the accounts of a list.
         *
         * @param listID
         * ID of the list to get accounts from.
         *
         * @param [queryParams]
         * Query parameters to limit the amount of accounts to get.
         *
         * @return
         * Promise with the list accounts, if successful.
         */
        getListAccounts(listID: string, queryParams?: API.QueryParams): Promise<API.Success<JSON.ListAccounts>>;
        /**
         * Gets lists.
         *
         * @param [queryParams]
         * Query parameters to limit the amount of lists to get.
         *
         * @return
         * Promise with the array of lists, if successful.
         */
        getLists(queryParams?: API.QueryParams): Promise<API.Success<Array<JSON.List>>>;
        /**
         * Gets a media attachment.
         *
         * @param mediaAttachmentID
         * ID of the media attachment to get.
         *
         * @param awaitProcessing
         * Set to true, to wait until server processing completed.
         *
         * @return
         * Promise with the media attachment, if successful.
         */
        getMediaAttachment(mediaAttachmentID: string, awaitProcessing?: boolean): Promise<API.Success<JSON.MediaAttachment>>;
        /**
         * Get notifications
         *
         * @param [queryParams]
         * Query parameters to limit the amount of statuses to get.
         */
        getNotifications(queryParams?: API.NotificationParams): Promise<API.Success<Array<JSON.Notification>>>;
        /**
         * Gets a status.
         *
         * @param statusID
         * ID of the status to get.
         *
         * @return
         * Promise with the status, if successful.
         */
        getStatus(statusID: string): Promise<API.Success<JSON.Status>>;
        /**
         * Gets the context of a status with ancestors and descendants.
         *
         * @param statusID
         * ID of the status to get the context of.
         *
         * @return
         * Promise with the status context, if successful.
         */
        getStatusContext(statusID: string): Promise<API.Success<JSON.StatusContext>>;
        /**
         * Gets statuses of an account.
         *
         * @param accountID
         * ID of the related account.
         *
         * @param [queryParams]
         * Query parameters to limit the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        getStatuses(accountID: string, queryParams?: API.QueryParams): Promise<API.Success<Array<JSON.Status>>>;
        /**
         * Gets statuses from the personal timeline.
         *
         * @param [queryParams]
         * Query parameters to control the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        getStatusesOfHome(queryParams?: API.QueryParams): Promise<API.Success<Array<JSON.Status>>>;
        /**
         * Gets statuses from a list of accounts.
         *
         * @param listID
         * ID of the list.
         *
         * @param [queryParams]
         * Query parameters to control the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        getStatusesOfList(listID: string, queryParams?: API.QueryParams): Promise<API.Success<Array<JSON.Status>>>;
        /**
         * Gets statuses from the public timeline.
         *
         * @param [queryParams]
         * Query parameters to control the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        getStatusesOfPublic(queryParams?: API.StatusesOfPublicParams): Promise<API.Success<Array<JSON.Status>>>;
        /**
         * Gets statuses for a tag.
         *
         * @param tag
         * Tag to search.
         *
         * @param [queryParams]
         * Query parameters to control the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        getStatusesOfTag(tag: string, queryParams?: API.StatusesOfTagParams): Promise<API.Success<Array<JSON.Status>>>;
        /**
         * Post parameters to a path.
         *
         * @param path
         * Path to post to.
         *
         * @param [params]
         * Parameters to post.
         *
         * @return
         * Promise with the result, if successful.
         */
        post(path: string, params?: object): Promise<API.Result>;
        /**
         * Dismisses all notifications.
         *
         * @return
         * Promise with an empty `json` object, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        postDismissAllNotifications(): Promise<API.Success<{}>>;
        /**
         * Dismisses an announcement.
         *
         * @param announcementID
         * ID of the announcement to dismiss.
         *
         * @return
         * Promise with an empty `json` object, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        postDismissAnnouncement(announcementID: string): Promise<API.Success<{}>>;
        /**
         * Dismisses a single notification.
         *
         * @param notificationID
         * The ID of the Notification in the database.
         *
         * @return
         * Promise with an empty `json` object, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        postDismissNotification(notificationID: string): Promise<API.Success<{}>>;
        /**
         * Posts a new list or updates an existing list.
         *
         * @param list
         * List to post.
         *
         * @return
         * Promise with the list, if successful.
         */
        postList(list: JSON.ListPost): Promise<API.Success<JSON.List>>;
        /**
         * Posts a new list or updates an existing list.
         *
         * @param listId
         * Related list.
         *
         * @param listAccounts
         * List accounts to post.
         *
         * @return
         * Promise with the list, if successful.
         */
        postListAccounts(listId: string, listAccounts: JSON.ListAccountsPost): Promise<API.Success<void>>;
        /**
         * Posts a new media attachment.
         *
         * @param mediaAttachment
         * Media attachment to post.
         *
         * @param awaitProcessing
         * Set to true, to wait until server processing completed.
         *
         * @return
         * Promise with the media attachment, if successful.
         */
        postMediaAttachment(mediaAttachment: JSON.MediaAttachmentPost, awaitProcessing?: boolean): Promise<API.Success<JSON.MediaAttachment>>;
        /**
         * Posts a poll vote.
         *
         * @param pollID
         * Related poll ID to vote for.
         *
         * @param pollVote
         * Poll vote to post.
         *
         * @return
         * Promise with the updated poll, if successful.
         */
        postPollVote(pollID: string, pollVote: JSON.PollVotePost): Promise<API.Success<JSON.Poll>>;
        /**
         * Posts a new status or updates an existing status.
         *
         * @param status
         * Status to post.
         *
         * @return
         * Promise with the status, if successful.
         */
        postStatus(status: JSON.StatusPost): Promise<API.Success<(JSON.Status | JSON.StatusSchedule)>>;
        /**
         * Puts parameters to a path.
         *
         * @param path
         * Path to put to.
         *
         * @param [params]
         * Parameters to put.
         *
         * @return
         * Promise with the result, if successful.
         */
        put(path: string, params?: object): Promise<API.Result>;
        /**
         * Puts a new reaction to an announcement.
         *
         * @param announcementID
         * ID of the announcement to put to.
         *
         * @param emojiName
         * Unicode emoji, or the shortcode of a custom emoji.
         *
         * @return
         * Promise with an empty `json` object, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        putAnnouncementReaction(announcementID: string, emojiName: string): Promise<API.Success<{}>>;
        /**
         * Puts a parameter update on an existing media attachment.
         *
         * @param mediaAttachmentID
         * ID of the media attachment to get.
         *
         * @return
         * Promise with the updated media attachment, if successful.
         */
        putMediaAttachmentUpdate(mediaAttachmentID: string, mediaAttachmentUpdate: JSON.MediaAttachmentUpdate): Promise<API.Success<JSON.MediaAttachment>>;
        /**
         * Search for accounts, hashtags, and statuses. Requires a `v2` API URL.
         *
         * @since 3.0.0
         *
         * @param search
         * Search parameters to use.
         *
         * @return
         * Promise with an object of search results, if successful.
         */
        search(search: JSON.Search): Promise<API.Success<JSON.SearchResults>>;
    }
    /**
     * @namespace
     * @name API
     */
    export namespace API {
        /**
         * Query parameters to retrieve announcements.
         */
        interface AnnouncementsParams {
            /**
             * If true, response will include announcements dismissed by the user.
             */
            with_dismissed?: boolean;
        }
        interface Config extends REST.Config {
            /**
             * API version to distinguish between multiple instances of the API.
             */
            api_version?: number;
        }
        interface NotificationParams extends QueryParams {
            /**
             * Get only notifications received from the specified account.
             */
            account_id?: string;
            /**
             * An array of notification types to filter out. (See
             * {@link JSON.NotificationType}.)
             */
            'exclude_types[]'?: Array<JSON.NotificationType>;
            /**
             * An array to filter notifications by type. (See
             * {@link JSON.NotificationType}.)
             */
            'types[]'?: Array<JSON.NotificationType>;
        }
        interface QueryParams extends REST.ParamRecord {
            /**
             * Maximum number of results to return. Server defaults to 20 statuses.
             * Server maximum is 40 statuses.
             */
            limit?: number;
            /**
             * Return results older than ID.
             */
            max_id?: string;
            /**
             * Return results newer than ID.
             */
            min_id?: string;
            /**
             * Return newest results newer than ID.
             */
            since_id?: string;
        }
        interface Result extends REST.Result {
            rateLimit?: number;
        }
        interface Success<T = unknown> extends Result {
            failed: false;
            json: T;
            status: (200 | 202 | 206);
        }
        interface StatusesOfPublicParams extends QueryParams {
            /**
             * Get only local statuses.
             */
            local?: boolean;
            /**
             * Get only statuses with media attachment.
             */
            only_media?: boolean;
            /**
             * Get only remote statuses.
             */
            remote?: boolean;
        }
        interface StatusesOfTagParams extends StatusesOfPublicParams {
            /**
             * Get statuses with all of these tags.
             */
            'all[]'?: Array<string>;
            /**
             * Get statuses with any of these tags.
             */
            'any[]'?: Array<string>;
            /**
             * Do not get statuses with any of these tags.
             */
            'none[]'?: Array<string>;
        }
    }
    export default API;
}
/// <amd-module name="tsl-mastodon-api/lib/Bridge" />
declare module "tsl-mastodon-api/lib/Bridge" {
    export const Bridge: {
        global: typeof globalThis;
        fetch: typeof fetch;
        fileFrom: undefined;
        Blob: {
            new (blobParts?: BlobPart[] | undefined, options?: BlobPropertyBag | undefined): Blob;
            prototype: Blob;
        };
        File: {
            new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
            prototype: File;
        };
        FormData: {
            new (form?: HTMLFormElement | undefined, submitter?: HTMLElement | null | undefined): FormData;
            prototype: FormData;
        };
        Headers: {
            new (init?: HeadersInit | undefined): Headers;
            prototype: Headers;
        };
        Response: {
            new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
            prototype: Response;
            error(): Response;
            json(data: any, init?: ResponseInit | undefined): Response;
            redirect(url: string | URL, status?: number | undefined): Response;
        };
        URL: {
            new (url: string | URL, base?: string | URL | undefined): URL;
            prototype: URL;
            canParse(url: string | URL, base?: string | undefined): boolean;
            createObjectURL(obj: Blob | MediaSource): string;
            revokeObjectURL(url: string): void;
        };
        URLSearchParams: {
            new (init?: string | URLSearchParams | Record<string, string> | string[][] | undefined): URLSearchParams;
            prototype: URLSearchParams;
        };
        WebSocket: {
            new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
            prototype: WebSocket;
            readonly CONNECTING: 0;
            readonly OPEN: 1;
            readonly CLOSING: 2;
            readonly CLOSED: 3;
        };
    };
    export default Bridge;
}
/// <amd-module name="tsl-mastodon-api/lib/OAuth" />
declare module "tsl-mastodon-api/lib/OAuth" {
    export namespace OAuth {
        interface App {
            id: string;
            client_id: string;
            client_secret: string;
        }
        /**
         * Creates an application in a Mastodon account.
         *
         * @memberof API
         *
         * @param apiURL
         * API URL of the Mastodon server.
         *
         * @param appName
         * Public name of the application.
         *
         * @param [redirectURI]
         * OAuth URI.
         *
         * @param [scopes]
         * Application permissions to grant.
         *
         * @param [website]
         * Public website of the application.
         *
         * @return
         * Promise with an object of applications `id`, `client_id` and
         * `client_secret`.
         */
        function createApp(apiURL: string, appName: string, redirectURI?: string, scopes?: string, appWebsite?: string): Promise<OAuth.App>;
        /**
         * Gets the access token for the application.
         * @requires oauth
         */
        function getAccessToken(baseURL: string, clientId: string, clientSecret: string, authorizationCode: string, redirectUri?: string): Promise<string>;
        /**
         * Creates an authorization url for users to authorize the application.
         * @requires oauth
         */
        function getAuthorizationUrl(baseURL: string, clientId: string, clientSecret: string, redirectURI?: string, scope?: string): Promise<string>;
    }
    export default OAuth;
}
/// <amd-module name="tsl-mastodon-api/lib/StreamAPI" />
declare module "tsl-mastodon-api/lib/StreamAPI" {
    import * as JSON from "tsl-mastodon-api/lib/JSON/index";
    /**
     * Mastodon streaming API to listen to new content.
     */
    export class StreamAPI {
        /**
         * @param config
         * Configuration with URL to the Mastodon server.
         */
        constructor(config: StreamAPI.Config);
        readonly listeners: Record<string, Array<Function>>;
        readonly config: StreamAPI.Config;
        webSocket?: WebSocket;
        protected dispatch<K extends keyof StreamAPI.EventMap>(eventType: K, e: StreamAPI.EventMap[K]): void;
        off<K extends keyof StreamAPI.EventMap>(eventType: K, eventListener: (e: StreamAPI.EventMap[K]) => void): this;
        on<K extends keyof StreamAPI.EventMap>(eventType: K, eventListener: (e: StreamAPI.EventMap[K]) => void): this;
        protected setup(): Promise<WebSocket>;
        subscribe(streamType: JSON.StreamType, streamParams?: JSON.StreamParams, eventListener?: (e: StreamAPI.MessageEvent) => void): Promise<this>;
        unsubsribe(streamType: JSON.StreamType, streamParams?: JSON.StreamParams, eventListener?: (e: StreamAPI.MessageEvent) => void): Promise<this>;
    }
    export namespace StreamAPI {
        interface Config {
            access_token: string;
            api_url: string;
        }
        interface EventMap {
            close: CloseEvent;
            error: Event;
            message: MessageEvent;
        }
        type MessageEvent = globalThis.MessageEvent<JSON.StreamData>;
    }
    export default StreamAPI;
}
/// <amd-module name="tsl-mastodon-api" />
declare module "tsl-mastodon-api" {
    /*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\
    
      TypeScript Library for the Mastodon API
    
      Copyright (c) TypeScriptLibs and Contributors
    
      Licensed under the MIT License.
      You may not use this file except in compliance with the License.
      You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt
    
    \*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
    export * as JSON from "tsl-mastodon-api/lib/JSON/index";
    export * from "tsl-mastodon-api/lib/API";
    export * from "tsl-mastodon-api/lib/Bridge";
    export * from "tsl-mastodon-api/lib/REST";
    export * from "tsl-mastodon-api/lib/Utilities";
}
