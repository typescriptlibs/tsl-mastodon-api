/* *
 *
 *  Declarations
 *
 * */
/* *
 *
 *  Functions
 *
 * */
export function isAccount(json) {
    return (typeof json === 'object' &&
        typeof json.acct === 'string' &&
        typeof json.created_at === 'string' &&
        typeof json.display_name === 'string' &&
        typeof json.followers_count === 'number' &&
        typeof json.following_count === 'number' &&
        typeof json.id === 'string' &&
        typeof json.last_status_at === 'string' &&
        typeof json.statuses_count === 'number' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string');
}
export function isAccounts(json) {
    return (json instanceof Array &&
        (!json.length ||
            isAccount(json[0] || {})));
}
//# sourceMappingURL=Account.js.map