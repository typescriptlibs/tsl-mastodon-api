export interface List {
    id: string;
    replies_policy?: string;
    title: string;
}
export declare function isList(json: Partial<List>): json is List;
export declare function isLists(json: Partial<Array<Partial<List>>>): json is Array<List>;
export default List;
