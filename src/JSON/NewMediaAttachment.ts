/* *
 *
 *  Declarations
 *
 * */

export interface NewMediaAttachment {
    file: Blob;
    thumbnail?: Blob;
    description?: string;
    focus?: string;
}

/* *
 *
 *  Default Export
 *
 * */

export default NewMediaAttachment;
