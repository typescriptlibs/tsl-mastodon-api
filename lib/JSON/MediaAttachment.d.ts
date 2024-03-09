/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/MediaAttachment" />
/**
 * Represents a file or media attachment that can be added to a status.
 * @since 2.9.1
 */
export interface AudioAttachment {
    /**
     * A hash computed by the BlurHash algorithm, for generating colorful
     * preview thumbnails when media has not been downloaded yet.
     * @since 2.8.1
     */
    blurhash?: (string | null);
    /**
     * Alternate text that describes what is in the media attachment, to be used
     * for the visually impaired or when media attachments do not load.
     * @since 2.0.0
     */
    description?: (string | null);
    /**
     * The ID of the attachment in the database.
     * @since 0.6.0
     */
    id: string;
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    meta: AudioAttachmentMeta;
    /**
     * The location of a scaled-down preview of the attachment.
     * @since 0.6.0
     */
    preview_url: string;
    /**
     * The location of the full-size original attachment on the remote
     * @since 0.6.0
     */
    remote_url?: (string | null);
    /**
     * A shorter URL for the attachment.
     * @deprecated
     * @since 3.5.0
     */
    text_url?: (string | null);
    /**
     * The type of the attachment.
     * @since 0.6.0
     */
    type: 'audio';
    /**
     * The location of the original full-size attachment.
     * @since 0.6.0
     */
    url: string;
}
/**
 * Metadata returned by Paperclip.
 * @since 1.5.0
 */
export interface AudioAttachmentMeta {
    audio_bitrate: string;
    audio_channels: string;
    audio_encode: string;
    duration: number;
    length: string;
    original: AudioAttachmentMetaOriginal;
}
/**
 * Metadata returned by Paperclip.
 * @since 1.5.0
 */
export interface AudioAttachmentMetaOriginal {
    bitrate: number;
    duration: number;
}
/**
 * Represents a looping, soundless animation attachment that can be added to a
 * status.
 * @since 0.6.0
 */
