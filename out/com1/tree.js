"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    tree: '|Array<ITreeItem>|--|必选，根据传入的数据进行树的渲染|',
    treeNodeIdKey: '|string|\'id\'|可选，id键值名，用来标识节点的唯一性|',
    treeNodeChildrenKey: '|string|\'items\'|可选，子节点数组的键值名|',
    treeNodeTitleKey: '|string|\'title\'|可选，节点显示数据的键值名|',
    checkboxDisabledKey: '|string|\'disabled\'|可选，节点禁止点选的键值名|',
    iconParentOpen: '|string|--|可选，自定义父节点展开时的图标|',
    iconParentClose: '|string|--|可选，自定义父节点收起时的图标|',
    iconLeaf: '|string|--|可选，自定义叶子节点图标|',
    treeNodesRef: '|TemplateRef<any>|--|可选，自定义节点的显示模板|',
};
//# sourceMappingURL=tree.js.map