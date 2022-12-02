/* *
 *
 *  Declarations
 *
 * */

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

/* *
 *
 *  Functions
 *
 * */

export function isTag (
    json: Partial<Tag>
): json is Tag {
    return (
        typeof json === 'object' &&
        typeof json.name === 'string' &&
        typeof json.url === 'string' &&
        json.history instanceof Array &&
        (
            !json.history.length ||
            isTagStatistic( json.history[0] )
        )
    );
}

export function isTagStatistic (
    json: Partial<TagStatistic>
): json is TagStatistic {
    return (
        typeof json === 'object' &&
        typeof json.accounts === 'number' &&
        typeof json.day === 'number' &&
        typeof json.uses === 'number'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Tag;
