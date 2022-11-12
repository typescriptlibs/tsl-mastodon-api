/* *
 *
 *  Imports
 *
 * */
import { URL, URLSearchParams } from 'url';
/* *
 *
 *  Functions
 *
 * */
export function getURL(url, path = '.') {
    return new URL(path, url).href;
}
export function getURLSearchParams(params) {
    const urlParams = new URLSearchParams();
    let value;
    for (const key in params) {
        value = params[key];
        if (typeof value === 'undefined' ||
            value === null) {
            continue;
        }
        if (typeof value === 'object') {
            urlParams.append(key, JSON.stringify(value));
        }
        else {
            urlParams.append(key, `${value}`);
        }
    }
    return urlParams;
}
/* *
 *
 *  Default Export
 *
 * */
export default {
    getURL,
    getURLSearchParams
};
//# sourceMappingURL=Utilities.js.map