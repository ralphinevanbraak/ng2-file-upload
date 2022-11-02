import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FileDropDirective } from './file-drop.directive';
import { FileSelectDirective } from './file-select.directive';
import * as i0 from "@angular/core";
export { FileDropDirective } from './file-drop.directive';
export { FileSelectDirective } from './file-select.directive';
export class FileUploadModule {
}
FileUploadModule.ɵfac = function FileUploadModule_Factory(t) { return new (t || FileUploadModule)(); };
FileUploadModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FileUploadModule });
FileUploadModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileUploadModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [FileDropDirective, FileSelectDirective],
                exports: [FileDropDirective, FileSelectDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FileUploadModule, { declarations: [FileDropDirective, FileSelectDirective], imports: [CommonModule], exports: [FileDropDirective, FileSelectDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZzItZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU85RCxNQUFNLE9BQU8sZ0JBQWdCOztnRkFBaEIsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7c0VBSmhCLFlBQVk7dUZBSVosZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLENBQUU7Z0JBQ3pCLFlBQVksRUFBRSxDQUFFLGlCQUFpQixFQUFFLG1CQUFtQixDQUFFO2dCQUN4RCxPQUFPLEVBQUUsQ0FBRSxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBRTthQUNwRDs7d0ZBQ1ksZ0JBQWdCLG1CQUhYLGlCQUFpQixFQUFFLG1CQUFtQixhQUQzQyxZQUFZLGFBRVosaUJBQWlCLEVBQUUsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpbGVEcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9maWxlLWRyb3AuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbGVTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuL2ZpbGUtc2VsZWN0LmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBGaWxlRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZmlsZS1kcm9wLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBGaWxlU2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9maWxlLXNlbGVjdC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgRmlsZURyb3BEaXJlY3RpdmUsIEZpbGVTZWxlY3REaXJlY3RpdmUgXSxcbiAgZXhwb3J0czogWyBGaWxlRHJvcERpcmVjdGl2ZSwgRmlsZVNlbGVjdERpcmVjdGl2ZSBdXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRNb2R1bGUge1xufVxuIl19