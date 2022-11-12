/* *
 *
 *  Declarations
 *
 * */

export interface MastodonImageAttachment {
    blurhash: string;
    description: string;
    id: string;
    meta: MastodonMediaAttachmentMeta;
    preview_url: string;
    text_url: string;
    type: 'image';
    url: string;
}

export type MastodonMediaAttachment = (
    MastodonImageAttachment
    | MastodonUnknownAttachment
);

export interface MastodonMediaAttachmentMeta {
    focus: MastodonMediaAttachmentMetaFocus;
    original: MastodonMediaAttachmentMetaSize;
    small: MastodonMediaAttachmentMetaSize;
}

export interface MastodonMediaAttachmentMetaFocus {
    x: number;
    y: number;
}

export interface MastodonMediaAttachmentMetaSize {
    aspect: number;
    height: number;
    size: string;
    width: number;
}

export interface MastodonUnknownAttachment {
    description: string;
    id: string;
    meta: MastodonUnknownAttachmentMeta;
    preview_url: string;
    text_url: string;
    type: 'unknown';
    url: string;
}

export interface MastodonUnknownAttachmentMeta {
    focus: MastodonMediaAttachmentMetaFocus;
}

/* *
 *
 *  Default Export
 *
 * */

export default MastodonMediaAttachment;
