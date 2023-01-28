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

import Account from './Account.js';

/* *
 *
 *  Declarations
 *
 * */

export interface List {
    id: string;
    replies_policy?: string;
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
    id?: string;
    replies_policy?: string;
    title: string;
}

/* *
 *
 *  Functions
 *
 * */

export function isList (
    json: Partial<List>
): json is List {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.title === 'string'
    );
}

export function isLists (
    json: Partial<Array<Partial<List>>>
): json is Array<List> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            isList( json[0] || {} )
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default List;
