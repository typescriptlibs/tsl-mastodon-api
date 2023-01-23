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
        const supportsBody = (method === 'PATCH' ||
            method === 'POST' ||
            undefined);
        const url = (supportsBody ?
            Utilities.buildURL(apiURL, path) :
            Utilities.buildURL(apiURL, path, params));
        const timeout = new AbortController();
        const timer = setTimeout(() => timeout.abort(), config.timeout_ms);
        let response, text = '';
        try {
            response = await Bridge.fetch(url.toString(), {
                ...(config.no_follow ? {
                    follow: 9,
                    redirect: 'follow',
                } : {}),
                headers: Utilities.buildHeaders({
                    Accept: '*/*',
                    Authorization: `Bearer ${config.access_token}`,
                    'User-Agent': config.user_agent
                }),
                method,
                signal: timeout.signal,
                body: params ? supportsBody && Utilities.buildFormData(params) : undefined
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
})(REST = REST || (REST = {}));
/* *
 *
 *  Default Export
 *
 * */
export default REST;
//# sourceMappingURL=REST.js.map