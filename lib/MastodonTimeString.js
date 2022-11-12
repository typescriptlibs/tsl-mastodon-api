/* *
 *
 *  Declarations
 *
 * */
/* *
 *
 *  Constants
 *
 * */
const validationExpression = (/^[1-2]\d\d\d-(?:0[1-9]|10|11|12)-(?:0[1-9]|[1-2]\d|30|31)T(?:[0-1]\d|20|21|22|23):[0-5]\d:[0-5]\d(\.\d+)?Z$/su);
/* *
 *
 *  Functions
 *
 * */
export function getMastodonTimeString(date, time) {
    return (date + 'T' + time + 'Z');
}
export function isMastodonTimeString(text) {
    return validationExpression.test(text);
}
//# sourceMappingURL=MastodonTimeString.js.map