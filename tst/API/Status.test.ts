/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.org/LICENSE.txt

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

test( 'Test API.postNewStatus', async ( assert: test.Assert ) => {
    try {
        const { json: status } = await Setup.v1Post.postStatus( {
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

test( 'Test API.getStatus', async ( assert: test.Assert ) => {
    try {
        const { json: status } = await Setup.v1Get.getStatus( 'ID-7' );
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

// test( 'Test API.getStatuses', async ( assert: test.Assert ) => {
//     try {
//         const { json: account } = await Setup.v1Get.getAccount();
//         assert.strictEqual(
//             account.id,
//             'ID-1',
//             'Account ID should contain mockup value.'
//         );
//         const { json: statuses } = await Setup.v1GetMultiple.getStatuses( account.id );
//         assert.notStrictEqual(
//             statuses.length,
//             0,
//             'Statuses should be returned.'
//         );
//         assert.strictEqual(
//             statuses[0].id,
//             'ID-7',
//             'Status ID should contain mockup value.'
//         );
//     }
//     catch ( result: any ) {
//         console.debug( result );
//         assert.ok(
//             false,
//             'Request should not fail.'
//         );
//     }
// } );

test( 'Test API.deleteStatus', async ( assert: test.Assert ) => {
    try {
        const { json: status } = await Setup.v1Delete.deleteStatus( 'ID-7' );
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
