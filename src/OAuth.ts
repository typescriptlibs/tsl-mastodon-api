/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/// <amd-module name="tsl-mastodon-api/OAuth" />

/* *
 *
 *  Imports
 *
 * */


import Bridge from './Bridge.js';


/* *
 *
 *  Namespace
 *
 * */


export namespace OAuth {


    /* *
     *
     *  Declarations
     *
     * */


    export interface App {
        id: string;
        client_id: string;
        client_secret: string;
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
     * @param appName
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
    export async function createApp (
        apiURL: string,
        appName: string,
        redirectURI = 'urn:ietf:wg:oauth:2.0:oob',
        scopes = 'read write follow',
        appWebsite?: string
    ): Promise<OAuth.App> {
        const body: ( FormData | undefined ) = new Bridge.FormData();

        body.append( 'client_name', appName );
        body.append( 'redirect_uris', redirectURI );
        body.append( 'scopes', scopes );

        if ( appWebsite ) {
            body.append( 'website', appWebsite );
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

export default OAuth;
