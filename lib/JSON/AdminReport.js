/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
import { isAdminAccount } from './AdminAccount.js';
/**
 * The generic reason for a report.
 *
 * @since 4.0.0
 */
export var AdminReportCategory;
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
})(AdminReportCategory || (AdminReportCategory = {}));
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
export function isAdminReport(json) {
    return (typeof json === 'object' &&
        typeof json.category === 'string' &&
        typeof json.comment === 'string' &&
        typeof json.created_at === 'string' &&
        typeof json.id === 'string' &&
        typeof json.target_account === 'object' &&
        isAdminAccount(json.target_account));
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
export function isAdminReports(json) {
    return (Array.isArray(json) &&
        (!json.length ||
            isAdminReport(json[0] || {})));
}
//# sourceMappingURL=AdminReport.js.map