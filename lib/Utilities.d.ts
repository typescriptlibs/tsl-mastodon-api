declare function buildFormData(params?: Record<string, unknown>, target?: FormData): FormData;
declare function buildHeaders(params?: Record<string, unknown>, target?: Record<string, string>): Record<string, string>;
declare function buildURL(base: string, path?: string, params?: Record<string, unknown>): URL;
declare function buildURLSearchParams(params?: Record<string, unknown>, target?: URLSearchParams): URLSearchParams;
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
    fileFrom: typeof fileFrom;
};
export default Utilities;
