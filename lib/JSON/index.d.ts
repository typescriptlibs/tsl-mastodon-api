/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/JSON/index" />
export * from './Account.js';
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
export declare const parse: (text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any;
export declare const stringify: {
    (value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string;
    (value: any, replacer?: (string | number)[] | null | undefined, space?: string | number | undefined): string;
};
