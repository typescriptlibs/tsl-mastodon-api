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
export interface SearchResults {
    accounts: Array<Account>;
    hashtags: Array<Tag>;
    statuses: Array<Status>;
}
export declare function isSearch(json: Partial<Search>): json is Search;
export declare function isSearchResults(json: Partial<SearchResults>): json is SearchResults;
export default Search;
