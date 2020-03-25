"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    isOpen: '|`boolean`|false|可以显示指定dropdown是否打开|',
    disabled: '|`boolean`|false|设置为true禁用dropdown|',
    trigger: '|`\'click\'\|\'hover\'`|\'click\'|dropdown触发方式|',
    closeScope: '|`\'all\'\|\'blank\'`|\'all\'|点击关闭区域，blank点击非菜单空白才关闭|',
    toggleEvent: '|`boolean`|dropdown菜单展开和收起的事件|',
    alignOrigin: '|`HTMLElement`|dDropDownToggle所在对象|指定对齐的对象|',
    appendToBodyDirections: '|`Array<AppendToBodyDirection\|ConnectedPosition>`|`[\'rightDown\',\'leftDown\',\'rightUp\',\'leftUp\']`|方向数组优先采用数组里靠前的位置|',
    rightDown: '|相对于对齐对象显示在`右下`方向，即左对齐，显示在下方（注意右下是左对齐的）|',
    rightUp: '|相对于对齐对象显示在`右上`方向，即左对齐，显示在上方|',
    leftUp: '|相对于对齐对象显示在`左上`方向，即右对齐，显示在上方|',
    leftDown: '|相对于对齐对象显示在`左下`方向，即右对齐，显示在下方|',
    centerDown: '|相对于对齐对象显示在`居中下`方向，即居中对齐，显示在下方|',
    centerUp: '|相对于对齐对象显示在`居中上`方向，即居中对齐，显示在上方|',
    toggleOnFocus: '|`boolean`|false|通过Tab聚焦的时候自动展开|',
    autoFocus: '|`boolean`|false|实例化后自动聚焦|',
};
//# sourceMappingURL=dropdown.js.map