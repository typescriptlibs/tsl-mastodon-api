import * as Mastodon from 'tsl-mastodon-api';
import test from '@typescriptlibs/tst';

const API = new Mastodon.API({
    access_token: '0', // test server does not validate
    api_url: 'http://localhost:8000/v1/'
});

test('Test API.getAccount', async (assert: test.Assert) => {
    try {
        const account = await API.getAccount();
        assert.strictEqual(
            account.id,
            'ID-1',
            'Account ID should contain mockup value.'
        );
    }
    catch (result: any) {
        assert.ok(
            false,
            'Request should not fail.'
        );
    }
});

test('Test API.getMediaAttachment', async (assert: test.Assert) => {
    try {
        const mediaAttachment = await API.getMediaAttachment('ID-2');
        assert.strictEqual(
            mediaAttachment.id,
            'ID-2',
            'Media ID should contain mockup value.'
        );
    }
    catch (result: any) {
        assert.ok(
            false,
            'Request should not fail.'
        );
    }
});
