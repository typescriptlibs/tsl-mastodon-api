/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/Utilities" />
export declare namespace Utilities {
    type Params = (Array<[string, unknown]> | Record<string, unknown>);
    function buildFormData(params?: Params, target?: FormData): FormData;
    function buildHeaders(params?: Params, target?: Headers): Headers;
    function buildURL(base: string, path?: string, params?: Params): URL;
    function buildURLSearchParams(params?: Params, target?: URLSearchParams): URLSearchParams;
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
    function fileFrom(filePath: string, mimeType?: string): Promise<File>;
    function transferParams(params: Params, target: (FormData | Headers | URLSearchParams)): void;
}
export default Utilities;
