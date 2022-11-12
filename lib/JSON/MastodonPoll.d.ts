import MastodonTimeString from '../MastodonTimeString.js';
export interface MastodonPoll {
    emojis: Array<unknown>;
    expired: boolean;
    expires_at: MastodonTimeString;
    id: string;
    multiple?: boolean;
    options: Array<MastodonPollOption>;
    own_votes: Array<unknown>;
    voted: boolean;
    voters_count: number;
    votes_count: number;
}
export interface MastodonPollOption {
    title: string;
    votes_count: number;
}
export default MastodonPoll;
