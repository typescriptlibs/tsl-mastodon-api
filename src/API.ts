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

    public static readonly defaultBase = 'https://mastodon.social';

    public static readonly defaultPath = '/api/v1/';

    public static readonly defaultRedirect = 'urn:ietf:wg:oauth:2.0:oob';

    public static readonly defaultRoot = this.defaultBase + this.defaultPath;

    /* *
     *
     *  Static Functions
     *
     * */

    public static async createOAuthApp (
        url = `${API.defaultRoot}apps`,
        clientName = 'mastodon-node',
        scopes = 'read write follow',
        redirectUri = 'urn:ietf:wg:oauth:2.0:oob',
        website?: string
    ): Promise<unknown> {
        const body: (FormData|undefined) = new FormData();

        body.append('client_name', clientName);
        body.append('redirect_uris', redirectUri);
        body.append('scopes', scopes);

        if (website) {
            body.append('website', website);
        }

        const response = await fetch(
            url,
            {
                body,
                method: 'POST'
            }
        );

        return await response.json();
    }

    public static getAccessToken (
        clientId: string,
        clientSecret: string,
        authorizationCode: string,
        baseUrl = API.defaultBase,
        redirectUri = API.defaultRedirect
    ): Promise<string> {
        return new Promise((resolve, reject) => {
            const oauth = new OAuth2(
                clientId,
                clientSecret,
                baseUrl,
                undefined,
                '/oauth/token'
            );
            oauth.getOAuthAccessToken(
                authorizationCode,
                {
                    grant_type: 'authorization_code',
                    redirect_uri: redirectUri
                },
                (err, accessToken) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(accessToken)
                }
            );
        });
    }

    public static getAuthorizationUrl (
        clientId: string,
        clientSecret: string,
        baseUrl = API.defaultBase,
        scope = 'read write follow',
        redirectUri = API.defaultRedirect
    ): Promise<string> {
        return new Promise((resolve) => {
            const oauth = new OAuth2(
                clientId,
                clientSecret,
                baseUrl,
                undefined,
                '/oauth/token'
            );
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

    public constructor (
        config: API.Config
    ) {
        this.nextDelay = 1;
        this.rest = new REST(config);
    }

    /* *
     *
     *  Properties
     *
     * */

    public nextDelay: number;

    public readonly rest: REST;

    /* *
     *
     *  Functions
     *
     * */

    public async delay (): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, this.nextDelay));
    }

    public async getAccount (): Promise<JSON.Account> {
        const result = await this.fetch('GET', 'accounts/verify_credentials');
        const json = result.json;

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isAccount(json)
        ) {
            return Promise.reject(result);
        }

        return json as JSON.Account;
    }

    public async getStatuses (
        limit?: number
    ): Promise<API.Success<Array<JSON.Status>>> {
        const result = await this.fetch('GET', 'statuses', { limit });
        const json = result?.json;

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses(json)
        ) {
            return Promise.reject(result);
        }

        return result as API.Success<Array<JSON.Status>>;
    }

    protected extractRateLimit (
        headers: Headers
    ): (number|undefined) {
        let value = headers.get('X-RateLimit-Limit');

        if (typeof value === 'string') {
            return parseInt(value);
        }

        value = headers.get('X-RateLimit-Remaining');

        if (typeof value === 'string') {
            return parseInt(value);
        }
    };

    protected async fetch (
        method: ('DELETE'|'GET'|'PATCH'|'POST'|'PUT'),
        path: string,
        params?: unknown
    ): Promise<API.Result> {
        const rest: REST = this.rest;
        const result: API.Result = await rest.fetch(method, path, params as REST.Params);
        const rateLimit = this.extractRateLimit(result.response.headers);

        result.rateLimit = rateLimit;
        this.nextDelay = 300000 / (rateLimit || 300);

        return result;
    }

    public async postNewStatus (
        newStatus: JSON.NewStatus
    ): Promise<API.Success<JSON.Status>> {
        const result = await this.fetch('POST', 'statuses', newStatus);

        if (
            result.failed ||
            (
                result.status !== 200 &&
                result.status !== 206
            ) ||
            !JSON.isStatus(result.json)
        ) {
            return Promise.reject(result);
        }

        return result as API.Success<JSON.Status>;
    }

    public async search (
        search: JSON.Search
    ): Promise<API.Success<JSON.SearchResults>> {
        const result = await this.fetch('GET', 'search', search);
        const json = result?.json;

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isSearchResults(json)
        ) {
            return Promise.reject(result);
        }

        return result as API.Success<JSON.SearchResults>;
    }

}

/* *
 *
 *  Namespace
 *
 * */

export namespace API {

    /* *
     *
     *  Declarations
     *
     * */

    export type Config = REST.Config;

    export interface Result extends REST.Result {
        rateLimit?: number;
    }

    export interface Success<T = unknown> extends Result {
        failed: false;
        json: T;
        status: (200|206);
    }

}

/* *
 *
 *  Default Export
 *
 * */

export default API;
