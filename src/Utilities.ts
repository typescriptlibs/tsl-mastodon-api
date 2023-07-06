/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/// <amd-module name="tsl-mastodon-api/Utilities" />

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

export namespace Utilities {

    /* *
     *
     *  Declarations
     *
     * */

    export type Params = (
        | Array<[string, unknown]>
        | Record<string, unknown>
    );

    /* *
     *
     *  Functions
     *
     * */

    export function buildFormData (
        params?: Params,
        target: FormData = new Bridge.FormData()
    ): FormData {
        let value: unknown;

        if ( params ) {
            transferParams( params, target );
        }

        return target;
    }

    export function buildHeaders (
        params?: Params,
        target: Headers = new Bridge.Headers()
    ): Headers {

        if ( params ) {
            transferParams( params, target );
        }

        return target;
    }

    export function buildURL (
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

    export function buildURLSearchParams (
        params?: Params,
        target: URLSearchParams = new Bridge.URLSearchParams()
    ): URLSearchParams {

        if ( params ) {
            transferParams( params, target );
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
    export async function fileFrom (
        filePath: string,
        mimeType?: string
    ): Promise<File> {
        const fileFrom = ( await import( 'node-fetch' ) ).fileFrom;

        return await fileFrom( filePath, mimeType );
    }

    export function transferParams (
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

}

/* *
 *
 *  Default Export
 *
 * */

export default Utilities;
