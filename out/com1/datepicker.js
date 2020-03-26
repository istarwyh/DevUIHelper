"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    cssClass: '|string|--|可选，自定义class|',
    locale: '|string|\'zh-cn\'|可选，时区|',
    showTime: '|boolean|false|可选，是否显示时分秒|',
    yearNumber: '|number|12|可选，下拉年份显示数量|',
    disabled: '|boolean|false|可选，禁用选择|',
    direction: '|\'up\'\|\'down\'|\'down\'|可选，日期弹出方向|',
    dateConverter: '|function|DefaultDateConverter|可选，日期格式化、解析函数|',
    dateConfig: '|any|见下方介绍|可选，配置参数|',
    dateFormat: '|any|\'YYYY-MM-DD\'\|\'YYYY-MM-DDHH:mm\'|可选，传入格式化，根据是否showTime区别不同默认值|',
    minDate: '|Date|newDate(\'01/01/190000:00:00\')|可选，限制最小可选日期|',
    maxDate: '|Date|newDate(\'11/31/209923:59:59\')|可选，限制最大可选日期|',
    autoOpen: '|boolean|false|可选，初始化是否直接展开|',
    customViewTemplate: '|template|--|可选，自定义快捷设置日期或自定义操作区内容，用法见demo|',
};
//# sourceMappingURL=datepicker.js.map