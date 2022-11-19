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
export function isImageAttachment(json) {
    return (typeof json === 'object' &&
        typeof json.blurhash === 'string' &&
        typeof json.description === 'string' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        typeof json.text_url === 'string' &&
        typeof json.url === 'string' &&
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
        typeof json.original.size === 'number' &&
        typeof json.original.width === 'number' &&
        typeof json.small === 'object' &&
        typeof json.small.aspect === 'number' &&
        typeof json.small.height === 'number' &&
        typeof json.small.size === 'number' &&
        typeof json.small.width === 'number');
}
//# sourceMappingURL=MediaAttachment.js.map