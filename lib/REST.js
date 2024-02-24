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
import Utilities from './Utilities.js';
/* *
 *
 *  Class
 *
 * */
export class REST {
    /* *
     *
     *  Constructor
     *
     * */
    constructor(config) {
        this.apiURL = config.api_url;
        config.timeout_ms = (typeof config.timeout_ms === 'number' && config.timeout_ms > 0 ?
            config.timeout_ms :
            60000);
        this.config = config;
    }
    /* *
     *
     *  Properties
     *
     * */
    apiURL;
    config;
    /* *
     *
     *  Functions
     *
     * */
    delete(path, params) {
        return this.fetch('DELETE', path, params);
    }
    async fetch(method, path, params) {
        const apiURL = this.apiURL;
        const config = this.config;
        // build fetch parameter
        const supportsBody = (method === 'PATCH' ||
            method === 'POST' ||
            undefined);
        const url = (supportsBody ?
            Utilities.buildURL(apiURL, path) :
            Utilities.buildURL(apiURL, path, params));
        const headers = Utilities.buildHeaders({
            Accept: '*/*',
            Authorization: `Bearer ${config.access_token}`,
            'User-Agent': config.user_agent
        });
        const body = (supportsBody && params ?
            Utilities.buildFormData(params) :
            undefined);
        // start timer
        const timeout = new AbortController();
        const timer = setTimeout(() => timeout.abort(), config.timeout_ms);
        let response, text = '';
        try {
            response = await Bridge.fetch(url.toString(), {
                follow: config.no_follow ? 0 : 9,
                redirect: config.no_follow ? 'manual' : 'follow',
                headers,
                method,
                signal: timeout.signal,
                body
            });
            clearTimeout(timer);
            text = await response.text();
            try {
                return {
                    failed: !response.ok,
                    json: JSON.parse(text),
                    path,
                    response,
                    status: response.status,
                };
            }
            catch (error) {
                return {
                    failed: !response.ok,
                    json: { text },
                    path,
                    response,
                    status: response.status,
                };
            }
        }
        catch (error) {
            clearTimeout(timer);
            return {
                failed: true,
                json: { text },
                path,
                response,
                status: 422, // Unprocessable Entity
            };
        }
    }
    get(path, params) {
        return this.fetch('GET', path, params);
    }
    patch(path, params) {
        return this.fetch('PATCH', path, params);
    }
    post(path, params) {
        return this.fetch('POST', path, params);
    }
    put(path, params) {
        return this.fetch('PUT', path, params);
    }
}
/* *
 *
 *  Namespace
 *
 * */
(function (REST) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    function isParamArray(params) {
        return (Array.isArray(params) &&
            (!params.length ||
                typeof params[0][0] === 'string'));
    }
    REST.isParamArray = isParamArray;
    function toParamArray(params, array = []) {
        if (!params) {
            return;
        }
        const pairs = (Array.isArray(params) ?
            params :
            Object.entries(params));
        let pair;
        for (let i = 0, iEnd = pairs.length; i < iEnd; ++i) {
            pair = pairs[i];
            if (Array.isArray(pair[1])) {
                const key = pair[0];
                const values = pair[1];
                for (let j = 0, jEnd = values.length; j < jEnd; ++j) {
                    array.push([key, values[j]]);
                }
            }
            else {
                array.push(pair);
            }
        }
        return array;
    }
    REST.toParamArray = toParamArray;
})(REST = REST || (REST = {}));
/* *
 *
 *  Default Export
 *
 * */
export default REST;
//# sourceMappingURL=REST.js.map