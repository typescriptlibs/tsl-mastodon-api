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


test( 'Test API.getMediaAttachment', async ( assert: test.Assert ) => {
    try {
        const { json: mediaAttachment } = await Setup.v1Get.getMediaAttachment( 'ID-2' );
        assert.strictEqual(
            mediaAttachment.id,
            'ID-2',
            'Media ID should contain mockup value.'
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


test( 'Test API.postMediaAttachment', async ( assert: test.Assert ) => {
    try {
        const { json: mediaAttachment } = await Setup.v1Post.postMediaAttachment( {
            file: await Setup.fileFrom( './tst-data/files/1x1.png' )
        } );
        assert.strictEqual(
            mediaAttachment.id,
            'ID-3',
            'Media Attachment ID should contain mockup value.'
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


test( 'Test API.putMediaAttachmentUpdate', async ( assert: test.Assert ) => {
    try {
        const { json: mediaAttachment } = await Setup.v1Put.putMediaAttachmentUpdate(
            'ID-15',
            { description: 'Updated description' }
        );
        assert.strictEqual(
            mediaAttachment.id,
            'ID-15',
            'Media Attachment ID should contain mockup value.'
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
