export interface Poll {
    emojis: Array<unknown>;
    expired: boolean;
    expires_at: string;
    id: string;
    multiple?: boolean;
    options: Array<PollOption>;
    own_votes: Array<number>;
    voted: boolean;
    voters_count?: (number | null);
    votes_count: number;
}
export interface PollOption {
    title: string;
    votes_count: number;
}
/**
 * Interface to post poll votes.
 */
export interface PollVotePost {
    choices: Array<number>;
}
export declare function isPoll(json: Partial<Poll>): json is Poll;
export declare function isPollOptions(json: Partial<Array<Partial<Poll>>>): json is Partial<Array<Partial<Poll>>>;
export default Poll;
