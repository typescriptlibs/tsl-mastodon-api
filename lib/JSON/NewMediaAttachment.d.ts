export interface NewMediaAttachment {
    file: (Blob | File);
    thumbnail?: Blob;
    description?: string;
    focus?: string;
}
export default NewMediaAttachment;
