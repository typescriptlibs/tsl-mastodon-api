/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export declare const Bridge: {
    global: typeof globalThis;
    fetch: typeof globalThis.fetch;
    Blob: {
        new (blobParts?: BlobPart[] | undefined, options?: BlobPropertyBag | undefined): Blob;
        prototype: Blob;
    };
    File: {
        new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
        prototype: File;
    };
    FormData: {
        new (form?: HTMLFormElement | undefined): FormData;
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
        redirect(url: string | URL, status?: number | undefined): Response;
    };
    URL: {
        new (url: string | URL, base?: string | URL | undefined): URL;
        prototype: URL;
        createObjectURL(obj: Blob | MediaSource): string;
        revokeObjectURL(url: string): void;
    };
    URLSearchParams: {
        new (init?: string | URLSearchParams | Record<string, string> | string[][] | undefined): URLSearchParams;
        prototype: URLSearchParams;
        toString(): string;
    };
    WebSocket: {
        new (url: string | URL, protocols?: string | string[] | undefined): WebSocket;
        prototype: WebSocket;
        readonly CLOSED: number;
        readonly CLOSING: number;
        readonly CONNECTING: number;
        readonly OPEN: number;
    };
};
export default Bridge;
