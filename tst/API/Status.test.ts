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

test( 'Test API.getStatusContext', async ( assert: test.Assert ) => {
    try {
        const { json: statusContext } = await Setup.v1GetMultiple.getStatusContext( 'ID-12' );
        assert.strictEqual(
            statusContext.ancestors[0].id,
            'ID-7',
            'Status ID should contain mockup value.'
        );
        assert.strictEqual(
            statusContext.descendants[0].id,
            'ID-13',
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

test( 'Test API.getStatuses', async ( assert: test.Assert ) => {
    try {
        const { json: statuses } = await Setup.v1GetMultiple.getStatuses( 'ID-1' );
        assert.notStrictEqual(
            statuses.length,
            0,
            'Statuses should be returned.'
        );
        assert.strictEqual(
            statuses[0].id,
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

test( 'Test API.getStatusesOfHome', async ( assert: test.Assert ) => {
    try {
        const { json: statuses } = await Setup.v1GetMultiple.getStatusesOfHome();
        assert.notStrictEqual(
            statuses.length,
            0,
            'Statuses should be returned.'
        );
        assert.strictEqual(
            statuses[0].id,
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

test( 'Test API.getStatusesOfList', async ( assert: test.Assert ) => {
    try {
        const { json: statuses } = await Setup.v1GetMultiple.getStatusesOfList( 'ID-9' );
        assert.notStrictEqual(
            statuses.length,
            0,
            'Statuses should be returned.'
        );
        assert.strictEqual(
            statuses[0].id,
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

test( 'Test API.getStatusesOfPublic', async ( assert: test.Assert ) => {
    try {
        const { json: statuses } = await Setup.v1GetMultiple.getStatusesOfPublic();
        assert.notStrictEqual(
            statuses.length,
            0,
            'Statuses should be returned.'
        );
        assert.strictEqual(
            statuses[0].id,
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

test( 'Test API.getStatusesOfTag', async ( assert: test.Assert ) => {
    try {
        const { json: statuses } = await Setup.v1GetMultiple.getStatusesOfTag( 'world' );
        assert.notStrictEqual(
            statuses.length,
            0,
            'Statuses should be returned.'
        );
        assert.strictEqual(
            statuses[0].id,
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
