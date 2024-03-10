/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/// <amd-module name="tsl-mastodon-api/lib/API" />


/* *
 *
 *  Imports
 *
 * */


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
        this.version = (
            config.api_version ||
            parseInt( config.api_url.match( /\Wv(\d+)\W/u )?.[1] || '0' )
        );
    }


    /* *
     *
     *  Properties
     *
     * */


    /**
     * Expected communication delay (in milliseconds) by the Mastodon server.
     */
    public nextDelay: number;


    /**
     * Underlying REST API of this instance.
     */
    public readonly rest: REST;


    /**
     * Version that has been provided with `config.api_version` or has been
     * extracted from `config.api_url`.
     *
     * A value of `0` indicates that no version has been found.
     */
    public readonly version: number;


    /* *
     *
     *  Functions
     *
     * */


    /**
     * Delays an async promise by the expected amount of time (in milliseconds),
     * which the Mastodon server sends during the last communication.
     *
     * @param forcedDelay
     * Forces a certain amount of minimum delay.
     *
     * @return
     * Promise.
     */
    public async delay (
        forcedDelay?: number
    ): Promise<void> {
        return new Promise( resolve => setTimeout(
            resolve,
            Math.max( ( forcedDelay || 0 ), this.nextDelay )
        ) );
    }


    /**
     * Deletes a path.
     *
     * @param path
     * Path to delete.
     *
     * @param [params]
     * Parameters to use.
     *
     * @return
     * Promise with the result, if successful.
     */
    public async delete (
        path: string,
        params?: object
    ): Promise<API.Result> {
        return this.fetch( 'DELETE', path, params );
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
        const result = await this.delete( `lists/${listID}` );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isList( result?.json )
        ) {
            result.error = result.error || new Error();

            throw result;
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
        const result = await this.delete( `lists/${listID}/accounts`, listAccounts );

        if (
            result.error ||
            result.status !== 200 ||
            typeof result.json !== 'object'
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<object>;
    }


    /**
     * Deletes reaction from an announcement.
     *
     * @param announcementID
     * ID of the announcement to delete from.
     *
     * @param emojiName
     * Unicode emoji, or the shortcode of a custom emoji.
     *
     * @return
     * Promise with an empty `json`, if successful. Otherwise the `json`
     * contains an `error` property.
     */
    public async deleteAnnouncementReaction (
        announcementID: string,
        emojiName: string
    ): Promise<API.Success<{}>> {
        const result = await this.delete( `announcements/${announcementID}/reactions/${emojiName}` );

        if (
            result.error ||
            result.status !== 200
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<{}>;
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
        const result = await this.delete( `statuses/${statusID}` );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isStatus( result?.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<JSON.Status>;
    }


    /** @todo Add doclet. */
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

    }


    /** @todo Add doclet. */
    protected async fetch (
        method: ( 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT' ),
        path: string,
        params?: object
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
     * Get a result from a path.
     *
     * @param path
     * Path to get a result from.
     *
     * @param [params]
     * Parameters to use.
     *
     * @return
     * Promise with the result, if successful.
     */
    public async get (
        path: string,
        params?: object
    ): Promise<API.Result> {
        return this.fetch( 'GET', path, params );
    }


    /**
     * Gets the connected account.
     *
     * @return
     * Promise with the account, if successful.
     */
    public async getAccount (): Promise<API.Success<JSON.Account>> {
        const result = await this.get( 'accounts/verify_credentials' );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isAccount( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<JSON.Account>;
    }


    /**
     * Gets the connected account.
     *
     * @return
     * Promise with the account, if successful.
     */
    public async getAnnouncements (
        queryParams?: API.AnnouncementsParams
    ): Promise<API.Success<Array<JSON.Announcement>>> {
        const result = await this.get( 'announcements' );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isAnnouncements( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<Array<JSON.Announcement>>;
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
        const result = await this.get( `lists/${listID}` );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isList( result?.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<JSON.List>;
    }


    /**
     * Gets the accounts of a list.
     *
     * @param listID
     * ID of the list to get accounts from.
     *
     * @param [queryParams]
     * Query parameters to limit the amount of accounts to get.
     *
     * @return
     * Promise with the list accounts, if successful.
     */
    public async getListAccounts (
        listID: string,
        queryParams?: API.QueryParams
    ): Promise<API.Success<JSON.ListAccounts>> {
        const result = await this.get( `lists/${listID}/accounts`, queryParams );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isAccounts( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<JSON.ListAccounts>;
    }


    /**
     * Gets lists.
     *
     * @param [queryParams]
     * Query parameters to limit the amount of lists to get.
     *
     * @return
     * Promise with the array of lists, if successful.
     */
    public async getLists (
        queryParams?: API.QueryParams
    ): Promise<API.Success<Array<JSON.List>>> {
        const result = await this.get( `lists`, queryParams );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isLists( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<Array<JSON.List>>;
    }


    /**
     * Gets a media attachment.
     *
     * @param mediaAttachmentID
     * ID of the media attachment to get.
     *
     * @param awaitProcessing
     * Set to true, to wait until server processing completed.
     *
     * @return
     * Promise with the media attachment, if successful.
     */
    public async getMediaAttachment (
        mediaAttachmentID: string,
        awaitProcessing?: boolean
    ): Promise<API.Success<JSON.MediaAttachment>> {
        const path = (
            awaitProcessing ?
                `../v1/media/${mediaAttachmentID}` :
                `media/${mediaAttachmentID}`
        );

        let result = await this.get( path );

        // Check status of media processing
        while (
            awaitProcessing &&
            result.status === 206
        ) {
            await this.delay( 10000 );

            result = await this.get( path );

            if ( result.error ) {
                throw result;
            }
        }

        if (
            result.error ||
            (
                result.status !== 200 &&
                result.status !== 206
            ) ||
            !JSON.isMediaAttachment( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<JSON.MediaAttachment>;
    }


    /**
     * Get notifications
     *
     * @param [queryParams]
     * Query parameters to limit the amount of statuses to get.
     */
    public async getNotifications (
        queryParams?: API.NotificationParams
    ): Promise<API.Success<Array<JSON.Notification>>> {
        const result = await this.get( 'notifications', REST.toParamArray( queryParams ) );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isNotifications( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<Array<JSON.Notification>>;
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
        const result = await this.get( `statuses/${statusID}` );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isStatus( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<JSON.Status>;
    }


    /**
     * Gets the context of a status with ancestors and descendants.
     *
     * @param statusID
     * ID of the status to get the context of.
     *
     * @return
     * Promise with the status context, if successful.
     */
    public async getStatusContext (
        statusID: string
    ): Promise<API.Success<JSON.StatusContext>> {
        const result = await this.get( `statuses/${statusID}/context` );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isStatusContext( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<JSON.StatusContext>;
    }


    /**
     * Gets statuses of an account.
     *
     * @param accountID
     * ID of the related account.
     *
     * @param [queryParams]
     * Query parameters to limit the amount of statuses to get.
     *
     * @return
     * Promise with the array of statuses, if successful.
     */
    public async getStatuses (
        accountID: string,
        queryParams?: API.QueryParams
    ): Promise<API.Success<Array<JSON.Status>>> {
        const result = await this.get( `accounts/${accountID}/statuses`, queryParams );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isStatuses( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<Array<JSON.Status>>;
    }


    /**
     * Gets statuses from the personal timeline.
     *
     * @param [queryParams]
     * Query parameters to control the amount of statuses to get.
     *
     * @return
     * Promise with the array of statuses, if successful.
     */
    public async getStatusesOfHome (
        queryParams?: API.QueryParams
    ): Promise<API.Success<Array<JSON.Status>>> {
        const result = await this.get( 'timelines/home', queryParams );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isStatuses( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<Array<JSON.Status>>;
    }


    /**
     * Gets statuses from a list of accounts.
     *
     * @param listID
     * ID of the list.
     *
     * @param [queryParams]
     * Query parameters to control the amount of statuses to get.
     *
     * @return
     * Promise with the array of statuses, if successful.
     */
    public async getStatusesOfList (
        listID: string,
        queryParams?: API.QueryParams
    ): Promise<API.Success<Array<JSON.Status>>> {
        const result = await this.get( `timelines/list/${listID}`, queryParams );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isStatuses( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<Array<JSON.Status>>;
    }


    /**
     * Gets statuses from the public timeline.
     *
     * @param [queryParams]
     * Query parameters to control the amount of statuses to get.
     *
     * @return
     * Promise with the array of statuses, if successful.
     */
    public async getStatusesOfPublic (
        queryParams?: API.StatusesOfPublicParams
    ): Promise<API.Success<Array<JSON.Status>>> {
        const result = await this.get( 'timelines/public', REST.toParamArray( queryParams ) );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isStatuses( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<Array<JSON.Status>>;
    }


    /**
     * Gets statuses for a tag.
     *
     * @param tag
     * Tag to search.
     *
     * @param [queryParams]
     * Query parameters to control the amount of statuses to get.
     *
     * @return
     * Promise with the array of statuses, if successful.
     */
    public async getStatusesOfTag (
        tag: string,
        queryParams?: API.StatusesOfTagParams
    ): Promise<API.Success<Array<JSON.Status>>> {
        const result = await this.get( `timelines/tag/${tag}`, REST.toParamArray( queryParams ) );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isStatuses( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<Array<JSON.Status>>;
    }


    /**
     * Post parameters to a path.
     *
     * @param path
     * Path to post to.
     *
     * @param [params]
     * Parameters to post.
     *
     * @return
     * Promise with the result, if successful.
     */
    public async post (
        path: string,
        params?: object
    ): Promise<API.Result> {
        return this.fetch( 'POST', path, params );
    }


    /**
     * Dismisses all notifications.
     *
     * @return
     * Promise with an empty `json` object, if successful. Otherwise the `json`
     * contains an `error` property.
     */
    public async postDismissAllNotifications (): Promise<API.Success<{}>> {
        const result = await this.post( `notifications/clear` );

        if (
            result.error ||
            result.status !== 200
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<{}>;
    }


    /**
     * Dismisses an announcement.
     *
     * @param announcementID
     * ID of the announcement to dismiss.
     *
     * @return
     * Promise with an empty `json` object, if successful. Otherwise the `json`
     * contains an `error` property.
     */
    public async postDismissAnnouncement (
        announcementID: string
    ): Promise<API.Success<{}>> {
        const result = await this.post( `announcements/${announcementID}/dismiss` );

        if (
            result.error ||
            result.status !== 200
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<{}>;
    }


    /**
     * Dismisses a single notification.
     *
     * @param notificationID
     * The ID of the Notification in the database.
     *
     * @return
     * Promise with an empty `json` object, if successful. Otherwise the `json`
     * contains an `error` property.
     */
    public async postDismissNotification (
        notificationID: string
    ): Promise<API.Success<{}>> {
        const result = await this.post( `notifications/${notificationID}/dismiss` );

        if (
            result.error ||
            result.status !== 200
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<{}>;
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
        const result = await this.post( 'lists', list );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isList( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
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
        const result = await this.post( `lists/${listId}/accounts`, listAccounts );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isAccounts( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<void>;
    }


    /**
     * Posts a new media attachment.
     *
     * @param mediaAttachment
     * Media attachment to post.
     *
     * @param awaitProcessing
     * Set to true, to wait until server processing completed.
     *
     * @return
     * Promise with the media attachment, if successful.
     */
    public async postMediaAttachment (
        mediaAttachment: JSON.MediaAttachmentPost,
        awaitProcessing?: boolean
    ): Promise<API.Success<JSON.MediaAttachment>> {
        const path = (
            awaitProcessing ?
                '../v2/media' :
                'media'
        );
        const result = await this.post( path, mediaAttachment );

        if (
            awaitProcessing &&
            result.status === 202
        ) {
            return await this.getMediaAttachment( result.json.id, awaitProcessing );
        }

        if (
            result.error ||
            (
                result.status !== 200 &&
                result.status !== 202
            ) ||
            !JSON.isMediaAttachment( result.json )
        ) {
            result.error = ( result.error || new Error() );

            throw result;
        }

        return result as API.Success<JSON.MediaAttachment>;
    }


    /**
     * Posts a poll vote.
     *
     * @param pollID
     * Related poll ID to vote for.
     *
     * @param pollVote
     * Poll vote to post.
     *
     * @return
     * Promise with the updated poll, if successful.
     */
    public async postPollVote (
        pollID: string,
        pollVote: JSON.PollVotePost
    ): Promise<API.Success<JSON.Poll>> {
        const result = await this.post( `polls/${pollID}/votes`, pollVote );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isPoll( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
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
        const result = await this.post( 'statuses', status );

        if (
            result.error ||
            (
                result.status !== 200 &&
                result.status !== 206
            ) ||
            (
                !JSON.isStatus( result.json ) &&
                !JSON.isStatusSchedule( result.json )
            )
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<( JSON.Status | JSON.StatusSchedule )>;
    }


    /**
     * Puts parameters to a path.
     *
     * @param path
     * Path to put to.
     *
     * @param [params]
     * Parameters to put.
     *
     * @return
     * Promise with the result, if successful.
     */
    public async put (
        path: string,
        params?: object
    ): Promise<API.Result> {
        return this.fetch( 'PUT', path, params );
    }


    /**
     * Puts a new reaction to an announcement.
     *
     * @param announcementID
     * ID of the announcement to put to.
     *
     * @param emojiName
     * Unicode emoji, or the shortcode of a custom emoji.
     *
     * @return
     * Promise with an empty `json` object, if successful. Otherwise the `json`
     * contains an `error` property.
     */
    public async putAnnouncementReaction (
        announcementID: string,
        emojiName: string
    ): Promise<API.Success<{}>> {
        const result = await this.put( `announcements/${announcementID}/reactions/${emojiName}` );

        if (
            result.error ||
            result.status !== 200
        ) {
            result.error = result.error || new Error();

            throw result;
        }

        return result as API.Success<{}>;
    }


    /**
     * Search for accounts, hashtags, and statuses. Requires a `v2` API URL.
     *
     * @since 3.0.0
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
        const result = await this.get( 'search', search );

        if (
            result.error ||
            result.status !== 200 ||
            !JSON.isSearchResults( result.json )
        ) {
            result.error = result.error || new Error();

            throw result;
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


    /**
     * Query parameters to retrieve announcements.
     */
    export interface AnnouncementsParams {

        /**
         * If true, response will include announcements dismissed by the user.
         */
        with_dismissed?: boolean;

    }


    export interface Config extends REST.Config {

        /**
         * API version to distinguish between multiple instances of the API.
         */
        api_version?: number;

    }


    export interface NotificationParams extends QueryParams {

        /**
         * Get only notifications received from the specified account.
         */
        account_id?: string;

        /**
         * An array of notification types to filter out. (See
         * {@link JSON.NotificationType}.)
         */
        'exclude_types[]'?: Array<JSON.NotificationType>;

        /**
         * An array to filter notifications by type. (See
         * {@link JSON.NotificationType}.)
         */
        'types[]'?: Array<JSON.NotificationType>;

    }


    export interface QueryParams extends REST.ParamRecord {

        /**
         * Maximum number of results to return. Server defaults to 20 statuses.
         * Server maximum is 40 statuses.
         */
        limit?: number;

        /**
         * Return results older than ID.
         */
        max_id?: string;

        /**
         * Return results newer than ID.
         */
        min_id?: string;

        /**
         * Return newest results newer than ID.
         */
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


    export interface StatusesOfPublicParams extends QueryParams {

        /**
         * Get only local statuses.
         */
        local?: boolean;

        /**
         * Get only statuses with media attachment.
         */
        only_media?: boolean;

        /**
         * Get only remote statuses.
         */
        remote?: boolean;

    }


    export interface StatusesOfTagParams extends StatusesOfPublicParams {

        /**
         * Get statuses with all of these tags.
         */
        'all[]'?: Array<string>;

        /**
         * Get statuses with any of these tags.
         */
        'any[]'?: Array<string>;

        /**
         * Do not get statuses with any of these tags.
         */
        'none[]'?: Array<string>;

    }


}


/* *
 *
 *  Default Export
 *
 * */


export default API;
