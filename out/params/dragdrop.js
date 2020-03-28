"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    dragData: "  |  `any`     | --        | 可选，转递给 `DropEvent`事件的数据. |",
    dragScope: "| `string \| Array<string>` | 'default'   |  可选，限制drop的位置，必须匹配对应的 `dropScope` |",
    dragOverClass: "| `string`   | --        | 可选，拖动时被拖动元素的css |",
    dragHandle: "| `string`   | --        | 可选，拖动句柄，css选择器，只有被选中的元素才能响应拖动事件 |",
    disabled: "| `boolean`  | false       | 可选，控制当前元素是否可拖动false为可以，true为不可以 |",
    enableDragFollow: " | `boolean` | false       | 可选，是否启用实体元素跟随（可以添加更多特效，如阴影等） |",
    dragFollowOption: "| `{appendToBody?: boolean}`| -- | 可选，用于控制实体拖拽的一些配置|",
    originPlaceholder: "| `{show?: boolean; tag?: string; style?: {cssProperties: string]: string}; text?: string; removeDelay?: number;}`| --| 可选，设置源占位符号，用于被拖拽元素原始位置占位|"
        + "\n" + ".show| `boolean`| true| 可选，是否显示，默认originPlaceholder有Input则显示，特殊情况可以关闭|"
        + "\n" + ".tag| `string`| 'div'| 可选，是否显示，默认originPlaceholder有Input则显示，特殊情况可以关闭|"
        + "\n" + ".style| `Object`| --| 可选，传style对象，key为样式属性，value为样式值|"
        + "\n" + ".text| `string`|--| 可选，placeholder内的文字|"
        + "\n" + ".removeDelay| `number`| --| 可选，用于希望源占位符在拖拽之后的延时里再删除，方便做动画，单位为ms毫秒|",
    dragIdentity: "|`any`|--| 可选，用于虚拟滚动的恢复，虚拟滚动过程中会删除元素（溢出画面）然后又重新生成来恢复元素（回到画面），需要唯一识别值来恢复原始事件拖拽事件监听和源占位符等|",
    dragItemParentName: "| `string`|--| 可选，选择器名，和dragItemChildrenName搭配用于拖拽截断看不见的列表内元素以提高性能， 从dragItemParentName匹配的选择器里边查询匹配dragItemChildrenName的元素，通常是列表里查找条目，把超出可视范围的条目克隆的时候剔除|",
    dragItemChildrenName: "|`string`|--| 可选，选择器名，和dragItemParentName搭配用于拖拽截断看不见的列表内元素以提高性能，功能见dragItemParentName的描述|",
};
//# sourceMappingURL=dragdrop.js.map