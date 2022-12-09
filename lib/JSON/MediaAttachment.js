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
export function isAudioAttachment(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        (typeof json.url === 'string' || json.url === null) &&
        json.type === 'audio' &&
        isAudioAttachmentMeta(json.meta));
}
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
export function isMediaAttachment(json) {
    return (isAudioAttachment(json) ||
        isGIFVAttachment(json) ||
        isImageAttachment(json) ||
        isUnknownAttachment(json) ||
        isVideoAttachment(json));
}
export function isUnknownAttachment(json) {
    return (typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        (typeof json.url === 'string' || json.url === null) &&
        json.type === 'unknown');
}
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