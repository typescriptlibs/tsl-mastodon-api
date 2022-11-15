/// <reference types="node" resolution-mode="require"/>
import { URL } from 'url';
declare function buildFormData(params?: Record<string, unknown>, target?: FormData): FormData;
declare function buildHeaders(params?: Record<string, unknown>, target?: Record<string, string>): Record<string, string>;
declare function buildURL(base: string, path?: string, params?: Record<string, unknown>): URL;
declare function buildURLSearchParams(params?: Record<string, unknown>, target?: URLSearchParams): URLSearchParams;
export declare const Utilities: {
    buildHeaders: typeof buildHeaders;
    buildFormData: typeof buildFormData;
    buildURL: typeof buildURL;
    buildURLSearchParams: typeof buildURLSearchParams;
};
export default Utilities;
