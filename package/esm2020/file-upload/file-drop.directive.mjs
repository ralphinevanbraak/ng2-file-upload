import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileUploader } from './file-uploader.class';
import * as i0 from "@angular/core";
export class FileDropDirective {
    constructor(element) {
        this.fileOver = new EventEmitter();
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onFileDrop = new EventEmitter();
        this.element = element;
    }
    getOptions() {
        return this.uploader?.options;
    }
    getFilters() {
        return '';
    }
    onDrop(event) {
        const transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        const options = this.getOptions();
        const filters = this.getFilters();
        this._preventAndStop(event);
        if (options) {
            this.uploader?.addToQueue(transfer.files, options, filters);
        }
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    }
    onDragOver(event) {
        const transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    }
    onDragLeave(event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    }
    _getTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    }
    _preventAndStop(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    _haveFiles(types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    }
}
FileDropDirective.ɵfac = function FileDropDirective_Factory(t) { return new (t || FileDropDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FileDropDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FileDropDirective, selectors: [["", "ng2FileDrop", ""]], hostBindings: function FileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("drop", function FileDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function FileDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
    } }, inputs: { uploader: "uploader" }, outputs: { fileOver: "fileOver", onFileDrop: "onFileDrop" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileDropDirective, [{
        type: Directive,
        args: [{ selector: '[ng2FileDrop]' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { uploader: [{
            type: Input
        }], fileOver: [{
            type: Output
        }], onFileDrop: [{
            type: Output
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }], onDragOver: [{
            type: HostListener,
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvbmcyLWZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkL2ZpbGUtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpHLE9BQU8sRUFBRSxZQUFZLEVBQXVCLE1BQU0sdUJBQXVCLENBQUM7O0FBRzFFLE1BQU0sT0FBTyxpQkFBaUI7SUFRNUIsWUFBWSxPQUFtQjtRQU5wQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsK0RBQStEO1FBQ3BELGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUt2RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFHRCxNQUFNLENBQUMsS0FBaUI7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTztTQUNSO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdELFVBQVUsQ0FBQyxLQUFpQjtRQUMxQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQyxPQUFPO1NBQ1I7UUFFRCxRQUFRLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFHRCxXQUFXLENBQUMsS0FBaUI7UUFDM0IsSUFBSyxJQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3pCLElBQUksS0FBSyxDQUFDLGFBQWEsS0FBTSxJQUFZLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxFQUFFO2dCQUN0RCxPQUFPO2FBQ1I7U0FDRjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVTLFlBQVksQ0FBQyxLQUFVO1FBQy9CLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjO0lBQ25HLENBQUM7SUFFUyxlQUFlLENBQUMsS0FBaUI7UUFDekMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRVMsVUFBVSxDQUFDLEtBQVU7UUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7O2tGQWxGVSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtrR0FBakIsa0JBQWMseUZBQWQsc0JBQWtCLDJGQUFsQix1QkFBbUI7O3VGQUFuQixpQkFBaUI7Y0FEN0IsU0FBUztlQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs2REFFNUIsUUFBUTtrQkFBakIsS0FBSztZQUNLLFFBQVE7a0JBQWxCLE1BQU07WUFFSSxVQUFVO2tCQUFwQixNQUFNO1lBaUJQLE1BQU07a0JBREwsWUFBWTttQkFBQyxNQUFNLEVBQUUsQ0FBRSxRQUFRLENBQUU7WUFrQmxDLFVBQVU7a0JBRFQsWUFBWTttQkFBQyxVQUFVLEVBQUUsQ0FBRSxRQUFRLENBQUU7WUFhdEMsV0FBVztrQkFEVixZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmlsZVVwbG9hZGVyLCBGaWxlVXBsb2FkZXJPcHRpb25zIH0gZnJvbSAnLi9maWxlLXVwbG9hZGVyLmNsYXNzJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nMkZpbGVEcm9wXScgfSlcbmV4cG9ydCBjbGFzcyBGaWxlRHJvcERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpICB1cGxvYWRlcj86IEZpbGVVcGxvYWRlcjtcbiAgQE91dHB1dCgpICBmaWxlT3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgIG9uRmlsZURyb3A6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG5cbiAgcHJvdGVjdGVkIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBnZXRPcHRpb25zKCk6IEZpbGVVcGxvYWRlck9wdGlvbnMgfCB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy51cGxvYWRlcj8ub3B0aW9ucztcbiAgfVxuXG4gIGdldEZpbHRlcnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyAnJGV2ZW50JyBdKVxuICBvbkRyb3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0cmFuc2ZlciA9IHRoaXMuX2dldFRyYW5zZmVyKGV2ZW50KTtcbiAgICBpZiAoIXRyYW5zZmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnMoKTtcbiAgICB0aGlzLl9wcmV2ZW50QW5kU3RvcChldmVudCk7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMudXBsb2FkZXI/LmFkZFRvUXVldWUodHJhbnNmZXIuZmlsZXMsIG9wdGlvbnMsIGZpbHRlcnMpO1xuICAgIH1cbiAgICB0aGlzLmZpbGVPdmVyLmVtaXQoZmFsc2UpO1xuICAgIHRoaXMub25GaWxlRHJvcC5lbWl0KHRyYW5zZmVyLmZpbGVzKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyAnJGV2ZW50JyBdKVxuICBvbkRyYWdPdmVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdHJhbnNmZXIgPSB0aGlzLl9nZXRUcmFuc2ZlcihldmVudCk7XG4gICAgaWYgKCF0aGlzLl9oYXZlRmlsZXModHJhbnNmZXIudHlwZXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICB0aGlzLl9wcmV2ZW50QW5kU3RvcChldmVudCk7XG4gICAgdGhpcy5maWxlT3Zlci5lbWl0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyAnJGV2ZW50JyBdKVxuICBvbkRyYWdMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcyBhcyBhbnkpLmVsZW1lbnQpIHtcbiAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0ID09PSAodGhpcyBhcyBhbnkpLmVsZW1lbnRbIDAgXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcHJldmVudEFuZFN0b3AoZXZlbnQpO1xuICAgIHRoaXMuZmlsZU92ZXIuZW1pdChmYWxzZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFRyYW5zZmVyKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIgOiBldmVudC5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2ZlcjsgLy8galF1ZXJ5IGZpeDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcHJldmVudEFuZFN0b3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9oYXZlRmlsZXModHlwZXM6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghdHlwZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZXMuaW5kZXhPZikge1xuICAgICAgcmV0dXJuIHR5cGVzLmluZGV4T2YoJ0ZpbGVzJykgIT09IC0xO1xuICAgIH0gZWxzZSBpZiAodHlwZXMuY29udGFpbnMpIHtcbiAgICAgIHJldHVybiB0eXBlcy5jb250YWlucygnRmlsZXMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19