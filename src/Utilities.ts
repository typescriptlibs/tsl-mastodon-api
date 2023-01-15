/* *
 *
 *  Imports
 *
 * */

import Bridge from './Bridge.js';

/* *
 *
 *  Declarations
 *
 * */

type Params = (
    | Array<[string, unknown]>
    | Record<string, unknown>
);

/* *
 *
 *  Functions
 *
 * */

function buildFormData (
    params?: Params,
    target: FormData = new Bridge.FormData()
): FormData {
    let value: unknown;

    if ( params ) {
        transferParams( params, target );
    }

    return target;
}

function buildHeaders (
    params?: Params,
    target: Headers = new Bridge.Headers()
): Headers {

    if ( params ) {
        transferParams( params, target );
    }

    return target;
}

function buildURL (
    base: string,
    path: string = '.',
    params?: Params
): URL {
    const url = new Bridge.URL( path, base );

    if ( params ) {
        buildURLSearchParams( params, url.searchParams );
    }

    return url;
}

function buildURLSearchParams (
    params?: Params,
    target: URLSearchParams = new Bridge.URLSearchParams()
): URLSearchParams {

    if ( params ) {
        transferParams( params, target );
    }

    return target;
}

function transferParams (
    params: Params,
    target: ( FormData | Headers | URLSearchParams )
): void {
    let value: unknown;

    if ( Array.isArray( params ) ) {
        let key: string;

        for ( const pair of params ) {

            key = pair[0];
            value = pair[1];

            if (
                typeof value === 'undefined' ||
                value === null
            ) {
                continue;
            }

            if (
                value instanceof Bridge.Blob &&
                target instanceof Bridge.FormData
            ) {
                target.append( key, value );
            }
            else if ( typeof value === 'object' ) {
                target.append( key, JSON.stringify( value ) );
            }
            else {
                target.append( key, `${value}` );
            }
        }
    } else {
        for ( const key in params ) {

            value = params[key];

            if (
                typeof value === 'undefined' ||
                value === null
            ) {
                continue;
            }
            if (
                value instanceof Bridge.Blob &&
                target instanceof Bridge.FormData
            ) {
                target.append( key, value );
            }
            else if ( typeof value === 'object' ) {
                target.append( key, JSON.stringify( value ) );
            }
            else {
                target.append( key, `${value}` );
            }
        }
    }
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
    transferParams
};

export default Utilities;
