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
export function isList(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.title === 'string');
}
export function isLists(json) {
    return (json instanceof Array &&
        (!json.length ||
            isList(json[0] || {})));
}
//# sourceMappingURL=List.js.map