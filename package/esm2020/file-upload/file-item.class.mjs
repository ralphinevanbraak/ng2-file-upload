import { FileLikeObject } from './file-like-object.class';
export class FileItem {
    constructor(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    upload() {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    }
    cancel() {
        this.uploader.cancelItem(this);
    }
    remove() {
        this.uploader.removeFromQueue(this);
    }
    onBeforeUpload() {
        return void 0;
    }
    onBuildForm(form) {
        return { form };
    }
    onProgress(progress) {
        return { progress };
    }
    onSuccess(response, status, headers) {
        return { response, status, headers };
    }
    onError(response, status, headers) {
        return { response, status, headers };
    }
    onCancel(response, status, headers) {
        return { response, status, headers };
    }
    onComplete(response, status, headers) {
        return { response, status, headers };
    }
    _onBeforeUpload() {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    }
    _onBuildForm(form) {
        this.onBuildForm(form);
    }
    _onProgress(progress) {
        this.progress = progress;
        this.onProgress(progress);
    }
    _onSuccess(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = undefined;
        this.onSuccess(response, status, headers);
    }
    _onError(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = undefined;
        this.onError(response, status, headers);
    }
    _onCancel(response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = undefined;
        this.onCancel(response, status, headers);
    }
    _onComplete(response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    }
    _prepareToUploading() {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pdGVtLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicy9uZzItZmlsZS11cGxvYWQvZmlsZS11cGxvYWQvZmlsZS1pdGVtLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUcxRCxNQUFNLE9BQU8sUUFBUTtJQXdCbEIsWUFBWSxRQUFzQixFQUFFLElBQVUsRUFBRSxPQUE0QjtRQXBCNUUsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUVWLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQVVaLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElB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QUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVBLFFBQVEsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxPQUE4QjtRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVBLFNBQVMsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxPQUE4QjtRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVBLFdBQVcsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxPQUE4QjtRQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFQSxtQkFBbUI7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZUxpa2VPYmplY3QgfSBmcm9tICcuL2ZpbGUtbGlrZS1vYmplY3QuY2xhc3MnO1xuaW1wb3J0IHsgRmlsZVVwbG9hZGVyLCBQYXJzZWRSZXNwb25zZUhlYWRlcnMsIEZpbGVVcGxvYWRlck9wdGlvbnMgfSBmcm9tICcuL2ZpbGUtdXBsb2FkZXIuY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgRmlsZUl0ZW0ge1xuICAgZmlsZTogRmlsZUxpa2VPYmplY3Q7XG4gICBfZmlsZTogRmlsZTtcbiAgIGFsaWFzPzogc3RyaW5nO1xuICAgdXJsID0gJy8nO1xuICAgbWV0aG9kPzogc3RyaW5nO1xuICAgaGVhZGVyczogYW55ID0gW107XG4gICB3aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgZm9ybURhdGE6IGFueSA9IFtdO1xuICAgaXNSZWFkeSA9IGZhbHNlO1xuICAgaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgIGlzVXBsb2FkZWQgPSBmYWxzZTtcbiAgIGlzU3VjY2VzcyA9IGZhbHNlO1xuICAgaXNDYW5jZWwgPSBmYWxzZTtcbiAgIGlzRXJyb3IgPSBmYWxzZTtcbiAgIHByb2dyZXNzID0gMDtcbiAgIGluZGV4PzogbnVtYmVyO1xuICAgX3hocj86IFhNTEh0dHBSZXF1ZXN0O1xuICAgX2Zvcm06IGFueTtcblxuICBwcm90ZWN0ZWQgdXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcbiAgcHJvdGVjdGVkIHNvbWU6IEZpbGU7XG4gIHByb3RlY3RlZCBvcHRpb25zOiBGaWxlVXBsb2FkZXJPcHRpb25zO1xuXG4gICBjb25zdHJ1Y3Rvcih1cGxvYWRlcjogRmlsZVVwbG9hZGVyLCBzb21lOiBGaWxlLCBvcHRpb25zOiBGaWxlVXBsb2FkZXJPcHRpb25zKSB7XG4gICAgdGhpcy51cGxvYWRlciA9IHVwbG9hZGVyO1xuICAgIHRoaXMuc29tZSA9IHNvbWU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmZpbGUgPSBuZXcgRmlsZUxpa2VPYmplY3Qoc29tZSk7XG4gICAgdGhpcy5fZmlsZSA9IHNvbWU7XG4gICAgaWYgKHVwbG9hZGVyLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMubWV0aG9kID0gdXBsb2FkZXIub3B0aW9ucy5tZXRob2QgfHwgJ1BPU1QnO1xuICAgICAgdGhpcy5hbGlhcyA9IHVwbG9hZGVyLm9wdGlvbnMuaXRlbUFsaWFzIHx8ICdmaWxlJztcbiAgICB9XG4gICAgdGhpcy51cmwgPSB1cGxvYWRlci5vcHRpb25zLnVybDtcbiAgfVxuXG4gICB1cGxvYWQoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudXBsb2FkZXIudXBsb2FkSXRlbSh0aGlzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnVwbG9hZGVyLl9vbkNvbXBsZXRlSXRlbSh0aGlzLCAnJywgMCwge30pO1xuICAgICAgdGhpcy51cGxvYWRlci5fb25FcnJvckl0ZW0odGhpcywgJycsIDAsIHt9KTtcbiAgICB9XG4gIH1cblxuICAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMudXBsb2FkZXIuY2FuY2VsSXRlbSh0aGlzKTtcbiAgfVxuXG4gICByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy51cGxvYWRlci5yZW1vdmVGcm9tUXVldWUodGhpcyk7XG4gIH1cblxuICAgb25CZWZvcmVVcGxvYWQoKTogdm9pZCB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuXG4gICBvbkJ1aWxkRm9ybShmb3JtOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB7IGZvcm0gfTtcbiAgfVxuXG4gICBvblByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpOiBhbnkge1xuICAgIHJldHVybiB7IHByb2dyZXNzIH07XG4gIH1cblxuICAgb25TdWNjZXNzKHJlc3BvbnNlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBQYXJzZWRSZXNwb25zZUhlYWRlcnMpOiBhbnkge1xuICAgIHJldHVybiB7IHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMgfTtcbiAgfVxuXG4gICBvbkVycm9yKHJlc3BvbnNlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBQYXJzZWRSZXNwb25zZUhlYWRlcnMpOiBhbnkge1xuICAgIHJldHVybiB7IHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMgfTtcbiAgfVxuXG4gICBvbkNhbmNlbChyZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogUGFyc2VkUmVzcG9uc2VIZWFkZXJzKTogYW55IHtcbiAgICByZXR1cm4geyByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzIH07XG4gIH1cblxuICAgb25Db21wbGV0ZShyZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogUGFyc2VkUmVzcG9uc2VIZWFkZXJzKTogYW55IHtcbiAgICByZXR1cm4geyByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzIH07XG4gIH1cblxuICAgX29uQmVmb3JlVXBsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5pc1VwbG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2FuY2VsID0gZmFsc2U7XG4gICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5vbkJlZm9yZVVwbG9hZCgpO1xuICB9XG5cbiAgIF9vbkJ1aWxkRm9ybShmb3JtOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQnVpbGRGb3JtKGZvcm0pO1xuICB9XG5cbiAgIF9vblByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgdGhpcy5vblByb2dyZXNzKHByb2dyZXNzKTtcbiAgfVxuXG4gICBfb25TdWNjZXNzKHJlc3BvbnNlOiBzdHJpbmcsIHN0YXR1czogbnVtYmVyLCBoZWFkZXJzOiBQYXJzZWRSZXNwb25zZUhlYWRlcnMpOiB2b2lkIHtcbiAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLmlzVXBsb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pc1VwbG9hZGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzU3VjY2VzcyA9IHRydWU7XG4gICAgdGhpcy5pc0NhbmNlbCA9IGZhbHNlO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgdGhpcy5pbmRleCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcbiAgfVxuXG4gICBfb25FcnJvcihyZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogUGFyc2VkUmVzcG9uc2VIZWFkZXJzKTogdm9pZCB7XG4gICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5pc1VwbG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNVcGxvYWRlZCA9IHRydWU7XG4gICAgdGhpcy5pc1N1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ2FuY2VsID0gZmFsc2U7XG4gICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLmluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub25FcnJvcihyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcbiAgfVxuXG4gICBfb25DYW5jZWwocmVzcG9uc2U6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIGhlYWRlcnM6IFBhcnNlZFJlc3BvbnNlSGVhZGVycyk6IHZvaWQge1xuICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuaXNVcGxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzVXBsb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzU3VjY2VzcyA9IGZhbHNlO1xuICAgIHRoaXMuaXNDYW5jZWwgPSB0cnVlO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuaW5kZXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkNhbmNlbChyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzKTtcbiAgfVxuXG4gICBfb25Db21wbGV0ZShyZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogUGFyc2VkUmVzcG9uc2VIZWFkZXJzKTogdm9pZCB7XG4gICAgdGhpcy5vbkNvbXBsZXRlKHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMpO1xuXG4gICAgaWYgKHRoaXMudXBsb2FkZXIub3B0aW9ucy5yZW1vdmVBZnRlclVwbG9hZCkge1xuICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICAgX3ByZXBhcmVUb1VwbG9hZGluZygpOiB2b2lkIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCB8fCArK3RoaXMudXBsb2FkZXIuX25leHRJbmRleDtcbiAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICB9XG59XG4iXX0=