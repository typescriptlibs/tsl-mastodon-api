/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/// <amd-module name="tsl-mastodon-api/lib/REST" />

/* *
 *
 *  Imports
 *
 * */


import Bridge from './Bridge.js';

import Utilities from './Utilities.js';


/* *
 *
 *  Declarations
 *
 * */


declare global {


    interface RequestInit {
        follow?: number;
    }


}


/* *
 *
 *  Class
 *
 * */


export class REST {


    /* *
     *
     *  Constructor
     *
     * */


    public constructor (
        config: REST.Config
    ) {

        this.apiURL = config.api_url;

        config.timeout_ms = (
            typeof config.timeout_ms === 'number' && config.timeout_ms > 0 ?
                config.timeout_ms :
                60000
        );

        this.config = config as Required<REST.Config>;

    }


    /* *
     *
     *  Properties
     *
     * */


    public readonly apiURL: string;


    public readonly config: Required<REST.Config>;


    /* *
     *
     *  Functions
     *
     * */


    public delete (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch( 'DELETE', path, params );
    }


    public async fetch (
        method: REST.Method,
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        const apiURL = this.apiURL;
        const config = this.config;

        // build fetch parameter
        const supportsBody = (
            method === 'PATCH' ||
            method === 'POST' ||
            undefined
        );
        const url = (
            supportsBody ?
                Utilities.buildURL( apiURL, path ) :
                Utilities.buildURL( apiURL, path, params )
        );
        const headers = Utilities.buildHeaders( {
            Accept: '*/*',
            Authorization: `Bearer ${config.access_token}`,
            'User-Agent': config.user_agent
        } );
        const body = (
            supportsBody && params ?
                Utilities.buildFormData( params ) :
                undefined
        );

        // start timer
        const timeout = new AbortController();
        const timer = setTimeout( () => timeout.abort(), config.timeout_ms );

        let response: ( Response | undefined ),
            text: string = '';

        try {
            response = await Bridge.fetch(
                url.toString(),
                {
                    follow: config.no_follow ? 0 : 9,
                    redirect: config.no_follow ? 'manual' : 'follow',
                    headers,
                    method,
                    signal: timeout.signal,
                    body
                }
            );

            clearTimeout( timer );

            text = await response.text();

            try {
                return {
                    json: JSON.parse( text ),
                    path,
                    response,
                    status: response.status,
                };
            }
            catch ( error ) {
                return {
                    error: ( error || new Error() ),
                    json: { text },
                    path,
                    response,
                    status: response.status,
                };
            }
        }
        catch ( error ) {

            clearTimeout( timer );

            return {
                error: ( error || new Error() ),
                json: { text },
                path,
                response,
                status: 422, // Unprocessable Entity
            }
        }
    }


    public get (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch( 'GET', path, params );
    }


    public patch (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch( 'PATCH', path, params );
    }


    public post (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch( 'POST', path, params );
    }


    public put (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch( 'PUT', path, params );
    }


}


/* *
 *
 *  Namespace
 *
 * */


export namespace REST {


    /* *
     *
     *  Declarations
     *
     * */


    export interface Config {
        access_token: string;
        api_url: string;
        no_follow?: boolean;
        timeout_ms?: number;
        user_agent?: string;
    }


    export type Method = (
        | 'DELETE'
        | 'GET'
        | 'PATCH'
        | 'POST'
        | 'PUT'
    );


    export type ParamArray = Array<[string, unknown]>;


    export type ParamRecord = Record<string, unknown>;


    export type Params = ( ParamArray | ParamRecord );


    export interface Result {
        error?: any;
        json: any;
        path: string;
        response?: Response;
        status: number;
    }


    export interface Success<T = unknown> extends Result {
        error?: undefined;
        json: T;
        status: 200;
    }


    /* *
     *
     *  Functions
     *
     * */


    export function isParamArray (
        params?: Params
    ): params is ParamArray {
        return (
            Array.isArray( params ) &&
            (
                !params.length ||
                typeof params[0][0] === 'string'
            )
        );
    }


    /**
     * Converts a Params structure into a ParamArray structure. Value arrays of
     * params will be split into multiple pairs of the ParamArray. If no special
     * handling of arrays is needed, then it will convert ParamRecord to
     * ParamArray with help of the `Object.entries` function.
     *
     * @param params
     * Params structure to convert or split.
     *
     * @param [array]
     * ParamArray structure to use.
     *
     * @return
     * ParamArray with params pairs.
     */
    export function toParamArray (
        params?: undefined,
        array?: ParamArray
    ): undefined;
    export function toParamArray (
        params?: Params,
        array?: ParamArray
    ): ParamArray;
    export function toParamArray (
        params: ( Params | undefined ),
        array: ParamArray = []
    ): ( ParamArray | undefined ) {

        if ( !params ) {
            return;
        }

        const pairs = (
            Array.isArray( params ) ?
                params :
                Object.entries( params )
        );

        let pair: [string, unknown];

        for ( let i = 0, iEnd = pairs.length; i < iEnd; ++i ) {
            pair = pairs[i];

            if ( Array.isArray( pair[1] ) ) {
                const key = pair[0];
                const values = pair[1];

                for ( let j = 0, jEnd = values.length; j < jEnd; ++j ) {
                    array.push( [key, values[j]] );
                }
            }
            else {
                array.push( pair );
            }
        }

        return array;
    }


}


/* *
 *
 *  Default Export
 *
 * */


export default REST;
