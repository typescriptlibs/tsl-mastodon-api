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

test( '', async ( assert: test.Assert ) => {
    const validation = Setup.Mastodon.JSON.isMediaAttachment( {
        id: '111059411755644935',
        type: 'image',
        url: 'https://domain.example/picture.jpeg',
        preview_url: 'https://domain.example/picture.jpeg',
        remote_url: null,
        preview_remote_url: null,
        text_url: null,
        meta: {
            original: {
                width: 1,
                height: 1,
                size: "1x1",
                aspect: 1
            },
            small: {
                width: 1,
                height: 1,
                size: "1x1",
                aspect: 1
            }
        },
        description: null,
        blurhash: 'UTRo:D$~?]IXiuoLo~j[_MIqD+%Kbxogs+Rj'
    } );

    assert.ok(
        validation,
        'Picture upload response response should be valid. (#30)'
    );

} );
