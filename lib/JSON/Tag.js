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
export function isTag(json) {
    return (typeof json === 'object' &&
        typeof json.name === 'string' &&
        typeof json.url === 'string' &&
        json.history instanceof Array &&
        (!json.history.length ||
            isTagStatistic(json.history[0])));
}
export function isTagStatistic(json) {
    return (typeof json === 'object' &&
        typeof json.accounts === 'number' &&
        typeof json.day === 'number' &&
        typeof json.uses === 'number');
}
//# sourceMappingURL=Tag.js.map