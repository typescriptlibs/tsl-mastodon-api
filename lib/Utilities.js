/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/Utilities" />
/* *
 *
 *  Imports
 *
 * */
import Bridge from './Bridge.js';
/* *
 *
 *  Namespace
 *
 * */
export var Utilities;
(function (Utilities) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    function buildFormData(params, target = new Bridge.FormData()) {
        if (params) {
            transferParams(params, target);
        }
        return target;
    }
    Utilities.buildFormData = buildFormData;
    function buildHeaders(params, target = new Bridge.Headers()) {
        if (params) {
            transferParams(params, target);
        }
        return target;
    }
    Utilities.buildHeaders = buildHeaders;
    function buildURL(base, path = '.', params) {
        const url = new Bridge.URL(path, base);
        if (params) {
            buildURLSearchParams(params, url.searchParams);
        }
        return url;
    }
    Utilities.buildURL = buildURL;
    function buildURLSearchParams(params, target = new Bridge.URLSearchParams()) {
        if (params) {
            transferParams(params, target);
        }
        return target;
    }
    Utilities.buildURLSearchParams = buildURLSearchParams;
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
    async function fileFrom(filePath, mimeType) {
        const fileFrom = (await import('node-fetch')).fileFrom;
        return await fileFrom(filePath, mimeType);
    }
    Utilities.fileFrom = fileFrom;
    function transferParams(params, target) {
        let value;
        if (Array.isArray(params)) {
            let key;
            for (const pair of params) {
                key = pair[0];
                value = pair[1];
                if (typeof value === 'undefined' ||
                    value === null) {
                    continue;
                }
                if (value instanceof Bridge.Blob &&
                    target instanceof Bridge.FormData) {
                    target.append(key, value);
                }
                else if (typeof value === 'object') {
                    target.append(key, JSON.stringify(value));
                }
                else {
                    target.append(key, `${value}`);
                }
            }
        }
        else {
            for (const key in params) {
                value = params[key];
                if (typeof value === 'undefined' ||
                    value === null) {
                    continue;
                }
                if (value instanceof Bridge.Blob &&
                    target instanceof Bridge.FormData) {
                    target.append(key, value);
                }
                else if (typeof value === 'object') {
                    target.append(key, JSON.stringify(value));
                }
                else {
                    target.append(key, `${value}`);
                }
            }
        }
    }
    Utilities.transferParams = transferParams;
})(Utilities = Utilities || (Utilities = {}));
/* *
 *
 *  Default Export
 *
 * */
export default Utilities;
//# sourceMappingURL=Utilities.js.map