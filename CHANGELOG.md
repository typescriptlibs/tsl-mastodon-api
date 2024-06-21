Changelog
=========



v0.5.1
------

* Updated dependencies by @sophiebremer in https://github.com/typescriptlibs/tsl-mastodon-api/pull/39
  - Updates TypeScriptLibs/AMD dependency to v1.3.1
  - Updates TypeScript dependency to v5.5.2
  - Updates optional WS dependency to v8.17.1 (see CVE-2024-37890)

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.5.0...v0.5.1



v0.5.0
------

* AMD bundle for front-end by @sophiebremer in https://github.com/typescriptlibs/tsl-mastodon-api/pull/29
  - Add AMD bundle for front-end implementations
  - Add test suite for front-end implementations to the GitHub repository
  - Improve API errors; use `API.Result.error` instead of `API.Result.failed`
  - Improve Bridge

* Support async media upload by @sophiebremer in https://github.com/typescriptlibs/tsl-mastodon-api/pull/37
  - Add optional processing await for Mastodon API v2
  - Add optional `forcedDelay` parameter for minimum `API.delay`
  - Fix video attachment validation

* Support media update by @sophiebremer in https://github.com/typescriptlibs/tsl-mastodon-api/pull/38
  - Add `API.putMediaAttachmentUpdate`
  - Update `JSON.MediaAttachment`; `url` parameter can become `null`

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.4.2...v0.5.0



v0.4.2
------

* Fix form data with overloaded key
* Fix issue to add media attachment

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.4.1...v0.4.2



v0.4.1
------

* NotificationParams
* Remove focus meta as requirement for image media

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.4.0...v0.4.1



v0.4.0
------

* Added `API.delete`
* Added `API.deleteAnnouncementReaction`
* Added `API.get`
* Added `API.getAnnouncements`
* Added `API.post`
* Added `API.postDismissAllNotifications`
* Added `API.postDismissAnnouncement`
* Added `API.put`
* Added `API.putAnnouncementReaction`
* Added `API.version` and `API.Config.api_version`
* Added `Bridge.WebSocket`
* Added `JSON` doc comments
* Added `JSON.Announcement`
* Added `JSON.isEmojis`
* Added `JSON.Reaction`
* Added `JSON.StreamData`
* Added `StreamAPI`
* Added `ws` package as optional dependency for server-side WebSocket
* Added `node-fetch` package as optional dependency for server-side fetch (< Node.js v18)
* Added `oauth` package as optional dependency for server-side OAuth
* Renamed `API.deleteNotification` to `API.postDismissNotification`
* Fixed #25, dismiss notification should be API.post

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.3.0...v0.4.0



v0.3.0
------

* Added `API.deleteNotification` (@mindlapse)
* Added `API.getStatusContext` (@sophiebremer)
* Added `API.getStatusesOf...` timeline functions (@sophiebremer)
* Added `JSON.isStatusContext` (@sophiebremer)
* Added `JSON.isTags` (@sophiebremer)
* Improved `JSON.isStatus` to validate tags (@sophiebremer)
* Improved `REST.fetch` to not post empty form data (@mindlapse)
* Improved array validations (@sophiebremer)
* Fixed `JSON.isTag` expecting mandatory history property (@sophiebremer)

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.2.0...v0.3.0



v0.2.0
------

* Added bridge to browsers and Node.js (@sophiebremer)
* Added notifications support (@mindlapse)
* Added support for duplicated params keys (@mindlapse)
* Improved FormData handling (@sophiebremer)
* Removed HTON in favour of bridge system (@sophiebremer)

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.1.0...v0.2.0



v0.1.0
------

* Added support of lists
* Added support of scheduled status
* Added support of HTON (Hyper-Text Object Notification)
* Improved API
* Improved JSON
* Improved support of statuses
* Simplified OAuth functions
* Simplified Tooling

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.0.6...v0.1.0



v0.0.6
------

* Add API.getMediaAttachment
* Add API.postNewMediaAttachment
* Add API.postNewPollVote
* Add JSON.AudioMediaAttachment type
* Add JSON.GIFVMediaAttachment type
* Add JSON.NewMediaAttachment type
* Add JSON.NewPollVote type
* Add JSON.VideoMediaAttachment type
* Fixed JSON.ImageMediaAttachment type
* Fixed JSON.Poll type

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.0.5...v0.0.6



v0.0.5
------

* Add test setup
* Improve error handling

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.0.4...v0.0.5



v0.0.4
------

* Fix new status validation

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.0.3...v0.0.4



v0.0.3
------

* Fix Blob reference issue

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.0.2...v0.0.3



v0.0.2
------

* Split Mastodon logic into API, JSON, REST
* Add search API

**Full Changelog**: https://github.com/typescriptlibs/tsl-mastodon-api/compare/v0.0.1...v0.0.2



v0.0.1
------

* Initial release
* Add `MastodonAPI.fetch`
* Add ES module structure
* Add Promise support
* Add TypeScript support
