/* *
 *
 *  Imports
 *
 * */
import * as Fetch from 'node-fetch';
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
    async fileFrom(path, mimeType) {
        return await Fetch.fileFrom(path, mimeType);
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
        return result;
    }
    async getList(id) {
        const result = await this.fetch('GET', `lists/${id}`);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isList(result?.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async getListAccounts(id, limit) {
        const result = await this.fetch('GET', `lists/${id}/accounts`, { limit });
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isAccounts(result?.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async getLists(limit) {
        const result = await this.fetch('GET', `lists`, { limit });
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isLists(result?.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async getMediaAttachment(id) {
        const result = await this.fetch('GET', `media/${id}`);
        const json = result.json;
        if (result.failed ||
            (result.status !== 200 &&
                result.status !== 206) ||
            !JSON.isMediaAttachment(json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async getStatus(id) {
        const result = await this.fetch('GET', `statuses/${id}`);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatus(result?.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async getStatuses(limit) {
        const result = await this.fetch('GET', 'statuses', { limit });
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses(result?.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async postNewList(newList) {
        const result = await this.fetch('POST', 'lists', newList);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isList(result?.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async postNewListAccounts(id, accountIds) {
        const result = await this.fetch('POST', `lists/${id}/accounts`, { account_ids: accountIds });
        if (result.failed ||
            result.status !== 200 ||
            typeof result.json !== 'object') {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async postNewMediaAttachment(newMediaAttachment) {
        const result = await this.fetch('POST', 'media', newMediaAttachment);
        if (result.failed ||
            (result.status !== 200 &&
                result.status !== 202) ||
            !JSON.isMediaAttachment(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async postNewPollVote(pollId, newPollVote) {
        const result = await this.fetch('POST', `polls/${pollId}/votes`, newPollVote);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isPoll(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async postNewStatus(newStatus) {
        const result = await this.fetch('POST', 'statuses', newStatus);
        if (result.failed ||
            (result.status !== 200 &&
                result.status !== 206) ||
            (!JSON.isStatus(result.json) &&
                !JSON.isStatusSchedule(result.json))) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    async search(search) {
        const result = await this.fetch('GET', 'search', search);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isSearchResults(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
}
/* *
 *
 *  Namespace
 *
 * */
(function (API) {
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
    async function createOAuthApp(apiURL, clientName = 'mastodon-node', redirectURI = 'urn:ietf:wg:oauth:2.0:oob', scopes = 'read write follow', website) {
        const body = new FormData();
        body.append('client_name', clientName);
        body.append('redirect_uris', redirectURI);
        body.append('scopes', scopes);
        if (website) {
            body.append('website', website);
        }
        const response = await fetch(`${apiURL}apps`, {
            body,
            method: 'POST'
        });
        return await response.json();
    }
    API.createOAuthApp = createOAuthApp;
    async function getAccessToken(baseURL, clientId, clientSecret, authorizationCode, redirectUri = 'urn:ietf:wg:oauth:2.0:oob') {
        return new Promise((resolve, reject) => {
            const oauth = new OAuth2(clientId, clientSecret, baseURL, undefined, '/oauth/token');
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
    API.getAccessToken = getAccessToken;
    async function getAuthorizationUrl(baseURL, clientId, clientSecret, redirectURI = 'urn:ietf:wg:oauth:2.0:oob', scope = 'read write follow') {
        return new Promise((resolve) => {
            const oauth = new OAuth2(clientId, clientSecret, baseURL, undefined, '/oauth/token');
            const url = oauth.getAuthorizeUrl({
                redirect_uri: redirectURI,
                response_type: 'code',
                client_id: clientId,
                scope
            });
            resolve(url);
        });
    }
    API.getAuthorizationUrl = getAuthorizationUrl;
})(API = API || (API = {}));
/* *
 *
 *  Default Export
 *
 * */
export default API;
//# sourceMappingURL=API.js.map