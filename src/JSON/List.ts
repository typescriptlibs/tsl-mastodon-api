/* *
 *
 *  Declarations
 *
 * */

export interface List {
    id: string;
    replies_policy?: string;
    title: string;
}

/* *
 *
 *  Functions
 *
 * */

export function isList (
    json: Partial<List>
): json is List {
    return (
        typeof json === 'object' &&
        typeof json.id === 'string' &&
        typeof json.title === 'string'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default List;
