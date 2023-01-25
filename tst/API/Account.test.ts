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

test( 'Test API.getAccount', async ( assert: test.Assert ) => {
    try {
        const { json: account } = await Setup.v1Get.getAccount();
        assert.strictEqual(
            account.id,
            'ID-1',
            'Account ID should contain mockup value.'
        );
    }
    catch ( result: any ) {
        console.debug( result );
        assert.ok(
            false,
            'Request should not fail.'
        );
    }
} );
