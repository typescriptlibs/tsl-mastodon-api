/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
export interface Account {
    acct: string;
    avatar?: string;
    avatar_static?: string;
    bot?: boolean;
    created_at: string;
    discoverable?: boolean;
    display_name: string;
    followers_count: number;
    following_count: number;
    group?: boolean;
    header?: string;
    header_static?: string;
    id: string;
    last_status_at: string;
    locked?: boolean;
    note?: string;
    statuses_count: number;
    url: string;
    username: string;
}
export declare function isAccount(json: Partial<Account>): json is Account;
export declare function isAccounts(json: Partial<Array<Partial<Account>>>): json is Array<Account>;
export default Account;
