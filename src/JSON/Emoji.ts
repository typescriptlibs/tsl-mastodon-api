/* *
 *
 *  Declarations
 *
 * */

export interface Emoji {
    category?: string;
    shortcode: string;
    static_url: string;
    url: string;
    visible_in_picker: boolean;
}

/* *
 *
 *  Functions
 *
 * */

export function isEmoji (
    json: Partial<Emoji>
): json is Emoji {
    return (
        typeof json === 'object' &&
        typeof json.shortcode === 'string' &&
        typeof json.static_url === 'string' &&
        typeof json.url === 'string' &&
        typeof json.visible_in_picker === 'boolean'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Emoji;
