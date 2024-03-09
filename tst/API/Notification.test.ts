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

import Setup from '../Setup.js';
import test from '@typescriptlibs/tst';

/* *
 *
 *  Tests
 *
 * */

test( 'Test API.getNotifications', async ( assert: test.Assert ) => {
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

} );

test( 'Test API.postDismissAllNotifications', async ( assert: test.Assert ) => {
    const { json: body } = await Setup.v1Post.postDismissAllNotifications();

    assert.deepEqual(
        body,
        {},
        'Dismiss of all notifications should not fail.'
    );

} );

test( 'Test API.postDismissNotification', async ( assert: test.Assert ) => {
    const { json: body } = await Setup.v1Post.postDismissNotification( 'ID-11' );

    assert.deepEqual(
        body,
        {},
        'Response should contain a {} body.'
    );

} );
