/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/



/* *
 *
 *  Constants
 *
 * */


const global = globalThis;


export const Bridge = {
    global,
    fetch: (
        global.fetch ||
        ( await import( 'node-fetch' ) ).default as unknown as typeof global.fetch
    ),
    Blob: (
        global.Blob ||
        ( await import( 'node-fetch' ) ).Blob
    ),
    File: (
        global.File ||
        ( await import( 'node-fetch' ) ).File
    ),
    FormData: (
        global.FormData ||
        ( await import( 'node-fetch' ) ).FormData
    ),
    Headers: (
        global.Headers ||
        ( await import( 'node-fetch' ) ).Headers
    ),
    Response: (
        global.Response ||
        ( await import( 'node-fetch' ) ).Response as unknown as typeof global.Response
    ),
    URL: (
        global.URL ||
        ( await import( 'node:url' ) ).URL as unknown as typeof global.URL
    ),
    URLSearchParams: (
        global.URLSearchParams ||
        ( await import( 'node:url' ) ).URLSearchParams as unknown as typeof global.URLSearchParams
    ),
    WebSocket: (
        global.WebSocket ||
        ( await import( 'ws' ) ).WebSocket
    ),
};


/* *
 *
 *  Default Export
 *
 * */


export default Bridge;
