/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/* *
 *
 *  Functions
 *
 * */
/**
 * Tests the JSON object for an AudioAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an AudioAttachment structure.
 */
export function isAudioAttachment(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        (typeof json.url === 'string' || json.url === null) &&
        json.type === 'audio' &&
        isAudioAttachmentMeta(json.meta));
}
/**
 * Tests the JSON object for an AudioAttachmentMeta structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an AudioAttachmentMeta structure.
 */
export function isAudioAttachmentMeta(json) {
    return (typeof json === 'object' &&
        typeof json.audio_bitrate === 'string' &&
        typeof json.audio_channels === 'string' &&
        typeof json.audio_encode === 'string' &&
        typeof json.duration === 'number' &&
        typeof json.length === 'string' &&
        typeof json.original === 'object' &&
        typeof json.original.bitrate === 'number' &&
        typeof json.original.duration === 'number');
}
/**
 * Tests the JSON object for a GIFVAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a GIFVAttachment structure.
 */
export function isGIFVAttachment(json) {
    return (typeof json === 'object' &&
        typeof json.blurhash === 'string' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        (typeof json.url === 'string' || json.url === null) &&
        json.type === 'gifv' &&
        isGIFVAttachmentMeta(json.meta));
}
/**
 * Tests the JSON object for a GIFVAttachmentMeta structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a GIFVAttachmentMeta structure.
 */
export function isGIFVAttachmentMeta(json) {
    return (typeof json === 'object' &&
        typeof json.aspect === 'number' &&
        typeof json.duration === 'number' &&
        typeof json.fps === 'number' &&
        typeof json.height === 'number' &&
        typeof json.length === 'string' &&
        typeof json.size === 'string' &&
        typeof json.width === 'number' &&
        typeof json.original === 'object' &&
        typeof json.original.bitrate === 'number' &&
        typeof json.original.duration === 'number' &&
        typeof json.original.frame_rate === 'string' &&
        typeof json.original.height === 'number' &&
        typeof json.original.width === 'number' &&
        typeof json.small === 'object' &&
        typeof json.small.aspect === 'number' &&
        typeof json.small.height === 'number' &&
        typeof json.small.size === 'string' &&
        typeof json.small.width === 'number');
}
/**
 * Tests the JSON object for an ImageAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an ImageAttachment structure.
 */
export function isImageAttachment(json) {
    return (typeof json === 'object' &&
        typeof json.blurhash === 'string' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        (typeof json.url === 'string' || json.url === null) &&
        json.type === 'image' &&
        isImageAttachmentMeta(json.meta));
}
/**
 * Tests the JSON object for an ImageAttachmentMeta structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an ImageAttachmentMeta structure.
 */
export function isImageAttachmentMeta(json) {
    return (typeof json === 'object' &&
        typeof json.focus === 'object' &&
        typeof json.focus.x === 'number' &&
        typeof json.focus.y === 'number' &&
        typeof json.original === 'object' &&
        typeof json.original.aspect === 'number' &&
        typeof json.original.height === 'number' &&
        typeof json.original.size === 'string' &&
        typeof json.original.width === 'number' &&
        typeof json.small === 'object' &&
        typeof json.small.aspect === 'number' &&
        typeof json.small.height === 'number' &&
        typeof json.small.size === 'string' &&
        typeof json.small.width === 'number');
}
/**
 * Tests the JSON object for a MediaAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a MediaAttachment structure.
 */
export function isMediaAttachment(json) {
    return (isAudioAttachment(json) ||
        isGIFVAttachment(json) ||
        isImageAttachment(json) ||
        isUnknownAttachment(json) ||
        isVideoAttachment(json));
}
/**
 * Tests the JSON object for an UnknownAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an UnknownAttachment structure.
 */
export function isUnknownAttachment(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        (typeof json.url === 'string' || json.url === null) &&
        json.type === 'unknown');
}
/**
 * Tests the JSON object for a VideoAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a VideoAttachment structure.
 */
export function isVideoAttachment(json) {
    return (typeof json === 'object' &&
        typeof json.blurhash === 'string' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        (typeof json.url === 'string' || json.url === null) &&
        json.type === 'video' &&
        isVideoAttachmentMeta(json.meta));
}
/**
 * Tests the JSON object for a VideoAttachmentMeta structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a VideoAttachmentMeta structure.
 */
export function isVideoAttachmentMeta(json) {
    return (typeof json === 'object' &&
        typeof json.aspect === 'number' &&
        typeof json.audio_bitrate === 'string' &&
        typeof json.audio_channels === 'string' &&
        typeof json.audio_encode === 'string' &&
        typeof json.duration === 'number' &&
        typeof json.fps === 'number' &&
        typeof json.height === 'number' &&
        typeof json.length === 'string' &&
        typeof json.size === 'string' &&
        typeof json.width === 'number' &&
        typeof json.original === 'object' &&
        typeof json.original.bitrate === 'number' &&
        typeof json.original.duration === 'number' &&
        typeof json.original.frame_rate === 'string' &&
        typeof json.original.height === 'number' &&
        typeof json.original.width === 'number' &&
        typeof json.small === 'object' &&
        typeof json.small.aspect === 'number' &&
        typeof json.small.height === 'number' &&
        typeof json.small.size === 'string' &&
        typeof json.small.width === 'number');
}
//# sourceMappingURL=MediaAttachment.js.map