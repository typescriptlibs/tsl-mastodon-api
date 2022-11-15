/* *
 *
 *  Declarations
 *
 * */

export interface Tag {
    history?: Array<TagStatistic>;
    name: string;
    url: string;
}

export interface TagStatistic {
    accounts: number;
    day: number;
    uses: number;
}

/* *
 *
 *  Default Export
 *
 * */

export default Tag;
