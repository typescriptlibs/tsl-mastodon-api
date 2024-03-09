/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { isAccount } from './Account.js';
import { isTags } from './Tag.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON object for a Status structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Status structure.
 */
export function isStatus(json) {
    return (typeof json === 'object' &&
        typeof json.account === 'object' &&
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
        isAccount(json.account) &&
        isTags(json.tags));
}
/**
 * Tests the JSON object for a StatusContext structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a StatusContext structure.
 */
export function isStatusContext(json) {
    return (typeof json === 'object' &&
        typeof json.ancestors === 'object' &&
        typeof json.descendants === 'object' &&
        isStatuses(json.ancestors) &&
        isStatuses(json.descendants));
}
/**
 * Tests a JSON array for a Status structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Status structure.
 */
export function isStatuses(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isStatus(json[0] || {})));
}
/**
 * Tests the JSON object for a StatusMention structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a StatusMention structure.
 */
export function isStatusMention(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.acct === 'string' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string');
}
/**
 * Tests the JSON object for a StatusSchedule structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a StatusSchedule structure.
 */
export function isStatusSchedule(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.media_attachments === 'object' &&
        typeof json.params === 'object' &&
        typeof json.scheduled_at === 'string');
}
//# sourceMappingURL=Status.js.map