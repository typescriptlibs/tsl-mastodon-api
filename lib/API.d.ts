import * as JSON from './JSON/index.js';
import REST from './REST.js';
export declare class API {
    static readonly defaultBase = "https://mastodon.social";
    static readonly defaultPath = "/api/v1/";
    static readonly defaultRedirect = "urn:ietf:wg:oauth:2.0:oob";
    static readonly defaultRoot: string;
    static createOAuthApp(url?: string, clientName?: string, scopes?: string, redirectUri?: string, website?: string): Promise<unknown>;
    static getAccessToken(clientId: string, clientSecret: string, authorizationCode: string, baseUrl?: string, redirectUri?: string): Promise<string>;
    static getAuthorizationUrl(clientId: string, clientSecret: string, baseUrl?: string, scope?: string, redirectUri?: string): Promise<string>;
    constructor(config: API.Config);
    nextDelay: number;
    readonly rest: REST;
    delay(): Promise<void>;
    getAccount(): Promise<JSON.Account>;
    getStatuses(limit?: number): Promise<API.Success<Array<JSON.Status>>>;
    protected extractRateLimit(headers: Headers): (number | undefined);
    protected fetch(method: ('DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'), path: string, params?: unknown): Promise<API.Result>;
    postNewStatus(newStatus: JSON.NewStatus): Promise<API.Success<JSON.Status>>;
}
export declare namespace API {
    type Config = REST.Config;
    interface Result extends REST.Result {
        rateLimit?: number;
    }
    interface Success<T = unknown> extends Result {
        failed: false;
        json: T;
        status: (200 | 206);
    }
}
export default API;
