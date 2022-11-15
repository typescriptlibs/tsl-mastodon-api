/* *
 *
 *  Declarations
 *
 * */

export interface NewPoll {
    expires_in: number;
    hide_totals?: boolean;
    multiple?: boolean;
    options: Array<string>;
}

/* *
 *
 *  Default Export
 *
 * */

export default NewPoll;
