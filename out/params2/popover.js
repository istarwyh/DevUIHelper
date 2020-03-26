"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    content: '|string|--|必选，弹出框的显示内容|',
    visible: '|boolean|false|可选，弹框的初始化弹出状态|',
    trigger: '|\'hover\'\|\'click\'|\'click\'|弹框触发方式|',
    controlled: '|boolean|false|可选，是否通过trigger方式触发弹框|',
    position: '|\'top\'\|\'right\'\|\'bottom\'\|\'left\'|\'top\'|可选，内容弹出方向|',
    popType: '|\'success\'\|\'error\'\|\'warning\'\|\'info\'\|\'default\'|\'default\'|可选，弹出框类型，样式不同|',
    showAnimate: '|boolean|false|可选，是否显示动画|',
    appendToBody: '|boolean|true|可选，默认为true，仅当popover绑定元素外层宽高不够时，overflow为hidden，popover的弹出框不会被一并隐藏掉。|',
    zIndex: '|number|1060|可选，z-index值，用于手动控制层高|',
    scrollElement: '|Element|window|可选，在这里默认是window,只有当页面的滚动不在window上且appendToBody的属性为true时候才需要传值|',
    hoverToContent: '|boolean|false|可选，是否允许鼠标从宿主移动到内容上，仅需要在trigger为hover的时候设置|',
};
//# sourceMappingURL=popover.js.map