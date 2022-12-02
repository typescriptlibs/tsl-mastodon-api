/* *
 *
 *  Imports
 *
 * */

import type Visibility from './Visibility.js';

/* *
 *
 *  Declarations
 *
 * */

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

export type NewStatus = (
    | NewMediaStatus
    | NewTextStatus
);

export interface NewTextStatus {
    in_reply_to_id?: string;
    media_ids?: undefined;
    poll?: NewTextStatusPoll;
    scheduled_at?: Date;
    sensitive?: boolean;
    spoiler_text?: string;
    status: string;
    visibility?: Visibility;
}

export interface NewTextStatusPoll {
    expires_in: number;
    hide_totals?: boolean;
    multiple?: boolean;
    options: Array<string>;
}

/* *
 *
 *  Default Export
 *
 * */

export default NewStatus;
