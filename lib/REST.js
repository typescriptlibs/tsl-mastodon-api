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
/**
 * REST class to run delete, fetch, get, patch, post, and put on an server API.
 */
export class REST {
    /* *
     *
     *  Constructor
     *
     * */
    /**
     * @param config
     * REST configuration with the URL to the server API.
     */
    constructor(config) {
        this.apiURL = config.api_url;
        config.timeout_ms = (typeof config.timeout_ms === 'number' &&
            config.timeout_ms > 0 ?
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
    /**
     * Fetch from the relative API path with the given method and parameters.
     *
     * @param method
     * REST method to use.
     *
     * @param path
     * Relative API path to use.
     *
     * @param [params]
     * REST parameters that get converted either to a query or to a form data.
     *
     * @return
     * Promise with the result object, if successful.
     */
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
                body: supportsBody && Utilities.buildFormData(params)
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
 *  Default Export
 *
 * */
export default REST;
//# sourceMappingURL=REST.js.map