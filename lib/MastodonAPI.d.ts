import { MastodonNewStatus, MastodonStatus } from './JSON/index.js';
import { Headers, Response } from 'node-fetch';
export declare class MastodonAPI {
    static readonly defaultBase = "https://mastodon.social";
    static readonly defaultPath = "/api/v1/";
    static readonly defaultRedirect = "urn:ietf:wg:oauth:2.0:oob";
    static readonly defaultRoot: string;
    static createOAuthApp(url?: string, clientName?: string, scopes?: string, redirectUri?: string, website?: string): Promise<unknown>;
    static getAccessToken(clientId: string, clientSecret: string, authorizationCode: string, baseUrl?: string, redirectUri?: string): Promise<string>;
    static getAuthorizationUrl(clientId: string, clientSecret: string, baseUrl?: string, scope?: string, redirectUri?: string): Promise<string>;
    constructor(config: MastodonAPI.Config);
    apiURL: string;
    config: Required<MastodonAPI.Config>;
    nextTimeout: number;
    delay(): Promise<void>;
    delete(path: string, params?: Record<string, unknown>): Promise<MastodonAPI.Result>;
    protected extractRateLimit(headers: Headers): (number | undefined);
    fetch(method: ('DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'), path: string, params?: Record<string, unknown>): Promise<MastodonAPI.Result>;
    get(path: string, params?: Record<string, unknown>): Promise<MastodonAPI.Result>;
    patch(path: string, params?: Record<string, unknown>): Promise<MastodonAPI.Result>;
    post(path: 'statuses', params?: MastodonNewStatus): Promise<MastodonAPI.Success<MastodonStatus>>;
    post(path: string, params?: {}): Promise<MastodonAPI.Result>;
    put(path: string, params?: Record<string, unknown>): Promise<MastodonAPI.Result>;
}
export declare namespace MastodonAPI {
    interface Config {
        access_token: string;
        api_url: string;
        fingerprint?: Array<string>;
        no_follow?: boolean;
        timeout_ms?: number;
        user_agent?: string;
    }
    interface Result {
        json: unknown;
        path: string;
        rateLimit?: number;
        response: Response;
        status: number;
    }
    interface Success<T = unknown> extends Result {
        json: T;
        status: 200;
    }
}
export default MastodonAPI;
