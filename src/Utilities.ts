/* *
 *
 *  Imports
 *
 * */

import { FormData } from 'node-fetch';
import { URL } from 'url';

/* *
 *
 *  Functions
 *
 * */

function buildFormData (
    params?: Record<string, unknown>,
    target: FormData = new FormData()
): FormData {
    let value: unknown;

    for (const key in params) {
        value = params[key];

        if (
            typeof value === 'undefined' ||
            value === null
        ) {
            continue;
        }

        if (value instanceof Blob) {
            target.append(key, value);
        } else if (typeof value === 'object') {
            target.append(key, JSON.stringify(value));
        } else {
            target.append(key, `${value}`);
        }
    }

    return target;
}

function buildHeaders (
    params?: Record<string, unknown>,
    target: Record<string, string> = {}
): Record<string, string> {
    let value: unknown;

    for (const key in params) {
        value = params[key];

        if (
            typeof value === 'undefined' ||
            value === null
        ) {
            continue;
        }

        if (typeof value === 'object') {
            target[key] = JSON.stringify(value);
        } else {
            target[key] = `${value}`;
        }
    }

    return target;
}

function buildURL (
    base: string,
    path: string = '.',
    params?: Record<string, unknown>
): URL {
    const url = new URL(path, base);

    if (params) {
        buildURLSearchParams(params, url.searchParams);
    }

    return url;
}

function buildURLSearchParams (
    params?: Record<string, unknown>,
    target: URLSearchParams = new URLSearchParams()
): URLSearchParams {
    let value: unknown;

    for (const key in params) {
        value = params[key];

        if (
            typeof value === 'undefined' ||
            value === null
        ) {
            continue;
        }

        if (typeof value === 'object') {
            target.append(key, JSON.stringify(value));
        } else {
            target.append(key, `${value}`);
        }
    }

    return target;
}

/* *
 *
 *  Default Export
 *
 * */

export const Utilities = {
    buildHeaders,
    buildFormData,
    buildURL,
    buildURLSearchParams
};

export default Utilities;
