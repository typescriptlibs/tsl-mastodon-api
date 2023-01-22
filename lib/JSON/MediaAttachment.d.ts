/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export interface AudioAttachment {
    blurhash?: (string | null);
    description?: (string | null);
    id: string;
    meta: AudioAttachmentMeta;
    preview_url: string;
    remote_url?: (string | null);
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
    description?: (string | null);
    id: string;
    meta: GIFVAttachmentMeta;
    preview_url: string;
    remote_url?: (string | null);
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
    description?: (string | null);
    id: string;
    meta: ImageAttachmentMeta;
    preview_url: string;
    remote_url?: (string | null);
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
export type MediaAttachment = (AudioAttachment | GIFVAttachment | ImageAttachment | UnknownAttachment | VideoAttachment);
/**
 * Interface to post a new media attachment.
 */
export interface MediaAttachmentPost {
    file: (Blob | File);
    thumbnail?: Blob;
    description?: string;
    focus?: string;
}
export interface UnknownAttachment {
    description?: (string | null);
    id: string;
    meta: Record<string, Record<string, (number | string)>>;
    preview_url: string;
    remote_url?: (string | null);
    /** @deprecated */
    text_url?: string;
    type: 'unknown';
    url: string;
}
export interface VideoAttachment {
    blurhash: string;
    description?: (string | null);
    id: string;
    meta: VideoAttachmentMeta;
    preview_url: string;
    remote_url?: (string | null);
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
export declare function isAudioAttachment(json: Partial<AudioAttachment>): json is AudioAttachment;
export declare function isAudioAttachmentMeta(json: Partial<AudioAttachmentMeta>): json is AudioAttachmentMeta;
export declare function isGIFVAttachment(json: Partial<GIFVAttachment>): json is GIFVAttachment;
export declare function isGIFVAttachmentMeta(json: Partial<GIFVAttachmentMeta>): json is GIFVAttachmentMeta;
export declare function isImageAttachment(json: Partial<ImageAttachment>): json is ImageAttachment;
export declare function isImageAttachmentMeta(json: Partial<ImageAttachmentMeta>): json is ImageAttachmentMeta;
export declare function isMediaAttachment(json: Partial<MediaAttachment>): json is MediaAttachment;
export declare function isUnknownAttachment(json: Partial<UnknownAttachment>): json is UnknownAttachment;
export declare function isVideoAttachment(json: Partial<VideoAttachment>): json is VideoAttachment;
export declare function isVideoAttachmentMeta(json: Partial<VideoAttachmentMeta>): json is VideoAttachmentMeta;
export default MediaAttachment;
