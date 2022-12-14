import * as Mastodon from 'tsl-mastodon-api';
import test from '@typescriptlibs/tst';

test( 'Test HTON.parseText', async ( assert: test.Assert ) => {

    assert.deepStrictEqual(
        Mastodon.HTON.parseText( `<!DOCTYPE html><html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body {
                        family: sans-serif
                    }
                </style>
                <title>Testsite</title>
            </head>
            <body>
                <h1 style="margin:0;">Testtitle</h1>
            </body>
        </html>`),
        [
            ['html', {}, [
                ['head', {}, [
                    ['meta', { charset: 'UTF-8' }, []],
                    ['style', {}, [
                        'body {\n' +
                        '                        family: sans-serif\n' +
                        '                    }'
                    ]],
                    ['title', {}, [
                        'Testsite'
                    ]]
                ]],
                ['body', {}, [
                    ['h1', { style: 'margin:0;' }, [
                        'Testtitle'
                    ]]
                ]]
            ]]
        ],
        'HTON structure should follow the expected order.'
    );

} );
