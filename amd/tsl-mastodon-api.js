var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Emoji", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmoji = isEmoji;
    exports.isEmojis = isEmojis;
    /// <amd-module name="tsl-mastodon-api/lib/JSON/Emoji" />
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a Emoji structure.
     *
     * @param json
     * JSON to test.
     *
     * @return
     * True, if the JSON has a Emoji structure.
     */
    function isEmoji(json) {
        return (typeof json === 'object' &&
            typeof json.category === 'string' &&
            typeof json.shortcode === 'string' &&
            typeof json.static_url === 'string' &&
            typeof json.url === 'string' &&
            typeof json.visible_in_picker === 'boolean');
    }
    /**
     * Tests the JSON array for a Emoji structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Emoji structure.
     */
    function isEmojis(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isEmoji(json[0] || {})));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Account", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAccount = isAccount;
    exports.isAccounts = isAccounts;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON for a Account structure.
     *
     * @param json
     * JSON to test.
     *
     * @return
     * True, if the JSON has a Account structure.
     */
    function isAccount(json) {
        return (typeof json === 'object' &&
            typeof json.acct === 'string' &&
            typeof json.avatar === 'string' &&
            typeof json.avatar_static === 'string' &&
            typeof json.created_at === 'string' &&
            typeof json.display_name === 'string' &&
            typeof json.emojis === 'object' &&
            typeof json.fields === 'object' &&
            typeof json.followers_count === 'number' &&
            typeof json.following_count === 'number' &&
            typeof json.header === 'string' &&
            typeof json.header_static === 'string' &&
            typeof json.id === 'string' &&
            typeof json.note === 'string' &&
            typeof json.statuses_count === 'number' &&
            typeof json.url === 'string' &&
            typeof json.username === 'string' &&
            json.emojis instanceof Array &&
            json.fields instanceof Array);
    }
    /**
     * Tests the JSON array for a Account structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains Account structure.
     */
    function isAccounts(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isAccount(json[0] || {})));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/AdminReport", ["require", "exports", "tsl-mastodon-api/lib/JSON/Account"], function (require, exports, Account_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAdminAccount = isAdminAccount;
    exports.isAdminAccountIP = isAdminAccountIP;
    exports.isAdminAccountIPs = isAdminAccountIPs;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for an AdminAccount structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AdminReport structure.
     */
    function isAdminAccount(json) {
        return (typeof json === 'object' &&
            typeof json.created_at === 'string' &&
            typeof json.email === 'string' &&
            typeof json.id === 'string' &&
            typeof json.username === 'string' &&
            (typeof json.account === 'object' &&
                (0, Account_js_1.isAccount)(json.account)) &&
            (typeof json.domain === 'undefined' ||
                json.domain === null ||
                typeof json.domain === 'string') &&
            (typeof json.ip === 'undefined' ||
                json.ip === null ||
                typeof json.ip === 'string') &&
            (typeof json.ips === 'undefined' ||
                typeof json.ips === 'object' &&
                    isAdminAccountIPs(json.ips)));
    }
    /**
     * Tests the JSON object for an AdminAccountIP structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an AdminAccountIP structure.
     */
    function isAdminAccountIP(json) {
        return (typeof json === 'object' &&
            typeof json.ip === 'string' &&
            typeof json.used_at === 'string');
    }
    /**
     * Tests the JSON object for an AdminAccountIP array structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an AdminAccountIP array structure.
     */
    function isAdminAccountIPs(json) {
        return (typeof json === 'object' &&
            json instanceof Array &&
            (!json.length ||
                isAdminAccountIP(json[0])));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/AdminReport", ["require", "exports", "tsl-mastodon-api/lib/JSON/AdminReport"], function (require, exports, AdminAccount_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AdminReportCategory = void 0;
    exports.isAdminReport = isAdminReport;
    exports.isAdminReports = isAdminReports;
    /**
     * The generic reason for a report.
     *
     * @since 4.0.0
     */
    var AdminReportCategory;
    (function (AdminReportCategory) {
        /**
         * Some other reason.
         *
         * @since 4.0.0
         */
        AdminReportCategory["Other"] = "other";
        /**
         * Unwanted or repetitive content.
         *
         * @since 4.0.0
         */
        AdminReportCategory["Spam"] = "spam";
        /**
         * A specific rule was violated.
         *
         * @since 4.0.0
         */
        AdminReportCategory["Violation"] = "violation";
    })(AdminReportCategory || (exports.AdminReportCategory = AdminReportCategory = {}));
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for an AdminReport structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an AdminReport structure.
     */
    function isAdminReport(json) {
        return (typeof json === 'object' &&
            typeof json.category === 'string' &&
            typeof json.comment === 'string' &&
            typeof json.created_at === 'string' &&
            typeof json.id === 'string' &&
            typeof json.target_account === 'object' &&
            (0, AdminAccount_js_1.isAdminAccount)(json.target_account));
    }
    /**
     * Tests a JSON array for an AdminReports structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a AdminReports structure.
     */
    function isAdminReports(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isAdminReport(json[0] || {})));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Reaction", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isReaction = isReaction;
    exports.isReactions = isReactions;
    /// <amd-module name="tsl-mastodon-api/lib/JSON/Reaction" />
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a Reaction structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Reaction structure.
     */
    function isReaction(json) {
        return (typeof json === 'object' &&
            typeof json.count === 'number' &&
            typeof json.name === 'string');
    }
    /**
     * Tests the JSON array for a Reaction structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Reaction structure.
     */
    function isReactions(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isReaction(json[0] || {})));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Tag", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isTag = isTag;
    exports.isTags = isTags;
    exports.isTagStatistic = isTagStatistic;
    /// <amd-module name="tsl-mastodon-api/lib/JSON/Tag" />
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a Tag structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Tag structure.
     */
    function isTag(json) {
        return (typeof json === 'object' &&
            typeof json.name === 'string' &&
            typeof json.url === 'string' &&
            (typeof json.history === 'undefined' ||
                Array.isArray(json.history) &&
                    (!json.history.length ||
                        isTagStatistic(json.history[0] || {}))));
    }
    /**
     * Tests the JSON array for a Tag structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Tag structure.
     */
    function isTags(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isTag(json[0] || {})));
    }
    /**
     * Tests the JSON object for a TagStatistic structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a TagStatistic structure.
     */
    function isTagStatistic(json) {
        return (typeof json === 'object' &&
            typeof json.accounts === 'number' &&
            typeof json.day === 'number' &&
            typeof json.uses === 'number');
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Announcement", ["require", "exports", "tsl-mastodon-api/lib/JSON/Emoji", "tsl-mastodon-api/lib/JSON/Reaction", "tsl-mastodon-api/lib/JSON/Tag"], function (require, exports, Emoji_js_1, Reaction_js_1, Tag_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAnnouncement = isAnnouncement;
    exports.isAnnouncementAccount = isAnnouncementAccount;
    exports.isAnnouncementAccounts = isAnnouncementAccounts;
    exports.isAnnouncements = isAnnouncements;
    exports.isAnnouncementStatus = isAnnouncementStatus;
    exports.isAnnouncementStatuses = isAnnouncementStatuses;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a Announcement structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Announcement structure.
     */
    function isAnnouncement(json) {
        return (typeof json === 'object' &&
            typeof json.all_day === 'boolean' &&
            typeof json.content === 'string' &&
            typeof json.emojis === 'object' &&
            typeof json.id === 'string' &&
            typeof json.mentions === 'object' &&
            typeof json.reactions === 'object' &&
            typeof json.statuses === 'object' &&
            typeof json.tags === 'object' &&
            isAnnouncementAccounts(json.mentions) &&
            isAnnouncementStatuses(json.statuses) &&
            (0, Emoji_js_1.isEmojis)(json.emojis) &&
            (0, Reaction_js_1.isReactions)(json.reactions) &&
            (0, Tag_js_1.isTags)(json.tags));
    }
    /**
     * Tests the JSON object for a AnnouncementAccount structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AnnouncementAccount structure.
     */
    function isAnnouncementAccount(json) {
        return (typeof json === 'object' &&
            typeof json.acct === 'string' &&
            typeof json.id === 'string' &&
            typeof json.url === 'string' &&
            typeof json.username === 'string');
    }
    /**
     * Tests the JSON object for a AnnouncementAccount structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AnnouncementAccount structure.
     */
    function isAnnouncementAccounts(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isAnnouncementAccount(json[0] || {})));
    }
    /**
     * Tests the JSON array for a Announcement structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Announcement structure.
     */
    function isAnnouncements(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isAnnouncement(json[0] || {})));
    }
    /**
     * Tests the JSON object for a AnnouncementStatus structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AnnouncementStatus structure.
     */
    function isAnnouncementStatus(json) {
        return (typeof json === 'object' &&
            typeof json.id === 'string' &&
            typeof json.url === 'string');
    }
    /**
     * Tests the JSON object for a AnnouncementStatus structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a AnnouncementStatus structure.
     */
    function isAnnouncementStatuses(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isAnnouncementStatus(json[0] || {})));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Application", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <amd-module name="tsl-mastodon-api/lib/JSON/Application" />
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Card", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <amd-module name="tsl-mastodon-api/lib/JSON/Card" />
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/List", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isList = isList;
    exports.isLists = isLists;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a List structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a List structure.
     */
    function isList(json) {
        return (typeof json === 'object' &&
            typeof json.id === 'string' &&
            typeof json.title === 'string');
    }
    /**
     * Tests the JSON array for a List structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a List structure.
     */
    function isLists(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isList(json[0] || {})));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/MediaAttachment", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAudioAttachment = isAudioAttachment;
    exports.isAudioAttachmentMeta = isAudioAttachmentMeta;
    exports.isGIFVAttachment = isGIFVAttachment;
    exports.isGIFVAttachmentMeta = isGIFVAttachmentMeta;
    exports.isImageAttachment = isImageAttachment;
    exports.isImageAttachmentMeta = isImageAttachmentMeta;
    exports.isMediaAttachment = isMediaAttachment;
    exports.isUnknownAttachment = isUnknownAttachment;
    exports.isVideoAttachment = isVideoAttachment;
    exports.isVideoAttachmentMeta = isVideoAttachmentMeta;
    /// <amd-module name="tsl-mastodon-api/lib/JSON/MediaAttachment" />
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for an AudioAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an AudioAttachment structure.
     */
    function isAudioAttachment(json) {
        return (typeof json === 'object' &&
            typeof json.id === 'string' &&
            typeof json.meta === 'object' &&
            typeof json.preview_url === 'string' &&
            (typeof json.url === 'string' || json.url === null) &&
            json.type === 'audio' &&
            isAudioAttachmentMeta(json.meta));
    }
    /**
     * Tests the JSON object for an AudioAttachmentMeta structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an AudioAttachmentMeta structure.
     */
    function isAudioAttachmentMeta(json) {
        return (typeof json === 'object' &&
            typeof json.audio_bitrate === 'string' &&
            typeof json.audio_channels === 'string' &&
            typeof json.audio_encode === 'string' &&
            typeof json.duration === 'number' &&
            typeof json.length === 'string' &&
            typeof json.original === 'object' &&
            typeof json.original.bitrate === 'number' &&
            typeof json.original.duration === 'number');
    }
    /**
     * Tests the JSON object for a GIFVAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a GIFVAttachment structure.
     */
    function isGIFVAttachment(json) {
        return (typeof json === 'object' &&
            typeof json.blurhash === 'string' &&
            typeof json.id === 'string' &&
            typeof json.meta === 'object' &&
            typeof json.preview_url === 'string' &&
            (typeof json.url === 'string' || json.url === null) &&
            json.type === 'gifv' &&
            isGIFVAttachmentMeta(json.meta));
    }
    /**
     * Tests the JSON object for a GIFVAttachmentMeta structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a GIFVAttachmentMeta structure.
     */
    function isGIFVAttachmentMeta(json) {
        return (typeof json === 'object' &&
            typeof json.aspect === 'number' &&
            typeof json.duration === 'number' &&
            typeof json.fps === 'number' &&
            typeof json.height === 'number' &&
            typeof json.length === 'string' &&
            typeof json.size === 'string' &&
            typeof json.width === 'number' &&
            typeof json.original === 'object' &&
            typeof json.original.bitrate === 'number' &&
            typeof json.original.duration === 'number' &&
            typeof json.original.frame_rate === 'string' &&
            typeof json.original.height === 'number' &&
            typeof json.original.width === 'number' &&
            typeof json.small === 'object' &&
            typeof json.small.aspect === 'number' &&
            typeof json.small.height === 'number' &&
            typeof json.small.size === 'string' &&
            typeof json.small.width === 'number');
    }
    /**
     * Tests the JSON object for an ImageAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an ImageAttachment structure.
     */
    function isImageAttachment(json) {
        return (typeof json === 'object' &&
            typeof json.blurhash === 'string' &&
            typeof json.id === 'string' &&
            typeof json.meta === 'object' &&
            typeof json.preview_url === 'string' &&
            (typeof json.url === 'string' || json.url === null) &&
            json.type === 'image' &&
            isImageAttachmentMeta(json.meta));
    }
    /**
     * Tests the JSON object for an ImageAttachmentMeta structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an ImageAttachmentMeta structure.
     */
    function isImageAttachmentMeta(json) {
        return (typeof json === 'object' &&
            typeof json.original === 'object' &&
            typeof json.original.aspect === 'number' &&
            typeof json.original.height === 'number' &&
            typeof json.original.size === 'string' &&
            typeof json.original.width === 'number' &&
            typeof json.small === 'object' &&
            typeof json.small.aspect === 'number' &&
            typeof json.small.height === 'number' &&
            typeof json.small.size === 'string' &&
            typeof json.small.width === 'number');
    }
    /**
     * Tests the JSON object for a MediaAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a MediaAttachment structure.
     */
    function isMediaAttachment(json) {
        return (isAudioAttachment(json) ||
            isGIFVAttachment(json) ||
            isImageAttachment(json) ||
            isUnknownAttachment(json) ||
            isVideoAttachment(json));
    }
    /**
     * Tests the JSON object for an UnknownAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has an UnknownAttachment structure.
     */
    function isUnknownAttachment(json) {
        return (typeof json === 'object' &&
            typeof json.id === 'string' &&
            typeof json.meta === 'object' &&
            typeof json.preview_url === 'string' &&
            (typeof json.url === 'string' || json.url === null) &&
            json.type === 'unknown');
    }
    /**
     * Tests the JSON object for a VideoAttachment structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a VideoAttachment structure.
     */
    function isVideoAttachment(json) {
        return (typeof json === 'object' &&
            typeof json.blurhash === 'string' &&
            typeof json.id === 'string' &&
            typeof json.meta === 'object' &&
            typeof json.preview_url === 'string' &&
            (typeof json.url === 'string' || json.url === null) &&
            json.type === 'video' &&
            isVideoAttachmentMeta(json.meta));
    }
    /**
     * Tests the JSON object for a VideoAttachmentMeta structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a VideoAttachmentMeta structure.
     */
    function isVideoAttachmentMeta(json) {
        return (typeof json === 'object' &&
            typeof json.original === 'object' &&
            typeof json.original.bitrate === 'number' &&
            typeof json.original.duration === 'number' &&
            typeof json.original.frame_rate === 'string' &&
            typeof json.original.height === 'number' &&
            typeof json.original.width === 'number' &&
            typeof json.small === 'object' &&
            typeof json.small.aspect === 'number' &&
            typeof json.small.height === 'number' &&
            typeof json.small.size === 'string' &&
            typeof json.small.width === 'number');
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Poll", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPoll = isPoll;
    exports.isPollOptions = isPollOptions;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a Poll structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Poll structure.
     */
    function isPoll(json) {
        return (typeof json === 'object' &&
            typeof json.emojis === 'object' &&
            typeof json.expired === 'boolean' &&
            typeof json.expires_at === 'string' &&
            typeof json.id === 'string' &&
            typeof json.options === 'object' &&
            typeof json.own_votes === 'object' &&
            typeof json.voted === 'boolean' &&
            typeof json.votes_count === 'number' &&
            isPollOptions(json.options));
    }
    /**
     * Tests a JSON array for a PollOption structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a PollOption structure.
     */
    function isPollOptions(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                typeof json[0]?.title === 'string'));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Status", ["require", "exports", "tsl-mastodon-api/lib/JSON/Account", "tsl-mastodon-api/lib/JSON/Tag"], function (require, exports, Account_js_2, Tag_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isStatus = isStatus;
    exports.isStatusContext = isStatusContext;
    exports.isStatuses = isStatuses;
    exports.isStatusMention = isStatusMention;
    exports.isStatusSchedule = isStatusSchedule;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a Status structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Status structure.
     */
    function isStatus(json) {
        return (typeof json === 'object' &&
            typeof json.account === 'object' &&
            typeof json.created_at === 'string' &&
            typeof json.content === 'string' &&
            typeof json.emojis === 'object' &&
            typeof json.id === 'string' &&
            typeof json.media_attachments === 'object' &&
            typeof json.mentions === 'object' &&
            typeof json.sensitive === 'boolean' &&
            typeof json.spoiler_text === 'string' &&
            typeof json.tags === 'object' &&
            typeof json.uri === 'string' &&
            typeof json.visibility === 'string' &&
            (0, Account_js_2.isAccount)(json.account) &&
            (0, Tag_js_2.isTags)(json.tags));
    }
    /**
     * Tests the JSON object for a StatusContext structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a StatusContext structure.
     */
    function isStatusContext(json) {
        return (typeof json === 'object' &&
            typeof json.ancestors === 'object' &&
            typeof json.descendants === 'object' &&
            isStatuses(json.ancestors) &&
            isStatuses(json.descendants));
    }
    /**
     * Tests a JSON array for a Status structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Status structure.
     */
    function isStatuses(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isStatus(json[0] || {})));
    }
    /**
     * Tests the JSON object for a StatusMention structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a StatusMention structure.
     */
    function isStatusMention(json) {
        return (typeof json === 'object' &&
            typeof json.id === 'string' &&
            typeof json.acct === 'string' &&
            typeof json.url === 'string' &&
            typeof json.username === 'string');
    }
    /**
     * Tests the JSON object for a StatusSchedule structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a StatusSchedule structure.
     */
    function isStatusSchedule(json) {
        return (typeof json === 'object' &&
            typeof json.id === 'string' &&
            typeof json.media_attachments === 'object' &&
            typeof json.params === 'object' &&
            typeof json.scheduled_at === 'string');
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Notification", ["require", "exports", "tsl-mastodon-api/lib/JSON/Account", "tsl-mastodon-api/lib/JSON/Status"], function (require, exports, Account_js_3, Status_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNotification = isNotification;
    exports.isNotifications = isNotifications;
    exports.isNotificationType = isNotificationType;
    ;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a Notification structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Notification structure.
     */
    function isNotification(json) {
        return (typeof json === 'object' &&
            typeof json.account === 'object' &&
            typeof json.created_at === 'string' &&
            typeof json.id === 'string' &&
            typeof json.status === 'object' &&
            typeof json.type === 'string' &&
            (0, Account_js_3.isAccount)(json.account) &&
            isNotificationType(json.type) &&
            (0, Status_js_1.isStatus)(json.status));
    }
    /**
     * Tests the JSON array for a Notification structure.
     *
     * @param json
     * JSON array to test.
     *
     * @return
     * True, if the JSON array contains a Notification structure.
     */
    function isNotifications(json) {
        return (Array.isArray(json) &&
            (!json.length ||
                isNotification(json[0] || {})));
    }
    /**
     * Tests the type string for a known Notification type.
     *
     * @param type
     * Type string to test.
     *
     * @return
     * True, if the type string is a known Notification type.
     */
    function isNotificationType(type) {
        return (type === 'mention' ||
            type === 'status' ||
            type === 'reblog' ||
            type === 'follow' ||
            type === 'follow_request' ||
            type === 'favourite' ||
            type === 'poll' ||
            type === 'update' ||
            type === 'admin.sign_up' ||
            type === 'admin.report');
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/StreamData", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isStreamData = isStreamData;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a StreamData structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a StreamData structure.
     */
    function isStreamData(json) {
        return (typeof json === 'object' &&
            typeof json.event === 'string' &&
            Array.isArray(json.stream) &&
            (typeof json.payload === 'undefined' ||
                typeof json.payload === 'string' ||
                typeof json.payload === 'object'));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/Search", ["require", "exports", "tsl-mastodon-api/lib/JSON/Account", "tsl-mastodon-api/lib/JSON/Status", "tsl-mastodon-api/lib/JSON/Tag"], function (require, exports, Account_js_4, Status_js_2, Tag_js_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSearch = isSearch;
    exports.isSearchResults = isSearchResults;
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Tests the JSON object for a Search structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a Search structure.
     */
    function isSearch(json) {
        return (typeof json === 'object' &&
            typeof json.q === 'string');
    }
    /**
     * Tests the JSON object for a SearchResults structure.
     *
     * @param json
     * JSON object to test.
     *
     * @return
     * True, if the JSON object has a SearchResults structure.
     */
    function isSearchResults(json) {
        return (typeof json === 'object' &&
            Array.isArray(json.accounts) &&
            Array.isArray(json.hashtags) &&
            Array.isArray(json.statuses) &&
            (!json.accounts.length ||
                (0, Account_js_4.isAccount)(json.accounts[0])) &&
            (!json.hashtags.length ||
                (0, Tag_js_3.isTag)(json.hashtags[0])) &&
            (!json.statuses.length ||
                (0, Status_js_2.isStatus)(json.statuses[0])));
    }
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/JSON/index", ["require", "exports", "tsl-mastodon-api/lib/JSON/Account", "tsl-mastodon-api/lib/JSON/AdminReport", "tsl-mastodon-api/lib/JSON/AdminReport", "tsl-mastodon-api/lib/JSON/Announcement", "tsl-mastodon-api/lib/JSON/Application", "tsl-mastodon-api/lib/JSON/Card", "tsl-mastodon-api/lib/JSON/Emoji", "tsl-mastodon-api/lib/JSON/List", "tsl-mastodon-api/lib/JSON/MediaAttachment", "tsl-mastodon-api/lib/JSON/StreamData", "tsl-mastodon-api/lib/JSON/Notification", "tsl-mastodon-api/lib/JSON/Poll", "tsl-mastodon-api/lib/JSON/Reaction", "tsl-mastodon-api/lib/JSON/Search", "tsl-mastodon-api/lib/JSON/Status", "tsl-mastodon-api/lib/JSON/Tag"], function (require, exports, Account_js_5, AdminAccount_js_2, AdminReport_js_1, Announcement_js_1, Application_js_1, Card_js_1, Emoji_js_2, List_js_1, MediaAttachment_js_1, StreamData_js_1, Notification_js_1, Poll_js_1, Reaction_js_2, Search_js_1, Status_js_3, Tag_js_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringify = exports.parse = void 0;
    /// <amd-module name="tsl-mastodon-api/lib/JSON/index" />
    /* *
     *
     *  Exports
     *
     * */
    __exportStar(Account_js_5, exports);
    __exportStar(AdminAccount_js_2, exports);
    __exportStar(AdminReport_js_1, exports);
    __exportStar(Announcement_js_1, exports);
    __exportStar(Application_js_1, exports);
    __exportStar(Card_js_1, exports);
    __exportStar(Emoji_js_2, exports);
    __exportStar(List_js_1, exports);
    __exportStar(MediaAttachment_js_1, exports);
    __exportStar(StreamData_js_1, exports);
    __exportStar(Notification_js_1, exports);
    __exportStar(Poll_js_1, exports);
    __exportStar(Reaction_js_2, exports);
    __exportStar(Search_js_1, exports);
    __exportStar(Status_js_3, exports);
    __exportStar(Tag_js_4, exports);
    /* *
     *
     *  Functions
     *
     * */
    exports.parse = JSON.parse;
    exports.stringify = JSON.stringify;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/Bridge", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bridge = void 0;
    /// <amd-module name="tsl-mastodon-api/lib/Bridge" />
    /* *
     *
     *  Constants
     *
     * */
    const global = (typeof window === 'undefined' ?
        globalThis :
        window);
    exports.Bridge = {
        global,
        fetch: global.fetch.bind(global),
        fileFrom: undefined,
        Blob: global.Blob,
        File: global.File,
        FormData: global.FormData,
        Headers: global.Headers,
        Response: global.Response,
        URL: global.URL,
        URLSearchParams: global.URLSearchParams,
        WebSocket: global.WebSocket
    };
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = exports.Bridge;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/Utilities", ["require", "exports", "tsl-mastodon-api/lib/Bridge"], function (require, exports, Bridge_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utilities = void 0;
    /* *
     *
     *  Namespace
     *
     * */
    var Utilities;
    (function (Utilities) {
        /* *
         *
         *  Declarations
         *
         * */
        /* *
         *
         *  Constants
         *
         * */
        /**
         * Loads a file from a path.
         *
         * @memberof Utilities
         *
         * @param filePath
         * Path to the file.
         *
         * @param mimeType
         * Mime type of the file.
         *
         * @return
         * Promise with the file, if successful.
         *
         * @requires node
         */
        Utilities.fileFrom = Bridge_js_1.default.fileFrom;
        /* *
         *
         *  Functions
         *
         * */
        function buildFormData(params, target = new Bridge_js_1.default.FormData()) {
            if (params) {
                transferParams(params, target);
            }
            return target;
        }
        Utilities.buildFormData = buildFormData;
        function buildHeaders(params, target = new Bridge_js_1.default.Headers()) {
            if (params) {
                transferParams(params, target);
            }
            return target;
        }
        Utilities.buildHeaders = buildHeaders;
        function buildURL(base, path = '.', params) {
            const url = new Bridge_js_1.default.URL(path, base);
            if (params) {
                buildURLSearchParams(params, url.searchParams);
            }
            return url;
        }
        Utilities.buildURL = buildURL;
        function buildURLSearchParams(params, target = new Bridge_js_1.default.URLSearchParams()) {
            if (params) {
                transferParams(params, target);
            }
            return target;
        }
        Utilities.buildURLSearchParams = buildURLSearchParams;
        function transferParams(params, target) {
            let value;
            if (Array.isArray(params)) {
                let key;
                for (const pair of params) {
                    key = pair[0];
                    value = pair[1];
                    if (typeof value === 'undefined' ||
                        value === null) {
                        continue;
                    }
                    if (Array.isArray(value)) {
                        // Add brackets for query structures
                        if (!(target instanceof Headers)) {
                            key += '[]';
                        }
                        for (const v of value) {
                            target.append(key, v);
                        }
                    }
                    else if (target instanceof Bridge_js_1.default.FormData &&
                        (value instanceof Bridge_js_1.default.Blob ||
                            value instanceof Bridge_js_1.default.File)) {
                        target.append(key, value);
                    }
                    else if (typeof value === 'object') {
                        // Add brackets for query structures
                        if (!(target instanceof Headers)) {
                            for (const k in value) {
                                target.append(`${key}[${k}]`, `${value[k]}`);
                            }
                        }
                        else {
                            target.append(key, JSON.stringify(value));
                        }
                    }
                    else {
                        target.append(key, `${value}`);
                    }
                }
            }
            else {
                for (let key in params) {
                    value = params[key];
                    if (typeof value === 'undefined' ||
                        value === null) {
                        continue;
                    }
                    if (Array.isArray(value)) {
                        // Add brackets for query structures
                        if (!(target instanceof Headers)) {
                            key += '[]';
                        }
                        for (const v of value) {
                            target.append(key, v);
                        }
                    }
                    else if (target instanceof Bridge_js_1.default.FormData &&
                        (value instanceof Bridge_js_1.default.Blob ||
                            value instanceof Bridge_js_1.default.File)) {
                        target.append(key, value);
                    }
                    else if (typeof value === 'object') {
                        // Add brackets for query structures
                        if (!(target instanceof Headers)) {
                            for (const k in value) {
                                target.append(`${key}[${k}]`, `${value[k]}`);
                            }
                        }
                        else {
                            target.append(key, JSON.stringify(value));
                        }
                    }
                    else {
                        target.append(key, `${value}`);
                    }
                }
            }
        }
        Utilities.transferParams = transferParams;
    })(Utilities || (exports.Utilities = Utilities = {}));
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = Utilities;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/REST", ["require", "exports", "tsl-mastodon-api/lib/Bridge", "tsl-mastodon-api/lib/Utilities"], function (require, exports, Bridge_js_2, Utilities_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.REST = void 0;
    /* *
     *
     *  Class
     *
     * */
    class REST {
        /* *
         *
         *  Constructor
         *
         * */
        constructor(config) {
            this.apiURL = config.api_url;
            config.timeout_ms = (typeof config.timeout_ms === 'number' && config.timeout_ms > 0 ?
                config.timeout_ms :
                60000);
            this.config = config;
        }
        /* *
         *
         *  Properties
         *
         * */
        apiURL;
        config;
        /* *
         *
         *  Functions
         *
         * */
        delete(path, params) {
            return this.fetch('DELETE', path, params);
        }
        async fetch(method, path, params) {
            const apiURL = this.apiURL;
            const config = this.config;
            // build fetch parameter
            const supportsBody = (method === 'PATCH' ||
                method === 'POST' ||
                undefined);
            const url = (supportsBody ?
                Utilities_js_1.default.buildURL(apiURL, path) :
                Utilities_js_1.default.buildURL(apiURL, path, params));
            const headers = Utilities_js_1.default.buildHeaders({
                Accept: '*/*',
                Authorization: `Bearer ${config.access_token}`,
                'User-Agent': config.user_agent
            });
            const body = (supportsBody && params ?
                Utilities_js_1.default.buildFormData(params) :
                undefined);
            // start timer
            const timeout = new AbortController();
            const timer = setTimeout(() => timeout.abort(), config.timeout_ms);
            let response, text = '';
            try {
                response = await Bridge_js_2.default.fetch(url.toString(), {
                    follow: config.no_follow ? 0 : 9,
                    redirect: config.no_follow ? 'manual' : 'follow',
                    headers,
                    method,
                    signal: timeout.signal,
                    body
                });
                clearTimeout(timer);
                text = await response.text();
                try {
                    return {
                        json: JSON.parse(text),
                        path,
                        response,
                        status: response.status,
                    };
                }
                catch (error) {
                    return {
                        error: (error || new Error()),
                        json: { text },
                        path,
                        response,
                        status: response.status,
                    };
                }
            }
            catch (error) {
                clearTimeout(timer);
                return {
                    error: (error || new Error()),
                    json: { text },
                    path,
                    response,
                    status: 422, // Unprocessable Entity
                };
            }
        }
        get(path, params) {
            return this.fetch('GET', path, params);
        }
        patch(path, params) {
            return this.fetch('PATCH', path, params);
        }
        post(path, params) {
            return this.fetch('POST', path, params);
        }
        put(path, params) {
            return this.fetch('PUT', path, params);
        }
    }
    exports.REST = REST;
    /* *
     *
     *  Namespace
     *
     * */
    (function (REST) {
        /* *
         *
         *  Declarations
         *
         * */
        /* *
         *
         *  Functions
         *
         * */
        function isParamArray(params) {
            return (Array.isArray(params) &&
                (!params.length ||
                    typeof params[0][0] === 'string'));
        }
        REST.isParamArray = isParamArray;
        function toParamArray(params, array = []) {
            if (!params) {
                return;
            }
            const pairs = (Array.isArray(params) ?
                params :
                Object.entries(params));
            let pair;
            for (let i = 0, iEnd = pairs.length; i < iEnd; ++i) {
                pair = pairs[i];
                if (Array.isArray(pair[1])) {
                    const key = pair[0];
                    const values = pair[1];
                    for (let j = 0, jEnd = values.length; j < jEnd; ++j) {
                        array.push([key, values[j]]);
                    }
                }
                else {
                    array.push(pair);
                }
            }
            return array;
        }
        REST.toParamArray = toParamArray;
    })(REST || (exports.REST = REST = {}));
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = REST;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/API", ["require", "exports", "tsl-mastodon-api/lib/JSON/index", "tsl-mastodon-api/lib/REST"], function (require, exports, JSON, REST_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.API = void 0;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Mastodon API to fetch, create, and delete content.
     *
     * @class
     */
    class API {
        /* *
         *
         *  Constructor
         *
         * */
        /**
         * @param config
         * Configuration with access token and URL to the Mastodon server.
         */
        constructor(config) {
            this.nextDelay = 1;
            this.rest = new REST_js_1.default(config);
            this.version = (config.api_version ||
                parseInt(config.api_url.match(/\Wv(\d+)\W/u)?.[1] || '0'));
        }
        /* *
         *
         *  Properties
         *
         * */
        /**
         * Expected communication delay (in milliseconds) by the Mastodon server.
         */
        nextDelay;
        /**
         * Underlying REST API of this instance.
         */
        rest;
        /**
         * Version that has been provided with `config.api_version` or has been
         * extracted from `config.api_url`.
         *
         * A value of `0` indicates that no version has been found.
         */
        version;
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Delays an async promise by the expected amount of time (in milliseconds),
         * which the Mastodon server sends during the last communication.
         *
         * @param forcedDelay
         * Forces a certain amount of minimum delay.
         *
         * @return
         * Promise that resolves after delay.
         */
        async delay(forcedDelay) {
            return new Promise(resolve => setTimeout(resolve, Math.max((forcedDelay || 0), this.nextDelay)));
        }
        /**
         * Deletes a path.
         *
         * @param path
         * Path to delete.
         *
         * @param [params]
         * Parameters to use.
         *
         * @return
         * Promise with the result, if successful.
         */
        async delete(path, params) {
            return this.fetch('DELETE', path, params);
        }
        /**
         * Deletes a list of accounts.
         *
         * @param listId
         * ID of the list to delete.
         *
         * @return
         * Promise with the deleted list, if successful.
         */
        async deleteList(listID) {
            const result = await this.delete(`lists/${listID}`);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isList(result?.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Deletes a list of accounts.
         *
         * @param listId
         * Related list.
         *
         * @param listAccounts
         * List accounts to delete.
         *
         * @return
         * Promise with an empty object, if successful.
         */
        async deleteListAccounts(listID, listAccounts) {
            const result = await this.delete(`lists/${listID}/accounts`, listAccounts);
            if (result.error ||
                result.status !== 200 ||
                typeof result.json !== 'object') {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Deletes reaction from an announcement.
         *
         * @param announcementID
         * ID of the announcement to delete from.
         *
         * @param emojiName
         * Unicode emoji, or the shortcode of a custom emoji.
         *
         * @return
         * Promise with an empty `json`, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        async deleteAnnouncementReaction(announcementID, emojiName) {
            const result = await this.delete(`announcements/${announcementID}/reactions/${emojiName}`);
            if (result.error ||
                result.status !== 200) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Deletes a status.
         *
         * @param statusID
         * ID of the status to delete.
         *
         * @return
         * Promise with the deleted status, if successful.
         */
        async deleteStatus(statusID) {
            const result = await this.delete(`statuses/${statusID}`);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isStatus(result?.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /** @todo Add doclet. */
        extractRateLimit(headers) {
            let value = headers.get('X-RateLimit-Limit');
            if (typeof value === 'string') {
                return parseInt(value);
            }
            value = headers.get('X-RateLimit-Remaining');
            if (typeof value === 'string') {
                return parseInt(value);
            }
        }
        /** @todo Add doclet. */
        async fetch(method, path, params) {
            const rest = this.rest;
            const result = await rest.fetch(method, path, params);
            const rateLimit = (result.response &&
                this.extractRateLimit(result.response.headers));
            result.rateLimit = rateLimit;
            this.nextDelay = 300000 / (rateLimit || 300);
            return result;
        }
        /**
         * Get a result from a path.
         *
         * @param path
         * Path to get a result from.
         *
         * @param [params]
         * Parameters to use.
         *
         * @return
         * Promise with the result, if successful.
         */
        async get(path, params) {
            return this.fetch('GET', path, params);
        }
        /**
         * Gets the connected account.
         *
         * @return
         * Promise with the account, if successful.
         */
        async getAccount() {
            const result = await this.get('accounts/verify_credentials');
            if (result.error ||
                result.status !== 200 ||
                !JSON.isAccount(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        async getAdminReport(adminReportID) {
            const result = await this.get(`admin/reports/${adminReportID}`);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isAdminReport(result?.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets admin reports, usually filtered with query parameters.
         *
         * @param [queryParams]
         * Query parameters to control the amount and kind of reports to get.
         *
         * @return
         * Promise with the array of reports, if successful.
         */
        async getAdminReports(queryParams) {
            const result = await this.get('admin/reports', queryParams);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isAdminReports(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets the connected account.
         *
         * @return
         * Promise with the account, if successful.
         */
        async getAnnouncements(queryParams) {
            const result = await this.get('announcements');
            if (result.error ||
                result.status !== 200 ||
                !JSON.isAnnouncements(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets a list.
         *
         * @param listID
         * ID of the list to get.
         *
         * @return
         * Promise with the list, if successful.
         */
        async getList(listID) {
            const result = await this.get(`lists/${listID}`);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isList(result?.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets the accounts of a list.
         *
         * @param listID
         * ID of the list to get accounts from.
         *
         * @param [queryParams]
         * Query parameters to limit the amount of accounts to get.
         *
         * @return
         * Promise with the list accounts, if successful.
         */
        async getListAccounts(listID, queryParams) {
            const result = await this.get(`lists/${listID}/accounts`, queryParams);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isAccounts(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets lists.
         *
         * @param [queryParams]
         * Query parameters to limit the amount of lists to get.
         *
         * @return
         * Promise with the array of lists, if successful.
         */
        async getLists(queryParams) {
            const result = await this.get(`lists`, queryParams);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isLists(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets a media attachment.
         *
         * @param mediaAttachmentID
         * ID of the media attachment to get.
         *
         * @param awaitProcessing
         * Set to true, to wait until server processing completed.
         *
         * @return
         * Promise with the media attachment, if successful.
         */
        async getMediaAttachment(mediaAttachmentID, awaitProcessing) {
            const path = (awaitProcessing ?
                `../v1/media/${mediaAttachmentID}` :
                `media/${mediaAttachmentID}`);
            let result = await this.get(path);
            // Check status of media processing
            while (awaitProcessing &&
                result.status === 206) {
                await this.delay(10000);
                result = await this.get(path);
                if (result.error) {
                    throw result;
                }
            }
            if (result.error ||
                (result.status !== 200 &&
                    result.status !== 206) ||
                !JSON.isMediaAttachment(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Get notifications
         *
         * @param [queryParams]
         * Query parameters to limit the amount of statuses to get.
         */
        async getNotifications(queryParams) {
            const result = await this.get('notifications', REST_js_1.default.toParamArray(queryParams));
            if (result.error ||
                result.status !== 200 ||
                !JSON.isNotifications(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets a status.
         *
         * @param statusID
         * ID of the status to get.
         *
         * @return
         * Promise with the status, if successful.
         */
        async getStatus(statusID) {
            const result = await this.get(`statuses/${statusID}`);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isStatus(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets the context of a status with ancestors and descendants.
         *
         * @param statusID
         * ID of the status to get the context of.
         *
         * @return
         * Promise with the status context, if successful.
         */
        async getStatusContext(statusID) {
            const result = await this.get(`statuses/${statusID}/context`);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isStatusContext(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets statuses of an account.
         *
         * @param accountID
         * ID of the related account.
         *
         * @param [queryParams]
         * Query parameters to limit the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        async getStatuses(accountID, queryParams) {
            const result = await this.get(`accounts/${accountID}/statuses`, queryParams);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isStatuses(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets statuses from the personal timeline.
         *
         * @param [queryParams]
         * Query parameters to control the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        async getStatusesOfHome(queryParams) {
            const result = await this.get('timelines/home', queryParams);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isStatuses(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets statuses from a list of accounts.
         *
         * @param listID
         * ID of the list.
         *
         * @param [queryParams]
         * Query parameters to control the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        async getStatusesOfList(listID, queryParams) {
            const result = await this.get(`timelines/list/${listID}`, queryParams);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isStatuses(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets statuses from the public timeline.
         *
         * @param [queryParams]
         * Query parameters to control the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        async getStatusesOfPublic(queryParams) {
            const result = await this.get('timelines/public', REST_js_1.default.toParamArray(queryParams));
            if (result.error ||
                result.status !== 200 ||
                !JSON.isStatuses(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Gets statuses for a tag.
         *
         * @param tag
         * Tag to search.
         *
         * @param [queryParams]
         * Query parameters to control the amount of statuses to get.
         *
         * @return
         * Promise with the array of statuses, if successful.
         */
        async getStatusesOfTag(tag, queryParams) {
            const result = await this.get(`timelines/tag/${tag}`, REST_js_1.default.toParamArray(queryParams));
            if (result.error ||
                result.status !== 200 ||
                !JSON.isStatuses(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Post parameters to a path.
         *
         * @param path
         * Path to post to.
         *
         * @param [params]
         * Parameters to post.
         *
         * @return
         * Promise with the result, if successful.
         */
        async post(path, params) {
            return this.fetch('POST', path, params);
        }
        /**
         * Dismisses all notifications.
         *
         * @return
         * Promise with an empty `json` object, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        async postDismissAllNotifications() {
            const result = await this.post(`notifications/clear`);
            if (result.error ||
                result.status !== 200) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Dismisses an announcement.
         *
         * @param announcementID
         * ID of the announcement to dismiss.
         *
         * @return
         * Promise with an empty `json` object, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        async postDismissAnnouncement(announcementID) {
            const result = await this.post(`announcements/${announcementID}/dismiss`);
            if (result.error ||
                result.status !== 200) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Dismisses a single notification.
         *
         * @param notificationID
         * The ID of the Notification in the database.
         *
         * @return
         * Promise with an empty `json` object, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        async postDismissNotification(notificationID) {
            const result = await this.post(`notifications/${notificationID}/dismiss`);
            if (result.error ||
                result.status !== 200) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Posts a new list or updates an existing list.
         *
         * @param list
         * List to post.
         *
         * @return
         * Promise with the list, if successful.
         */
        async postList(list) {
            const result = await this.post('lists', list);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isList(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Posts a new list or updates an existing list.
         *
         * @param listId
         * Related list.
         *
         * @param listAccounts
         * List accounts to post.
         *
         * @return
         * Promise with the list, if successful.
         */
        async postListAccounts(listId, listAccounts) {
            const result = await this.post(`lists/${listId}/accounts`, listAccounts);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isAccounts(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Posts a new media attachment.
         *
         * @param mediaAttachment
         * Media attachment to post.
         *
         * @param awaitProcessing
         * Set to true, to wait until server processing completed.
         *
         * @return
         * Promise with the media attachment, if successful.
         */
        async postMediaAttachment(mediaAttachment, awaitProcessing) {
            const path = (awaitProcessing ?
                '../v2/media' :
                'media');
            const result = await this.post(path, mediaAttachment);
            if (awaitProcessing &&
                result.status === 202) {
                return await this.getMediaAttachment(result.json.id, awaitProcessing);
            }
            if (result.error ||
                (result.status !== 200 &&
                    result.status !== 202) ||
                !JSON.isMediaAttachment(result.json)) {
                result.error = (result.error || new Error());
                throw result;
            }
            return result;
        }
        /**
         * Posts a poll vote.
         *
         * @param pollID
         * Related poll ID to vote for.
         *
         * @param pollVote
         * Poll vote to post.
         *
         * @return
         * Promise with the updated poll, if successful.
         */
        async postPollVote(pollID, pollVote) {
            const result = await this.post(`polls/${pollID}/votes`, pollVote);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isPoll(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Posts a new status or updates an existing status.
         *
         * @param status
         * Status to post.
         *
         * @return
         * Promise with the status, if successful.
         */
        async postStatus(status) {
            const result = await this.post('statuses', status);
            if (result.error ||
                (result.status !== 200 &&
                    result.status !== 206) ||
                (!JSON.isStatus(result.json) &&
                    !JSON.isStatusSchedule(result.json))) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Puts parameters to a path.
         *
         * @param path
         * Path to put to.
         *
         * @param [params]
         * Parameters to put.
         *
         * @return
         * Promise with the result, if successful.
         */
        async put(path, params) {
            return this.fetch('PUT', path, params);
        }
        /**
         * Puts a new reaction to an announcement.
         *
         * @param announcementID
         * ID of the announcement to put to.
         *
         * @param emojiName
         * Unicode emoji, or the shortcode of a custom emoji.
         *
         * @return
         * Promise with an empty `json` object, if successful. Otherwise the `json`
         * contains an `error` property.
         */
        async putAnnouncementReaction(announcementID, emojiName) {
            const result = await this.put(`announcements/${announcementID}/reactions/${emojiName}`);
            if (result.error ||
                result.status !== 200) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Puts a parameter update on an existing media attachment.
         *
         * @param mediaAttachmentID
         * ID of the media attachment to get.
         *
         * @return
         * Promise with the updated media attachment, if successful.
         */
        async putMediaAttachmentUpdate(mediaAttachmentID, mediaAttachmentUpdate) {
            const result = await this.put(`media/${mediaAttachmentID}`, mediaAttachmentUpdate);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isMediaAttachment(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
        /**
         * Search for accounts, hashtags, and statuses. Requires a `v2` API URL.
         *
         * @since 3.0.0
         *
         * @param search
         * Search parameters to use.
         *
         * @return
         * Promise with an object of search results, if successful.
         */
        async search(search) {
            const result = await this.get('search', search);
            if (result.error ||
                result.status !== 200 ||
                !JSON.isSearchResults(result.json)) {
                result.error = result.error || new Error();
                throw result;
            }
            return result;
        }
    }
    exports.API = API;
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = API;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/Bridge", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bridge = void 0;
    /// <amd-module name="tsl-mastodon-api/lib/Bridge" />
    /* *
     *
     *  Constants
     *
     * */
    const global = (typeof window === 'undefined' ?
        globalThis :
        window);
    exports.Bridge = {
        global,
        fetch: global.fetch.bind(global),
        fileFrom: undefined,
        Blob: global.Blob,
        File: global.File,
        FormData: global.FormData,
        Headers: global.Headers,
        Response: global.Response,
        URL: global.URL,
        URLSearchParams: global.URLSearchParams,
        WebSocket: global.WebSocket
    };
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = exports.Bridge;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/OAuth", ["require", "exports", "tsl-mastodon-api/lib/Bridge"], function (require, exports, Bridge_js_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth = void 0;
    /* *
     *
     *  Namespace
     *
     * */
    var OAuth;
    (function (OAuth) {
        /* *
         *
         *  Declarations
         *
         * */
        /* *
         *
         *  Functions
         *
         * */
        /**
         * Creates an application in a Mastodon account.
         *
         * @memberof API
         *
         * @param apiURL
         * API URL of the Mastodon server.
         *
         * @param appName
         * Public name of the application.
         *
         * @param [redirectURI]
         * OAuth URI.
         *
         * @param [scopes]
         * Application permissions to grant.
         *
         * @param [website]
         * Public website of the application.
         *
         * @return
         * Promise with an object of applications `id`, `client_id` and
         * `client_secret`.
         */
        async function createApp(apiURL, appName, redirectURI = 'urn:ietf:wg:oauth:2.0:oob', scopes = 'read write follow', appWebsite) {
            const body = new Bridge_js_3.default.FormData();
            body.append('client_name', appName);
            body.append('redirect_uris', redirectURI);
            body.append('scopes', scopes);
            if (appWebsite) {
                body.append('website', appWebsite);
            }
            const response = await Bridge_js_3.default.fetch(`${apiURL}apps`, {
                body,
                method: 'POST'
            });
            return await response.json();
        }
        OAuth.createApp = createApp;
        /**
         * Gets the access token for the application.
         * @requires oauth
         */
        async function getAccessToken(baseURL, clientId, clientSecret, authorizationCode, redirectUri = 'urn:ietf:wg:oauth:2.0:oob') {
            const OAuth2 = (await new Promise((resolve_1, reject_1) => { require(['oauth'], resolve_1, reject_1); })).OAuth2;
            const oauth = new OAuth2(clientId, clientSecret, baseURL, undefined, '/oauth/token');
            return new Promise((resolve, reject) => {
                oauth.getOAuthAccessToken(authorizationCode, {
                    grant_type: 'authorization_code',
                    redirect_uri: redirectUri
                }, (err, accessToken) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(accessToken);
                });
            });
        }
        OAuth.getAccessToken = getAccessToken;
        /**
         * Creates an authorization url for users to authorize the application.
         * @requires oauth
         */
        async function getAuthorizationUrl(baseURL, clientId, clientSecret, redirectURI = 'urn:ietf:wg:oauth:2.0:oob', scope = 'read write follow') {
            const OAuth2 = (await new Promise((resolve_2, reject_2) => { require(['oauth'], resolve_2, reject_2); })).OAuth2;
            const oauth = new OAuth2(clientId, clientSecret, baseURL, undefined, '/oauth/token');
            return oauth.getAuthorizeUrl({
                redirect_uri: redirectURI,
                response_type: 'code',
                client_id: clientId,
                scope
            });
        }
        OAuth.getAuthorizationUrl = getAuthorizationUrl;
    })(OAuth || (exports.OAuth = OAuth = {}));
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = OAuth;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api/lib/StreamAPI", ["require", "exports", "tsl-mastodon-api/lib/Bridge", "tsl-mastodon-api/lib/JSON/index", "tsl-mastodon-api/lib/Utilities"], function (require, exports, Bridge_js_4, JSON, Utilities_js_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StreamAPI = void 0;
    /* *
     *
     *  Class
     *
     * */
    /**
     * Mastodon streaming API to listen to new content.
     */
    class StreamAPI {
        /* *
         *
         *  Constructor
         *
         * */
        /**
         * @param config
         * Configuration with URL to the Mastodon server.
         */
        constructor(config) {
            if (!config.api_url.endsWith('/streaming/')) {
                config.api_url = Utilities_js_2.default.buildURL(config.api_url, 'streaming').href;
            }
            this.listeners = {
                close: [],
                error: [],
                message: []
            };
            this.config = config;
        }
        /* *
         *
         *  Properties
         *
         * */
        listeners;
        config;
        webSocket;
        /* *
         *
         *  Functions
         *
         * */
        dispatch(eventType, e) {
            const listeners = this.listeners[eventType];
            if (e instanceof MessageEvent &&
                JSON.isStreamData(e.data) &&
                e.data.payload) {
                e.data.payload = JSON.parse(`${e.data.payload}`);
            }
            for (let i = 0, iEnd = listeners.length; i < iEnd; ++i) {
                listeners[i].call(this, e);
            }
        }
        off(eventType, eventListener) {
            const listeners = this.listeners[eventType];
            const index = listeners.indexOf(eventListener);
            if (index >= 0) {
                listeners.splice(index, 1);
            }
            return this;
        }
        on(eventType, eventListener) {
            this.listeners[eventType].push(eventListener);
            return this;
        }
        async setup() {
            const config = this.config;
            const health = await Bridge_js_4.default.fetch(Utilities_js_2.default.buildURL(config.api_url, 'health'));
            if (health.status !== 200) {
                throw new Error('TSL-MASTODON-API_STREAMING-HEALTH');
            }
            const webSocket = new Bridge_js_4.default.WebSocket(Utilities_js_2.default.buildURL(config.api_url));
            return new Promise((resolve, reject) => {
                const cleanUp = () => {
                    webSocket.removeEventListener('close', onFail);
                    webSocket.removeEventListener('error', onFail);
                    webSocket.removeEventListener('open', onSuccess);
                };
                const onFail = (e) => {
                    cleanUp();
                    reject(e);
                };
                const onSuccess = () => {
                    cleanUp();
                    webSocket.addEventListener('close', (e) => this.dispatch('close', e));
                    webSocket.addEventListener('error', (e) => this.dispatch('error', e));
                    webSocket.addEventListener('message', (e) => this.dispatch('message', e));
                    resolve(webSocket);
                };
                webSocket.addEventListener('close', onFail);
                webSocket.addEventListener('error', onFail);
                webSocket.addEventListener('open', onSuccess);
            });
        }
        async subscribe(streamType, streamParams, eventListener) {
            const webSocket = this.webSocket || await this.setup();
            webSocket.send(JSON.stringify({
                ...streamParams,
                type: 'subscribe',
                streamType
            }));
            if (eventListener) {
                this.on('message', eventListener);
            }
            return this;
        }
        async unsubsribe(streamType, streamParams, eventListener) {
            const webSocket = this.webSocket || await this.setup();
            webSocket.send(JSON.stringify({
                ...streamParams,
                type: 'unsubscribe',
                stream: streamType
            }));
            if (eventListener) {
                this.off('message', eventListener);
            }
            return this;
        }
    }
    exports.StreamAPI = StreamAPI;
    /* *
     *
     *  Default Export
     *
     * */
    exports.default = StreamAPI;
});
/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
define("tsl-mastodon-api", ["require", "exports", "tsl-mastodon-api/lib/JSON/index", "tsl-mastodon-api/lib/API", "tsl-mastodon-api/lib/Bridge", "tsl-mastodon-api/lib/REST", "tsl-mastodon-api/lib/Utilities"], function (require, exports, JSON, API_js_1, Bridge_js_5, REST_js_2, Utilities_js_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSON = void 0;
    /// <amd-module name="tsl-mastodon-api" />
    /* *
     *
     *  Exports
     *
     * */
    exports.JSON = JSON;
    __exportStar(API_js_1, exports);
    __exportStar(Bridge_js_5, exports);
    __exportStar(REST_js_2, exports);
    __exportStar(Utilities_js_3, exports);
});
//# sourceMappingURL=tsl-mastodon-api.js.map