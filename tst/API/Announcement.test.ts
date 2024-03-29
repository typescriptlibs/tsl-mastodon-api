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

test( 'Test API.getAnnouncements', async ( assert: test.Assert ) => {
    const { json: announcements } = await Setup.v1GetMultiple.getAnnouncements();

    assert.ok(
        Setup.Mastodon.JSON.isAnnouncements( announcements ),
        'Array of Announcement should be returned.'
    );

    assert.strictEqual(
        announcements[0].id,
        'ID-14',
        'Announcement ID should contain mockup value.'
    );

} );

test( 'Test API.postDismissAnnouncement', async ( assert: test.Assert ) => {
    const { json } = await Setup.v1Post.postDismissAnnouncement( 'ID-14' );

    assert.deepStrictEqual(
        json,
        {},
        'Dismiss of announcement should not fail.'
    );

} );

test( 'Test API.putAnnouncementReaction', async ( assert: test.Assert ) => {
    const { json } = await Setup.v1Put.putAnnouncementReaction( 'ID-14', '🐘' );

    assert.deepStrictEqual(
        json,
        {},
        'Reaction to announcement should not fail.'
    );

} );

test( 'Test API.deleteAnnouncementReaction', async ( assert: test.Assert ) => {
    const { json } = await Setup.v1Delete.deleteAnnouncementReaction( 'ID-14', '🐘' );

    assert.strictEqual(
        Object.keys( json ).length,
        0,
        'Delete of announcement reaction should not fail.'
    );

} );
