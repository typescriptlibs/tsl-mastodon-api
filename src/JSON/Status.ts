/* *
 *
 *  Imports
 *
 * */

import type Account from './Account.js';
import type Application from './Application.js';
import type Card from './Card.js';
import type Emoji from './Emoji.js';
import type MediaAttachment from './MediaAttachment.js';
import type Poll from './Poll.js';
import type Tag from './Tag.js';
import type Visibility from './Visibility.js';

import { isAccount } from './Account.js';

/* *
 *
 *  Declarations
 *
 * */

export interface Status {
    account: Account;
    application: Application;
    card?: Card;
    created_at: string;
    content: string;
    emojis: Array<Emoji>;
    id: string;
    media_attachments?: Array<MediaAttachment>;
    mentions?: Array<StatusMention>;
    poll?: Poll;
    sensitive: boolean;
    spoiler_text: string;
    tags?: Array<Tag>;
    uri: string;
    visibility: Visibility;
}

export interface StatusMention {
    acct: string;
    id: string;
    username: string;
    url: string;
}

/* *
 *
 *  Functions
 *
 * */

export function isStatus(
    json: Partial<Status>
): json is Status {
    return (
        typeof json?.account === 'object' &&
        typeof json?.created_at === 'string' &&
        typeof json?.content === 'string' &&
        typeof json?.id === 'string' &&
        typeof json?.sensitive === 'boolean' &&
        typeof json?.spoiler_text === 'string' &&
        typeof json?.uri === 'string' &&
        typeof json?.visibility === 'string' &&
        isAccount(json?.account)
    );
}

export function isStatuses(
    json: Partial<Array<Partial<Status>>>
): json is Array<Status> {
    return (
        json instanceof Array &&
        (
            typeof json[0] === 'undefined' ||
            isStatus(json[0])
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Status;