export interface GIFVAttachment {
    /**
     * A hash computed by the BlurHash algorithm, for generating colorful
     * preview thumbnails when media has not been downloaded yet.
     * @since 2.8.1
     */
    blurhash: string;
    /**
     * Alternate text that describes what is in the media attachment, to be used
     * for the visually impaired or when media attachments do not load.
     * @since 2.0.0
     */
    description?: (string | null);
    /**
     * The ID of the attachment in the database.
     * @since 0.6.0
     */
    id: string;
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    meta: GIFVAttachmentMeta;
    /**
     * The location of a scaled-down preview of the attachment.
     * @since 0.6.0
     */
    preview_url: string;
    /**
     * The location of the full-size original attachment on the remote
     * @since 0.6.0
     */
    remote_url?: (string | null);
    /**
     * A shorter URL for the attachment.
     * @deprecated
     * @since 3.5.0
     */
    text_url?: (string | null);
    /**
     * The type of the attachment.
     * @since 0.6.0
     */
    type: 'gifv';
    /**
     * The location of the original full-size attachment.
     * @since 0.6.0
     */
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
/**
 * Represents a static image attachment that can be added to a status.
 * @since 0.6.0
 */
export interface ImageAttachment {
    /**
     * A hash computed by the BlurHash algorithm, for generating colorful
     * preview thumbnails when media has not been downloaded yet.
     * @since 2.8.1
     */
    blurhash: string;
    /**
     * Alternate text that describes what is in the media attachment, to be used
     * for the visually impaired or when media attachments do not load.
     * @since 2.0.0
     */
    description?: (string | null);
    /**
     * The ID of the attachment in the database.
     * @since 0.6.0
     */
    id: string;
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    meta: ImageAttachmentMeta;
    /**
     * @since unknown
     */
    preview_remote_url?: (string | null);
    /**
     * The location of a scaled-down preview of the attachment.
     * @since 0.6.0
     */
    preview_url: string;
    /**
     * The location of the full-size original attachment on the remote
     * @since 0.6.0
     */
    remote_url?: (string | null);
    /**
     * A shorter URL for the attachment.
     * @deprecated
     * @since 3.5.0
     */
    text_url?: (string | null);
    /**
     * The type of the attachment.
     * @since 0.6.0
     */
    type: 'image';
    /**
     * The location of the original full-size attachment.
     * @since 0.6.0
     */
    url: string;
}
/**
 * Metadata returned by Paperclip.
 * @since 1.5.0
 */
export interface ImageAttachmentMeta {
    focus?: ImageAttachmentMetaFocus;
    original: ImageAttachmentMetaOriginal;
    small: ImageAttachmentMetaSmall;
}
/**
 * Metadata returned by Paperclip.
 * @since 2.3.0
 */
export interface ImageAttachmentMetaFocus {
    x: number;
    y: number;
}
/**
 * Metadata returned by Paperclip.
 * @since 1.5.0
 */
export interface ImageAttachmentMetaOriginal {
    aspect: number;
    height: number;
    size: string;
    width: number;
}
/**
 * Metadata returned by Paperclip.
 * @since 1.5.0
 */
export interface ImageAttachmentMetaSmall {
    aspect: number;
    height: number;
    size: string;
    width: number;
}
/**
 * Represents a file or media attachment that can be added to a status.
 * @since 0.6.0
 */
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
/**
 * Represents a unsupported or unrecognized file type.
 * @since 0.6.0
 */
export interface UnknownAttachment {
    /**
     * Alternate text that describes what is in the media attachment, to be used
     * for the visually impaired or when media attachments do not load.
     * @since 2.0.0
     */
    description?: (string | null);
    /**
     * The ID of the attachment in the database.
     * @since 0.6.0
     */
    id: string;
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    meta: Record<string, Record<string, (number | string)>>;
    /**
     * The location of a scaled-down preview of the attachment.
     * @since 0.6.0
     */
    preview_url: string;
    /**
     * The location of the full-size original attachment on the remote
     * @since 0.6.0
     */
    remote_url?: (string | null);
    /**
     * A shorter URL for the attachment.
     * @deprecated
     * @since 3.5.0
     */
    text_url?: (string | null);
    /**
     * The type of the attachment.
     * @since 0.6.0
     */
    type: 'unknown';
    /**
     * The location of the original full-size attachment.
     * @since 0.6.0
     */
    url: string;
}
/**
 * Represents a video clip attachment that can be added to a status.
 * @since 0.6.0
 */
export interface VideoAttachment {
    /**
     * A hash computed by the BlurHash algorithm, for generating colorful
     * preview thumbnails when media has not been downloaded yet.
     * @since 2.8.1
     */
    blurhash: string;
    /**
     * Alternate text that describes what is in the media attachment, to be used
     * for the visually impaired or when media attachments do not load.
     * @since 2.0.0
     */
    description?: (string | null);
    /**
     * The ID of the attachment in the database.
     * @since 0.6.0
     */
    id: string;
    /**
     * Metadata returned by Paperclip.
     * @since 1.5.0
     */
    meta: VideoAttachmentMeta;
    /**
     * The location of a scaled-down preview of the attachment.
     * @since 0.6.0
     */
    preview_url: string;
    /**
     * The location of the full-size original attachment on the remote
     * @since 0.6.0
     */
    remote_url?: (string | null);
    /** @deprecated */
    text_url?: (string | null);
    /**
     * The type of the attachment.
     * @since 0.6.0
     */
    type: 'video';
    /**
     * The location of the original full-size attachment.
     * @since 0.6.0
     */
    url: string;
}
/**
 * Metadata returned by Paperclip.
 * @since 1.5.0
 */
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
/**
 * Metadata returned by Paperclip.
 * @since 1.5.0
 */
export interface VideoAttachmentMetaOriginal {
    bitrate: number;
    duration: number;
    frame_rate: string;
    height: number;
    width: number;
}
/**
 * Metadata returned by Paperclip.
 * @since 1.5.0
 */
export interface VideoAttachmentMetaSmall {
    aspect: number;
    height: number;
    size: string;
    width: number;
}
/**
 * Tests the JSON object for an AudioAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an AudioAttachment structure.
 */
export declare function isAudioAttachment(json: Partial<AudioAttachment>): json is AudioAttachment;
/**
 * Tests the JSON object for an AudioAttachmentMeta structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an AudioAttachmentMeta structure.
 */
export declare function isAudioAttachmentMeta(json: Partial<AudioAttachmentMeta>): json is AudioAttachmentMeta;
/**
 * Tests the JSON object for a GIFVAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a GIFVAttachment structure.
 */
export declare function isGIFVAttachment(json: Partial<GIFVAttachment>): json is GIFVAttachment;
/**
 * Tests the JSON object for a GIFVAttachmentMeta structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a GIFVAttachmentMeta structure.
 */
export declare function isGIFVAttachmentMeta(json: Partial<GIFVAttachmentMeta>): json is GIFVAttachmentMeta;
/**
 * Tests the JSON object for an ImageAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an ImageAttachment structure.
 */
export declare function isImageAttachment(json: Partial<ImageAttachment>): json is ImageAttachment;
/**
 * Tests the JSON object for an ImageAttachmentMeta structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an ImageAttachmentMeta structure.
 */
export declare function isImageAttachmentMeta(json: Partial<ImageAttachmentMeta>): json is ImageAttachmentMeta;
/**
 * Tests the JSON object for a MediaAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a MediaAttachment structure.
 */
export declare function isMediaAttachment(json: Partial<MediaAttachment>): json is MediaAttachment;
/**
 * Tests the JSON object for an UnknownAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an UnknownAttachment structure.
 */
export declare function isUnknownAttachment(json: Partial<UnknownAttachment>): json is UnknownAttachment;
/**
 * Tests the JSON object for a VideoAttachment structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a VideoAttachment structure.
 */
export declare function isVideoAttachment(json: Partial<VideoAttachment>): json is VideoAttachment;
/**
 * Tests the JSON object for a VideoAttachmentMeta structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a VideoAttachmentMeta structure.
 */
export declare function isVideoAttachmentMeta(json: Partial<VideoAttachmentMeta>): json is VideoAttachmentMeta;
export default MediaAttachment;
