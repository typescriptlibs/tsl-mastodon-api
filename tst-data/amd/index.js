/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/


'use strict';


/* *
 *
 *  Imports
 *
 * */


const Mastodon = require( 'tsl-mastodon-api' );


/* *
 *
 *  Functions
 *
 * */


/** @return {import('tsl-mastodon-api').API} */
function get_api () {
    const access_token = document.getElementById( 'access_token' ).value.trim();
    const api_url = document.getElementById( 'api_url' ).value.trim();

    sessionStorage.setItem( 'tsl-mastodon-api.access_token', access_token );
    sessionStorage.setItem( 'tsl-mastodon-api.api_url', api_url );

    return new Mastodon.API( {
        access_token,
        api_url
    } );
}


async function on_getAccount () {
    const api = get_api();

    try {
        const result = await api.getAccount();

        console.log( '✅', result );
    }
    catch ( error ) {
        console.log( '❌', error );
    }

}


async function on_postMediaAttachment () {
    const api = get_api();

    try {
        const description = (
            document.getElementById( 'description' ).value ||
            undefined
        );
        const media_ids = document.getElementById( 'media_ids' );

        let result;

        for ( const file of document.getElementById( 'file' ).files ) {
            result = await api.postMediaAttachment( {
                file,
                description
            } );

            media_ids.value += ( media_ids.value ? ',' : '' ) + result.json.id;

            console.log( '✅', result );
        }

        sessionStorage.setItem( 'tsl-mastodon-api.media_ids', media_ids.value );
    }
    catch ( error ) {
        console.log( '❌', error );
    }

}


async function on_postStatus () {
    const api = get_api();

    try {
        const media_ids = document
            .getElementById( 'media_ids' )
            .value.split( ',' )
            .filter( id => !!id );
        const status = document
            .getElementById( 'status' )
            .value.trim();
        const visibility = document
            .getElementById( 'visibility' )
            .selectedOptions[0].value;

        sessionStorage.setItem( 'tsl-mastodon-api.media_ids', media_ids.value );

        const result = await api.postStatus( {
            media_ids,
            status,
            visibility
        } );

        console.log( '✅', result );
    }
    catch ( error ) {
        console.log( '❌', error );
    }

}


function setup_buttons () {
    document
        .getElementById( 'getAccount' )
        .addEventListener( 'click', on_getAccount );
    document
        .getElementById( 'postMediaAttachment' )
        .addEventListener( 'click', on_postMediaAttachment );
    document
        .getElementById( 'postStatus' )
        .addEventListener( 'click', on_postStatus );
}


function setup_console () {
    const clog = console.log;
    const results = document.getElementById( 'results' );

    console.log = function () {
        const args = Array.from( arguments );

        clog( ...args );

        results.innerText = (
            ( new Date() ).toLocaleString() + '\n' +
            args.map( arg => {

                if (
                    arg &&
                    typeof arg === 'object' &&
                    arg.constructor === Object
                ) {
                    return JSON.stringify( arg, null, '  ' );
                }

                return arg;
            } ).join( ' ' ) + '\n\n' +
            results.innerText
        );

    };

}


function setup_countdown () {
    const element = document.getElementById( 'countdown' );

    let counter = parseInt( element.innerText );

    const interval = setInterval(
        () => {
            if ( --counter <= 0 ) {
                window.clearInterval( interval );
            }
            element.innerText = `${counter}`
        },
        999
    );

}


function setup_session () {
    document.getElementById( 'access_token' ).value = (
        sessionStorage.getItem( 'tsl-mastodon-api.access_token' )
    );
    document.getElementById( 'api_url' ).value = (
        sessionStorage.getItem( 'tsl-mastodon-api.api_url' ) ||
        'http://127.0.0.1:8004/v1-post/'
    );
    document.getElementById( 'media_ids' ).value = (
        sessionStorage.getItem( 'tsl-mastodon-api.media_ids' )
    );
}


/* *
 *
 *  Runtime
 *
 * */


addEventListener( 'load', () => {
    setup_console();
    setup_countdown();
    setup_buttons();
    setup_session();
} );
