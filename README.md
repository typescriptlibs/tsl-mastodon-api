TypeScript Library for the Mastodon API
=======================================

TypeScript library to access a Mastodon server from front-end or back-end environments.



[![CodeQL](https://github.com/typescriptlibs/tsl-mastodon-api/workflows/CodeQL/badge.svg)](https://github.com/typescriptlibs/tsl-mastodon-api/actions/workflows/codeql.yml)
[![Node.js](https://github.com/typescriptlibs/tsl-mastodon-api/workflows/Node.js/badge.svg)](https://github.com/typescriptlibs/tsl-mastodon-api/actions/workflows/node.js.yml)
[![npm](https://img.shields.io/npm/v/tsl-mastodon-api.svg)](https://www.npmjs.com/package/tsl-mastodon-api)
[![license](https://img.shields.io/npm/l/tsl-mastodon-api.svg)](https://github.com/typescriptlibs/tsl-mastodon-api/blob/main/LICENSE.md)



Installation
------------

Run the following command for client/server or server-only projects:

```Shell
npm install tsl-mastodon-api
```

Run the following command for client-only projects:

```Shell
npm install tsl-mastodon-api --omit=optional
```


Access Token
------------

You need an access token for communication with a Mastodon server.

1. Open your Mastodon website and go to the profile settings of the account.

2. In the profile settings open the section 'Development'.

3. Create a new application and use the related access token.

Or you can use the `OAuth.createApp` function (import `tsl-mastodon-api/lib/OAuth.js`).



Examples
--------

```TypeScript
import * as Mastodon from 'tsl-mastodon-api';
async function postHelloWorld(): Promise<void> {
    // create the API instance
    const mastodon = new Mastodon.API({
        access_token: 'ABC',
        api_url: 'https://mastodon.example/api/v1/'
    });
    // expect client / server errors
    try {
        const media = await mastodon.postMediaAttachment(
            { file: await Mastodon.Utilities.fileFrom('animation.gif') },
            true
        );
        const result = await mastodon.postStatus({
            media_ids: [media.json.id],
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
API.getAnnouncements(queryParameters?)
API.getListAccounts(listID, queryParameters?)
API.getMediaAttachment(mediaAttachmentID, awaitProcessing)
API.getNotifications()
API.getStatusesOfPublic(queryParameters?)

API.postDismissAnnouncement(announcementID)
API.postDismissNotification(notificationID)
API.postListAccounts(listID, listAccounts)
API.postMediaAttachment(mediaAttachment, awaitProcessing)
API.postPollVote(pollID, pollVote)
API.postStatus(status)

API.putAnnouncementReaction(announcementID, emojiName)
API.putMediaAttachmentUpdate(mediaAttachmentID, mediaAttachmentUpdate)

API.deleteAnnouncementReaction(announcementID, emojiName)
API.deleteListAccounts(listID, listAccounts)
API.deleteNotification(notificationID)
API.deleteStatus(statusID)
```

```TypeScript
JSON.isAccount(json)
JSON.isAnnouncement(json)
JSON.isList(json)
JSON.isMediaAttachment(json)
JSON.isNotification(json)
JSON.isStatus(json)
JSON.isStreamData(json)
```

```TypeScript
REST(config)
REST.delete(path, params?)
REST.fetch(method, path, params?)
REST.get(path, params?)
REST.patch(path, params?)
REST.post(path, params?)
REST.put(path, params?)
```

Optional with import of `tsl-mastodon-api/lib/OAuth.js`:

```TypeScript
OAuth.createApp(apiURL, appName, redirectURI?, scopes?, website?)
OAuth.getAccessToken(baseURL, clientId, clientSecret, authorizationCode, redirectUri?)
OAuth.getAuthorizationUrl(baseURL, clientId, clientSecret, redirectUri?, scope?)
```

Optional with import of `tsl-mastodon-api/lib/StreamAPI.js`:

```TypeScript
StreamAPI(config)
StreamAPI.off(eventType, eventListener)
StreamAPI.on(eventType, eventListener)
StreamAPI.subscribe(streamType, streamParams?, eventListener?)
StreamAPI.unsubscribe(streamType, streamParams?, eventListener?)
```



Links
-----

* [github.com/typescriptlibs/tsl-mastodon-api](https://github.com/typescriptlibs/tsl-mastodon-api/releases)

* [npmjs.com/package/tsl-mastodon-api](https://www.npmjs.com/package/tsl-mastodon-api)

* [typescriptlibs.eu](https://typescriptlibs.eu/)
