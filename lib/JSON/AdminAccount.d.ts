/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/AdminReport" />
import type Account from './Account.js';
/**
 * Represents admin-level information about a given account.
 *
 * @since 2.9.1
 */
export interface AdminAccount {
    /**
     * User-level information about the account.
     *
     * @since 2.9.1
     */
    account: Account;
    /**
     * When the account was first discovered.
     *
     * @since 2.9.1
     */
    created_at: string;
    /**
     * The domain of the account, if it is remote.
     *
     * @since 2.9.1
     */
    domain?: (string | null);
    /**
     * The email address associated with the account.
     *
     * @since 2.9.1
     */
    email: string;
    /**
     * The ID of the account in the database.
     *
     * @since 2.9.1
     */
    id: string;
    /**
     * The IP address last used to login to this account.
     *
     * @since 2.9.1
     */
    ip?: (string | null);
    /**
     * All known IP addresses associated with this account.
     *
     * @since 3.5.0
     */
    ips: Array<AdminAccountIP>;
    /**
     * The username of the account.
     *
     * @since 2.9.1
     */
    username: string;
}
/**
 * Represents an IP address associated with a user.
 *
 * @since 3.5.0
 */
export interface AdminAccountIP {
    /**
     * The IP address.
     *
     * @since 3.5.0
     */
    ip: string;
    /**
     * Time when the IP address was last used for this account.
     * (ISO 8601 Datetime)
     *
     * @since 3.5.0
     */
    used_at: string;
}
/**
 * Tests the JSON object for an AdminAccount structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AdminReport structure.
 */
export declare function isAdminAccount(json: Partial<AdminAccount>): json is AdminAccount;
/**
 * Tests the JSON object for an AdminAccountIP structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an AdminAccountIP structure.
 */
export declare function isAdminAccountIP(json?: Partial<AdminAccountIP>): json is AdminAccountIP;
/**
 * Tests the JSON object for an AdminAccountIP array structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has an AdminAccountIP array structure.
 */
export declare function isAdminAccountIPs(json?: Partial<Array<Partial<AdminAccountIP>>>): json is Array<AdminAccountIP>;
export default AdminAccount;
