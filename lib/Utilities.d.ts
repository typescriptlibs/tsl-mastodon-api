/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/Utilities" />
export declare namespace Utilities {
    type Params = (Array<[string, unknown]> | Record<string, unknown>);
    /**
     * Loads a file from a path.
     *
     * @memberof Utilities
     *
     * @param filePath
     * Path to the file.
     *
     * @param mimeType
     * Mime type of the file.
     *
     * @return
     * Promise with the file, if successful.
     *
     * @requires node
     */
    const fileFrom: typeof import("./Bridge.js").fileFrom;
    function buildFormData(params?: Params, target?: FormData): FormData;
    function buildHeaders(params?: Params, target?: Headers): Headers;
    function buildURL(base: string, path?: string, params?: Params): URL;
    function buildURLSearchParams(params?: Params, target?: URLSearchParams): URLSearchParams;
    function transferParams(params: Params, target: (FormData | Headers | URLSearchParams)): void;
}
export default Utilities;
