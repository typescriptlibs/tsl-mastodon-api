/* *
 *
 *  Imports
 *
 * */

import MastodonAccount from './MastodonAccount.js';
import MastodonCard from './MastodonCard.js';
import MastodonMediaAttachment from './MastodonMediaAttachment.js';
import MastodonPoll from './MastodonPoll.js';
import MastodonTimeString from '../MastodonTimeString.js';

/* *
 *
 *  Declarations
 *
 * */

export interface MastodonStatus {
    account: MastodonAccount;
    card?: MastodonCard;
    created_at: MastodonTimeString;
    emojis: Array<unknown>;
    id: string;
    media_attachments?: Array<MastodonMediaAttachment>;
    mentions?: Array<unknown>;
    poll?: MastodonPoll;
    tags?: Array<unknown>;
}

/* *
 *
 *  Default Export
 *
 * */

export default MastodonStatus;
