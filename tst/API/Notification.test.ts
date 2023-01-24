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
import TestUtilities from '../TestUtilities.js';
import test from '@typescriptlibs/tst';

/* *
 *
 *  Preperations
 *
 * */

const APID = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-delete/'
} );

const APIGM = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-get-multiple/'
} );

TestUtilities.forceGetFetch( APID );

/* *
 *
 *  Tests
 *
 * */

test( 'Test API.getNotifications', async ( assert: test.Assert ) => {
    try {
        const { json: notifications } = await APIGM.getNotifications();
        assert.equal(
            notifications[0].id,
            'ID-10',
            'Notification ID should contain mockup value.'
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

test( 'Test API.deleteNotification', async ( assert: test.Assert ) => {
    try {
        const { json: body } = await APID.deleteNotification( 'ID-11' );
        assert.deepEqual(
            body,
            {},
            'Response should contain a {} body.'
        );
    }
    catch ( result: any ) {
        console.debug( result );
        assert.ok(
            false,
            'Request should not fail.'
        );
    }
} )
