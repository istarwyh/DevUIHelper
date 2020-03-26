"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    loading: '|LoadingType|--|可选，控制loading状态|',
    message: '|string|--|可选，loading时的提示信息|',
    loadingTemplateRef: '|TemplateRef<any>|--|可选，自定义loading模板|',
    backdrop: '|boolean|--|可选，loading时是否显示遮罩|',
    showLoading: '|boolean|--|可选，手动启动和关闭loading状态,与loading参数不能同时使用|',
    positionType: '|string|\'relative\'|可选，指定dLoading宿主元素的定位类型,取值与cssposition属性一致|',
    view: '|{top?:string,left?:string}|{top:\'50%\',left:\'50%\'}|可选，调整loading的显示位置，相对于宿主元素的顶部距离与左侧距离|',
};
//# sourceMappingURL=loading.js.map