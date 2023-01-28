/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/* *
 *
 *  Declarations
 *
 * */

export interface Account {
    acct: string;
    avatar?: string;
    avatar_static?: string;
    bot?: boolean;
    created_at: string;
    discoverable?: boolean;
    display_name: string;
    followers_count: number;
    following_count: number;
    group?: boolean;
    header?: string;
    header_static?: string;
    id: string;
    last_status_at: string;
    locked?: boolean;
    note?: string;
    statuses_count: number;
    url: string;
    username: string;
}

/* *
 *
 *  Functions
 *
 * */

export function isAccount (
    json: Partial<Account>
): json is Account {
    return (
        typeof json === 'object' &&
        typeof json.acct === 'string' &&
        typeof json.created_at === 'string' &&
        typeof json.display_name === 'string' &&
        typeof json.followers_count === 'number' &&
        typeof json.following_count === 'number' &&
        typeof json.id === 'string' &&
        typeof json.last_status_at === 'string' &&
        typeof json.statuses_count === 'number' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string'
    );
}

export function isAccounts (
    json: Partial<Array<Partial<Account>>>
): json is Array<Account> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            isAccount( json[0] || {} )
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Account;
