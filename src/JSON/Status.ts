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

import type Account from './Account.js';
import type Application from './Application.js';
import type Card from './Card.js';
import type Emoji from './Emoji.js';
import type MediaAttachment from './MediaAttachment.js';
import type Poll from './Poll.js';
import type Tag from './Tag.js';
import type Visibility from './Visibility.js';

import { isAccount } from './Account.js';
import { isTags } from './Tag.js';

/* *
 *
 *  Declarations
 *
 * */

export interface MediaStatusPost {
    id?: string;
    in_reply_to_id?: string;
    media_ids: Array<string>;
    poll?: undefined;
    scheduled_at?: Date;
    sensitive?: boolean;
    spoiler_text?: string;
    status?: string;
    visibility?: Visibility;
}

export interface Status {
    account: Account;
    application?: Application;
    bookmarked?: boolean;
    card?: ( Card | null );
    created_at: string;
    content: string;
    edited_at?: string;
    emojis: Array<Emoji>;
    favourited?: boolean;
    favourites_count: number;
    id: string;
    in_reply_to_account_id?: ( string | null );
    in_reply_to_id?: ( string | null );
    language?: ( string | null );
    media_attachments: Array<MediaAttachment>;
    mentions: Array<StatusMention>;
    muted?: boolean;
    pinned?: boolean;
    poll?: ( Poll | null );
    reblog?: ( Status | null );
    reblogged?: boolean;
    reblogs_count: number;
    replies_count: number;
    sensitive: boolean;
    spoiler_text: string;
    tags: Array<Tag>;
    text?: ( string | null );
    uri: string;
    url?: ( string | null );
    visibility: Visibility;
}

export interface StatusMention {
    acct: string;
    id: string;
    username: string;
    url: string;
}

export type StatusPost = (
    | MediaStatusPost
    | TextStatusPost
);

export interface StatusSchedule {
    id: string;
    media_attachments: Array<MediaAttachment>;
    params: Partial<Status>;
    scheduled_at: string;
}

export interface TextStatusPost {
    id?: string;
    in_reply_to_id?: string;
    media_ids?: undefined;
    poll?: TextStatusPostPoll;
    scheduled_at?: Date;
    sensitive?: boolean;
    spoiler_text?: string;
    status: string;
    visibility?: Visibility;
}

export interface TextStatusPostPoll {
    expires_in: number;
    hide_totals?: boolean;
    multiple?: boolean;
    options: Array<string>;
}

/* *
 *
 *  Functions
 *
 * */

export function isStatus (
    json: Partial<Status>
): json is Status {
    return (
        typeof json === 'object' &&
        typeof json.account === 'object' &&
        typeof json.created_at === 'string' &&
        typeof json.content === 'string' &&
        typeof json.emojis === 'object' &&
        typeof json.id === 'string' &&
        typeof json.media_attachments === 'object' &&
        typeof json.mentions === 'object' &&
        typeof json.sensitive === 'boolean' &&
        typeof json.spoiler_text === 'string' &&
        typeof json.tags === 'object' &&
        typeof json.uri === 'string' &&
        typeof json.visibility === 'string' &&
        isAccount( json.account ) &&
        isTags( json.tags )
    );
}

export function isStatuses (
    json: Partial<Array<Partial<Status>>>
): json is Array<Status> {
    return (
        json instanceof Array &&
        (
            !json.length ||
            isStatus( json[0] || {} )
        )
    );
}

export function isStatusMention (
    json: Partial<StatusMention>
): json is StatusMention {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.acct === 'string' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string'
    );
}

export function isStatusSchedule (
    json: Partial<StatusSchedule>
): json is StatusSchedule {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.media_attachments === 'object' &&
        typeof json.params === 'object' &&
        typeof json.scheduled_at === 'string'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Status;
