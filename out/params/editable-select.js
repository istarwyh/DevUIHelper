"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ngModel: "| `any`          | --    | 可选，绑定选中对象，可双向绑定                    |",
    ngModelChange: "| `EventEmitter` | --    | 可选，仅支持事件绑定，用于处理选中对象发生变化       |",
    source: "| `any[]`        | --   | 必选，菜单的条目                             |",
    disabled: "| `boolean`      | false     | 可选，值为true禁用下拉框         |",
    disabledKey: "   | `string`      | --     | 可选，设置禁用选项的Key值         |",
    placeholder: "| `string`       | ''        | 可选，没有选中项的时候提示文字    |",
    itemTemplate: "| `TemplateRef`  | --      | 可选，下拉菜单条目的模板           ｜",
    noResultItemTemplate: "| `TemplateRef`  | --      | 可选，下拉菜单条目搜索后没有结果的模版|",
    maxHeight: "| `number`       | --      | 可选，下拉菜单的最大高度           ｜",
    searchFn: "| `Function`      | (term: string) => Observable<any[]> | 可选，自定义搜索函数|",
    enableLazyLoad: "      | `boolean`      | false | 可选，是否允许懒加载  |",
};
//# sourceMappingURL=editable-select.js.map