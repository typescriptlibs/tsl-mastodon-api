/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
declare global {
    interface RequestInit {
        follow?: number;
    }
}
/**
 * REST class to run delete, fetch, get, patch, post, and put on an server API.
 */
export declare class REST {
    /**
     * @param config
     * REST configuration with the URL to the server API.
     */
    constructor(config: REST.Config);
    readonly apiURL: string;
    readonly config: Required<REST.Config>;
    delete(path: string, params?: REST.Params): Promise<REST.Result>;
    /**
     * Fetch from the relative API path with the given method and parameters.
     *
     * @param method
     * REST method to use.
     *
     * @param path
     * Relative API path to use.
     *
     * @param [params]
     * REST parameters that get converted either to a query or to a form data.
     *
     * @return
     * Promise with the result object, if successful.
     */
    fetch(method: ('DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'), path: string, params?: REST.Params): Promise<REST.Result>;
    get(path: string, params?: REST.Params): Promise<REST.Result>;
    patch(path: string, params?: REST.Params): Promise<REST.Result>;
    post(path: string, params?: REST.Params): Promise<REST.Result>;
    put(path: string, params?: REST.Params): Promise<REST.Result>;
}
export declare namespace REST {
    interface Config {
        access_token: string;
        api_url: string;
        no_follow?: boolean;
        timeout_ms?: number;
        user_agent?: string;
    }
    type ParamArray = Array<[string, unknown]>;
    type ParamRecord = Record<string, unknown>;
    type Params = (ParamArray | ParamRecord);
    interface Result {
        failed: boolean;
        json: any;
        path: string;
        response?: Response;
        status: number;
    }
    interface Success<T = unknown> extends Result {
        failed: false;
        json: T;
        status: 200;
    }
    function isParamArray(params?: Params): params is ParamArray;
    /**
     * Converts a Params structure into a ParamArray structure. Value arrays of
     * params will be split into multiple pairs of the ParamArray. If no special
     * handling of arrays is needed, convert from ParamRecord to ParamArray with
     * the `Object.entries` function.
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
    function toParamArray(params?: undefined, array?: ParamArray): undefined;
    function toParamArray(params?: Params, array?: ParamArray): ParamArray;
}
export default REST;
