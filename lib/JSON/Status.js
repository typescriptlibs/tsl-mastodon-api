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
    return (typeof json === 'object' &&
        typeof json.account === 'object' &&
        typeof json.application === 'object' &&
        typeof json.created_at === 'string' &&
        typeof json.content === 'string' &&
        typeof json.emojis === 'object' &&
        typeof json.id === 'string' &&
        typeof json.media_attachments === 'object' &&
        typeof json.mentions === 'object' &&
        typeof json.sensitive === 'boolean' &&
        typeof json.spoiler_text === 'string' &&
        typeof json.tags === 'object' &&
        typeof json.uri === 'string' &&
        typeof json.visibility === 'string' &&
        isAccount(json.account));
}
export function isStatuses(json) {
    return (json instanceof Array &&
        (!json.length ||
            isStatus(json[0] || {})));
}
//# sourceMappingURL=Status.js.map