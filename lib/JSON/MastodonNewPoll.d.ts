export interface MastodonNewPoll {
    expires_in: number;
    hide_totals?: boolean;
    multiple?: boolean;
    options: Array<string>;
}
export default MastodonNewPoll;
