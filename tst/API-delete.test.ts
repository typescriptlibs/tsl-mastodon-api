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

import * as Mastodon from 'tsl-mastodon-api';
import Utilities from './Utilities.js';
import test from '@typescriptlibs/tst';

/* *
 *
 *  Preperations
 *
 * */

const API = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-delete/'
} );

Utilities.forceGetFetch( API );

/* *
 *
 *  Tests
 *
 * */

test( 'Test API.deleteList', async ( assert: test.Assert ) => {
    try {
        const { json: list } = await API.deleteList( 'ID-8' );
        assert.strictEqual(
            list.id,
            'ID-8',
            'List ID should contain mockup value.'
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

test( 'Test API.deleteStatus', async ( assert: test.Assert ) => {
    try {
        const { json: status } = await API.deleteStatus( 'ID-7' );
        assert.strictEqual(
            status.id,
            'ID-7',
            'Status ID should contain mockup value.'
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
