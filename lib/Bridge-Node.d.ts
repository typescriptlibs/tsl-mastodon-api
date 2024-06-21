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
        new (blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
        prototype: Blob;
    };
    File: {
        new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
        prototype: File;
    };
    FormData: {
        new (form?: HTMLFormElement, submitter?: HTMLElement | null): FormData;
        prototype: FormData;
    };
    Headers: {
        new (init?: HeadersInit): Headers;
        prototype: Headers;
    };
    Response: {
        new (body?: BodyInit | null, init?: ResponseInit): Response;
        prototype: Response;
        error(): Response;
        json(data: any, init?: ResponseInit): Response;
        redirect(url: string | URL, status?: number): Response;
    };
    URL: {
        new (url: string | URL, base?: string | URL): URL;
        prototype: URL;
        canParse(url: string | URL, base?: string): boolean;
        createObjectURL(obj: Blob | MediaSource): string;
        revokeObjectURL(url: string): void;
    };
    URLSearchParams: {
        new (init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
        prototype: URLSearchParams;
    };
    WebSocket: {
        new (url: string | URL, protocols?: string | string[]): WebSocket;
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
