/* *
 *
 *  Imports
 *
 * */

import {
    getURL,
    getURLSearchParams
} from './Utilities.js';
import {
    MastodonNewStatus,
    MastodonStatus
} from './JSON/index.js';
import {
    OAuth2
} from 'oauth';
import fetch, {
    Headers,
    Response
} from 'node-fetch';

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
        url = `${MastodonAPI.defaultRoot}apps`,
        clientName = 'mastodon-node',
        scopes = 'read write follow',
        redirectUri = 'urn:ietf:wg:oauth:2.0:oob',
        website?: string
    ): Promise<unknown> {
        const response = await fetch(
            url,
            {
                body: getURLSearchParams({
                    client_name: clientName,
                    redirect_uris: redirectUri,
                    scopes,
                    website
                }),
                method: 'POST'
            }
        );

        return await response.json();
    }

    public static getAccessToken (
        clientId: string,
        clientSecret: string,
        authorizationCode: string,
        baseUrl = MastodonAPI.defaultBase,
        redirectUri = MastodonAPI.defaultRedirect
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
        baseUrl = MastodonAPI.defaultBase,
        scope = 'read write follow',
        redirectUri = MastodonAPI.defaultRedirect
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
        config: MastodonAPI.Config
    ) {
        this.apiURL = config.api_url;

        config.timeout_ms = (
            typeof config.timeout_ms === 'number' &&
            config.timeout_ms > 0 ?
                config.timeout_ms :
                60000
        );
        config.user_agent = config.user_agent || 'tsl-mastodon-api';

        this.config = config as Required<MastodonAPI.Config>;
    }

    /* *
     *
     *  Properties
     *
     * */

    public apiURL: string;

    public config: Required<MastodonAPI.Config>;

    public nextTimeout: number = 1;

    /* *
     *
     *  Functions
     *
     * */

    public async delay(): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, this.nextTimeout));
    }

    public delete (
        path: string,
        params?: Record<string, unknown>
    ): Promise<MastodonAPI.Result> {
        return this.fetch('DELETE', path, params);
    }

    protected extractRateLimit(
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

    public async fetch (
        method: ('DELETE'|'GET'|'PATCH'|'POST'|'PUT'),
        path: string,
        params?: Record<string, unknown>
    ): Promise<MastodonAPI.Result> {
        const apiURL = this.apiURL;
        const config = this.config;
        const url =(
            path.startsWith('http') ? path :
            getURL(apiURL, path)
        );
        const timeout = new AbortController();

        setTimeout(() => timeout.abort(), config.timeout_ms);

        const response = await fetch(
            url,
            {
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
            }
        );

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

    public get (
        path: string,
        params?: Record<string, unknown>
    ): Promise<MastodonAPI.Result> {
        return this.fetch('GET', path, params);
    }

    public patch (
        path: string,
        params?: Record<string, unknown>
    ): Promise<MastodonAPI.Result> {
        return this.fetch('PATCH', path, params);
    }

    public post (
        path: 'statuses',
        params?: MastodonNewStatus
    ): Promise<MastodonAPI.Success<MastodonStatus>>;
    public post (
        path: string,
        params?: {}
    ): Promise<MastodonAPI.Result>;
    public post (
        path: string,
        params?: {}
    ): Promise<MastodonAPI.Result> {
        return this.fetch('POST', path, params);
    }

    public put (
        path: string,
        params?: Record<string, unknown>
    ): Promise<MastodonAPI.Result> {
        return this.fetch('PUT', path, params);
    }

}

/* *
 *
 *  Namespace
 *
 * */

export namespace MastodonAPI {

    /* *
     *
     *  Declarations
     *
     * */

    export interface Config {
        access_token: string;
        api_url: string;
        fingerprint?: Array<string>;
        no_follow?: boolean;
        timeout_ms?: number;
        user_agent?: string;
    }

    export interface Result {
        json: unknown;
        path: string;
        rateLimit?: number;
        response: Response;
        status: number;
    }

    export interface Success<T = unknown> extends Result {
        json: T;
        status: 200;
    }

}

/* *
 *
 *  Default Export
 *
 * */

export default MastodonAPI;
