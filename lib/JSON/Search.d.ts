/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import type Account from './Account.js';
import type Status from './Status.js';
import type Tag from './Tag.js';
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
export declare function isSearch(json: Partial<Search>): json is Search;
/**
 * Tests the JSON object for a SearchResults structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a SearchResults structure.
 */
export declare function isSearchResults(json: Partial<SearchResults>): json is SearchResults;
export default Search;
