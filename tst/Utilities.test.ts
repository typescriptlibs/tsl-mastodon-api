import test from '@typescriptlibs/tst';
import * as Mastodon from 'tsl-mastodon-api';

const baseURL = 'https://domain.example';

const basePath = '/foo';

const blob = new Mastodon.Bridge.Blob( [
    JSON.stringify( { hello: "world" } )
] ) as Blob;

const paramArray: Mastodon.REST.ParamArray = [
    ['types[]', 'mention'],
    ['types[]', 'follow'],
    ['types[]', 'reblog'],
    ['some_string', '123'],
    ['some_number', 234],
    ['some_object', { 'a': '1', 'b': 2 }],
    ['some_array', ['x', 'y', 'z']]
];

const paramSet: Mastodon.REST.ParamRecord = {
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


test( 'Test Utilities.buildHeaders - Record', ( assert: test.Assert ) => {

    let result = Mastodon.Utilities.buildHeaders( undefined );
    assert.deepEqual( result, {} );

    result = Mastodon.Utilities.buildHeaders( paramSet );
    assert.deepEqual( result, {
        'types[]': 'mention',
        'some_string': '123',
        'some_number': '234',
        'some_object': '{"a":"1","b":2}',
        'some_array': '["x","y","z"]'
    } );

    const target = {
        'some_string': 'foo',
        'other': 'bar'
    };
    result = Mastodon.Utilities.buildHeaders( paramSet, target );
    assert.deepEqual( result, {
        'other': 'bar',
        'types[]': 'mention',
        'some_string': '123',
        'some_number': '234',
        'some_object': '{"a":"1","b":2}',
        'some_array': '["x","y","z"]',
    } );
} );

test( 'Test Utilities.buildKeyValues - Array', ( assert: test.Assert ) => {

    const outputs: [string, string | Blob][] = [];
    const callback = ( key: string, val: string | Blob ) => {
        outputs.push( [key, val] );
    };

    Mastodon.Utilities.buildKeyValues( paramArray, callback );

    assert.deepEqual( outputs, [
        ['types[]', 'mention'],
        ['types[]', 'follow'],
        ['types[]', 'reblog'],
        ['some_string', '123'],
        ['some_number', '234'],
        ['some_object', '{"a":"1","b":2}'],
        ['some_array', '["x","y","z"]']
    ] );
} );

test( 'Test Utilities.buildKeyValues - Record', ( assert: test.Assert ) => {

    const outputs: [string, string | Blob][] = [];
    const callback = ( key: string, val: string | Blob ) => {
        outputs.push( [key, val] );
    };

    Mastodon.Utilities.buildKeyValues( {
        ...paramSet,
        'some_blob': blob
    }, callback );

    assert.deepEqual( outputs, [
        ['types[]', 'mention'],
        ['some_string', '123'],
        ['some_number', '234'],
        ['some_object', '{"a":"1","b":2}'],
        ['some_array', '["x","y","z"]'],
        ['some_blob', blob]
    ] );
} );

test( 'Test Utilities.buildURL - ParamList', ( assert: test.Assert ) => {

    const url = Mastodon.Utilities.buildURL( baseURL, basePath, paramArray );
    const usp = url.searchParams;

    const types = usp.getAll( 'types[]' );
    assert.deepEqual( types, ['mention', 'follow', 'reblog'] );
    assert.equal( usp.get( 'some_string' ), '123' );
    assert.equal( usp.get( 'some_number' ), '234' );
    assert.equal( usp.get( 'some_object' ), '{"a":"1","b":2}' );
    assert.equal( usp.get( 'some_array' ), '["x","y","z"]' );

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

    const url = Mastodon.Utilities.buildURL( baseURL, basePath, paramSet );
    const usp = url.searchParams;

    assert.equal( usp.get( 'types[]' ), 'mention' );
    assert.equal( usp.get( 'some_string' ), '123' );
    assert.equal( usp.get( 'some_number' ), '234' );
    assert.equal( usp.get( 'some_object' ), '{"a":"1","b":2}' );
    assert.equal( usp.get( 'some_array' ), '["x","y","z"]' );
    assert.equal( url.href, 'https://domain.example/foo?' +
        'types%5B%5D=mention&' +
        'some_string=123&' +
        'some_number=234&' +
        'some_object=%7B%22a%22%3A%221%22%2C%22b%22%3A2%7D&' +
        'some_array=%5B%22x%22%2C%22y%22%2C%22z%22%5D' );
} );

test( 'Test Utilities.buildURLSearchParams - ParamList', ( assert: test.Assert ) => {

    const usp = Mastodon.Utilities.buildURLSearchParams( paramArray );

    const types = usp.getAll( 'types[]' );
    assert.deepEqual( types, ['mention', 'follow', 'reblog'] );
    assert.equal( usp.get( 'some_string' ), '123' );
    assert.equal( usp.get( 'some_number' ), '234' );
    assert.equal( usp.get( 'some_object' ), '{"a":"1","b":2}' );
    assert.equal( usp.get( 'some_array' ), '["x","y","z"]' );
} );

test( 'Test Utilities.buildURLSearchParams - ParamSet', ( assert: test.Assert ) => {

    const usp = Mastodon.Utilities.buildURLSearchParams( paramSet );

    assert.equal( usp.get( 'types[]' ), 'mention' );
    assert.equal( usp.get( 'some_string' ), '123' );
    assert.equal( usp.get( 'some_number' ), '234' );
    assert.equal( usp.get( 'some_object' ), '{"a":"1","b":2}' );
    assert.equal( usp.get( 'some_array' ), '["x","y","z"]' );
} );

test( 'Test Utilities.buildValue', ( assert: test.Assert ) => {

    const buildValue = Mastodon.Utilities.buildValue;

    assert.equal( buildValue( null ), null );
    assert.equal( buildValue( undefined ), null );
    assert.equal( buildValue( 'hello' ), 'hello' );
    assert.equal( buildValue( { 'a': 1, 'b': '2' } ), '{"a":1,"b":"2"}' );
    assert.equal( buildValue( ['x', 'y'] ), '["x","y"]' );
    assert.equal( buildValue( blob ), blob );
} );


