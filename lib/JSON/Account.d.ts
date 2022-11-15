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
export declare function isAccount(json: Partial<Account>): json is Account;
export default Account;
