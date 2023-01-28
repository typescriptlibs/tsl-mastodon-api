/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/* *
 *
 *  Declarations
 *
 * */

export interface Tag {
    history?: Array<TagStatistic>;
    name: string;
    url: string;
}

export interface TagStatistic {
    accounts: number;
    day: number;
    uses: number;
}

/* *
 *
 *  Functions
 *
 * */

export function isTag (
    json: Partial<Tag>
): json is Tag {
    return (
        typeof json === 'object' &&
        typeof json.name === 'string' &&
        typeof json.url === 'string' &&
        (
            typeof json.history === 'undefined' ||
            Array.isArray( json.history ) &&
            (
                !json.history.length ||
                isTagStatistic( json.history[0] || {} )
            )
        )
    );
}

export function isTags (
    json: Partial<Array<Partial<Tag>>>
): json is Array<Tag> {
    return (
        Array.isArray( json ) &&
        (
            !json.length ||
            isTag( json[0] || {} )
        )
    );
}

export function isTagStatistic (
    json: Partial<TagStatistic>
): json is TagStatistic {
    return (
        typeof json === 'object' &&
        typeof json.accounts === 'number' &&
        typeof json.day === 'number' &&
        typeof json.uses === 'number'
    );
}

/* *
 *
 *  Default Export
 *
 * */

export default Tag;
