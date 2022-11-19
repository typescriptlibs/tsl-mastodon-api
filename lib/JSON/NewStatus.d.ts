import type NewPoll from './NewPoll.js';
import type Visibility from './Visibility.js';
export type NewStatus = (NewMediaStatus | NewTextStatus);
export interface NewMediaStatus {
    in_reply_to_id?: string;
    media_ids: Array<string>;
    poll?: undefined;
    scheduled_at?: Date;
    sensitive?: boolean;
    spoiler_text?: string;
    status?: string;
    visibility?: Visibility;
}
export interface NewTextStatus {
    in_reply_to_id?: string;
    media_ids?: undefined;
    poll?: NewPoll;
    scheduled_at?: Date;
    sensitive?: boolean;
    spoiler_text?: string;
    status: string;
    visibility?: Visibility;
}
export default NewStatus;
