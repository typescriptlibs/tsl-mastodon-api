/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
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
    constructor(config) {
        this.nextDelay = 1;
        this.rest = new REST(config);
        this.version = (config.api_version ||
            parseInt(config.api_url.match(/\Wv(\d+)\W/u)?.[1] || '0'));
    }
    /* *
     *
     *  Properties
     *
     * */
    /**
     * Expected communication delay by the Mastodon server.
     */
    nextDelay;
    /**
     * Underlying REST API of this instance.
     */
    rest;
    /**
     * Version from extracted from `config.api_version` or `config.api_url`.
     *
     * A value of `0` indicates that no version could be extracted.
     */
    version;
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
    async delay() {
        return new Promise(resolve => setTimeout(resolve, this.nextDelay));
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
    async delete(path, params) {
        return this.fetch('DELETE', path, params);
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
    async deleteList(listID) {
        const result = await this.delete(`lists/${listID}`);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isList(result?.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async deleteListAccounts(listID, listAccounts) {
        const result = await this.delete(`lists/${listID}/accounts`, listAccounts);
        if (result.failed ||
            result.status !== 200 ||
            typeof result.json !== 'object') {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async deleteAnnouncementReaction(announcementID, emojiName) {
        const result = await this.delete(`announcements/${announcementID}/reactions/${emojiName}`);
        if (result.failed ||
            result.status !== 200) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async deleteStatus(statusID) {
        const result = await this.delete(`statuses/${statusID}`);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatus(result?.json)) {
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
        const rateLimit = (result.response &&
            this.extractRateLimit(result.response.headers));
        result.rateLimit = rateLimit;
        this.nextDelay = 300000 / (rateLimit || 300);
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
    async get(path, params) {
        return this.fetch('GET', path, params);
    }
    /**
     * Gets the connected account.
     *
     * @return
     * Promise with the account, if successful.
     */
    async getAccount() {
        const result = await this.get('accounts/verify_credentials');
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isAccount(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    /**
     * Gets the connected account.
     *
     * @return
     * Promise with the account, if successful.
     */
    async getAnnouncements(queryParams) {
        const result = await this.get('announcements');
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isAnnouncements(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getList(listID) {
        const result = await this.get(`lists/${listID}`);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isList(result?.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getListAccounts(listID, queryParams) {
        const result = await this.get(`lists/${listID}/accounts`, queryParams);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isAccounts(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getLists(queryParams) {
        const result = await this.get(`lists`, queryParams);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isLists(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getMediaAttachment(mediaAttachmentID) {
        const result = await this.get(`media/${mediaAttachmentID}`);
        if (result.failed ||
            (result.status !== 200 &&
                result.status !== 206) ||
            !JSON.isMediaAttachment(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
    }
    /**
     * Get notifications
     *
     * @param [types]
     * An array to filter notifications by type. (See
     * {@link JSON.NotificationType}.)
     *
     * @param [exclude_types]
     * An array of notifications to filter out. (See
     * {@link JSON.NotificationType}.)
     *
     * @param [account_id]
     * Return only notifications received from the specified account.
     *
     * @param [queryParams]
     * Query parameters to limit the amount of statuses to get.
     */
    async getNotifications(types, exclude_types, account_id, queryParams) {
        const paramArray = [];
        if (types) {
            types.forEach(value => paramArray.push(['types[]', value]));
        }
        if (exclude_types) {
            exclude_types.forEach(value => paramArray.push(['exclude_types[]', value]));
        }
        if (account_id) {
            paramArray.push(['account_id', account_id]);
        }
        if (queryParams) {
            paramArray.push(...Object.entries(queryParams));
        }
        const result = await this.get('notifications', paramArray);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isNotifications(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getStatus(statusID) {
        const result = await this.get(`statuses/${statusID}`);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatus(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getStatusContext(statusID) {
        const result = await this.get(`statuses/${statusID}/context`);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatusContext(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getStatuses(accountID, queryParams) {
        const result = await this.get(`accounts/${accountID}/statuses`, queryParams);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getStatusesOfHome(queryParams) {
        const result = await this.get('timelines/home', queryParams);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getStatusesOfList(listID, queryParams) {
        const result = await this.get(`timelines/list/${listID}`, queryParams);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getStatusesOfPublic(queryParams) {
        const result = await this.get('timelines/public', REST.toParamArray(queryParams));
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async getStatusesOfTag(tag, queryParams) {
        const result = await this.get(`timelines/tag/${tag}`, REST.toParamArray(queryParams));
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isStatuses(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async post(path, params) {
        return this.fetch('POST', path, params);
    }
    /**
     * Dismisses all notifications.
     *
     * @return
     * Promise with an empty `json` object, if successful. Otherwise the `json`
     * contains an `error` property.
     */
    async postDismissAllNotifications() {
        const result = await this.post(`notifications/clear`);
        if (result.failed ||
            result.status !== 200) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async postDismissAnnouncement(announcementID) {
        const result = await this.post(`announcements/${announcementID}/dismiss`);
        if (result.failed ||
            result.status !== 200) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async postDismissNotification(notificationID) {
        const result = await this.post(`notifications/${notificationID}/dismiss`);
        if (result.failed ||
            result.status !== 200) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async postList(list) {
        const result = await this.post('lists', list);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isList(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async postListAccounts(listId, listAccounts) {
        const result = await this.post(`lists/${listId}/accounts`, listAccounts);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isAccounts(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async postMediaAttachment(mediaAttachment) {
        const result = await this.post('media', mediaAttachment);
        if (result.failed ||
            (result.status !== 200 &&
                result.status !== 202) ||
            !JSON.isMediaAttachment(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async postPollVote(pollID, pollVote) {
        const result = await this.post(`polls/${pollID}/votes`, pollVote);
        if (result.failed ||
            result.status !== 200 ||
            !JSON.isPoll(result.json)) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async postStatus(status) {
        const result = await this.post('statuses', status);
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
    /**
     * Put parameters to a path.
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
    async put(path, params) {
        return this.fetch('PUT', path, params);
    }
    /**
     * Put a new reaction to an announcement.
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
    async putAnnouncementReaction(announcementID, emojiName) {
        const result = await this.put(`announcements/${announcementID}/reactions/${emojiName}`);
        if (result.failed ||
            result.status !== 200) {
            result.failed = true;
            return Promise.reject(result);
        }
        return result;
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
    async search(search) {
        const result = await this.get('search', search);
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
/**
 * @namespace
 * @name API
 */
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
    async function createOAuthApp(apiURL, clientName = 'mastodon-node', redirectURI = 'urn:ietf:wg:oauth:2.0:oob', scopes = 'read write follow', website) {
        const body = new Bridge.FormData();
        body.append('client_name', clientName);
        body.append('redirect_uris', redirectURI);
        body.append('scopes', scopes);
        if (website) {
            body.append('website', website);
        }
        const response = await Bridge.fetch(`${apiURL}apps`, {
            body,
            method: 'POST'
        });
        return await response.json();
    }
    API.createOAuthApp = createOAuthApp;
    /**
     * Gets the access token for the application.
     *
     * @memberof API
     *
     * @requires oauth
     */
    async function getAccessToken(baseURL, clientId, clientSecret, authorizationCode, redirectUri = 'urn:ietf:wg:oauth:2.0:oob') {
        const OAuth2 = (await import('oauth')).OAuth2;
        const oauth = new OAuth2(clientId, clientSecret, baseURL, undefined, '/oauth/token');
        return new Promise((resolve, reject) => {
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
    /**
     * Creates an authorization url for users to authorize the application.
     *
     * @memberof API
     *
     * @requires oauth
     */
    async function getAuthorizationUrl(baseURL, clientId, clientSecret, redirectURI = 'urn:ietf:wg:oauth:2.0:oob', scope = 'read write follow') {
        const OAuth2 = (await import('oauth')).OAuth2;
        const oauth = new OAuth2(clientId, clientSecret, baseURL, undefined, '/oauth/token');
        return oauth.getAuthorizeUrl({
            redirect_uri: redirectURI,
            response_type: 'code',
            client_id: clientId,
            scope
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