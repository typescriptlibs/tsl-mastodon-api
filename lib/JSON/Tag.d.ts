export interface Tag {
    history?: Array<TagStatistic>;
    name: string;
    url: string;
}
export interface TagStatistic {
    accounts: number;
    day: number;
    uses: number;
}
export declare function isTag(json: Partial<Tag>): json is Tag;
export declare function isTagStatistic(json: Partial<TagStatistic>): json is TagStatistic;
export default Tag;
