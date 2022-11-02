export declare class FileLikeObject {
    lastModifiedDate: any;
    size: any;
    type?: string;
    name?: string;
    rawFile: HTMLInputElement | File;
    constructor(fileOrInput: HTMLInputElement | File);
    _createFromFakePath(path: string): void;
    _createFromObject(object: {
        size: number;
        type: string;
        name: string;
    }): void;
}
//# sourceMappingURL=file-like-object.class.d.ts.map