"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    checkable: '|【可选】Datatable是否提供勾选行的功能|`boolean`|--|',
    showDetail: '|【可选】是否提供显示行详情的功能|`boolean`|--|',
    fixHeader: '|【可选】是否固定表头（在表格超过容器最大高度时，表格可滚动时生效）|`boolean`|--|',
    showSortIcon: '|【可选】是否显示排序未激活图标，默认显示|`boolean`|true|',
    dataSource: '|数据源，用于渲染表格数据|`any[]`|--|',
    hideColumn: '|【可选】用于隐藏列|`string[]`|--|',
    lazy: '|【可选】是否懒加载数据|`boolean`|false|',
    pageAllChecked: '|【可选】选中当前页所有row|`boolean`|--|',
    pager: '|【可选】内置分页|`DataTablePager`|--|',
    scrollable: '|【可选】表格在超出容器时，是否可以通过滚动查看表格内容|`boolean`|--|',
    maxWidth: '|【可选】限制表格最大宽度，默认撑满父容器|`string`|--|',
    maxHeight: '|【可选】限制最大高度，默认|`string`|--|',
    type: '|【可选】表格类型|`\'striped\'`|\'\'|',
    hover: '|【可选】表格是否开启鼠标hover行高亮效果|`boolean`|true|',
    cssClass: '|【可选】表格自定义样式|`string`|--|',
    tableWidth: '|【可选】表格宽度|`string`|100%|',
    columnDefs: '|【可选】列引用，用于列渲染|`ColumnDefs[]`|--|',
    onlyOneColumnSort: '|【可选】是否限制多列排序的输出限制为一项|`boolean`|--|',
    multiSort: '|【可选】多列选择数组，用来指导那几列会被排序|`SortEventArg`[]|[]|',
    resizeable: '|【可选】是否可以拖拽调整列宽|`boolean`|--|',
    detailTemplateRef: '|【可选】用来自定义详情页的模板|`TemplateRef`|--|',
};
//# sourceMappingURL=data-table.js.map