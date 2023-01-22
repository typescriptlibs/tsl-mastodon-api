/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/* *
 *
 *  Functions
 *
 * */
export function isTag(json) {
    return (typeof json === 'object' &&
        typeof json.name === 'string' &&
        typeof json.url === 'string' &&
        json.history instanceof Array &&
        (!json.history.length ||
            isTagStatistic(json.history[0])));
}
export function isTagStatistic(json) {
    return (typeof json === 'object' &&
        typeof json.accounts === 'number' &&
        typeof json.day === 'number' &&
        typeof json.uses === 'number');
}
//# sourceMappingURL=Tag.js.map