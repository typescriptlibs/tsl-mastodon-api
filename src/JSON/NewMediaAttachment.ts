/* *
 *
 *  Declarations
 *
 * */

export interface NewMediaAttachment {
    file: ( Blob | File );
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
