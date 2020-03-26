"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    orientation: '|\'vertical\'\|\'horizontal\'|\'horizontal\'|可选，指定Splitter分割方向,可选值\'vertical\'\|\'horizontal\'|',
    splitBarSize: '|string|\'2px\'|可选，分隔条大小，默认2px|',
    disabledBarSize: '|string|\'1px\'|可选，pane设置不可调整宽度时生效|',
    size: '|string|--|可选，指定pane宽度，设置像素值或者百分比|',
    minSize: '|string|--|可选，指定pane最小宽度，设置像素值或者百分比|',
    maxSize: '|string|--|可选，指定pane最大宽度，设置像素值或者百分比|',
    resizable: '|boolean|true|可选，指定pane是否可调整大小，会影响相邻pane|',
    collapsible: '|boolean|false|可选，指定pane是否可折叠收起|',
    collapseDirection: '|\'before\'\|\'after\'\|\'both\'|\'both\'|可选，指定非边缘pane收起方向，配合collapsible使用|',
};
//# sourceMappingURL=splitter.js.map