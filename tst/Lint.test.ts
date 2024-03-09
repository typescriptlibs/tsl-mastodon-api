/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


/* *
 *
 *  Imports
 *
 * */


import Setup from './Setup.js';


import test from '@typescriptlibs/tst';


/* *
 *
 *  Tests
 *
 * */


test( 'Test lib sources', async ( assert: test.Assert ) => {

    assert.strictEqual(
        Setup.libContains( /\?\?/ ),
        false,
        'Library should not contain the Nullish Coalescing Operator (`??`).'
    );

} );
