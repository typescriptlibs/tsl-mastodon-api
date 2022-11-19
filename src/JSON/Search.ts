/* *
 *
 *  Declarations
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

/* *
 *
 *  Functions
 *
 * */

export function isSearch (
    json: Partial<Search>
): json is Search {
    return (
        typeof json === 'object' &&
        typeof json.q === 'string'
    );
}

export function isSearchResults (
    json: Partial<SearchResults>
): json is SearchResults {
    return (
        typeof json === 'object' &&
        json.accounts instanceof Array &&
        json.hashtags instanceof Array &&
        json.statuses instanceof Array &&
        (
            !json.accounts.length ||
            isAccount(json.accounts[0])
        ) &&
        (
            !json.hashtags.length ||
            isTag(json.hashtags[0])
        ) &&
        (
            !json.statuses.length ||
            isStatus(json.statuses[0])
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Search;
