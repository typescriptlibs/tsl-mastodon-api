TypeScript Library for the Mastodon API
=======================================

[![codeql badge]][codeql] [![nodejs badge]][nodejs] [![version badge]][version] [![license badge]][license]



This is a TypeScript-optimized library to access a Mastodon server.



Installation
------------

```sh
npm install tsl-mastodon-api
```



Access Token
------------

You need an access token for communication with a Mastodon server.

1. Open your Mastodon website and go to the profile settings of the account.

2. In the profile settings open the section 'Development'.

3. Create a new application and use the related access token.

Or you can use the `Mastodon.API.createOAuthApp` function.



Examples
--------

```ts
import * as Mastodon from 'tsl-mastodon-api';
async function postHelloWorld(): Promise<void> {
    // create the API instance
    const mastodon = new Mastodon.API({
        access_token: 'ABC',
        api_url: 'https://mastodon.example/api/v1/'
    });
    // expect client / server errors
    try {
        const result = await mastodon.postStatus({
            sensitive: true,
            spoiler_text: 'Hello',
            status: 'World'
        });
        console.log(JSON.stringify(result));
    }
    catch (error) {
        console.error(error);
    }
}
postHelloWorld();
```



API Overview
------------

The following snippets show an excerpt of the API.

```TypeScript
API(config)
API.delay()
API.search(search)

API.getAccount()
API.getList(listID)
API.getListAccounts(listID, queryParameters?)
API.getLists(queryParameters?)
API.getMediaAttachment(mediaAttachmentID)
API.getNotifications()
API.getStatus(statusID)
API.getStatusContext(statusID)
API.getStatuses(queryParameters?)
API.getStatusesOfHome(queryParameters?)
API.getStatusesOfList(listID, queryParameters?)
API.getStatusesOfPublic(queryParameters?)
API.getStatusesOfTag(tag, queryParameters?)

API.postList(list)
API.postListAccounts(listID, listAccounts)
API.postMediaAttachment(mediaAttachment)
API.postPollVote(pollId, pollVote)
API.postStatus(status)

API.deleteList(listID)
API.deleteListAccounts(listID, listAccounts)
API.deleteStatus(statusID)
```

```TypeScript
JSON.isAccount(json)
JSON.isList(json)
JSON.isMediaAttachment(json)
JSON.isNotification(json)
JSON.isPoll(json)
JSON.isSearchResults(json)
JSON.isStatus(json)
```

```TypeScript
REST.delete(path, params?)
REST.fetch(method, path, params?)
REST.get(path, params?)
REST.patch(path, params?)
REST.post(path, params?)
REST.put(path, params?)
```

```TypeScript
Bridge.fetch(url, options?)
Utilities.fileFrom(path, mimeType?)
```



Links
-----

* [github.com/typescriptlibs/tsl-mastodon-api](https://github.com/typescriptlibs/tsl-mastodon-api/releases)

* [npmjs.com/package/tsl-mastodon-api](https://www.npmjs.com/package/tsl-mastodon-api)

* [typescriptlibs.org](https://typescriptlibs.org/)



<!-- Badges -->

[codeql]:
    <https://github.com/typescriptlibs/tsl-mastodon-api/actions/workflows/codeql.yml>
    "CodeQL"

[codeql badge]:
    <https://github.com/typescriptlibs/tsl-mastodon-api/workflows/CodeQL/badge.svg>
    "CodeQL Status"

[nodejs]:
    <https://github.com/typescriptlibs/tsl-mastodon-api/actions/workflows/node.js.yml>
    "Node.js"

[nodejs badge]:
    <https://github.com/typescriptlibs/tsl-mastodon-api/workflows/Node.js/badge.svg>
    "Node.js Status"

[license]:
    <\/LICENSE.md>
    "Package License"

[license badge]:
    <https://img.shields.io/npm/l/tsl-mastodon-api.svg>
    "Package License Status"

[version]:
    <https://www.npmjs.com/package/tsl-mastodon-api>
    "Package Version"

[version badge]:
    <https://img.shields.io/npm/v/tsl-mastodon-api.svg>
    "Package Version Status"
