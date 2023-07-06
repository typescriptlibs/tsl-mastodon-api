/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/// <amd-module name="tsl-mastodon-api/Bridge" />


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
    fetch: global.fetch,
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
 *  Imports
 *
 * */


( async () => {
    if ( !Bridge.fetch ) {
        Bridge.fetch = ( await import( 'node-fetch' ) ).default as typeof Bridge.fetch;
    }
    if ( !Bridge.Blob ) {
        Bridge.Blob = ( await import( 'node-fetch' ) ).Blob;
    }
    if ( !Bridge.File ) {
        Bridge.File = ( await import( 'node-fetch' ) ).File;
    }
    if ( !Bridge.FormData ) {
        Bridge.FormData = ( await import( 'node-fetch' ) ).FormData;
    }
    if ( !Bridge.Headers ) {
        Bridge.Headers = ( await import( 'node-fetch' ) ).Headers;
    }
    if ( !Bridge.Response ) {
        Bridge.Response = ( await import( 'node-fetch' ) ).Response as unknown as typeof Bridge.Response;
    }
    if ( !Bridge.URL ) {
        Bridge.URL = ( await import( 'node:url' ) ).URL as unknown as typeof Bridge.URL;
    }
    if ( !Bridge.URLSearchParams ) {
        Bridge.URLSearchParams = ( await import( 'url' ) ).URLSearchParams as unknown as typeof Bridge.URLSearchParams;
    }
    if ( !Bridge.WebSocket ) {
        Bridge.WebSocket = ( await import( 'ws' ) ).WebSocket;
    }
} )();


/* *
 *
 *  Default Export
 *
 * */


export default Bridge;
