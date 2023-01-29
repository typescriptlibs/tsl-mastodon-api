/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
interface BaseCard {
    description: string;
    title: string;
    type: string;
    url: string;
}
export type Card = (LinkCard | PhotoCard | VideoCard);
export interface LinkCard extends BaseCard {
    type: 'link';
}
export interface PhotoCard extends BaseCard {
    author_name: string;
    author_url: string;
    blurhash: string;
    embed_url: string;
    height: number;
    image: string;
    provider_name: string;
    provider_url: string;
    type: 'photo';
    width: number;
}
export interface VideoCard extends BaseCard {
    author_name: string;
    author_url: string;
    blurhash: string;
    height: number;
    html: string;
    image: string;
    provider_name: string;
    provider_url: string;
    type: 'video';
    width: number;
}
export default Card;
