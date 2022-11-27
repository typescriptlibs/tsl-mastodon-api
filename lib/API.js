/* *
 *
 *  Imports
 *
 * */
import * as JSON from './JSON/index.js';
import { OAuth2 } from 'oauth';
import REST from './REST.js';
/* *
 *
 *  Class
 *
 * */
export class API {
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
    static async createOAuthApp(url = `${API.defaultRoot}apps`, clientName = 'mastodon-node', scopes = 'read write follow', redirectUri = 'urn:ietf:wg:oauth:2.0:oob', website) {
        const body = new FormData();
        body.append('client_name', clientName);
        body.append('redirect_uris', redirectUri);
        body.append('scopes', scopes);
        if (website) {
            body.append('website', website);
        }
        const response = await fetch(url, {
            body,
            method: 'POST'
        });
        return await response.json();
    }
    static getAccessToken(clientId, clientSecret, authorizationCode, baseUrl = API.defaultBase, redirectUri = API.defaultRedirect) {
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
    static getAuthorizationUrl(clientId, clientSecret, baseUrl = API.defaultBase, scope = 'read write follow', redirectUri = API.defaultRedirect) {
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
        this.nextDelay = 1;
        this.rest = new REST(config);
    }
    /* *
     *
     *  Properties
     *
     * */
    nextDelay;
    rest;
    /* *
     *
     *  Functions
     *
     * */
    async delay() {
        return new Promise(resolve => setTimeout(resolve, this.nextDelay));
    }
    async getAccount() {
        const result = await this.fetch('GET', 'accounts/verify_credentials');
        const json = result.json;
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isAccount(json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return json;
    }
    async getStatuses(limit) {
        const result = await this.fetch('GET', 'statuses', { limit });
        const json = result?.json;
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses(json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
        const rest = this.rest;
        const result = await rest.fetch(method, path, params);
        const rateLimit = this.extractRateLimit(result.response.headers);
        result.rateLimit = rateLimit;
        this.nextDelay = 300000 / (rateLimit || 300);
        return result;
    }
    async postNewStatus(newStatus) {
        const result = await this.fetch('POST', 'statuses', newStatus);
        if (result.failed ||
            (result.status !== 200 &&
                result.status !== 206) ||
            !JSON.isStatus(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async search(search) {
        const result = await this.fetch('GET', 'search', search);
        const json = result?.json;
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isSearchResults(json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default API;
//# sourceMappingURL=API.js.map