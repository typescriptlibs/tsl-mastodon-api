/* *
 *
 *  Imports
 *
 * */

import MastodonTimeString from '../MastodonTimeString.js';

/* *
 *
 *  Declarations
 *
 * */

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

/* *
 *
 *  Default Export
 *
 * */

export default MastodonAccount;
