/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/* *
 *
 *  Declarations
 *
 * */


export declare namespace Bridge {


    /* *
     *
     *  Functions
     *
     * */


    const fetch: Window['fetch'];


    function fileFrom?( filePath: string, mimeType?: string ): Promise<Bridge['File']> );


    /* *
     *
     *  Classes
     *
     * */


    const Blob: Class<Blob>;


    const File: Class<File>;


    const FormData: Class<FormData>;


    const Headers: Class<Headers>;


    const Response: Class<Response>;


    const URL: Class<URL>;


    const URLSearchParams: Class<URLSearchParams>;


    const WebSocket: Class<WebSocket>;


}


/**
 * Utility type to create a virtual class based on an interface type.
 */
export declare type Class<T> = (
    & { new( ...args: Array<unknown> ): T }
    & T
);


/* *
 *
 *  Default Export
 *
 * */


export default Bridge;
