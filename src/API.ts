/* *
 *
 *  Imports
 *
 * */

import Bridge from './Bridge.js';
import * as JSON from './JSON/index.js';
import REST from './REST.js';

/* *
 *
 *  Class
 *
 * */

/**
 * Mastodon API to fetch, create, and delete content.
 *
 * @class
 */
export class API {

    /* *
     *
     *  Constructor
     *
     * */

    /**
     * @param config
     * Configuration with access token and URL to the Mastodon server.
     */
    public constructor (
        config: API.Config
    ) {
        this.nextDelay = 1;
        this.rest = new REST( config );
    }

    /* *
     *
     *  Properties
     *
     * */

    /**
     * Expected communication delay by the Mastodon server.
     */
    public nextDelay: number;

    /**
     * Underlying REST API of this instance.
     */
    public readonly rest: REST;

    /* *
     *
     *  Functions
     *
     * */

    /**
     * Delays a async promise by the expected amount of time, which the Mastodon
     * server send during the last communication.
     *
     * @return
     * Promise.
     */
    public async delay (): Promise<void> {
        return new Promise( resolve => setTimeout( resolve, this.nextDelay ) );
    }

    /**
     * Deletes a list of accounts.
     *
     * @param listId
     * ID of the list to delete.
     *
     * @return
     * Promise with the deleted list, if successful.
     */
    public async deleteList (
        listID: string
    ): Promise<API.Success<JSON.List>> {
        const result = await this.fetch( 'DELETE', `lists/${listID}` );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isList( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.List>;
    }

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
    public async deleteListAccounts (
        listID: string,
        listAccounts: JSON.ListAccountsDelete
    ): Promise<API.Success<object>> {
        const result = await this.fetch( 'DELETE', `lists/${listID}/accounts`, listAccounts );

        if (
            result.failed ||
            result.status !== 200 ||
            typeof result.json !== 'object'
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<object>;
    }

    /**
     * Deletes a status.
     *
     * @param statusID
     * ID of the status to delete.
     *
     * @return
     * Promise with the deleted status, if successful.
     */
    public async deleteStatus (
        statusID: string
    ): Promise<API.Success<JSON.Status>> {
        const result = await this.fetch( 'DELETE', `statuses/${statusID}` );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isStatus( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.Status>;
    }

    protected extractRateLimit (
        headers: Headers
    ): ( number | undefined ) {
        let value = headers.get( 'X-RateLimit-Limit' );

        if ( typeof value === 'string' ) {
            return parseInt( value );
        }

        value = headers.get( 'X-RateLimit-Remaining' );

        if ( typeof value === 'string' ) {
            return parseInt( value );
        }
    };

    protected async fetch (
        method: ( 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT' ),
        path: string,
        params?: unknown
    ): Promise<API.Result> {
        const rest: REST = this.rest;
        const result: API.Result = await rest.fetch( method, path, params as REST.Params );
        const rateLimit = (
            result.response &&
            this.extractRateLimit( result.response.headers )
        );

        result.rateLimit = rateLimit;
        this.nextDelay = 300000 / ( rateLimit || 300 );

        return result;
    }

    /**
     * Gets the connected account.
     *
     * @return
     * Promise with the account, if successful.
     */
    public async getAccount (): Promise<API.Success<JSON.Account>> {
        const result = await this.fetch( 'GET', 'accounts/verify_credentials' );
        const json = result.json;

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isAccount( json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.Account>;
    }

    /**
     * Gets a list.
     *
     * @param listID
     * ID of the list to get.
     *
     * @return
     * Promise with the list, if successful.
     */
    public async getList (
        listID: string
    ): Promise<API.Success<JSON.List>> {
        const result = await this.fetch( 'GET', `lists/${listID}` );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isList( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.List>;
    }

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
    public async getListAccounts (
        listID: string,
        queryParameters?: API.QueryParameters
    ): Promise<API.Success<JSON.ListAccounts>> {
        const result = await this.fetch( 'GET', `lists/${listID}/accounts`, queryParameters );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isAccounts( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.ListAccounts>;
    }

    /**
     * Gets lists.
     *
     * @param [queryParameters]
     * Query parameters to limit the amount of lists to get.
     *
     * @return
     * Promise with the array of lists, if successful.
     */
    public async getLists (
        queryParameters: API.QueryParameters
    ): Promise<API.Success<Array<JSON.List>>> {
        const result = await this.fetch( 'GET', `lists`, { queryParameters } );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isLists( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<Array<JSON.List>>;
    }

    /**
     * Gets a media attachment.
     *
     * @param mediaAttachmentID
     * ID of the media attachment to get.
     *
     * @return
     * Promise with the media attachment, if successful.
     */
    public async getMediaAttachment (
        mediaAttachmentID: string
    ): Promise<API.Success<JSON.MediaAttachment>> {
        const result = await this.fetch( 'GET', `media/${mediaAttachmentID}` );
        const json = result.json;

        if (
            result.failed ||
            (
                result.status !== 200 &&
                result.status !== 206
            ) ||
            !JSON.isMediaAttachment( json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.MediaAttachment>;
    }

    /**
     * Gets a status.
     *
     * @param statusID
     * ID of the status to get.
     *
     * @return
     * Promise with the status, if successful.
     */
    public async getStatus (
        statusID: string
    ): Promise<API.Success<JSON.Status>> {
        const result = await this.fetch( 'GET', `statuses/${statusID}` );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isStatus( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.Status>;
    }

    /**
     * Gets statuses.
     *
     * @param [queryParameters]
     * Query parameters to limit the amount of statuses to get.
     *
     * @return
     * Promise with the array of statuses, if successful.
     */
    public async getStatuses (
        queryParameters?: API.QueryParameters
    ): Promise<API.Success<Array<JSON.Status>>> {
        const result = await this.fetch( 'GET', 'statuses', queryParameters );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<Array<JSON.Status>>;
    }

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
    public async getNotifications (
        types?: string[],
        exclude_types?: string[],
        account_id?: string,
        queryParameters?: API.QueryParameters
    ): Promise<API.Success<Array<JSON.Notification>>> {

        const paramList: REST.ParamList = [];

        if ( types ) {
            types.forEach(
                ( val ) => paramList.push( [ 'types[]', val ] )
            );
        }

        if ( exclude_types ) {
            exclude_types.forEach(
                ( val ) => paramList.push( [ 'exclude_types[]', val ] )
            );
        }

        if ( account_id ) {
            paramList.push( [ 'account_id', account_id ] );
        }

        if ( queryParameters ) {
            Object.entries( queryParameters ).forEach(
                ( keyVal ) => paramList.push( [ keyVal[ 0 ], keyVal[ 1 ] ] )
            );
        }

        const result = await this.fetch( 'GET', 'notifications', paramList );
        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isNotifications( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<Array<JSON.Notification>>;
    }

    /**
     * Posts a new list or updates an existing list.
     *
     * @param list
     * List to post.
     *
     * @return
     * Promise with the list, if successful.
     */
    public async postList (
        list: JSON.ListPost,
    ): Promise<API.Success<JSON.List>> {
        const result = await this.fetch( 'POST', 'lists', list );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isList( result?.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.List>;
    }

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
    public async postListAccounts (
        listId: string,
        listAccounts: JSON.ListAccountsPost
    ): Promise<API.Success<void>> {
        const result = await this.fetch( 'POST', `lists/${listId}/accounts`, listAccounts );

        if (
            result.failed ||
            result.status !== 200 ||
            typeof result.json !== 'object'
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<void>;
    }

    /**
     * Posts a new media attachment.
     *
     * @param mediaAttachment
     * Media attachment to post.
     *
     * @return
     * Promise with the media attachment, if successful.
     */
    public async postMediaAttachment (
        mediaAttachment: JSON.MediaAttachmentPost
    ): Promise<API.Success<JSON.MediaAttachment>> {
        const result = await this.fetch( 'POST', 'media', mediaAttachment );

        if (
            result.failed ||
            (
                result.status !== 200 &&
                result.status !== 202
            ) ||
            !JSON.isMediaAttachment( result.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.MediaAttachment>;
    }

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
    public async postPollVote (
        pollId: string,
        pollVote: JSON.PollVotePost
    ): Promise<API.Success<JSON.Poll>> {
        const result = await this.fetch( 'POST', `polls/${pollId}/votes`, pollVote );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isPoll( result.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.Poll>;
    }

    /**
     * Posts a new status or updates an existing status.
     *
     * @param status
     * Status to post.
     *
     * @return
     * Promise with the status, if successful.
     */
    public async postStatus (
        status: JSON.StatusPost
    ): Promise<API.Success<( JSON.Status | JSON.StatusSchedule )>> {
        const result = await this.fetch( 'POST', 'statuses', status );

        if (
            result.failed ||
            (
                result.status !== 200 &&
                result.status !== 206
            ) ||
            (
                !JSON.isStatus( result.json ) &&
                !JSON.isStatusSchedule( result.json )
            )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<( JSON.Status | JSON.StatusSchedule )>;
    }

    /**
     * Search for accounts, hashtags, and statuses.
     *
     * @param search
     * Search parameters to use.
     *
     * @return
     * Promise with an object of search results, if successful.
     */
    public async search (
        search: JSON.Search
    ): Promise<API.Success<JSON.SearchResults>> {
        const result = await this.fetch( 'GET', 'search', search );

        if (
            result.failed ||
            result.status !== 200 ||
            !JSON.isSearchResults( result.json )
        ) {
            result.failed = true;
            return Promise.reject( result );
        }

        return result as API.Success<JSON.SearchResults>;
    }

}

/* *
 *
 *  Namespace
 *
 * */

/**
 * @namespace
 * @name API
 */
export namespace API {

    /* *
     *
     *  Declarations
     *
     * */

    export type Config = REST.Config;

    export interface OAuthApp {
        id: string;
        client_id: string;
        client_secret: string;
    }

    export interface QueryParameters {
        limit?: number;
        max_id?: string;
        min_id?: string;
        since_id?: string;
    }

    export interface Result extends REST.Result {
        rateLimit?: number;
    }

    export interface Success<T = unknown> extends Result {
        failed: false;
        json: T;
        status: ( 200 | 202 | 206 );
    }

    /* *
     *
     *  Functions
     *
     * */

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
    export async function createOAuthApp (
        apiURL: string,
        clientName = 'mastodon-node',
        redirectURI = 'urn:ietf:wg:oauth:2.0:oob',
        scopes = 'read write follow',
        website?: string
    ): Promise<API.OAuthApp> {
        const body: ( FormData | undefined ) = new Bridge.FormData();

        body.append( 'client_name', clientName );
        body.append( 'redirect_uris', redirectURI );
        body.append( 'scopes', scopes );

        if ( website ) {
            body.append( 'website', website );
        }

        const response = await Bridge.fetch(
            `${apiURL}apps`,
            {
                body,
                method: 'POST'
            }
        );

        return await response.json();
    }

    /**
     * Gets the access token for the application.
     *
     * @memberof API
     *
     * @requires oauth
     */
    export async function getAccessToken (
        baseURL: string,
        clientId: string,
        clientSecret: string,
        authorizationCode: string,
        redirectUri = 'urn:ietf:wg:oauth:2.0:oob'
    ): Promise<string> {
        const OAuth2 = ( await import( 'oauth' ) ).OAuth2;

        const oauth = new OAuth2(
            clientId,
            clientSecret,
            baseURL,
            undefined,
            '/oauth/token'
        );

        return new Promise( ( resolve, reject ) => {
            oauth.getOAuthAccessToken(
                authorizationCode,
                {
                    grant_type: 'authorization_code',
                    redirect_uri: redirectUri
                },
                ( err, accessToken ) => {
                    if ( err ) {
                        reject( err )
                        return
                    }
                    resolve( accessToken )
                }
            );
        } );
    }

    /**
     * Creates an authorization url for users to authorize the application.
     *
     * @memberof API
     *
     * @requires oauth
     */
    export async function getAuthorizationUrl (
        baseURL: string,
        clientId: string,
        clientSecret: string,
        redirectURI = 'urn:ietf:wg:oauth:2.0:oob',
        scope = 'read write follow'
    ): Promise<string> {
        const OAuth2 = ( await import( 'oauth' ) ).OAuth2;

        const oauth = new OAuth2(
            clientId,
            clientSecret,
            baseURL,
            undefined,
            '/oauth/token'
        );

        return oauth.getAuthorizeUrl( {
            redirect_uri: redirectURI,
            response_type: 'code',
            client_id: clientId,
            scope
        } );
    }

}

/* *
 *
 *  Default Export
 *
 * */

export default API;
