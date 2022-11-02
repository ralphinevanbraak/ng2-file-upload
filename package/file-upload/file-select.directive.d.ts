import { EventEmitter, ElementRef } from '@angular/core';
import { FileUploader, FileUploaderOptions } from './file-uploader.class';
import * as i0 from "@angular/core";
export declare class FileSelectDirective {
    uploader?: FileUploader;
    onFileSelected: EventEmitter<File[]>;
    protected element: ElementRef;
    constructor(element: ElementRef);
    getOptions(): FileUploaderOptions | undefined;
    getFilters(): string;
    isEmptyAfterSelection(): boolean;
    onChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileSelectDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FileSelectDirective, "[ng2FileSelect]", never, { "uploader": "uploader"; }, { "onFileSelected": "onFileSelected"; }, never, never, false>;
}
//# sourceMappingURL=file-select.directive.d.ts.map