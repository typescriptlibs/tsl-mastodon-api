import * as JSON from './JSON/index.js';
import REST from './REST.js';
/**
 * Mastodon API to fetch, create, and delete content.
 *
 * @class
 */
export declare class API {
    /**
     * @param config
     * Configuration with access token and URL to the Mastodon server.
     */
    constructor(config: API.Config);
    /**
     * Expected communication delay by the Mastodon server.
     */
    nextDelay: number;
    /**
     * Underlying REST API of this instance.
     */
    readonly rest: REST;
    /**
     * Delays a async promise by the expected amount of time, which the Mastodon
     * server send during the last communication.
     *
     * @return
     * Promise.
     */
    delay(): Promise<void>;
    /**
     * Deletes a list of accounts.
     *
     * @param listId
     * ID of the list to delete.
     *
     * @return
     * Promise with the deleted list, if successful.
     */
    deleteList(listID: string): Promise<API.Success<JSON.List>>;
    /**
     * Deletes a list of accounts.
     *
     * @param listId
     * Related list.
     *
     * @param listAccounts
     * List accounts to delete.
     *
     * @return
     * Promise with an empty object, if successful.
     */
    deleteListAccounts(listID: string, listAccounts: JSON.ListAccountsDelete): Promise<API.Success<object>>;
    /**
     * Deletes a status.
     *
     * @param statusID
     * ID of the status to delete.
     *
     * @return
     * Promise with the deleted status, if successful.
     */
    deleteStatus(statusID: string): Promise<API.Success<JSON.Status>>;
    protected extractRateLimit(headers: Headers): (number | undefined);
    protected fetch(method: ('DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'), path: string, params?: unknown): Promise<API.Result>;
    /**
     * Gets the connected account.
     *
     * @return
     * Promise with the account, if successful.
     */
    getAccount(): Promise<API.Success<JSON.Account>>;
    /**
     * Gets a list.
     *
     * @param listID
     * ID of the list to get.
     *
     * @return
     * Promise with the list, if successful.
     */
    getList(listID: string): Promise<API.Success<JSON.List>>;
    /**
     * Gets the accounts of a list.
     *
     * @param listID
     * ID of the list to get accounts from.
     *
     * @param [queryParameters]
     * Query parameters to limit the amount of accounts to get.
     *
     * @return
     * Promise with the list accounts, if successful.
     */
    getListAccounts(listID: string, queryParameters?: API.QueryParameters): Promise<API.Success<JSON.ListAccounts>>;
    /**
     * Gets lists.
     *
     * @param [queryParameters]
     * Query parameters to limit the amount of lists to get.
     *
     * @return
     * Promise with the array of lists, if successful.
     */
    getLists(queryParameters: API.QueryParameters): Promise<API.Success<Array<JSON.List>>>;
    /**
     * Gets a media attachment.
     *
     * @param mediaAttachmentID
     * ID of the media attachment to get.
     *
     * @return
     * Promise with the media attachment, if successful.
     */
    getMediaAttachment(mediaAttachmentID: string): Promise<API.Success<JSON.MediaAttachment>>;
    /**
     * Gets a status.
     *
     * @param statusID
     * ID of the status to get.
     *
     * @return
     * Promise with the status, if successful.
     */
    getStatus(statusID: string): Promise<API.Success<JSON.Status>>;
    /**
     * Gets statuses.
     *
     * @param [queryParameters]
     * Query parameters to limit the amount of statuses to get.
     *
     * @return
     * Promise with the array of statuses, if successful.
     */
    getStatuses(queryParameters?: API.QueryParameters): Promise<API.Success<Array<JSON.Status>>>;
    /**
     * Get notifications
     *
     * @param types
     * An optional array to filter notifications by type
     *   'mention' = Someone mentioned you in their status
     *   'status' = Someone you enabled notifications for has posted a status
     *   'reblog' = Someone boosted one of your statuses
     *   'follow' = Someone followed you
     *   'follow_request' = Someone requested to follow you
     *   'favourite' = Someone favourited one of your statuses
     *   'poll' = A poll you have voted in or created has ended
     *   'update' = A status you boosted with has been edited
     *   'admin.sign_up' = Someone signed up (optionally sent to admins)
     *   'admin.report' = A new report has been filed
     *
     * @param exclude_types
     * An optional array of notifications to filter
     * (see the 'types' param above for possible values)
     *
     * @param account_id
     * Return only notifications received from the specified account (optional)
     *
     * @param [queryParameters]
     * Query parameters to limit the amount of statuses to get.
     */
    getNotifications(types?: string[], exclude_types?: string[], account_id?: string, queryParameters?: API.QueryParameters): Promise<API.Success<Array<JSON.Notification>>>;
    /**
     * Posts a new list or updates an existing list.
     *
     * @param list
     * List to post.
     *
     * @return
     * Promise with the list, if successful.
     */
    postList(list: JSON.ListPost): Promise<API.Success<JSON.List>>;
    /**
     * Posts a new list or updates an existing list.
     *
     * @param listId
     * Related list.
     *
     * @param listAccounts
     * List accounts to post.
     *
     * @return
     * Promise with the list, if successful.
     */
    postListAccounts(listId: string, listAccounts: JSON.ListAccountsPost): Promise<API.Success<void>>;
    /**
     * Posts a new media attachment.
     *
     * @param mediaAttachment
     * Media attachment to post.
     *
     * @return
     * Promise with the media attachment, if successful.
     */
    postMediaAttachment(mediaAttachment: JSON.MediaAttachmentPost): Promise<API.Success<JSON.MediaAttachment>>;
    /**
     * Posts a poll vote.
     *
     * @param pollId
     * Related poll ID to vote for.
     *
     * @param pollVote
     * Poll vote to post.
     *
     * @return
     * Promise with the updated poll, if successful.
     */
    postPollVote(pollId: string, pollVote: JSON.PollVotePost): Promise<API.Success<JSON.Poll>>;
    /**
     * Posts a new status or updates an existing status.
     *
     * @param status
     * Status to post.
     *
     * @return
     * Promise with the status, if successful.
     */
    postStatus(status: JSON.StatusPost): Promise<API.Success<(JSON.Status | JSON.StatusSchedule)>>;
    /**
     * Search for accounts, hashtags, and statuses.
     *
     * @param search
     * Search parameters to use.
     *
     * @return
     * Promise with an object of search results, if successful.
     */
    search(search: JSON.Search): Promise<API.Success<JSON.SearchResults>>;
}
/**
 * @namespace
 * @name API
 */
