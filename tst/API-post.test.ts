import * as Mastodon from 'tsl-mastodon-api';
import Utilities from './Utilities.js';
import test from '@typescriptlibs/tst';

const API = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-post/'
} );

Utilities.forceGetFetch( API );

test( 'Test API.postNewList', async ( assert: test.Assert ) => {
    try {
        const { json: list } = await API.postList( {
            "title": "test",
        } );
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

test( 'Test API.postNewMediaAttachment', async ( assert: test.Assert ) => {
    try {
        const { json: mediaAttachment } = await API.postMediaAttachment( {
            file: await Mastodon.Utilities.fileFrom( './tst-data/files/1x1.png' )
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

test( 'Test API.postNewPollVote', async ( assert: test.Assert ) => {
    try {
        const { json: pollVote } = await API.postPollVote( 'ID-5', {
            choices: [0, 2, 4, 9, 6]
        } );
        assert.strictEqual(
            pollVote.id,
            'ID-6',
            'PollVote ID should contain mockup value.'
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

test( 'Test API.postNewStatus', async ( assert: test.Assert ) => {
    try {
        const { json: status } = await API.postStatus( {
            scheduled_at: new Date( 2037, 11, 31, 20, 37, 12 ),
            status: 'test content'
        } );
        assert.strictEqual(
            status.id,
            'ID-4',
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
