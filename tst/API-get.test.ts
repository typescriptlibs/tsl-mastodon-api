import * as Mastodon from 'tsl-mastodon-api';
import test from '@typescriptlibs/tst';

const API = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-get/'
} );

test( 'Test API.getAccount', async ( assert: test.Assert ) => {
    try {
        const { json: account } = await API.getAccount();
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

test( 'Test API.getMediaAttachment', async ( assert: test.Assert ) => {
    try {
        const { json: mediaAttachment } = await API.getMediaAttachment( 'ID-2' );
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
