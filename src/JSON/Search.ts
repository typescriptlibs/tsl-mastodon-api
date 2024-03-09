/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/// <amd-module name="tsl-mastodon-api/lib/JSON/Search" />

/* *
 *
 *  Imports
 *
 * */

import type Account from './Account.js';
import type Status from './Status.js';
import type Tag from './Tag.js';

import { isAccount } from './Account.js';
import { isStatus } from './Status.js';
import { isTag } from './Tag.js';

/* *
 *
 *  Declarations
 *
 * */

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

/* *
 *
 *  Functions
 *
 * */

/**
 * Tests the JSON object for a Search structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Search structure.
 */
export function isSearch (
    json: Partial<Search>
): json is Search {
    return (
        typeof json === 'object' &&
        typeof json.q === 'string'
    );
}

/**
 * Tests the JSON object for a SearchResults structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a SearchResults structure.
 */
export function isSearchResults (
    json: Partial<SearchResults>
): json is SearchResults {
    return (
        typeof json === 'object' &&
        Array.isArray( json.accounts ) &&
        Array.isArray( json.hashtags ) &&
        Array.isArray( json.statuses ) &&
        (
            !json.accounts.length ||
            isAccount( json.accounts[0] )
        ) &&
        (
            !json.hashtags.length ||
            isTag( json.hashtags[0] )
        ) &&
        (
            !json.statuses.length ||
            isStatus( json.statuses[0] )
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Search;
