/* *
 *
 *  Imports
 *
 * */

import Bridge from './Bridge.js';

/* *
 *
 *  Functions
 *
 * */

function buildFormData (
    params?: Record<string, unknown>,
    target: FormData = new Bridge.FormData()
): FormData {
    let value: unknown;

    for ( const key in params ) {
        value = params[key];

        if (
            typeof value === 'undefined' ||
            value === null
        ) {
            continue;
        }

        if ( value instanceof Bridge.Blob ) {
            target.append( key, value );
        } else if ( typeof value === 'object' ) {
            target.append( key, JSON.stringify( value ) );
        } else {
            target.append( key, `${value}` );
        }
    }

    return target;
}

function buildHeaders (
    params?: Record<string, unknown>,
    target: Record<string, string> = {}
): Record<string, string> {
    let value: unknown;

    for ( const key in params ) {
        value = params[key];

        if (
            typeof value === 'undefined' ||
            value === null
        ) {
            continue;
        }

        if ( typeof value === 'object' ) {
            target[key] = JSON.stringify( value );
        } else {
            target[key] = `${value}`;
        }
    }

    return target;
}

function buildURL (
    base: string,
    path: string = '.',
    params?: Record<string, unknown>
): URL {
    const url = new Bridge.URL( path, base );

    if ( params ) {
        buildURLSearchParams( params, url.searchParams );
    }

    return url;
}

function buildURLSearchParams (
    params?: Record<string, unknown>,
    target: URLSearchParams = new Bridge.URLSearchParams()
): URLSearchParams {
    let value: unknown;

    for ( const key in params ) {
        value = params[key];

        if (
            typeof value === 'undefined' ||
            value === null
        ) {
            continue;
        }

        if ( typeof value === 'object' ) {
            target.append( key, JSON.stringify( value ) );
        } else {
            target.append( key, `${value}` );
        }
    }

    return target;
}

/**
 * Loads a file from a path.
 *
 * @memberof Utilities
 *
 * @param filePath
 * Path to the file.
 *
 * @param [mimeType]
 * Mime type of the file.
 *
 * @return
 * Promise with the file, if successful.
 *
 * @requires node-fetch
 */
async function fileFrom (
    filePath: string,
    mimeType?: string
): Promise<File> {
    const fileFrom = ( await import( 'node-fetch' ) ).fileFrom;

    return await fileFrom( filePath, mimeType );
}

/* *
 *
 *  Default Export
 *
 * */

export const Utilities = {
    buildHeaders,
    buildFormData,
    buildURL,
    buildURLSearchParams,
    fileFrom,
};

export default Utilities;
