import { Directive, EventEmitter, ElementRef, Input, HostListener, Output } from '@angular/core';
import { FileUploader } from './file-uploader.class';
import * as i0 from "@angular/core";
export class FileSelectDirective {
    constructor(element) {
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onFileSelected = new EventEmitter();
        this.element = element;
    }
    getOptions() {
        return this.uploader?.options;
    }
    getFilters() {
        return '';
    }
    isEmptyAfterSelection() {
        return !!this.element.nativeElement.attributes.multiple;
    }
    onChange() {
        const files = this.element.nativeElement.files;
        const options = this.getOptions();
        const filters = this.getFilters();
        this.uploader?.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    }
}
FileSelectDirective.ɵfac = function FileSelectDirective_Factory(t) { return new (t || FileSelectDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
FileSelectDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FileSelectDirective, selectors: [["", "ng2FileSelect", ""]], hostBindings: function FileSelectDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("change", function FileSelectDirective_change_HostBindingHandler() { return ctx.onChange(); });
    } }, inputs: { uploader: "uploader" }, outputs: { onFileSelected: "onFileSelected" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileSelectDirective, [{
        type: Directive,
        args: [{ selector: '[ng2FileSelect]' }]
    }], function () { return [{ type: i0.ElementRef }]; }, { uploader: [{
            type: Input
        }], onFileSelected: [{
            type: Output
        }], onChange: [{
            type: HostListener,
            args: ['change']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZzItZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRyxPQUFPLEVBQUUsWUFBWSxFQUF1QixNQUFNLHVCQUF1QixDQUFDOztBQUcxRSxNQUFNLE9BQU8sbUJBQW1CO0lBTzlCLFlBQVksT0FBbUI7UUFML0IsK0RBQStEO1FBQ3JELG1CQUFjLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFLMUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDMUQsQ0FBQztJQUdELFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7O3NGQWxDVSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtrR0FBbkIsY0FBVTs7dUZBQVYsbUJBQW1CO2NBRC9CLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTs2REFFL0IsUUFBUTtrQkFBaEIsS0FBSztZQUVJLGNBQWM7a0JBQXZCLE1BQU07WUFxQlAsUUFBUTtrQkFEUCxZQUFZO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRlciwgRmlsZVVwbG9hZGVyT3B0aW9ucyB9IGZyb20gJy4vZmlsZS11cGxvYWRlci5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZzJGaWxlU2VsZWN0XScgfSlcbmV4cG9ydCBjbGFzcyBGaWxlU2VsZWN0RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgdXBsb2FkZXI/OiBGaWxlVXBsb2FkZXI7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCkgb25GaWxlU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG5cbiAgcHJvdGVjdGVkIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBnZXRPcHRpb25zKCk6IEZpbGVVcGxvYWRlck9wdGlvbnMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnVwbG9hZGVyPy5vcHRpb25zO1xuICB9XG5cbiAgZ2V0RmlsdGVycygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlzRW1wdHlBZnRlclNlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLm11bHRpcGxlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJylcbiAgb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5maWxlcztcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuZ2V0RmlsdGVycygpO1xuICAgIHRoaXMudXBsb2FkZXI/LmFkZFRvUXVldWUoZmlsZXMsIG9wdGlvbnMsIGZpbHRlcnMpO1xuXG4gICAgdGhpcy5vbkZpbGVTZWxlY3RlZC5lbWl0KGZpbGVzKTtcbiAgICBpZiAodGhpcy5pc0VtcHR5QWZ0ZXJTZWxlY3Rpb24oKSkge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==