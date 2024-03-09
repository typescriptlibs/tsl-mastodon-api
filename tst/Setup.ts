/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/* *
 *
 *  Imports
 *
 * */

import * as Mastodon from 'tsl-mastodon-api';

/* *
 *
 *  Constants
 *
 * */

const v1Delete = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-delete/'
} );

const v1Get = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-get/'
} );

const v1GetMultiple = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-get-multiple/'
} );

const v1Post = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-post/'
} );

const v1Put = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-put/'
} );

forceGetFetch( v1Delete );
forceGetFetch( v1Post );
forceGetFetch( v1Put );

/* *
 *
 *  Functions
 *
 * */

function forceGetFetch (
    api: Mastodon.API
): void {
    const rest = api.rest;
    const fetch = rest.fetch;

    rest.fetch = function (
        _method: Mastodon.REST.Method,
        path: string,
        params: Mastodon.REST.Params
    ): Promise<Mastodon.REST.Result> {
        return fetch.call( rest, 'GET', path, params );
    }
}

/* *
 *
 *  Default Export
 *
 * */

export const Setup = {
    Mastodon,
    v1Delete,
    v1Get,
    v1GetMultiple,
    v1Post,
    v1Put,
    fileFrom: Mastodon.Utilities.fileFrom
};

export default Setup;
