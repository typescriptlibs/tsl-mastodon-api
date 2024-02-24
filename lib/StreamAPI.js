/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/* *
 *
 *  Imports
 *
 * */
import Bridge from './Bridge.js';
import * as JSON from './JSON/index.js';
import Utilities from './Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Mastodon streaming API to listen to new content.
 */
export class StreamAPI {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * @param config
     * Configuration with URL to the Mastodon server.
     */
    constructor(config) {
        if (!config.api_url.endsWith('/streaming/')) {
            config.api_url = Utilities.buildURL(config.api_url, 'streaming').href;
        }
        this.listeners = {
            close: [],
            error: [],
            message: []
        };
        this.config = config;
    }
    /* *
     *
     *  Properties
     *
     * */
    listeners;
    config;
    webSocket;
    /* *
     *
     *  Functions
     *
     * */
    dispatch(eventType, e) {
        const listeners = this.listeners[eventType];
        if (e instanceof MessageEvent &&
            JSON.isStreamData(e.data) &&
            e.data.payload) {
            e.data.payload = JSON.parse(`${e.data.payload}`);
        }
        for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
            listeners[i].call(this, e);
        }
    }
    off(eventType, eventListener) {
        const listeners = this.listeners[eventType];
        const index = listeners.indexOf(eventListener);
        if (index >= 0) {
            listeners.splice(index, 1);
        }
        return this;
    }
    on(eventType, eventListener) {
        this.listeners[eventType].push(eventListener);
        return this;
    }
    async setup() {
        const config = this.config;
        const health = await Bridge.fetch(Utilities.buildURL(config.api_url, 'health'));
        if (health.status !== 200) {
            throw new Error('TSL-MASTODON-API_STREAMING-HEALTH');
        }
        const webSocket = new Bridge.WebSocket(Utilities.buildURL(config.api_url));
        return new Promise((resolve, reject) => {
            const cleanUp = () => {
                webSocket.removeEventListener('close', onFail);
                webSocket.removeEventListener('error', onFail);
                webSocket.removeEventListener('open', onSuccess);
            };
            const onFail = (e) => {
                cleanUp();
                reject(e);
            };
            const onSuccess = () => {
                cleanUp();
                webSocket.addEventListener('close', (e) => this.dispatch('close', e));
                webSocket.addEventListener('error', (e) => this.dispatch('error', e));
                webSocket.addEventListener('message', (e) => this.dispatch('message', e));
                resolve(webSocket);
            };
            webSocket.addEventListener('close', onFail);
            webSocket.addEventListener('error', onFail);
            webSocket.addEventListener('open', onSuccess);
        });
    }
    async subscribe(streamType, streamParams, eventListener) {
        const webSocket = this.webSocket || await this.setup();
        webSocket.send(JSON.stringify({
            ...streamParams,
            type: 'subscribe',
            streamType
        }));
        if (eventListener) {
            this.on('message', eventListener);
        }
        return this;
    }
    async unsubsribe(streamType, streamParams, eventListener) {
        const webSocket = this.webSocket || await this.setup();
        webSocket.send(JSON.stringify({
            ...streamParams,
            type: 'unsubscribe',
            stream: streamType
        }));
        if (eventListener) {
            this.off('message', eventListener);
        }
        return this;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default StreamAPI;
//# sourceMappingURL=StreamAPI.js.map