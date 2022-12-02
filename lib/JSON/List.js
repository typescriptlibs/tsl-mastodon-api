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
//# sourceMappingURL=List.js.map