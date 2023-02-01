/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/* *
 *
 *  Imports
 *
 * */

import Setup from '../Setup.js';
import test from '@typescriptlibs/tst';

/* *
 *
 *  Tests
 *
 * */

test( 'Test API.version', async ( assert: test.Assert ) => {
    assert.strictEqual(
        Setup.v1Get.version,
        1,
        `API version should be equal to 1.`
    );

    const apiWithVersionlessURL = new Setup.Mastodon.API( {
        access_token: '0',
        api_url: 'https://social.domain.example/mastodon/'
    } );

    assert.strictEqual(
        apiWithVersionlessURL.version,
        0,
        'API version should be equal to 0.'
    );
} );
