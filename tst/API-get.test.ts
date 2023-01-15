import * as Mastodon from 'tsl-mastodon-api';
import test from '@typescriptlibs/tst';

const API = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-get/'
} );
const APIM = new Mastodon.API( {
    access_token: '0', // test server does not validate
    api_url: 'http://127.0.0.1:8000/v1-get-multiple/'
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

test( 'Test API.getList', async ( assert: test.Assert ) => {
    try {
        const { json: list } = await API.getList( 'ID-8' );
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

test( 'Test API.getListAccounts', async ( assert: test.Assert ) => {
    try {
        const { json: listAccounts } = await API.getListAccounts( 'ID-9' );
        assert.strictEqual(
            listAccounts.length,
            1,
            'List Accounts should contain mockup object.'
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

test( 'Test API.getNotifications', async ( assert: test.Assert ) => {
    try {
        const { json: notifications } = await APIM.getNotifications();
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


test( 'Test API.getStatus', async ( assert: test.Assert ) => {
    try {
        const { json: status } = await API.getStatus( 'ID-7' );
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
