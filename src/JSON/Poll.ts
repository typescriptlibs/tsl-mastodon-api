/* *
 *
 *  Declarations
 *
 * */

export interface Poll {
    emojis: Array<unknown>;
    expired: boolean;
    expires_at: string;
    id: string;
    multiple?: boolean;
    options: Array<PollOption>;
    own_votes: Array<number>;
    voted: boolean;
    voters_count?: (number|null);
    votes_count: number;
}

export interface PollOption {
    title: string;
    votes_count: number;
}

/* *
 *
 *  Functions
 *
 * */

export function isPoll (
    json: Partial<Poll>
): json is Poll {
    return (
        typeof json === 'object' &&
        typeof json.emojis === 'object' &&
        typeof json.expired === 'boolean' &&
        typeof json.expires_at === 'string' &&
        typeof json.id === 'string' &&
        typeof json.options === 'object' &&
        typeof json.own_votes === 'object' &&
        typeof json.voted === 'boolean' &&
        typeof json.votes_count === 'number' &&
        isPollOptions(json.options)
    );
}

export function isPollOptions (
    json: Partial<Array<Partial<Poll>>>
): json is Partial<Array<Partial<Poll>>> {
    return (
        typeof json === 'object'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Poll;
