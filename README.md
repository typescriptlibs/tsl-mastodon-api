TypeScript Library for the Mastodon API
=======================================

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
        api_url: 'https://mastodon.example/api/v1/',
        auto_delay: true
    });
    // expect client / server errors
    try {
        const { json: post } = await mastodon.postNewStatus({
            sensitive: true,
            spoiler_text: 'Hello',
            status: 'World'
        });
        console.log(JSON.stringify(post));
    }
    catch (error) {
        console.error(error);
    }
}
postHelloWorld();
```



API Overview
------------

The following snippets show an excerpt of the v0.0.6 API.

```ts
API(config)
API.rest.delete(path, params?)
API.rest.fetch(method, path, params?)
API.rest.get(path, params?)
API.rest.patch(path, params?)
API.rest.post(path, params?)
API.rest.put(path, params?)
API.delay()
API.getAccount()
API.getMediaAttachment(id)
API.getStatuses(limit?)
API.postNewMediaAttachment(newMediaAttachment)
API.postNewPollVote(pollId, newPollVote)
API.postNewStatus(newStatus)
API.search(search)
```

```ts
JSON.isAccount(json)
JSON.isMediaAttachment(json)
JSON.isPoll(json)
JSON.isSearchResults(json)
JSON.isStatus(json)
```



Links
-----

* [github.com/typescriptlibs/tsl-mastodon-api](https://github.com/typescriptlibs/tsl-mastodon-api/releases)

* [npmjs.com/package/tsl-mastodon-api](https://www.npmjs.com/package/tsl-mastodon-api)

* [typescriptlibs.org](https://typescriptlibs.org/)
