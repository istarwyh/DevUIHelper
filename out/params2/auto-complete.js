"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    source: '|Array<any>|--|必选，有searchFn的情况下可以不必选|',
    disabled: '|boolean|false|可选，是否禁止指令|',
    cssClass: '|string|--|可选，自定义class名|',
    delay: '|number|300|可选，只有在delay时间经过后并且输入新值，才做搜索查询|',
    disabledKey: '|string|--|可选，禁用单个选项;当传入资源source选项类型为对象,比如设置为\'disabled\',则当对象的disable属性为true时，比如{label:xxx,disabled:true},该选项将禁用|',
    itemTemplate: '|TemplateRef|--|可选，自定义展示模板|',
    noResultItemTemplate: '|TemplateRef|--|可选，没有匹配项的展示结果|',
    formatter: '|Function|--|可选，格式化函数|',
    searchFn: '|Function|(term:string,target?:AutoCompleteDirective)=>Observable<any[]>|可选，自定义搜索过滤|',
    selectValue: '|Function|--|可选，选择选项之后的回调函数|',
    transInputFocusEmit: '|Function|--|可选，inputfocus和blur标志|',
    sceneType: '|string|--|可选，值为select、suggest|',
    tipsText: '|string|--|可选，提示文字|',
    overview: '|border\|none\|multiline\|single|--|可选|',
    latestSource: '|Array<any>|--|可选，最近输入|',
    enableLazyLoad: '|boolean|false|可选，是否允许懒加载|',
};
//# sourceMappingURL=auto-complete.js.map