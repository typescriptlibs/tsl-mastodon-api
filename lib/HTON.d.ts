export type HTON = [HTON.TagName, HTON.Attributes, HTON.Children];
export declare namespace HTON {
    type Attributes = Record<string, string>;
    type Children = Array<(string | HTON)>;
    type TagName = string;
    function create(tagName: TagName, attributes?: Attributes, children?: Children): HTON;
    function isHTML(text: string): boolean;
    function parseText(text: string): Array<(string | HTON)>;
}
export default HTON;
