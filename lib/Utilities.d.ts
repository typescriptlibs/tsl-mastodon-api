/// <reference types="node" resolution-mode="require"/>
import { URLSearchParams } from 'url';
export declare function getURL(url: string, path?: string): string;
export declare function getURLSearchParams(params: Record<string, unknown>): URLSearchParams;
declare const _default: {
    getURL: typeof getURL;
    getURLSearchParams: typeof getURLSearchParams;
};
export default _default;
