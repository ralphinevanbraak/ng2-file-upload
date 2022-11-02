export class FileType {
    static getMimeClass(file) {
        let mimeClass = 'application';
        if (file?.type && this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file?.type?.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file?.type?.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file?.type?.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file?.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (file?.type && this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (file?.type && this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (file?.type && this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (file?.type && this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application' && file?.name) {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    }
    static fileTypeDetection(inputFilename) {
        const types = {
            jpg: 'image',
            jpeg: 'image',
            tif: 'image',
            psd: 'image',
            bmp: 'image',
            png: 'image',
            nef: 'image',
            tiff: 'image',
            cr2: 'image',
            dwg: 'image',
            cdr: 'image',
            ai: 'image',
            indd: 'image',
            pin: 'image',
            cdp: 'image',
            skp: 'image',
            stp: 'image',
            '3dm': 'image',
            mp3: 'audio',
            wav: 'audio',
            wma: 'audio',
            mod: 'audio',
            m4a: 'audio',
            compress: 'compress',
            zip: 'compress',
            rar: 'compress',
            '7z': 'compress',
            lz: 'compress',
            z01: 'compress',
            bz2: 'compress',
            gz: 'compress',
            pdf: 'pdf',
            xls: 'xls',
            xlsx: 'xls',
            ods: 'xls',
            mp4: 'video',
            avi: 'video',
            wmv: 'video',
            mpg: 'video',
            mts: 'video',
            flv: 'video',
            '3gp': 'video',
            vob: 'video',
            m4v: 'video',
            mpeg: 'video',
            m2ts: 'video',
            mov: 'video',
            doc: 'doc',
            docx: 'doc',
            eps: 'doc',
            txt: 'doc',
            odt: 'doc',
            rtf: 'doc',
            ppt: 'ppt',
            pptx: 'ppt',
            pps: 'ppt',
            ppsx: 'ppt',
            odp: 'ppt'
        };
        const chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        const extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    }
}
/*  MS office  */
// tslint:disable-next-line:variable-name
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
// tslint:disable-next-line:variable-name
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
// tslint:disable-next-line:variable-name
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
// tslint:disable-next-line:variable-name
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
// tslint:disable-next-line:variable-name
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream',
    'application/x-zip-compressed',
    'application/zip-compressed',
    'application/x-7z-compressed',
    'application/gzip',
    'application/x-bzip2'
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS10eXBlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZzItZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS10eXBlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxRQUFRO0lBaUVuQixNQUFNLENBQUMsWUFBWSxDQUFDLElBQW9CO1FBQ3RDLElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3pELFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FDckI7YUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLEtBQUssaUJBQWlCLEVBQUU7WUFDM0MsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDckUsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUN4QjthQUFNLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8s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QW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtDQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZUxpa2VPYmplY3QgfSBmcm9tICcuLi9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBGaWxlVHlwZSB7XG4gIC8qICBNUyBvZmZpY2UgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHN0YXRpYyBtaW1lX2RvYzogc3RyaW5nW10gPSBbXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwudGVtcGxhdGUnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtd29yZC5kb2N1bWVudC5tYWNyb0VuYWJsZWQuMTInLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtd29yZC50ZW1wbGF0ZS5tYWNyb0VuYWJsZWQuMTInXG4gIF07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHN0YXRpYyBtaW1lX3hzbDogc3RyaW5nW10gPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwudGVtcGxhdGUnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuc2hlZXQubWFjcm9FbmFibGVkLjEyJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnRlbXBsYXRlLm1hY3JvRW5hYmxlZC4xMicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC5hZGRpbi5tYWNyb0VuYWJsZWQuMTInLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuc2hlZXQuYmluYXJ5Lm1hY3JvRW5hYmxlZC4xMidcbiAgXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgc3RhdGljIG1pbWVfcHB0OiBzdHJpbmdbXSA9IFtcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnRlbXBsYXRlJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnNsaWRlc2hvdycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50LmFkZGluLm1hY3JvRW5hYmxlZC4xMicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50LnByZXNlbnRhdGlvbi5tYWNyb0VuYWJsZWQuMTInLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5wcmVzZW50YXRpb24ubWFjcm9FbmFibGVkLjEyJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQuc2xpZGVzaG93Lm1hY3JvRW5hYmxlZC4xMidcbiAgXTtcblxuICAvKiBQU0QgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgc3RhdGljIG1pbWVfcHNkOiBzdHJpbmdbXSA9IFtcbiAgICAnaW1hZ2UvcGhvdG9zaG9wJyxcbiAgICAnaW1hZ2UveC1waG90b3Nob3AnLFxuICAgICdpbWFnZS9wc2QnLFxuICAgICdhcHBsaWNhdGlvbi9waG90b3Nob3AnLFxuICAgICdhcHBsaWNhdGlvbi9wc2QnLFxuICAgICd6ei1hcHBsaWNhdGlvbi96ei13aW5hc3NvYy1wc2QnXG4gIF07XG5cbiAgLyogQ29tcHJlc3NlZCBmaWxlcyAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBzdGF0aWMgbWltZV9jb21wcmVzczogc3RyaW5nW10gPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtZ3RhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3gtZ2NvbXByZXNzJyxcbiAgICAnYXBwbGljYXRpb24vY29tcHJlc3MnLFxuICAgICdhcHBsaWNhdGlvbi94LXRhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3gtcmFyLWNvbXByZXNzZWQnLFxuICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICdhcHBsaWNhdGlvbi94LXppcC1jb21wcmVzc2VkJyxcbiAgICAnYXBwbGljYXRpb24vemlwLWNvbXByZXNzZWQnLFxuICAgICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxuICAgICdhcHBsaWNhdGlvbi9nemlwJyxcbiAgICAnYXBwbGljYXRpb24veC1iemlwMidcbiAgXTtcblxuICBzdGF0aWMgZ2V0TWltZUNsYXNzKGZpbGU6IEZpbGVMaWtlT2JqZWN0KTogc3RyaW5nIHtcbiAgICBsZXQgbWltZUNsYXNzID0gJ2FwcGxpY2F0aW9uJztcbiAgICBpZiAoZmlsZT8udHlwZSAmJiB0aGlzLm1pbWVfcHNkLmluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTEpIHtcbiAgICAgIG1pbWVDbGFzcyA9ICdpbWFnZSc7XG4gICAgfSBlbHNlIGlmIChmaWxlPy50eXBlPy5tYXRjaCgnaW1hZ2UuKicpKSB7XG4gICAgICBtaW1lQ2xhc3MgPSAnaW1hZ2UnO1xuICAgIH0gZWxzZSBpZiAoZmlsZT8udHlwZT8ubWF0Y2goJ3ZpZGVvLionKSkge1xuICAgICAgbWltZUNsYXNzID0gJ3ZpZGVvJztcbiAgICB9IGVsc2UgaWYgKGZpbGU/LnR5cGU/Lm1hdGNoKCdhdWRpby4qJykpIHtcbiAgICAgIG1pbWVDbGFzcyA9ICdhdWRpbyc7XG4gICAgfSBlbHNlIGlmIChmaWxlPy50eXBlID09PSAnYXBwbGljYXRpb24vcGRmJykge1xuICAgICAgbWltZUNsYXNzID0gJ3BkZic7XG4gICAgfSBlbHNlIGlmIChmaWxlPy50eXBlICYmIHRoaXMubWltZV9jb21wcmVzcy5pbmRleE9mKGZpbGUudHlwZSkgIT09IC0xKSB7XG4gICAgICBtaW1lQ2xhc3MgPSAnY29tcHJlc3MnO1xuICAgIH0gZWxzZSBpZiAoZmlsZT8udHlwZSAmJiB0aGlzLm1pbWVfZG9jLmluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTEpIHtcbiAgICAgIG1pbWVDbGFzcyA9ICdkb2MnO1xuICAgIH0gZWxzZSBpZiAoZmlsZT8udHlwZSAmJiB0aGlzLm1pbWVfeHNsLmluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTEpIHtcbiAgICAgIG1pbWVDbGFzcyA9ICd4bHMnO1xuICAgIH0gZWxzZSBpZiAoZmlsZT8udHlwZSAmJiB0aGlzLm1pbWVfcHB0LmluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTEpIHtcbiAgICAgIG1pbWVDbGFzcyA9ICdwcHQnO1xuICAgIH1cbiAgICBpZiAobWltZUNsYXNzID09PSAnYXBwbGljYXRpb24nICYmIGZpbGU/Lm5hbWUpIHtcbiAgICAgIG1pbWVDbGFzcyA9IHRoaXMuZmlsZVR5cGVEZXRlY3Rpb24oZmlsZS5uYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWltZUNsYXNzO1xuICB9XG5cbiAgc3RhdGljIGZpbGVUeXBlRGV0ZWN0aW9uKGlucHV0RmlsZW5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdHlwZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSA9IHtcbiAgICAgIGpwZzogJ2ltYWdlJyxcbiAgICAgIGpwZWc6ICdpbWFnZScsXG4gICAgICB0aWY6ICdpbWFnZScsXG4gICAgICBwc2Q6ICdpbWFnZScsXG4gICAgICBibXA6ICdpbWFnZScsXG4gICAgICBwbmc6ICdpbWFnZScsXG4gICAgICBuZWY6ICdpbWFnZScsXG4gICAgICB0aWZmOiAnaW1hZ2UnLFxuICAgICAgY3IyOiAnaW1hZ2UnLFxuICAgICAgZHdnOiAnaW1hZ2UnLFxuICAgICAgY2RyOiAnaW1hZ2UnLFxuICAgICAgYWk6ICdpbWFnZScsXG4gICAgICBpbmRkOiAnaW1hZ2UnLFxuICAgICAgcGluOiAnaW1hZ2UnLFxuICAgICAgY2RwOiAnaW1hZ2UnLFxuICAgICAgc2twOiAnaW1hZ2UnLFxuICAgICAgc3RwOiAnaW1hZ2UnLFxuICAgICAgJzNkbSc6ICdpbWFnZScsXG4gICAgICBtcDM6ICdhdWRpbycsXG4gICAgICB3YXY6ICdhdWRpbycsXG4gICAgICB3bWE6ICdhdWRpbycsXG4gICAgICBtb2Q6ICdhdWRpbycsXG4gICAgICBtNGE6ICdhdWRpbycsXG4gICAgICBjb21wcmVzczogJ2NvbXByZXNzJyxcbiAgICAgIHppcDogJ2NvbXByZXNzJyxcbiAgICAgIHJhcjogJ2NvbXByZXNzJyxcbiAgICAgICc3eic6ICdjb21wcmVzcycsXG4gICAgICBsejogJ2NvbXByZXNzJyxcbiAgICAgIHowMTogJ2NvbXByZXNzJyxcbiAgICAgIGJ6MjogJ2NvbXByZXNzJyxcbiAgICAgIGd6OiAnY29tcHJlc3MnLFxuICAgICAgcGRmOiAncGRmJyxcbiAgICAgIHhsczogJ3hscycsXG4gICAgICB4bHN4OiAneGxzJyxcbiAgICAgIG9kczogJ3hscycsXG4gICAgICBtcDQ6ICd2aWRlbycsXG4gICAgICBhdmk6ICd2aWRlbycsXG4gICAgICB3bXY6ICd2aWRlbycsXG4gICAgICBtcGc6ICd2aWRlbycsXG4gICAgICBtdHM6ICd2aWRlbycsXG4gICAgICBmbHY6ICd2aWRlbycsXG4gICAgICAnM2dwJzogJ3ZpZGVvJyxcbiAgICAgIHZvYjogJ3ZpZGVvJyxcbiAgICAgIG00djogJ3ZpZGVvJyxcbiAgICAgIG1wZWc6ICd2aWRlbycsXG4gICAgICBtMnRzOiAndmlkZW8nLFxuICAgICAgbW92OiAndmlkZW8nLFxuICAgICAgZG9jOiAnZG9jJyxcbiAgICAgIGRvY3g6ICdkb2MnLFxuICAgICAgZXBzOiAnZG9jJyxcbiAgICAgIHR4dDogJ2RvYycsXG4gICAgICBvZHQ6ICdkb2MnLFxuICAgICAgcnRmOiAnZG9jJyxcbiAgICAgIHBwdDogJ3BwdCcsXG4gICAgICBwcHR4OiAncHB0JyxcbiAgICAgIHBwczogJ3BwdCcsXG4gICAgICBwcHN4OiAncHB0JyxcbiAgICAgIG9kcDogJ3BwdCdcbiAgICB9O1xuXG4gICAgY29uc3QgY2h1bmtzID0gaW5wdXRGaWxlbmFtZS5zcGxpdCgnLicpO1xuICAgIGlmIChjaHVua3MubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbic7XG4gICAgfVxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IGNodW5rc1sgY2h1bmtzLmxlbmd0aCAtIDEgXS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0eXBlc1sgZXh0ZW5zaW9uIF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0eXBlc1sgZXh0ZW5zaW9uIF07XG4gICAgfVxuICB9XG59XG4iXX0=