import * as JSON from './JSON/index.js';
import REST from './REST.js';
export declare class API {
    constructor(config: API.Config);
    nextDelay: number;
    readonly rest: REST;
    delay(): Promise<void>;
    fileFrom(path: string, mimeType?: string): Promise<File>;
    getAccount(): Promise<API.Success<JSON.Account>>;
    getMediaAttachment(id: string): Promise<API.Success<JSON.MediaAttachment>>;
    getStatuses(limit?: number): Promise<API.Success<Array<JSON.Status>>>;
    protected extractRateLimit(headers: Headers): (number | undefined);
    protected fetch(method: ('DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'), path: string, params?: unknown): Promise<API.Result>;
    postNewMediaAttachment(newMediaAttachment: JSON.NewMediaAttachment): Promise<API.Success<JSON.MediaAttachment>>;
    postNewPollVote(pollId: string, newPollVote: JSON.NewPollVote): Promise<API.Success<JSON.Poll>>;
    postNewStatus(newStatus: JSON.NewStatus): Promise<API.Success<JSON.Status>>;
    search(search: JSON.Search): Promise<API.Success<JSON.SearchResults>>;
}
export declare namespace API {
    type Config = REST.Config;
    interface Result extends REST.Result {
        rateLimit?: number;
    }
    interface Success<T = unknown> extends Result {
        failed: false;
        json: T;
        status: (200 | 202 | 206);
    }
    function createOAuthApp(apiURL: string, clientName?: string, redirectURI?: string, scopes?: string, website?: string): Promise<unknown>;
    function getAccessToken(baseURL: string, clientId: string, clientSecret: string, authorizationCode: string, redirectUri?: string): Promise<string>;
    function getAuthorizationUrl(baseURL: string, clientId: string, clientSecret: string, redirectURI?: string, scope?: string): Promise<string>;
}
export default API;
