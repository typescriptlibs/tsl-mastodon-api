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

    public nextDelay: number;

    public readonly rest: REST;

    /* *
     *
     *  Functions
     *
     * */

    public async delay (): Promise<void> {
        return new Promise( resolve => setTimeout( resolve, this.nextDelay ) );
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
        const rateLimit = this.extractRateLimit( result.response.headers );

        result.rateLimit = rateLimit;
        this.nextDelay = 300000 / ( rateLimit || 300 );

        return result;
    }

    public async fileFrom (
        path: string,
        mimeType?: string
    ): Promise<File> {
        return await Fetch.fileFrom( path, mimeType );
    }

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

    public async getMediaAttachment (
        id: string
    ): Promise<API.Success<JSON.MediaAttachment>> {
        const result = await this.fetch( 'GET', `media/${id}` );
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

    public async getStatus (
        id: string
    ): Promise<API.Success<JSON.Status>> {
        const result = await this.fetch( 'GET', `statuses/${id}` );

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

    public async getStatuses (
        limit?: number
    ): Promise<API.Success<Array<JSON.Status>>> {
        const result = await this.fetch( 'GET', 'statuses', { limit } );

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

    public async postNewMediaAttachment (
        newMediaAttachment: JSON.NewMediaAttachment
    ): Promise<API.Success<JSON.MediaAttachment>> {
        const result = await this.fetch( 'POST', 'media', newMediaAttachment );

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

    public async postNewPollVote (
        pollId: string,
        newPollVote: JSON.NewPollVote
    ): Promise<API.Success<JSON.Poll>> {
        const result = await this.fetch( 'POST', `polls/${pollId}/votes`, newPollVote );

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

    public async postNewStatus (
        newStatus: JSON.NewStatus
    ): Promise<API.Success<( JSON.Status | JSON.StatusSchedule )>> {
        const result = await this.fetch( 'POST', 'statuses', newStatus );

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
        status: ( 200 | 202 | 206 );
    }

    /* *
     *
     *  Functions
     *
     * */

    export async function createOAuthApp (
        apiURL: string,
        clientName = 'mastodon-node',
        redirectURI = 'urn:ietf:wg:oauth:2.0:oob',
        scopes = 'read write follow',
        website?: string
    ): Promise<unknown> {
        const body: ( FormData | undefined ) = new FormData();

        body.append( 'client_name', clientName );
        body.append( 'redirect_uris', redirectURI );
        body.append( 'scopes', scopes );

        if ( website ) {
            body.append( 'website', website );
        }

        const response = await fetch(
            `${apiURL}apps`,
            {
                body,
                method: 'POST'
            }
        );

        return await response.json();
    }

    export async function getAccessToken (
        baseURL: string,
        clientId: string,
        clientSecret: string,
        authorizationCode: string,
        redirectUri = 'urn:ietf:wg:oauth:2.0:oob'
    ): Promise<string> {
        return new Promise( ( resolve, reject ) => {
            const oauth = new OAuth2(
                clientId,
                clientSecret,
                baseURL,
                undefined,
                '/oauth/token'
            );
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

    export async function getAuthorizationUrl (
        baseURL: string,
        clientId: string,
        clientSecret: string,
        redirectURI = 'urn:ietf:wg:oauth:2.0:oob',
        scope = 'read write follow'
    ): Promise<string> {
        return new Promise( ( resolve ) => {
            const oauth = new OAuth2(
                clientId,
                clientSecret,
                baseURL,
                undefined,
                '/oauth/token'
            );
            const url = oauth.getAuthorizeUrl( {
                redirect_uri: redirectURI,
                response_type: 'code',
                client_id: clientId,
                scope
            } );
            resolve( url );
        } );
    }

}

/* *
 *
 *  Default Export
 *
 * */

export default API;
