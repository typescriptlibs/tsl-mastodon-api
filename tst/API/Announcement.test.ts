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

    assert.strictEqual(
        Object.keys( json ).length,
        0,
        'Dismiss of announcement should not fail.'
    );

} );
