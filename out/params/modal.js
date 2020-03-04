"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    id: '|`string`|--|【必选】弹出框id|',
    width: '|`string`|--|【可选】弹出框宽度(e.g300px)|',
    component: '|`Component`|--|【可选】弹出框组件，弹出框会显示组件内容|',
    injector: '|`Injector`|true|【可选】可以选择指定将用作组件的父级的注射器。|',
    data: '|`object`|--|【可选】传递到弹出框组件的对象，|',
    showAnimate: '|`boolean`|--|【可选】是否显示动画，|',
    backdropCloseable: '|`boolean`|true|【可选】点击空白处是否能关闭弹出框，|',
    componentFactoryResolver: '|`ComponentFactoryResolver`|--|【可选】自定义动态渲染组件解析器，|',
    onClose: '|`function`|--|【可选】弹出框关闭之后回调的函数，|',
    beforeHidden: '|`function、Promise、Observable`|--|【可选】可以阻止窗口关闭|',
    maxHeight: '|`string`|--|【可选】弹出框最大高度(e.g600px)|',
    title: '|`string`|--|【可选】弹出框title|',
    content: '|`string、Component`|--|【可选】弹出框内容，支持字符串和组件|',
    html: '|`boolean`|--|【可选】弹出框内容是否是html|'
};
//# sourceMappingURL=modal.js.map