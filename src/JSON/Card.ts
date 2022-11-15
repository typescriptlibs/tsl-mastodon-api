/* *
 *
 *  Declarations
 *
 * */

interface BaseCard {
    description: string;
    title: string;
    type: string;
    url: string;
}

export type Card = (
    LinkCard
    | PhotoCard
    | VideoCard
);

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

/* *
 *
 *  Default Export
 *
 * */

export default Card;
