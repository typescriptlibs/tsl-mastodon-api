/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/// <amd-module name="tsl-mastodon-api/lib/Bridge" />


/* *
 *
 *  Constants
 *
 * */


const global = (
    typeof window === 'undefined' ?
        globalThis :
        window
);


export const Bridge = {
    global,
    fetch: global.fetch.bind( global ),
    Blob: global.Blob,
    File: global.File,
    FormData: global.FormData,
    Headers: global.Headers,
    Response: global.Response,
    URL: global.URL,
    URLSearchParams: global.URLSearchParams,
    WebSocket: global.WebSocket
};


/* *
 *
 *  Default Export
 *
 * */


export default Bridge;
