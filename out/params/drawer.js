"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    param: '参数',
    drawerContentComponent: '|`Type<any>`|--|必要参数，传入自定义的component|',
    componentFactoryResolver: '|`ComponentFactoryResolver`|组件库provider提供|【可选】一般不需要设置|',
    injector: '|`Injector`|default|【可选】一般不需要设置|',
    width: '|`string`|\'300px\'|【可选】设置drawer的宽度|',
    isCover: '|`boolean`|true|【可选】是否有遮罩层|',
    fullScreen: '|`boolean`|false|【可选】设置默认是否全屏|',
    data: '|`any`|--|【可选】可以传入任意对象给drawerContentComponent使用|',
    backdropCloseable: '|`boolean`|true|【可选】设置可否通过点击背景来关闭drawer层|',
    escKeyCloseable: '|`boolean`|true|【可选】设置可否通过esc按键来关闭drawer层|',
    onClose: '|`Function`|--|【可选】关闭drawer时候调用|',
    beforeHidden: '|`Function`|--|可选,关闭drawer前调用，返回boolean类型，返回false可以阻止关闭drawer层，类型为\`()=>boolean\`或者\`Promise<boolean>\`或者\`Observable<boolean>\`|',
    clickDoms: '|`array`|[]|【可选】isCover为false的情况下，点击Dom关闭侧滑栏',
    destroyOnHide: '|`boolean`|true|【可选】关闭drawer时是否销毁DrawerComponent，默认销毁',
    drawerInstance: '|`DrawerComponent`|返回Drawer对象|',
    drawerContentInstance: '|`Type<any>`|返回Drawer的承载内容的对象，包括传入的data|',
};
//# sourceMappingURL=drawer.js.map