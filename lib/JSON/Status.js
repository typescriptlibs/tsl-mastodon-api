/* *
 *
 *  Imports
 *
 * */
import { isAccount } from './Account.js';
/* *
 *
 *  Functions
 *
 * */
export function isStatus(json) {
    return (typeof json?.account === 'object' &&
        typeof json?.created_at === 'string' &&
        typeof json?.content === 'string' &&
        typeof json?.id === 'string' &&
        typeof json?.sensitive === 'boolean' &&
        typeof json?.spoiler_text === 'string' &&
        typeof json?.uri === 'string' &&
        typeof json?.visibility === 'string' &&
        isAccount(json?.account));
}
export function isStatuses(json) {
    return (json instanceof Array &&
        (typeof json[0] === 'undefined' ||
            isStatus(json[0])));
}
//# sourceMappingURL=Status.js.map