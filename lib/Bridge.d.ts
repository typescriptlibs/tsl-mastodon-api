export declare const global: typeof globalThis;
export declare const fetch: typeof globalThis.fetch;
export declare const Blob: {
    new (blobParts?: BlobPart[] | undefined, options?: BlobPropertyBag | undefined): Blob;
    prototype: Blob;
};
export declare const File: {
    new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
    prototype: File;
};
export declare const FormData: {
    new (form?: HTMLFormElement | undefined): FormData;
    prototype: FormData;
};
export declare const Header: {
    new (init?: HeadersInit | undefined): Headers;
    prototype: Headers;
};
export declare const Response: {
    new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
    prototype: Response;
    error(): Response;
    redirect(url: string | URL, status?: number | undefined): Response;
};
export declare const URL: {
    new (url: string | URL, base?: string | URL | undefined): URL;
    prototype: URL;
    createObjectURL(obj: Blob | MediaSource): string;
    revokeObjectURL(url: string): void;
};
export declare const URLSearchParams: {
    new (init?: string | Record<string, string> | URLSearchParams | string[][] | undefined): URLSearchParams;
    prototype: URLSearchParams;
    toString(): string;
};
