/* *
 *
 *  Declarations
 *
 * */

export interface Account {
    acct: string;
    avatar?: string;
    avatar_static?: string;
    bot?: boolean;
    created_at: string;
    display_name: string;
    followers_count: number;
    following_count: number;
    id: string;
    last_status_at: string;
    locked?: boolean;
    note?: string;
    statuses_count: number;
    url: string;
    username: string;
}

/* *
 *
 *  Functions
 *
 * */

export function isAccount(
    json: Partial<Account>
): json is Account {
    return (
        typeof json?.acct === 'string' &&
        typeof json?.created_at === 'string' &&
        typeof json?.display_name === 'string' &&
        typeof json?.followers_count === 'number' &&
        typeof json?.following_count === 'number' &&
        typeof json?.id === 'string' &&
        typeof json?.last_status_at === 'string' &&
        typeof json?.statuses_count === 'number' &&
        typeof json?.url === 'string' &&
        typeof json?.username === 'string'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Account;
