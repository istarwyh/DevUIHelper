"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    beforeUpload: '| `boolean 、 Promise<boolean> 、 Observable<boolean>` | 上传前的回调，通过返回`true` or `false` ,控制文件是否上传',
    fileOver: '`EventEmitter<any>`| 支持拖拽上传时，文件移动到可拖放区域触发事件,可拖动的元素移出放置目标时返回`false`，元素正在拖动到放置目标时返回`true`',
    fileDrop: 'EventEmitter<any>| 支持拖拽上传时，当前拖拽的文件列表回调，单文件上传默认返回第一个文件',
    successEvent: '`EventEmitter<any>`| 上传成功时的回调函数,返回文件及 xhr 的响应信息',
    errorEvent: '`EventEmitter<any>`| 上传错误时的回调函数，返回上传失败的错误信息',
    deleteUploadedFileEvent: '`EventEmitter<any>`| 删除上传文件的回调函数，返回删除文件的路径信息',
};
//# sourceMappingURL=upload.js.map