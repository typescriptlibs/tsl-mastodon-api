/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/* *
 *
 *  Imports
 *
 * */

import Notification from './Notification.js';
import Status from './Status.js';

/* *
 *
 *  Declarations
 *
 * */

/**
 * Stream data received.
 * @since 1.0.0
 */
export interface StreamData {
    /**
     * Event type of the stream data received.
     * @since 1.0.0
     */
    event: StreamEventType;
    /**
     * JSON object related to the event.
     * @since 1.0.0
     */
    payload?: StreamPayload;
    /**
     * Stream types related to the event.
     * @since 1.0.0
     */
    stream: Array<StreamType>;
}

/**
 * Event type of the stream data received.
 *
 * - `announcement` = An announcement has been published. Payload contains an
 *                    `Announcement`. (since 3.1.0)
 * - `announcement.delete` = An announcement has been deleted. Payload contains
 *                           the id of the deleted `Announcement`. (since 3.1.0)
 * - `announcement.reaction` = An announcement has received an emoji reaction.
 *                             Payload contains a `Hash`. (since 3.1.0)
 * - `conversation` = A direct conversation has been updated. Payload contains a
 *                    `Conversation`. (since 2.6.0)
 * - `delete` = A status has been deleted. Payload contains the id of the
 *              deleted `Status`. (since 1.0.0)
 * - `update` = A new Status has appeared. Payload contains a `Status`.
 *              (since 1.0.0)
 * - `notification` = A new notification has appeared. Payload contains a
 *                    `Notification`. (since 1.4.2)
 * - `filters_changed` = Keyword filters have been changed. Does not contain a
 *                       payload. (since 2.4.3)
 * - `status.update` = A Status has been edited. Payload contains a `Status`.
 *                     (since 3.5.0)
 * - `encrypted_message` = An encrypted message has been received. (since 3.2.0)
 *
 * @since 1.0.0
 */
export type StreamEventType = (
    | 'announcement'
    | 'announcement.delete'
    | 'announcement.reaction'
    | 'conversation'
    | 'delete'
    | 'encrypted_message'
    | 'filters_changed'
    | 'notification'
    | 'status.update'
    | 'update'
);

/**
 * Additional parameter to filter the subscription.
 * @since 1.0.0
 */
export interface StreamParams {
    /**
     * When stream is set to list, use this parameter to specify the list
     * ID.
     * @since 1.0.0
     */
    list?: string;
    /**
     * When stream is set to hashtag or hashtag:local, use this parameter to
     * specify the tag name.
     * @since 1.0.0
     */
    tag?: string;
}

/**
 * Possible JSON objects related to a event.
 */
export type StreamPayload = (
    | Notification
    | Status
);

/**
 * Stream types one can subscribe to.
 */
export type StreamType = (
    | 'direct'
    | 'hashtag'
    | 'hashtag:local'
    | 'list'
    | 'public'
    | 'public:local'
    | 'public:local:media'
    | 'public:media'
    | 'public:remote'
    | 'public:remote:media'
    | 'user'
    | 'user:notification'
);

/* *
 *
 *  Functions
 *
 * */

/**
 * Tests the JSON object for a StreamData structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a StreamData structure.
 */
export function isStreamData (
    json: Partial<StreamData>
): json is StreamData {
    return (
        typeof json === 'object' &&
        typeof json.event === 'string' &&
        Array.isArray( json.stream ) &&
        (
            typeof json.payload === 'undefined' ||
            typeof json.payload === 'string' ||
            typeof json.payload === 'object'
        )
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default StreamData;
