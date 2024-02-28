/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/// <amd-module name="tsl-mastodon-api/Types" />

/* *
 *
 *  Declarations
 *
 * */


declare module 'oauth' {


    /* *
     *
     *  Declarations
     *
     * */


    export type GetOAuthAccessTokenCallback = (
        err: GetOAuthAccessTokenError,
        accessToken: string,
        refreshToken: string,
        result: unknown
    ) => unknown;


    export interface GetOAuthAccessTokenError {
        statusCode: number;
        data?: unknown;
    }


    /* *
     *
     *  Class
     *
     * */


    export class OAuth2 {


        /* *
         *
         *  Constructor
         *
         * */


        constructor (
            clientId: string,
            clientSecret: string,
            baseSite: string,
            authorizePath?: string,
            accessTokenPath?: string
        );


        /* *
         *
         *  Functions
         *
         * */


        public getAuthorizeUrl (
            params?: unknown
        ): string;


        public getOAuthAccessToken (
            code: string,
            params: unknown,
            callback: GetOAuthAccessTokenCallback
        ): void;


    }


}


declare module 'ws' {


    /* *
     *
     *  Constants
     *
     * */


    export const WebSocket = globalThis.WebSocket;


}
