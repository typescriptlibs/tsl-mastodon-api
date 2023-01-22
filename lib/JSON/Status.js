/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { isAccount } from './Account.js';
/* *
 *
 *  Functions
 *
 * */
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
        isAccount(json.account));
}
export function isStatuses(json) {
    return (json instanceof Array &&
        (!json.length ||
            isStatus(json[0] || {})));
}
export function isStatusMention(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.acct === 'string' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string');
}
export function isStatusSchedule(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.media_attachments === 'object' &&
        typeof json.params === 'object' &&
        typeof json.scheduled_at === 'string');
}
//# sourceMappingURL=Status.js.map