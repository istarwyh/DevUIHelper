"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    valueChange: "| `EventEmitter<Array<any>|any>`      | 可选,输出函数,当选中某个选项项后,将会调用此函数,参数为当前选择项的值 |",
    toggleChange: "| `EventEmitter<boolean>`         | 可选,输出函数,下拉打开关闭toggle事件                              |",
    loadMore: "| `EventEmitter<{instance: Selectcomponent, event: ScrollEvent}>`          | 懒加载触发事件，配合`enableLazyLoad`使用，使用`$event.instance.loadFinish()`结束本次加载, event为懒加载监听的滚动事件，参考dLazyLoad |",
};
//# sourceMappingURL=select.js.map