/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
declare namespace OAuth {
    interface App {
        id: string;
        client_id: string;
        client_secret: string;
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
    function createOAuthApp(apiURL: string, clientName?: string, redirectURI?: string, scopes?: string, website?: string): Promise<OAuth.App>;
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
export default OAuth;
