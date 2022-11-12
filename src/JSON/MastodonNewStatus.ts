/* *
 *
 *  Imports
 *
 * */

import MastodonNewPoll from './MastodonNewPoll.js';
import MastodonTimeString from '../MastodonTimeString.js';
import MastodonVisibility from '../MastodonVisibility.js';

/* *
 *
 *  Declarations
 *
 * */

export type MastodonNewStatus = (
    MastodonNewMediaStatus
    | MastodonNewTextStatus
);

export interface MastodonNewMediaStatus {
    in_reply_to_id?: string;
    media_ids: Array<string>;
    poll?: undefined;
    scheduled_at?: MastodonTimeString;
    sensitive?: boolean;
    spoiler_text?: string;
    status?: string;
    visibility?: MastodonVisibility;
}

export interface MastodonNewTextStatus {
    in_reply_to_id?: string;
    media_ids?: undefined;
    poll?: MastodonNewPoll;
    scheduled_at?: MastodonTimeString;
    sensitive?: boolean;
    spoiler_text?: string;
    status: string;
    visibility?: MastodonVisibility;
}

/* *
 *
 *  Default Export
 *
 * */

export default MastodonNewStatus;
