/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/Card" />
/**
 * Represents a rich preview card that is generated using OpenGraph tags from a
 * URL.
 */
interface BaseCard {
    /**
     * Description of preview.
     * @since 1.0.0
     */
    description: string;
    /**
     * Title of linked resource.
     * @since 1.0.0
     */
    title: string;
    /**
     * The type of the preview card.
     * @since 1.3.0
     */
    type: string;
    /**
     * Location of linked resource.
     * @since 1.0.0
     */
    url: string;
}
/**
 * Represents a rich preview card that is generated using OpenGraph tags from an
 * URL.
 */
export type Card = (LinkCard | PhotoCard | IframeCard | VideoCard);
/**
 * Represents an iframe preview card that is generated using OpenGraph tags from
 * an URL. Iframe is not currently accepted, so won’t show up in practice.
 */
export interface IframeCard extends BaseCard {
    /**
     * The type of the preview card.
     * @since 1.3.0
     */
    type: 'rich';
}
/**
 * Represents a link preview card that is generated using OpenGraph tags from an
 * URL.
 */
export interface LinkCard extends BaseCard {
    /**
     * The type of the preview card.
     * @since 1.3.0
     */
    type: 'link';
}
/**
 * Represents a photo preview card that is generated using OpenGraph tags from
 * an URL.
 */
export interface PhotoCard extends BaseCard {
    /**
     * The author of the original resource.
     * @since 1.3.0
     */
    author_name: string;
    /**
     * A link to the author of the original resource.
     * @since 1.3.0
     */
    author_url: string;
    /**
     * A hash computed by
     * [the BlurHash algorithm](https://github.com/woltapp/blurhash), for
     * generating colorful preview thumbnails when media has not been downloaded
     * yet.
     * @since 3.2.0
     */
    blurhash: string;
    /**
     * Used for photo embeds, instead of custom `html`.
     * @since 2.1.0
     */
    embed_url: string;
    /**
     * Height of preview, in pixels.
     * @since 1.3.0
     */
    height: number;
    /**
     * Preview thumbnail.
     * @since 1.0.0
     */
    image?: string;
    /**
     * The provider of the original resource.
     * @since 1.3.0
     */
    provider_name: string;
    /**
     * A link to the provider of the original resource.
     * @since 1.3.0
     */
    provider_url: string;
    /**
     * The type of the preview card.
     * @since 1.3.0
     */
    type: 'photo';
    /**
     * Width of preview, in pixels.
     * @since 1.3.0
     */
    width: number;
}
/**
 * Represents a video preview card that is generated using OpenGraph tags from
 * an URL.
 */
export interface VideoCard extends BaseCard {
    /**
     * The author of the original resource.
     * @since 1.3.0
     */
    author_name: string;
    /**
     * A link to the author of the original resource.
     * @since 1.3.0
     */
    author_url: string;
    /**
     * A hash computed by
     * [the BlurHash algorithm](https://github.com/woltapp/blurhash), for
     * generating colorful preview thumbnails when media has not been downloaded
     * yet.
     * @since 3.2.0
     */
    blurhash?: string;
    /**
     * Height of preview, in pixels.
     * @since 1.3.0
     */
    height: number;
    /**
     * HTML to be used for generating the preview card.
     * @since 1.3.0
     */
    html: string;
    /**
     * Preview thumbnail.
     * @since 1.0.0
     */
    image?: string;
    /**
     * The provider of the original resource.
     * @since 1.3.0
     */
    provider_name: string;
    /**
     * A link to the provider of the original resource.
     * @since 1.3.0
     */
    provider_url: string;
    /**
     * The type of the preview card.
     * @since 1.3.0
     */
    type: 'video';
    /**
     * Width of preview, in pixels.
     * @since 1.3.0
     */
    width: number;
}
export default Card;
