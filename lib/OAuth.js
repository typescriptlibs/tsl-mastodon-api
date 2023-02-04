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
/* *
 *
 *  Namespace
 *
 * */
var OAuth;
(function (OAuth) {
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
    OAuth.createOAuthApp = createOAuthApp;
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
    OAuth.getAccessToken = getAccessToken;
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
    OAuth.getAuthorizationUrl = getAuthorizationUrl;
})(OAuth || (OAuth = {}));
/* *
 *
 *  Default Export
 *
 * */
export default OAuth;
//# sourceMappingURL=OAuth.js.map