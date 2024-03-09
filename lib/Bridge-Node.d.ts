/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export declare const Bridge: {
    global: typeof globalThis;
    fetch: typeof fetch;
    fileFrom: typeof fileFrom;
    Blob: {
        new (blobParts?: BlobPart[] | undefined, options?: BlobPropertyBag | undefined): Blob;
        prototype: Blob;
    };
    File: {
        new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
        prototype: File;
    };
    FormData: {
        new (form?: HTMLFormElement | undefined, submitter?: HTMLElement | null | undefined): FormData;
        prototype: FormData;
    };
    Headers: {
        new (init?: HeadersInit | undefined): Headers;
        prototype: Headers;
    };
    Response: {
        new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
        prototype: Response;
        error(): Response;
        json(data: any, init?: ResponseInit | undefined): Response;
        redirect(url: string | URL, status?: number | undefined): Response;
    };
    URL: {
        new (url: string | URL, base?: string | URL | undefined): URL;
        prototype: URL;
        canParse(url: string | URL, base?: string | undefined): boolean;
        createObjectURL(obj: Blob | MediaSource): string;
        revokeObjectURL(url: string): void;
    };
    URLSearchParams: {
        new (init?: string | string[][] | Record<string, string> | URLSearchParams | undefined): URLSearchParams;
        prototype: URLSearchParams;
    };
    WebSocket: {
        new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
        prototype: WebSocket;
        readonly CONNECTING: 0;
        readonly OPEN: 1;
        readonly CLOSING: 2;
        readonly CLOSED: 3;
    };
};
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
export declare function fileFrom(filePath: string, mimeType?: string): Promise<File>;
export default Bridge;
