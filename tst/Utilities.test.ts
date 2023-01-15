import test from '@typescriptlibs/tst';
import * as Mastodon from 'tsl-mastodon-api';

const baseURL = 'https://domain.example';

const basePath = '/foo';

const blob = new Mastodon.Bridge.Blob( [
    JSON.stringify( { hello: "world" } )
] );

const paramArray: Mastodon.REST.ParamArray = [
    ['types[]', 'mention'],
    ['types[]', 'follow'],
    ['types[]', 'reblog'],
    ['some_string', '123'],
    ['some_number', 234],
    ['some_object', { 'a': '1', 'b': 2 }],
    ['some_array', ['x', 'y', 'z']]
];

const paramRecord: Mastodon.REST.ParamRecord = {
    'types[]': 'mention',
    'drop1': null,
    'drop2': undefined,
    'some_string': '123',
    'some_number': 234,
    'some_object': { 'a': '1', 'b': 2 },
    'some_array': ['x', 'y', 'z']
};

test( 'Test Utilities.buildFormData - Array', ( assert: test.Assert ) => {

    let result = Mastodon.Utilities.buildFormData( undefined );
    assert.deepEqual( result, new Mastodon.Bridge.FormData() );

    result = Mastodon.Utilities.buildFormData( paramArray );
    let entries = [...result.entries()];
    assert.deepEqual( entries, [
        ['types[]', 'mention'],
        ['types[]', 'follow'],
        ['types[]', 'reblog'],
        ['some_string', '123'],
        ['some_number', '234'],
        ['some_object', '{"a":"1","b":2}'],
        ['some_array', '["x","y","z"]']
    ] );

    const target = new Mastodon.Bridge.FormData();
    target.append( 'some_string', 'xyz' );
    target.append( 'some_number', '000' );
    target.append( 'other', 'hello' );
    result = Mastodon.Utilities.buildFormData( paramArray, target );
    entries = [...result.entries()];
    assert.deepEqual( entries, [
        ['some_string', 'xyz'],
        ['some_number', '000'],
        ['other', 'hello'],
        ['types[]', 'mention'],
        ['types[]', 'follow'],
        ['types[]', 'reblog'],
        ['some_string', '123'],
        ['some_number', '234'],
        ['some_object', '{"a":"1","b":2}'],
        ['some_array', '["x","y","z"]']
    ] );
} );

test( 'Test Utilities.buildHeaders - Array', ( assert: test.Assert ) => {

    const params = paramArray.filter(
        // skip invalid key of paramRecord
        ( pair ) => !pair[0].endsWith( '[]' )
    );

    let result = Mastodon.Utilities.buildHeaders( params );
    assert.deepEqual( Array.from( result ), [
        ['some_array', '["x","y","z"]'],
        ['some_number', '234'],
        ['some_object', '{"a":"1","b":2}'],
        ['some_string', '123']
    ] );
} );

test( 'Test Utilities.buildHeaders - Record', ( assert: test.Assert ) => {

    const params = {
        ...paramRecord,
        'types[]': undefined // skip invalid key of paramRecord
    };

    let result = Mastodon.Utilities.buildHeaders( undefined );
    assert.deepEqual( Array.from( result ), [] );

    const headers = new Mastodon.Bridge.Headers( [
        ['some_string', 'foo'],
        ['other', 'bar']
    ] );
    result = Mastodon.Utilities.buildHeaders( params, headers );
    assert.deepEqual( Array.from( result ), [
        ['other', 'bar'],
        ['some_array', '["x","y","z"]'],
        ['some_number', '234'],
        ['some_object', '{"a":"1","b":2}'],
        ['some_string', 'foo, 123']
    ] );
} );

