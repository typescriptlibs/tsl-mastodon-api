import * as Mastodon from 'tsl-mastodon-api';
import test from '@typescriptlibs/tst';

const REST = new Mastodon.REST( {
    access_token: '0',
    api_url: 'http://127.0.0.1:8000/'
} );

test( 'Test REST.get fallback', async ( assert: test.Assert ) => {

    assert.deepStrictEqual(
        ( await REST.get( 'files/404.html' ) ).json,
        {
            text: (
                '<!DOCTYPE html>\n' +
                "<html lang='en'>\n" +
                '<head>\n' +
                "    <meta content='text/html; charset=UTF-8' http-equiv='Content-Type'>\n" +
                "    <meta charset='utf-8'>\n" +
                '    <title>The page you are looking for isn&#39;t here.\n' +
                '     - Mastodon</title>\n' +
                "    <meta content='width=device-width,initial-scale=1' name='viewport'>\n" +
                '</head>\n' +
                "<body class='error'>\n" +
                "    <div class='dialog'>\n" +
                "        <div class='dialog__illustration'>\n" +
                "            <img alt='Mastodon' src='/oops.png'>\n" +
                '        </div>\n' +
                "        <div class='dialog__message'>\n" +
                '            <h1>The page you are looking for isn&#39;t here.\n' +
                '            </h1>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</body>\n' +
                '</html>\n' +
                '\n'
            )
        },
        'REST should fall back to text JSON.'
    );

} );
