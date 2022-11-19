/* *
 *
 *  Declarations
 *
 * */
import { isAccount } from './Account.js';
import { isStatus } from './Status.js';
import { isTag } from './Tag.js';
/* *
 *
 *  Functions
 *
 * */
export function isSearch(json) {
    return (typeof json === 'object' &&
        typeof json.q === 'string');
}
export function isSearchResults(json) {
    return (typeof json === 'object' &&
        json.accounts instanceof Array &&
        json.hashtags instanceof Array &&
        json.statuses instanceof Array &&
        (!json.accounts.length ||
            isAccount(json.accounts[0])) &&
        (!json.hashtags.length ||
            isTag(json.hashtags[0])) &&
        (!json.statuses.length ||
            isStatus(json.statuses[0])));
}
//# sourceMappingURL=Search.js.map