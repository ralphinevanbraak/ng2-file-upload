import { EventEmitter, ElementRef } from '@angular/core';
import { FileUploader, FileUploaderOptions } from './file-uploader.class';
import * as i0 from "@angular/core";
export declare class FileDropDirective {
    uploader?: FileUploader;
    fileOver: EventEmitter<any>;
    onFileDrop: EventEmitter<File[]>;
    protected element: ElementRef;
    constructor(element: ElementRef);
    getOptions(): FileUploaderOptions | void;
    getFilters(): string;
    onDrop(event: MouseEvent): void;
    onDragOver(event: MouseEvent): void;
    onDragLeave(event: MouseEvent): void;
    protected _getTransfer(event: any): any;
    protected _preventAndStop(event: MouseEvent): void;
    protected _haveFiles(types: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileDropDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FileDropDirective, "[ng2FileDrop]", never, { "uploader": "uploader"; }, { "fileOver": "fileOver"; "onFileDrop": "onFileDrop"; }, never, never, false>;
}
//# sourceMappingURL=file-drop.directive.d.ts.map