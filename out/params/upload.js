"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    fileOptions: '|`IFileOptions`，参考下方options|--|必选，待上传文件配置|',
    filePath: '|`string`|--|必选，文件路径|',
    uploadOptions: '|`IUploadOptions`，参考下方options|--|必选，上传配置|',
    autoUpload: '|`boolean`|false|可选，是否自动上传|',
    confirmText: '|`string`|\'确定\'|可选，错误信息弹出框中确认按钮文字|',
    preloadFilesRef: '|`TemplateRef<any>`|--|可选，用于创建自定义已选择文件列表模板|',
    uploadText: '|`string`|\'上传\'|可选，上传按钮文字|',
    uploadedFiles: '|`Array<Object>`|[]|可选，获取已上传的文件列表|',
    uploadedFilesRef: '|`TemplateRef<any>`|--|可选，用于创建自定义已上传文件列表模板|',
    withoutBtn: '|`boolean`|false|可选，是否舍弃按钮|',
    enableDrop: '|`boolean`|false|可选，是否支持拖拽|',
    beforeUpload: '|`boolean、Promise<boolean>、Observable<boolean>`|可选，上传前的回调，通过返回`true`or`false`,控制文件是否上传|',
    fileOver: '|`EventEmitter<any>`|支持拖拽上传时，文件移动到可拖放区域触发事件,可拖动的元素移出放置目标时返回`false`，元素正在拖动到放置目标时返回`true`|',
    fileDrop: '|`EventEmitter<any>`|支持拖拽上传时，当前拖拽的文件列表回调，单文件上传默认返回第一个文件|',
    successEvent: '|`EventEmitter<any>`|上传成功时的回调函数,返回文件及xhr的响应信息|',
    errorEvent: '|`EventEmitter<any>`|上传错误时的回调函数，返回上传失败的错误信息|',
    deleteUploadedFileEvent: '|`EventEmitter<any>`|删除上传文件的回调函数，返回删除文件的路径信息|',
};
//# sourceMappingURL=upload.js.map