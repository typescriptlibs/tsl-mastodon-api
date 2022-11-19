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
export function isPoll(json) {
    return (typeof json === 'object' &&
        typeof json.emojis === 'object' &&
        typeof json.expired === 'boolean' &&
        typeof json.expires_at === 'string' &&
        typeof json.id === 'string' &&
        typeof json.options === 'object' &&
        typeof json.own_votes === 'object' &&
        typeof json.voted === 'boolean' &&
        typeof json.voters_count === 'number' &&
        typeof json.votes_count === 'number' &&
        isPollOptions(json.options));
}
export function isPollOptions(json) {
    return (typeof json === 'object');
}
//# sourceMappingURL=Poll.js.map