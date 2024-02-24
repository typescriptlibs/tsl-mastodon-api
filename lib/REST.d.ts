/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
declare global {
    interface RequestInit {
        follow?: number;
    }
}
export declare class REST {
    constructor(config: REST.Config);
    readonly apiURL: string;
    readonly config: Required<REST.Config>;
    delete(path: string, params?: REST.Params): Promise<REST.Result>;
    fetch(method: REST.Method, path: string, params?: REST.Params): Promise<REST.Result>;
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
    type Method = ('DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT');
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
