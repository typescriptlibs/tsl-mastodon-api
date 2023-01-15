export declare class REST {
    constructor(config: REST.Config);
    readonly apiURL: string;
    readonly config: Required<REST.Config>;
    delete(path: string, params?: REST.Params): Promise<REST.Result>;
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
}
export default REST;
