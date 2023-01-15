type Params = (Array<[string, unknown]> | Record<string, unknown>);
declare function buildFormData(params?: Params, target?: FormData): FormData;
declare function buildHeaders(params?: Params, target?: Headers): Headers;
declare function buildURL(base: string, path?: string, params?: Params): URL;
declare function buildURLSearchParams(params?: Params, target?: URLSearchParams): URLSearchParams;
declare function transferParams(params: Params, target: (FormData | Headers | URLSearchParams)): void;
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
    transferParams: typeof transferParams;
};
export default Utilities;
