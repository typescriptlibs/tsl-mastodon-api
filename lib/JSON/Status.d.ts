import type Account from './Account.js';
import type Application from './Application.js';
import type Card from './Card.js';
import type Emoji from './Emoji.js';
import type MediaAttachment from './MediaAttachment.js';
import type Poll from './Poll.js';
import type Tag from './Tag.js';
import type Visibility from './Visibility.js';
export interface Status {
    account: Account;
    application: Application;
    bookmarked?: boolean;
    card?: Card;
    created_at: string;
    content: string;
    emojis: Array<Emoji>;
    favourited?: boolean;
    favourites_count: number;
    id: string;
    in_reply_to_account_id?: string;
    in_reply_to_id?: string;
    language?: string;
    media_attachments: Array<MediaAttachment>;
    mentions: Array<StatusMention>;
    muted?: boolean;
    pinned?: boolean;
    poll?: Poll;
    reblog?: Status;
    reblogged?: boolean;
    reblogs_count: number;
    replies_count: number;
    sensitive: boolean;
    spoiler_text: string;
    tags: Array<Tag>;
    text?: string;
    uri: string;
    url?: string;
    visibility: Visibility;
}
export interface StatusMention {
    acct: string;
    id: string;
    username: string;
    url: string;
}
export declare function isStatus(json: Partial<Status>): json is Status;
export declare function isStatuses(json: Partial<Array<Partial<Status>>>): json is Array<Status>;
export default Status;