test( 'Test Utilities.buildURL - ParamList', ( assert: test.Assert ) => {

    const url = Mastodon.Utilities.buildURL( baseURL, basePath, paramArray );
    const urlSearchParams = url.searchParams;

    const types = urlSearchParams.getAll( 'types[]' );
    assert.deepEqual( types, ['mention', 'follow', 'reblog'] );
    assert.equal( urlSearchParams.get( 'some_string' ), '123' );
    assert.equal( urlSearchParams.get( 'some_number' ), '234' );
    assert.equal( urlSearchParams.get( 'some_object' ), '{"a":"1","b":2}' );
    assert.equal( urlSearchParams.get( 'some_array' ), '["x","y","z"]' );

    assert.equal( url.href, 'https://domain.example/foo?' +
        'types%5B%5D=mention&' +
        'types%5B%5D=follow&' +
        'types%5B%5D=reblog&' +
        'some_string=123&' +
        'some_number=234&' +
        'some_object=%7B%22a%22%3A%221%22%2C%22b%22%3A2%7D&' +
        'some_array=%5B%22x%22%2C%22y%22%2C%22z%22%5D' );
} );

test( 'Test Utilities.buildURL - ParamSet', ( assert: test.Assert ) => {

    const url = Mastodon.Utilities.buildURL( baseURL, basePath, paramRecord );
    const urlSearchParams = url.searchParams;

    assert.equal( urlSearchParams.get( 'types[]' ), 'mention' );
    assert.equal( urlSearchParams.get( 'some_string' ), '123' );
    assert.equal( urlSearchParams.get( 'some_number' ), '234' );
    assert.equal( urlSearchParams.get( 'some_object' ), '{"a":"1","b":2}' );
    assert.equal( urlSearchParams.get( 'some_array' ), '["x","y","z"]' );
    assert.equal( url.href, 'https://domain.example/foo?' +
        'types%5B%5D=mention&' +
        'some_string=123&' +
        'some_number=234&' +
        'some_object=%7B%22a%22%3A%221%22%2C%22b%22%3A2%7D&' +
        'some_array=%5B%22x%22%2C%22y%22%2C%22z%22%5D' );
} );

test( 'Test Utilities.buildURLSearchParams - ParamList', ( assert: test.Assert ) => {

    const urlSearchParams = Mastodon.Utilities.buildURLSearchParams( paramArray );

    const types = urlSearchParams.getAll( 'types[]' );
    assert.deepEqual( types, ['mention', 'follow', 'reblog'] );
    assert.equal( urlSearchParams.get( 'some_string' ), '123' );
    assert.equal( urlSearchParams.get( 'some_number' ), '234' );
    assert.equal( urlSearchParams.get( 'some_object' ), '{"a":"1","b":2}' );
    assert.equal( urlSearchParams.get( 'some_array' ), '["x","y","z"]' );
} );

test( 'Test Utilities.buildURLSearchParams - ParamSet', ( assert: test.Assert ) => {

    const urlSearchParams = Mastodon.Utilities.buildURLSearchParams( paramRecord );

    assert.equal( urlSearchParams.get( 'types[]' ), 'mention' );
    assert.equal( urlSearchParams.get( 'some_string' ), '123' );
    assert.equal( urlSearchParams.get( 'some_number' ), '234' );
    assert.equal( urlSearchParams.get( 'some_object' ), '{"a":"1","b":2}' );
    assert.equal( urlSearchParams.get( 'some_array' ), '["x","y","z"]' );
} );

test( 'Test Utilities.transferParams', ( assert: test.Assert ) => {

    const target = new Mastodon.Bridge.FormData();

    Mastodon.Utilities.transferParams(
        {
            'null': null,
            'undefined': undefined,
            'hello': 'hello',
            'ab': { 'a': 1, 'b': '2' },
            'xy': ['x', 'y'],
            'blob': blob
        },
        target
    );

    assert.equal( target.get( 'null' ), null );
    assert.equal( target.get( 'undefined' ), null );
    assert.equal( target.get( 'hello' ), 'hello' );
    assert.equal( target.get( 'ab' ), '{"a":1,"b":"2"}' );
    assert.equal( target.get( 'xy' ), '["x","y"]' );
    assert.ok(
        // return type differs between Node.js v16 (File) and v18 (Blob)
        target.get( 'blob' ) instanceof Mastodon.Bridge.Blob
    );

} );
