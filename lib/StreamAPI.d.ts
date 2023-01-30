/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import * as JSON from './JSON/index.js';
/**
 * Mastodon streaming API to listen to new content.
 */
export declare class StreamAPI {
    /**
     * @param config
     * Configuration with URL to the Mastodon server.
     */
    constructor(config: StreamAPI.Config);
    readonly listeners: Record<string, Array<Function>>;
    readonly config: StreamAPI.Config;
    webSocket?: WebSocket;
    protected dispatch<K extends keyof StreamAPI.EventMap>(eventType: K, e: StreamAPI.EventMap[K]): void;
    off<K extends keyof StreamAPI.EventMap>(eventType: K, eventListener: (e: StreamAPI.EventMap[K]) => void): this;
    on<K extends keyof StreamAPI.EventMap>(eventType: K, eventListener: (e: StreamAPI.EventMap[K]) => void): this;
    protected setup(): Promise<WebSocket>;
    subscribe(streamType: JSON.StreamType, streamParams?: JSON.StreamParams, eventListener?: (e: StreamAPI.MessageEvent) => void): Promise<this>;
    unsubsribe(streamType: JSON.StreamType, streamParams?: JSON.StreamParams, eventListener?: (e: StreamAPI.MessageEvent) => void): Promise<this>;
}
export declare namespace StreamAPI {
    interface Config {
        access_token: string;
        api_url: string;
    }
    interface EventMap {
        close: CloseEvent;
        error: Event;
        message: MessageEvent;
    }
    type MessageEvent = globalThis.MessageEvent<JSON.StreamData>;
}
export default StreamAPI;
