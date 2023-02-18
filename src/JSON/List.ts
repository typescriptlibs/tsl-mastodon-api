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
export type ListReplyPolicy = (
    | 'followed'
    | 'list'
    | 'none'
);

/* *
 *
 *  Functions
 *
 * */

/**
 * Tests the JSON object for a List structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a List structure.
 */
export function isList (
    json: Partial<List>
): json is List {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.title === 'string'
    );
}

/**
 * Tests the JSON array for a List structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a List structure.
 */
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
