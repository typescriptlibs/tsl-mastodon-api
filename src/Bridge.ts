/* *
 *
 *  Constants
 *
 * */

export const global = (
    typeof window === 'undefined' ?
        globalThis :
        window
);

export const fetch = (
    global.fetch ||
    ( await import( 'node-fetch' ) ).default
);

export const Blob = (
    global.Blob ||
    ( await import( 'node-fetch' ) ).Blob
);

export const File = (
    global.File ||
    ( await import( 'node-fetch' ) ).File
);

export const FormData = (
    global.FormData ||
    ( await import( 'node-fetch' ) ).FormData
);

export const Header = (
    global.Headers ||
    ( await import( 'node-fetch' ) ).Headers
);

export const Response = (
    global.Response ||
    ( await import( 'node-fetch' ) ).Response
);

export const URL = (
    global.URL ||
    ( await import( 'url' ) ).URL
);

export const URLSearchParams = (
    global.URLSearchParams ||
    ( await import( 'url' ) ).URLSearchParams
);
