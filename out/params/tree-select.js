"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-03-28 10:28:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\params\tree-select.ts
 */
exports.default = {
    placeholder: '|string|--|可选，占位字符串|',
    disabled: '|boolean|false|可选，禁止输入态|',
    expandTree: '|boolean|false|可选，是否自动展开树|',
    multiple: '|boolean|false|可选，多选开关|',
    treeNodeIdKey: '|string|\'id\'|可选，id键值名|',
    treeNodeChildrenKey: '|string|\'children\'|可选，children子节点键值名|',
    disabledKey: '|string|\'disabled\'|可选，disabled节点禁选键值名|',
    leafOnly: '|boolean|false|可选，仅叶节点可选开关|',
    delimiter: '|string|,|可选，选中结果分隔符（用于多选）|',
    iconParentOpen: '|string|DefaultIcons.iconParentOpen|可选，树节点打开时图标|',
    iconParentClose: '|string|DefaultIcons.iconParentClose|可选，树节点关闭时图标|',
    iconLeaf: '|string|DefaultIcons.iconLeaf|可选，节点图标|',
    closeOnNodeSelected: '|boolean|true|可选，选中节点时关闭下拉框的开关（仅用于单选）|',
    width: '|\'auto\'\|\'~px\'\|\'~%\'|--|可选，下拉框宽度|',
    searchable: '|boolean|false|可选，是否可搜索树|',
    readyEvent: '|function|(treeSelect:TreeSelectComponent)=>{}|可选，当组件初始化完成时可调用的钩子函数|',
    appendTo: '|string|--|可选，将下拉框附着到输入值的DOM选择器节点中，值为空时下拉框在此组件内|',
    allowUnselect: '|boolean|true|可选，是否允许单选模式下反选已选中的项目|',
    iconTemplatePosition: '|\'before-checkbox\'\|\'after-checkbox\'|\'before-checkbox\'|可选，自定义template的位置|',
    allowClear: '|boolean|false|可选，是否允许单选模式下点击输入框上的清除按钮来清空已选中的项目。allowUnselect必须为true，否则将破坏体验一致性规则。|',
};
//# sourceMappingURL=tree-select.js.map