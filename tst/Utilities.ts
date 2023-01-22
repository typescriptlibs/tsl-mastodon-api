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

import * as Mastodon from 'tsl-mastodon-api';

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
        _method,
        path,
        params
    ): Promise<Mastodon.REST.Result> {
        return fetch.call( rest, 'GET', path, params );
    }
}

/* *
 *
 *  Default Export
 *
 * */

export const Utilities = {
    forceGetFetch
};

export default Utilities;
