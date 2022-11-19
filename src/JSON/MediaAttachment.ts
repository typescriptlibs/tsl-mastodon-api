/* *
 *
 *  Declarations
 *
 * */

export interface ImageAttachment {
    blurhash: string;
    description: string;
    id: string;
    meta: MediaAttachmentMeta;
    preview_url: string;
    text_url: string;
    type: 'image';
    url: string;
}

export type MediaAttachment = (
    ImageAttachment
    | UnknownAttachment
);

export interface MediaAttachmentMeta {
    focus: MediaAttachmentMetaFocus;
    original: MediaAttachmentMetaSize;
    small: MediaAttachmentMetaSize;
}

export interface MediaAttachmentMetaFocus {
    x: number;
    y: number;
}

export interface MediaAttachmentMetaSize {
    aspect: number;
    height: number;
    size: string;
    width: number;
}

export interface UnknownAttachment {
    description: string;
    id: string;
    meta: UnknownAttachmentMeta;
    preview_url: string;
    text_url: string;
    type: 'unknown';
    url: string;
}

export interface UnknownAttachmentMeta {
    focus: MediaAttachmentMetaFocus;
}

/* *
 *
 *  Functions
 *
 * */

export function isImageAttachment (
    json: Partial<ImageAttachment>
): json is ImageAttachment {
    return (
        typeof json === 'object' &&
        typeof json.blurhash === 'string' &&
        typeof json.description === 'string' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        typeof json.text_url === 'string' &&
        typeof json.url === 'string' &&
        json.type === 'image' &&
        isImageAttachmentMeta(json.meta)
    );
}

export function isImageAttachmentMeta (
    json: Partial<MediaAttachmentMeta>
): json is MediaAttachmentMeta {
    return (
        typeof json === 'object' &&
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
        typeof json.small.width === 'number'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default MediaAttachment;
