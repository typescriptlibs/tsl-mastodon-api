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

export interface StreamData {
    event: StreamEventType;
    payload?: StreamPayload;
    stream: Array<StreamType>;
}

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

export interface StreamParams {
    /**
     * When stream is set to list, use this parameter to specify the list
     * ID.
     */
    list?: string;
    /**
     * When stream is set to hashtag or hashtag:local, use this parameter to
     * specify the tag name.
     */
    tag?: string;
}

export type StreamPayload = (
    | Notification
    | Status
);

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
