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

test( 'Test API.getNotifications', async ( assert: test.Assert ) => {
    try {
        const { json: notifications } = await Setup.v1GetMultiple.getNotifications();
        assert.notStrictEqual(
            notifications.length,
            0,
            'Notifications should be returned.'
        );
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
        const { json: body } = await Setup.v1Delete.deleteNotification( 'ID-11' );
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
