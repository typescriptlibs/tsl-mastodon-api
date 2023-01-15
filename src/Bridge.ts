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
    URLSearchParams
};

export default Bridge;
