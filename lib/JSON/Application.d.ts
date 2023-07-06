/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/JSON/Application" />
/**
 * Represents an application that interfaces with the REST API to access
 * accounts or post statuses.
 */
export interface Application {
    /**
     * Client ID key, to be used for obtaining OAuth tokens.
     * @since 0.9.9
     */
    client_id?: string;
    /**
     * Client secret key, to be used for obtaining OAuth tokens.
     * @since 0.9.9
     */
    client_secret?: string;
    /**
     * The name of your application.
     * @since 0.9.9
     */
    name: string;
    /**
     * Used for Push Streaming API. Returned with POST /api/v1/apps. Equivalent
     * to WebPushSubscription#server_key.
     * @since 2.8.0
     */
    vapid_key?: string;
    /**
     * The website associated with your application.
     * @since 0.9.9
     */
    website?: (string | null);
}
export default Application;
