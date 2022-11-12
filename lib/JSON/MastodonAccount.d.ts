import MastodonTimeString from '../MastodonTimeString.js';
export interface MastodonAccount {
    acct: string;
    avatar?: string;
    avatar_static?: string;
    bot?: boolean;
    created_at: MastodonTimeString;
    display_name: string;
    followers_count: number;
    following_count: number;
    id: number;
    last_status_at: MastodonTimeString;
    locked?: boolean;
    note?: string;
    statuses_count: number;
    url: string;
    username: string;
}
export default MastodonAccount;
