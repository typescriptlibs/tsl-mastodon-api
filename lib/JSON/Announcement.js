/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { isEmojis } from './Emoji.js';
import { isReactions } from './Reaction.js';
import { isTags } from './Tag.js';
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON object for a Announcement structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a Announcement structure.
 */
export function isAnnouncement(json) {
    return (typeof json === 'object' &&
        typeof json.all_day === 'boolean' &&
        typeof json.content === 'string' &&
        typeof json.emojis === 'object' &&
        typeof json.id === 'string' &&
        typeof json.mentions === 'object' &&
        typeof json.reactions === 'object' &&
        typeof json.statuses === 'object' &&
        typeof json.tags === 'object' &&
        isAnnouncementAccounts(json.mentions) &&
        isAnnouncementStatuses(json.statuses) &&
        isEmojis(json.emojis) &&
        isReactions(json.reactions) &&
        isTags(json.tags));
}
/**
 * Tests the JSON object for a AnnouncementAccount structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementAccount structure.
 */
export function isAnnouncementAccount(json) {
    return (typeof json === 'object' &&
        typeof json.acct === 'string' &&
        typeof json.id === 'string' &&
        typeof json.url === 'string' &&
        typeof json.username === 'string');
}
/**
 * Tests the JSON object for a AnnouncementAccount structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementAccount structure.
 */
export function isAnnouncementAccounts(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isAnnouncementAccount(json[0] || {})));
}
/**
 * Tests the JSON array for a Announcement structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Announcement structure.
 */
export function isAnnouncements(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isAnnouncement(json[0] || {})));
}
/**
 * Tests the JSON object for a AnnouncementStatus structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementStatus structure.
 */
export function isAnnouncementStatus(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.url === 'string');
}
/**
 * Tests the JSON object for a AnnouncementStatus structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AnnouncementStatus structure.
 */
export function isAnnouncementStatuses(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isAnnouncementStatus(json[0] || {})));
}
//# sourceMappingURL=Announcement.js.map