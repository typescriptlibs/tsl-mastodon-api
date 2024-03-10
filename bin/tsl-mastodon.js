#!/usr/bin/env node
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


import * as FS from 'node:fs/promises';

import * as Mastodon from '../lib/index.js';


/* *
 *
 *  Constants
 *
 * */


const HELP = [
    'tsl-mastodon [COMMAND] [OPTIONS]',
    '',
    'COMMANDS:',
    '  post  - Post a status in the timeline.',
    '',
    'OPTIONS:',
    '  --api        [str]  API address of the Mastodon server.',
    '  --api2       [str]  API v2 address of the Mastodon server.',
    '  --help -h           Show this help.',
    '  --media      [str]  Media path.',
    '  --text       [str]  Text string.',
    '  --token      [hex]  API token.',
    '  --version -v        Show the version of tsl-mastodon.',
    '  --visibility [str]  Post visibility.'
].join( '\n' );


/* *
 *
 *  Functions
 *
 * */


/**
 * @param {string} [commandKey]
 * @return {Record<string,(boolean|string|Array<string>)>}
 */
function argv (
    commandKey = ''
) {
    const argv = {};

    let lastKey = commandKey;
    let lastValue;

    for ( const arg of process.argv.slice( process.argv0 === 'node' ? 2 : 0 ) ) {

        if ( arg[0] === '-' ) {

            lastKey = arg.replace( /^-+/gu, '' );
            lastValue = argv[lastKey];

            if ( lastValue instanceof Array ) {
                lastValue.push( true );
            }
            else if ( typeof lastValue !== 'undefined' ) {
                argv[lastKey] = [lastValue, true];
            }
            else {
                argv[lastKey] = true;
            }

        }
        else {

            lastValue = argv[lastKey];

            if ( lastValue instanceof Array ) {
                if ( typeof lastValue[lastValue.length - 1] === 'boolean' ) {
                    lastValue[lastValue.length - 1] = arg;
                }
                else {
                    lastValue.push( arg );
                }
            }
            else if ( typeof lastValue === 'string' ) {
                argv[lastKey] = [lastValue, arg];
            }
            else {
                argv[lastKey] = arg;
            }

        }

    }

    return argv;
}


/**
 * @param {object} obj
 * @return {string}
 */
function json (
    obj
) {
    return JSON.stringify( obj, null, '  ' );
}


/**
 * @param {Record<string,(boolean|string|Array<string>)>} args
 * @param {Mastodon.API} api
 * @param {Mastodon.API} api2
 * @return {Promise<void>}
 */
async function post (
    args,
    api,
    api2
) {
    /** @type {Mastodon.JSON.StatusPost} */
    let status;

    if ( args.media ) {
        const mediums = (
            args.media instanceof Array ?
                args.media :
                [args.media]
        );
        /** @type {Mastodon.JSON.MediaStatusPost} */
        const post = {
            media_ids: []
        };

        for ( const media of mediums ) {
            const file = await Mastodon.Utilities.fileFrom( '' + media );

            console.log( file.name, file.size + ' bytes' );

            const result = await api2.postMediaAttachment( {
                file
            }, true );

            post.media_ids.push( result.json.id );
        }

        if ( args.text ) {
            post.status = '' + args.text;
        }

        status = post;
    }
    else {
        /** @type {Mastodon.JSON.TextStatusPost} */
        const post = {
            status: '' + args.text
        };

        status = post;
    }

    if ( args.visibility ) {
        status.visibility = '' + args.visibility;
    }

    console.log( 'REQUEST:', json( status ) );
    console.log( 'RESPONSE:', json( await api.postStatus( status ) ) );

}


async function main () {
    const args = argv( 'command' );

    if ( args.h || args.help ) {
        console.log( HELP );
        return;
    }

    if ( args.v || args.version ) {
        console.log(
            JSON.parse(
                await FS.readFile(
                    new URL( '../package.json', import.meta.url )
                        .href.substring( 7 )
                )
            ).version
        );
        return;
    }

    console.log( 'INPUT:', json( args ) );

    const api = new Mastodon.API( {
        access_token: '' + args.token,
        api_url: '' + ( args.api || args.api2 )
    } );
    const api2 = new Mastodon.API( {
        access_token: '' + args.token,
        api_url: '' + ( args.api2 || args.api )
    } );

    switch ( args.command ) {
        case 'post':
            try {
                post( args, api, api2 );
            }
            catch ( error ) {
                console.error( 'ERROR:', json( error ) );
                process.exit( 1 );
            }

            break;
        default:
            console.error( 'Unknown command' );
            break;
    }

}


/* *
 *
 *  CLI
 *
 * */


main();
