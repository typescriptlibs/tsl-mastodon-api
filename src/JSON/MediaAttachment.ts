/* *
 *
 *  Declarations
 *
 * */

export interface AudioAttachment {
    blurhash?: ( string | null );
    description?: ( string | null );
    id: string;
    meta: AudioAttachmentMeta;
    preview_url: string;
    remote_url?: ( string | null );
    /** @deprecated */
    text_url?: string;
    type: 'audio';
    url: string;
}

export interface AudioAttachmentMeta {
    audio_bitrate: string;
    audio_channels: string;
    audio_encode: string;
    duration: number;
    length: string;
    original: AudioAttachmentMetaOriginal;
}

export interface AudioAttachmentMetaOriginal {
    bitrate: number;
    duration: number;
}

export interface GIFVAttachment {
    blurhash: string;
    description?: ( string | null );
    id: string;
    meta: GIFVAttachmentMeta;
    preview_url: string;
    remote_url?: ( string | null );
    /** @deprecated */
    text_url?: string;
    type: 'gifv';
    url: string;
}

export interface GIFVAttachmentMeta {
    aspect: number;
    duration: number;
    fps: number;
    height: number;
    length: string;
    original: GIFVAttachmentMetaOriginal;
    size: string;
    small: GIFVAttachmentMetaSmall;
    width: number;
}

export interface GIFVAttachmentMetaOriginal {
    bitrate: number;
    duration: number;
    frame_rate: string;
    height: number;
    width: number;
}

export interface GIFVAttachmentMetaSmall {
    aspect: number;
    height: number;
    size: string;
    width: number;
}

export interface ImageAttachment {
    blurhash: string;
    description?: ( string | null );
    id: string;
    meta: ImageAttachmentMeta;
    preview_url: string;
    remote_url?: ( string | null );
    /** @deprecated */
    text_url?: string;
    type: 'image';
    url: string;
}

export interface ImageAttachmentMeta {
    focus: ImageAttachmentMetaFocus;
    original: ImageAttachmentMetaOriginal;
    small: ImageAttachmentMetaSmall;
}

export interface ImageAttachmentMetaFocus {
    x: number;
    y: number;
}

export interface ImageAttachmentMetaOriginal {
    aspect: number;
    height: number;
    size: string;
    width: number;
}

export interface ImageAttachmentMetaSmall {
    aspect: number;
    height: number;
    size: string;
    width: number;
}

export type MediaAttachment = (
    | AudioAttachment
    | GIFVAttachment
    | ImageAttachment
    | UnknownAttachment
    | VideoAttachment
);

export interface UnknownAttachment {
    description?: ( string | null );
    id: string;
    meta: Record<string, Record<string, ( number | string )>>;
    preview_url: string;
    remote_url?: ( string | null );
    /** @deprecated */
    text_url?: string;
    type: 'unknown';
    url: string;
}

export interface VideoAttachment {
    blurhash: string;
    description?: ( string | null );
    id: string;
    meta: VideoAttachmentMeta;
    preview_url: string;
    remote_url?: ( string | null );
    /** @deprecated */
    text_url?: string;
    type: 'video';
    url: string;
}

export interface VideoAttachmentMeta {
    aspect: number;
    audio_bitrate: string;
    audio_channels: string;
    audio_encode: string;
    duration: number;
    fps: number;
    height: number;
    length: string;
    original: VideoAttachmentMetaOriginal;
    size: string;
    small: VideoAttachmentMetaSmall;
    width: number;
}

export interface VideoAttachmentMetaOriginal {
    bitrate: number;
    duration: number;
    frame_rate: string;
    height: number;
    width: number;
}

export interface VideoAttachmentMetaSmall {
    aspect: number;
    height: number;
    size: string;
    width: number;
}

/* *
 *
 *  Functions
 *
 * */

export function isAudioAttachment (
    json: Partial<AudioAttachment>
): json is AudioAttachment {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        typeof json.url === 'string' &&
        json.type === 'audio' &&
        isAudioAttachmentMeta( json.meta )
    );
}

export function isAudioAttachmentMeta (
    json: Partial<AudioAttachmentMeta>
): json is AudioAttachmentMeta {
    return (
        typeof json === 'object' &&
        typeof json.audio_bitrate === 'string' &&
        typeof json.audio_channels === 'string' &&
        typeof json.audio_encode === 'string' &&
        typeof json.duration === 'number' &&
        typeof json.length === 'string' &&
        typeof json.original === 'object' &&
        typeof json.original.bitrate === 'number' &&
        typeof json.original.duration === 'number'
    );
}

export function isGIFVAttachment (
    json: Partial<GIFVAttachment>
): json is GIFVAttachment {
    return (
        typeof json === 'object' &&
        typeof json.blurhash === 'string' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        typeof json.url === 'string' &&
        json.type === 'gifv' &&
        isGIFVAttachmentMeta( json.meta )
    );
}

export function isGIFVAttachmentMeta (
    json: Partial<GIFVAttachmentMeta>
): json is GIFVAttachmentMeta {
    return (
        typeof json === 'object' &&
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
        typeof json.small.width === 'number'
    );
}

export function isImageAttachment (
    json: Partial<ImageAttachment>
): json is ImageAttachment {
    return (
        typeof json === 'object' &&
        typeof json.blurhash === 'string' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        typeof json.url === 'string' &&
        json.type === 'image' &&
        isImageAttachmentMeta( json.meta )
    );
}

export function isImageAttachmentMeta (
    json: Partial<ImageAttachmentMeta>
): json is ImageAttachmentMeta {
    return (
        typeof json === 'object' &&
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
        typeof json.small.width === 'number'
    );
}

export function isMediaAttachment (
    json: Partial<MediaAttachment>
): json is MediaAttachment {
    return (
        isAudioAttachment( json as AudioAttachment ) ||
        isGIFVAttachment( json as GIFVAttachment ) ||
        isImageAttachment( json as ImageAttachment ) ||
        isUnknownAttachment( json as UnknownAttachment ) ||
        isVideoAttachment( json as VideoAttachment )
    );
}

export function isUnknownAttachment (
    json: Partial<UnknownAttachment>
): json is UnknownAttachment {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        typeof json.url === 'string' &&
        json.type === 'unknown'
    );
}

export function isVideoAttachment (
    json: Partial<VideoAttachment>
): json is VideoAttachment {
    return (
        typeof json === 'object' &&
        typeof json.blurhash === 'string' &&
        typeof json.id === 'string' &&
        typeof json.meta === 'object' &&
        typeof json.preview_url === 'string' &&
        typeof json.url === 'string' &&
        json.type === 'video' &&
        isVideoAttachmentMeta( json.meta )
    );
}

export function isVideoAttachmentMeta (
    json: Partial<VideoAttachmentMeta>
): json is VideoAttachmentMeta {
    return (
        typeof json === 'object' &&
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
        typeof json.small.width === 'number'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default MediaAttachment;
