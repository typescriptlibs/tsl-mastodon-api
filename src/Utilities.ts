/* *
 *
 *  Imports
 *
 * */

import Bridge from './Bridge.js';
import REST from './REST.js';

/* *
 *
 *  Functions
 *
 * */

function buildFormData (
    params?: REST.Params,
    target: FormData = new Bridge.FormData()
): FormData {

    if ( params ) {
        buildKeyValues( params,
            ( key, val ) => target.append( key, val ) );
    }

    return target;
}

function buildHeaders (
    params?: Record<string, unknown>,
    target: Record<string, string> = {}
): Record<string, string> {

    if ( params ) {
        buildKeyValues( params,
            ( key, val ) => target[key] = val as string );
    }

    return target;
}

function buildKeyValues (
    params: REST.Params,
    callback: ( key: string, val: string | Blob ) => void
): void {

    if ( REST.isParamList( params ) ) {

        for ( const keyVal of params ) {

            const key = keyVal[ 0 ];
            const val = buildValue( keyVal[1] );

            if ( val !== null ) {
                callback( key, val );
            }
        }

    } else {

        for ( const key in params ) {

            const val = buildValue( params[ key ] );

            if ( val !== null ) {
                callback( key, val );
            }
        }
    }
}

function buildURL (
    base: string,
    path: string = '.',
    params?: REST.Params
): URL {
    const url = new Bridge.URL( path, base );

    if ( params ) {
        buildURLSearchParams( params, url.searchParams );
    }

    return url;
}

function buildURLSearchParams (
    params?: REST.Params,
    target: URLSearchParams = new Bridge.URLSearchParams()
): URLSearchParams {

    if ( params ) {
        buildKeyValues( params,
            ( key, val ) => target.append( key, val as string ) );
    }

    return target;
}

function buildValue ( value: unknown ): string | Blob | null {
    if (
        typeof value === 'undefined' ||
        value === null
    ) {
        return null
    }

    if ( value instanceof Bridge.Blob ) {
        return value;
    } else if ( typeof value === 'object' ) {
        return JSON.stringify( value );
    } else {
        return `${value}`;
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
    buildKeyValues,
    buildValue,
    fileFrom,
};

export default Utilities;
