import * as Mastodon from 'tsl-mastodon-api';
import test from '@typescriptlibs/tst';

const REST = new Mastodon.REST( {
    access_token: '0',
    api_url: 'http://127.0.0.1:8000/'
} );

test( 'Test REST.get HTON fallback', async ( assert: test.Assert ) => {

    assert.deepStrictEqual(
        ( await REST.get( 'files/404.html' ) ).json,
        [
            ["html", { "lang": "en" }, [
                ["head", {}, [
                    ["meta", {
                        "content": "text/html; charset=UTF-8",
                        "http-equiv": "Content-Type"
                    }, []
                    ],
                    ["meta", { "charset": "utf-8" }, []],
                    ["title", {}, [
                        "The page you are looking for isn't here.\n     - Mastodon"
                    ]],
                    ["meta", {
                        "content": "width=device-width,initial-scale=1",
                        "name": "viewport"
                    }, []]
                ]
                ],
                ["body", { "class": "error" }, [
                    ["div", { "class": "dialog" }, [
                        ["div", { "class": "dialog__illustration" }, [
                            ["img", {
                                "alt": "Mastodon",
                                "src": "/oops.png"
                            }, []]
                        ]],
                        ["div", { "class": "dialog__message" }, [
                            ["h1", {}, [
                                "The page you are looking for isn't here."
                            ]]
                        ]]
                    ]]
                ]]
            ]]
        ],
        'REST should fallback to expected HTON structure.'
    );

} );
