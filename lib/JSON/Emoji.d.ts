export interface Emoji {
    category?: string;
    shortcode: string;
    static_url: string;
    url: string;
    visible_in_picker: boolean;
}
export declare function isEmoji(json: Partial<Emoji>): json is Emoji;
export default Emoji;
