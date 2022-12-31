import * as Mastodon from 'tsl-mastodon-api';
import test from '@typescriptlibs/tst';

const REST = new Mastodon.REST( {
    access_token: '0',
    api_url: 'http://127.0.0.1:8000/'
} );

test( 'Test REST.get fallback', async ( assert: test.Assert ) => {

    assert.deepStrictEqual(
        ( await REST.get( 'files/does-not-exist' ) ).json,
        {
            text: (
                '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"\n' +
                '        "http://www.w3.org/TR/html4/strict.dtd">\n' +
                '<html>\n' +
                '    <head>\n' +
                '        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">\n' +
                '        <title>Error response</title>\n' +
                '    </head>\n' +
                '    <body>\n' +
                '        <h1>Error response</h1>\n' +
                '        <p>Error code: 404</p>\n' +
                '        <p>Message: File not found.</p>\n' +
                '        <p>Error code explanation: HTTPStatus.NOT_FOUND - Nothing matches the given URI.</p>\n' +
                '    </body>\n' +
                '</html>\n'
            )
        },
        'REST should fall back to text JSON.'
    );

} );
