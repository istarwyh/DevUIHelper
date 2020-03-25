"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    dragData: '|`any`|null|可选，转递给`DropEvent`事件的数据.|',
    dragScope: '|`string\|Array<string>`|\'default\'|可选，限制drop的位置，必须匹配对应的`dropScope`|',
    dragOverClass: '|`string`|null|可选，拖动时被拖动元素的css|',
    draghandle: '|`string`|null|可选，拖动句柄，css选择器，只有被选中的元素才能响应拖动事件|',
    disabled: '|`boolean`|false|可选，控制当前元素是否可拖动false为可以，true为不可以|',
    enableDragFollow: '|`boolean`|false|可选，是否启用实体元素跟随（可以添加更多特效，如阴影等）|',
    dragStartEvent: '|`DragEvent`|开始拖动|',
    dragEndEvent: '|`DragEvent`|拖动结束|',
    dropEndEvent: '|`DragEvent`|放置结束|',
    dropScope: '|`string\|Array<string>`|\'default\'|可选，限制drop的区域，对应dragScope|',
    placeholderStyle: '|`object`|{backgroundColor:\'#6A98E3\',opacity:\'.4\'}|可选，允许sort时，用于占位显示|',
    placeholderText: '|`string`|\'\'|可选，允许sort时，用于占位显示内部的文字|',
    allowDropOnItem: '|`boolean`|false|可选，允许sort时，用于允许拖动到元素上，方便树形结构的拖动可以成为元素的子节点|',
    dragOverItemClass: '|`string`|--|可选，`allowDropOnItem`为`true`时，才有效，用于允许拖动到元素上后，被命中的元素增加样式|',
    nestingTargetRect: '|`{height?:number,width?:number}`|--|可选，用于修正有内嵌列表后，父项高度被撑大，此处height，width为父项自己的高度（用于纵向拖动），宽度（用于横向拖动）|',
    dragEnterEvent: '|`DragEvent`|drag元素进入|',
    dragOverEvent: '|`DragEvent`|drag元素在drop上|',
    dragLeaveEvent: '|`DragEvent`|drag元素离开|',
    dropEvent: '|`DropEvent`(见下文定义)|放置一个元素,接收的时间|',
};
//# sourceMappingURL=dragdrop.js.map