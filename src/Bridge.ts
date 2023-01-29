/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

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

const fetch = (
    global.fetch ||
    ( await import( 'node-fetch' ) ).default
);

const Blob = (
    global.Blob ||
    ( await import( 'node-fetch' ) ).Blob
);

const File = (
    global.File ||
    ( await import( 'node-fetch' ) ).File
);

const FormData = (
    global.FormData ||
    ( await import( 'node-fetch' ) ).FormData
);

const Headers = (
    global.Headers ||
    ( await import( 'node-fetch' ) ).Headers
);

const Response = (
    global.Response ||
    ( await import( 'node-fetch' ) ).Response
);

const URL = (
    global.URL ||
    ( await import( 'url' ) ).URL
);

const URLSearchParams = (
    global.URLSearchParams ||
    ( await import( 'url' ) ).URLSearchParams
);

const WebSocket = (
    global.WebSocket ||
    ( await import( 'ws' ) ).WebSocket
);

/* *
 *
 *  Default Export
 *
 * */

export const Bridge = {
    global,
    fetch,
    Blob,
    File,
    FormData,
    Headers,
    Response,
    URL,
    URLSearchParams,
    WebSocket
};

export default Bridge;
