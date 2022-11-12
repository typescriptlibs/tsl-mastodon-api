export declare type MastodonCard = (MastodonLinkCard | MastodonPhotoCard | MastodonVideoCard);
export interface MastodonBaseCard {
    description: string;
    title: string;
    type: string;
    url: string;
}
export interface MastodonLinkCard extends MastodonBaseCard {
    type: 'link';
}
export interface MastodonPhotoCard extends MastodonBaseCard {
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
export interface MastodonVideoCard extends MastodonBaseCard {
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
export default MastodonCard;
