/* *
 *
 *  Imports
 *
 * */
import { getURL, getURLSearchParams } from './Utilities.js';
import { OAuth2 } from 'oauth';
import fetch from 'node-fetch';
/* *
 *
 *  Class
 *
 * */
export class MastodonAPI {
    /* *
     *
     *  Static Properties
     *
     * */
    static defaultBase = 'https://mastodon.social';
    static defaultPath = '/api/v1/';
    static defaultRedirect = 'urn:ietf:wg:oauth:2.0:oob';
    static defaultRoot = this.defaultBase + this.defaultPath;
    /* *
     *
     *  Static Functions
     *
     * */
    static async createOAuthApp(url = `${MastodonAPI.defaultRoot}apps`, clientName = 'mastodon-node', scopes = 'read write follow', redirectUri = 'urn:ietf:wg:oauth:2.0:oob', website) {
        const response = await fetch(url, {
            body: getURLSearchParams({
                client_name: clientName,
                redirect_uris: redirectUri,
                scopes,
                website
            }),
            method: 'POST'
        });
        return await response.json();
    }
    static getAccessToken(clientId, clientSecret, authorizationCode, baseUrl = MastodonAPI.defaultBase, redirectUri = MastodonAPI.defaultRedirect) {
        return new Promise((resolve, reject) => {
            const oauth = new OAuth2(clientId, clientSecret, baseUrl, undefined, '/oauth/token');
            oauth.getOAuthAccessToken(authorizationCode, {
                grant_type: 'authorization_code',
                redirect_uri: redirectUri
            }, (err, accessToken) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(accessToken);
            });
        });
    }
    static getAuthorizationUrl(clientId, clientSecret, baseUrl = MastodonAPI.defaultBase, scope = 'read write follow', redirectUri = MastodonAPI.defaultRedirect) {
        return new Promise((resolve) => {
            const oauth = new OAuth2(clientId, clientSecret, baseUrl, undefined, '/oauth/token');
            const url = oauth.getAuthorizeUrl({
                redirect_uri: redirectUri,
                response_type: 'code',
                client_id: clientId,
                scope
            });
            resolve(url);
        });
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(config) {
        this.apiURL = config.api_url;
        config.timeout_ms = (typeof config.timeout_ms === 'number' &&
            config.timeout_ms > 0 ?
            config.timeout_ms :
            60000);
        config.user_agent = config.user_agent || 'tsl-mastodon-api';
        this.config = config;
    }
    /* *
     *
     *  Properties
     *
     * */
    apiURL;
    config;
    nextTimeout = 1;
    /* *
     *
     *  Functions
     *
     * */
    async delay() {
        return new Promise(resolve => setTimeout(resolve, this.nextTimeout));
    }
    delete(path, params) {
        return this.fetch('DELETE', path, params);
    }
    extractRateLimit(headers) {
        let value = headers.get('X-RateLimit-Limit');
        if (typeof value === 'string') {
            return parseInt(value);
        }
        value = headers.get('X-RateLimit-Remaining');
        if (typeof value === 'string') {
            return parseInt(value);
        }
    }
    ;
    async fetch(method, path, params) {
        const apiURL = this.apiURL;
        const config = this.config;
        const url = (path.startsWith('http') ? path :
            getURL(apiURL, path));
        const timeout = new AbortController();
        setTimeout(() => timeout.abort(), config.timeout_ms);
        const response = await fetch(url, {
            ...(config.no_follow ? {
                follow: 9,
                redirect: 'follow',
            } : {}),
            compress: true,
            headers: {
                Accept: '*/*',
                'User-Agent': config.user_agent,
                Authorization: `Bearer ${config.access_token}`
            },
            method,
            signal: timeout.signal,
            body: params && getURLSearchParams(params),
        });
        const rateLimit = this.extractRateLimit(response.headers);
        this.nextTimeout = rateLimit ? 300000 / rateLimit : 1000;
        if (response.ok) {
            return {
                json: await response.json(),
                path,
                rateLimit,
                response,
                status: response.status
            };
        }
        return Promise.reject(response);
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
export default MastodonAPI;
//# sourceMappingURL=MastodonAPI.js.map