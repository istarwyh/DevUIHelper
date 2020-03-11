# DevUIHelper
## 针对[devui组件库](https://devui.design/components/get-start)的vs code 扩展
- 支持对devui组件的属性，属性说明，属性类型，默认值的自动提示(与补全)
- 支持devui组件的悬浮提示(ing)

### 演示如下:
![Honeycam 2020-03-04 21-08-48](https://gitee.com/istarwyh/images/raw/master/1583327463_20200304211051097_16406.gif)


## Structure

```
.
├── src
│   ├── params // devUI官网api属性的module
│   |── extension.ts // Language Client entry point
│   └── hoverCompletion.ts // api悬浮提示功能模块
├── package.json // The extension manifest.

```

## Running the Sample

- Run `npm install` in this folder. This installs all necessary npm modules.
- Open VS Code on this folder.
- Switch to the Debug viewlet.
- Run DevUIHelper plugin with F5. 

## 关于DevUI

[DevUI Design](https://devui.design/home)设计系统包含了DevUI规则、设计语言和最佳实践的资源组合。DevUI Design可以让开发人员更加专注于应用逻辑的思考，而设计人员专注于用户体验、交互和流程。