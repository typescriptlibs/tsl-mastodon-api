/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  TypeScript Library for the Mastodon API

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License.
  You may not use this file except in compliance with the License.
  You can get a copy of the License at https://typescriptlibs.org/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/
/// <amd-module name="tsl-mastodon-api/lib/JSON/AdminReport" />
import type Account from './Account.js';
/**
 * Represents a report filed against a user and/or status, to be taken action on
 * by moderators.
 *
 * @since 1.1.0
 */
export interface AdminReport {
    /**
     * Whether an action was taken yet.
     *
     * @since 1.1.0
     */
    action_taken?: boolean;
    /**
     * When an action was taken against the report.
     *
     * @since 1.1.0
     */
    action_taken_at?: (string | null);
    /**
     * The generic reason for the report.
     *
     * @since 4.0.0
     */
    category: AdminReportCategory;
    /**
     * The reason for the report.
     *
     * @since 4.0.0
     */
    comment: string;
    /**
     * When the report was created.
     *
     * @since 4.0.0
     */
    created_at: string;
    /**
     * Whether the report was forwarded to a remote domain.
     *
     * @since 4.0.0
     */
    forwarded?: boolean;
    /**
     * The ID of the report in the database.
     *
     * @since 1.1.0
     */
    id: string;
    /**
     * IDs of the rules that have been cited as a violation by this report.
     *
     * @since 4.0.0
     */
    rule_ids?: (Array<string> | null);
    /**
     * IDs of statuses that have been attached to this report for additional
     * context.
     *
     * @since 4.0.0
     */
    status_ids?: (Array<string> | null);
    /**
     * The account that was reported.
     *
     * @since 0.1.0
     */
    target_account: Account;
}
/**
 * The generic reason for a report.
 *
 * @since 4.0.0
 */
export declare enum AdminReportCategory {
    /**
     * Some other reason.
     *
     * @since 4.0.0
     */
    Other = "other",
    /**
     * Unwanted or repetitive content.
     *
     * @since 4.0.0
     */
    Spam = "spam",
    /**
     * A specific rule was violated.
     *
     * @since 4.0.0
     */
    Violation = "violation"
}
/**
 * Tests the JSON object for a AdminReport structure.
 *
 * @param json
 * JSON object to test.
 *
 * @return
 * True, if the JSON object has a AdminReport structure.
 */
export declare function isAdminReport(json: Partial<AdminReport>): json is AdminReport;
/**
 * Tests a JSON array for a AdminReports structure.
 *
 * @param json
 * JSON array to test.
 *
 * @return
 * True, if the JSON array contains a Status structure.
 */
export declare function isAdminReports(json: Partial<Array<Partial<AdminReport>>>): json is Array<AdminReport>;
export default AdminReport;
