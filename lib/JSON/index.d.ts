/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/index" />
export * from './Account.js';
export * from './AdminReport.js';
export * from './Announcement.js';
export * from './Application.js';
export * from './Card.js';
export * from './Emoji.js';
export * from './List.js';
export * from './MediaAttachment.js';
export * from './StreamData.js';
export * from './Notification.js';
export * from './Poll.js';
export * from './Reaction.js';
export * from './Search.js';
export * from './Status.js';
export * from './Tag.js';
export declare const parse: (text: string, reviver?: (this: any, key: string, value: any) => any) => any;
export declare const stringify: {
    (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    (value: any, replacer?: (number | string)[] | null, space?: string | number): string;
};
