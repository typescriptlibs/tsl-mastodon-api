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
};
export default Bridge;