export declare namespace API {
    type Config = REST.Config;
    interface OAuthApp {
        id: string;
        client_id: string;
        client_secret: string;
    }
    interface QueryParameters {
        limit?: number;
        max_id?: string;
        min_id?: string;
        since_id?: string;
    }
    interface Result extends REST.Result {
        rateLimit?: number;
    }
    interface Success<T = unknown> extends Result {
        failed: false;
        json: T;
        status: (200 | 202 | 206);
    }
    /**
     * Creates an application in a Mastodon account.
     *
     * @memberof API
     *
     * @param apiURL
     * API URL of the Mastodon server.
     *
     * @param [clientName]
     * Public name of the application.
     *
     * @param [redirectURI]
     * OAuth URI.
     *
     * @param [scopes]
     * Application permissions to grant.
     *
     * @param [website]
     * Public website of the application.
     *
     * @return
     * Promise with an object of applications `id`, `client_id` and
     * `client_secret`.
     */
    function createOAuthApp(apiURL: string, clientName?: string, redirectURI?: string, scopes?: string, website?: string): Promise<API.OAuthApp>;
    /**
     * Gets the access token for the application.
     *
     * @memberof API
     *
     * @requires oauth
     */
    function getAccessToken(baseURL: string, clientId: string, clientSecret: string, authorizationCode: string, redirectUri?: string): Promise<string>;
    /**
     * Creates an authorization url for users to authorize the application.
     *
     * @memberof API
     *
     * @requires oauth
     */
    function getAuthorizationUrl(baseURL: string, clientId: string, clientSecret: string, redirectURI?: string, scope?: string): Promise<string>;
}
export default API;
