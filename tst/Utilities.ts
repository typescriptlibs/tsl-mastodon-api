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
