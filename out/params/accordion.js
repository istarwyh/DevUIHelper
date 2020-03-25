"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    param: '参数',
    data: '|`Array<any>`或`AccordionMenuType`|--|必填，数据源，可以自定义数组或者使用预设的`AccordionMenuType`|',
    titleKey: '|`string`|\'title\'|可选，标题的属性名，item[titleKey]类型为`string`，为标题显示内容|',
    loadingKey: '|`string`|\'loading\'|可选，子菜单是否加载中的判断属性名，item[loadingKey]类型为`boolean`|',
    childrenKey: '|`string`|\'children\'|可选，子菜单的属性名，item[children]类型为`Array<any>`|',
    disabledKey: '|`string`|\'disabled\'|可选，是否禁用的属性名，item[disabledKey]类型为`boolean`|',
    activeKey: '|`string`|\'active\'|可选，子菜单是否激活的属性名，item[activeKey]类型为`boolean`|',
    openKey: '|`string`|\'open\'|可选，菜单是否展开的属性名，item[openKey]类型为`boolean`|',
    restrictOneOpen: '|`boolean`|false|可选，限制一级菜单同时只能打开一个，默认不限制|',
};
//# sourceMappingURL=accordion.js.map