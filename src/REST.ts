/* *
 *
 *  Imports
 *
 * */

import fetch from 'node-fetch';
import { Response } from 'node-fetch';
import { Utilities } from './Utilities.js';

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
            typeof config.timeout_ms === 'number' &&
            config.timeout_ms > 0 ?
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
        return this.fetch('DELETE', path, params);
    }

    public async fetch (
        method: ('DELETE'|'GET'|'PATCH'|'POST'|'PUT'),
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        const apiURL = this.apiURL;
        const config = this.config;
        const supportsBody = (
            method === 'PATCH' ||
            method === 'POST' ||
            undefined
        );
        const url = (
            supportsBody ?
                Utilities.buildURL(apiURL, path) :
                Utilities.buildURL(apiURL, path, params)
        );

        const timeout = new AbortController();
        const timer = setTimeout(() => timeout.abort(), config.timeout_ms);

        let response = new Response();

        try {
            response = await fetch(
                url.toString(),
                {
                    ...(config.no_follow ? {
                        follow: 9,
                        redirect: 'follow',
                    } : {}),
                    compress: true,
                    headers: Utilities.buildHeaders({
                        Accept: '*/*',
                        Authorization: `Bearer ${config.access_token}`,
                        'User-Agent': config.user_agent
                    }),
                    method,
                    signal: timeout.signal,
                    body: supportsBody && Utilities.buildFormData(params)
                }
            );

            clearTimeout(timer);

            return {
                failed: !response.ok,
                json: await response.json(),
                path,
                response,
                status: response.status
            };
        }
        catch (error) {

            clearTimeout(timer);

            return {
                failed: true,
                json: {},
                path,
                response,
                status: 422 // Unprocessable Entity
            }
        }
    }

    public get (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch('GET', path, params);
    }

    public patch (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch('PATCH', path, params);
    }

    public post (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch('POST', path, params);
    }

    public put (
        path: string,
        params?: REST.Params
    ): Promise<REST.Result> {
        return this.fetch('PUT', path, params);
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

    export interface Params extends Record<string, unknown> {
        // nothing to add
    }

    export interface Result {
        failed: boolean;
        json: any;
        path: string;
        response: Response;
        status: number;
    }

    export interface Success<T = unknown> extends Result {
        failed: false;
        json: T;
        status: 200;
    }

}

/* *
 *
 *  Default Export
 *
 * */

export default REST;
