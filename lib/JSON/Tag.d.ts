/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
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
export declare function isTag(json: Partial<Tag>): json is Tag;
export declare function isTags(json: Partial<Array<Partial<Tag>>>): json is Array<Tag>;
export declare function isTagStatistic(json: Partial<TagStatistic>): json is TagStatistic;
export default Tag;
