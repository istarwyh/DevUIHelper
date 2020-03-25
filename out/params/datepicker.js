"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    param: '参数',
    cssClass: '|`string`|\'\'|可选，自定义class|',
    local: '|`string`|\'zh-CN\'|可选，时区|',
    showTime: '|`boolean`|false|可选，是否显示时分秒|',
    yearNumber: '|`number`|12|可选，下拉年份显示数量|',
    disabled: '|`boolean`|false|可选，禁用选择|',
    direnction: '|`\'up\'\|\'down\'`|\'down\'|可选，日期弹出方向|',
    dateConverter: '|`function`|DefaultDateConverter|可选，日期格式化、解析函数|',
    customViewTemplate: '|`tempalte`|-|可选，自定义快捷设置日期或自定义操作区内容，可以通过chooseDate(dateString:string)来设置日期	|',
    ins: '事件',
    selectedDateChange: '|object|日期发生变化回调|',
};
//# sourceMappingURL=datepicker.js.map