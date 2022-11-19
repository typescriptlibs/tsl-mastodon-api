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
export declare type MediaAttachment = (ImageAttachment | UnknownAttachment);
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
export declare function isImageAttachment(json: Partial<ImageAttachment>): json is ImageAttachment;
export declare function isImageAttachmentMeta(json: Partial<MediaAttachmentMeta>): json is MediaAttachmentMeta;
export default MediaAttachment;
