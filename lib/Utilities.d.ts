import REST from './REST.js';
declare function buildFormData(params?: REST.Params, target?: FormData): FormData;
declare function buildHeaders(params?: Record<string, unknown>, target?: Record<string, string>): Record<string, string>;
declare function buildKeyValues(params: REST.Params, callback: (key: string, val: string | Blob) => void): void;
declare function buildURL(base: string, path?: string, params?: REST.Params): URL;
declare function buildURLSearchParams(params?: REST.Params, target?: URLSearchParams): URLSearchParams;
declare function buildValue(value: unknown): string | Blob | null;
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
declare function fileFrom(filePath: string, mimeType?: string): Promise<File>;
export declare const Utilities: {
    buildHeaders: typeof buildHeaders;
    buildFormData: typeof buildFormData;
    buildURL: typeof buildURL;
    buildURLSearchParams: typeof buildURLSearchParams;
    buildKeyValues: typeof buildKeyValues;
    buildValue: typeof buildValue;
    fileFrom: typeof fileFrom;
};
export default Utilities;
