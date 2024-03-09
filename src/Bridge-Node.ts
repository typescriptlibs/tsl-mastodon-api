/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/* *
 *
 *  Imports
 *
 * */


import * as FS from 'node:fs';


import * as Path from 'node:path';


/* *
 *
 *  Constants
 *
 * */


const global = globalThis;


export const Bridge = {
    global,
    fetch: global.fetch,
    fileFrom,
    Blob: global.Blob,
    File: global.File,
    FormData: global.FormData,
    Headers: global.Headers,
    Response: global.Response,
    URL: global.URL,
    URLSearchParams: global.URLSearchParams,
    WebSocket: global.WebSocket,
};


/* *
 *
 *  Functions
 *
 * */


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
 */
export async function fileFrom (
    filePath: string,
    mimeType?: string
): Promise<File> {
    return new Bridge.File(
        [FS.readFileSync( filePath )],
        Path.basename( filePath ),
        { type: mimeType }
    );
}


/**
 * Patches the Node.js Bridge to work with older versions.
 *
 * @return
 * Promise.
 */
async function patchBridge (): Promise<void> {

    // Test for Node.js v19 and older
    if ( !Bridge.File ) {
        const nodeFetch = await import( 'node-fetch' );

        Bridge.fetch = Bridge.fetch || nodeFetch.default as typeof Bridge.fetch;
        Bridge.Blob = Bridge.Blob || nodeFetch.Blob;
        Bridge.File = nodeFetch.File;
        Bridge.FormData = Bridge.FormData || nodeFetch.FormData;
        Bridge.Headers = Bridge.Headers || nodeFetch.Headers;
        Bridge.Response = Bridge.Response || nodeFetch.Response;
    }

    // Test for Node.js v9 and older
    if ( !Bridge.URL ) {
        const url = await import( 'node:url' );

        Bridge.URL = url.URL as typeof Bridge.URL;
        Bridge.URLSearchParams = url.URLSearchParams as typeof Bridge.URLSearchParams;
    }

    // Test for Node.js v20.9 and older
    if ( !Bridge.WebSocket ) {
        const ws = await import( 'ws' );

        Bridge.WebSocket = ws.WebSocket;
    }

}


/* *
 *
 *  Default Export
 *
 * */


await patchBridge();


export default Bridge;
