<!--
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-04-08 18:16:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\README.md
 -->
# [DevUIHelper](https://github.com/istarwyh/DevUIHelper)
## 针对[devui组件库](https://devui.design/components/get-start)的vs code 扩展
- 支持对devui组件的属性，属性说明，属性类型，默认值的自动提示(与补全)
- 支持devui组件与api的悬浮提示
- 一些小功能:
    - 获取文件路径(右键)
    - `alt+[`/`]`=>移动到文件首/尾

### 演示如下:
![DevUIHelper演示](https://github.com/istarwyh/DevUIHelper/blob/master/demo.gif)

## Structure

```
.
├── src
│   ├── params // DevUI官网api属性的module
│   |── extension.ts // Language Client entry pointD
|   |── hover.ts //api悬浮提示
|   |── hoverApiDetail.ts //api细节悬浮提示
|   |── hoverEvent.ts //api事件自动提示补全
│   └── hoverCompletion.ts // api参数自动提示补全
├── package.json // The extension manifest.

```

## Running the Sample

- Run `npm install` in this folder. This installs all necessary npm modules.
- Open VS Code on this folder.
- Switch to the Debug viewlet.
- Run DevUIHelper plugin with F5. 
欢迎各位大佬提`issue`或者`pr`!

## 关于DevUI

[DevUI Design](https://devui.design/home)设计系统包含了DevUI规则、设计语言和最佳实践的资源组合。DevUI Design可以让开发人员更加专注于应用逻辑的思考，而设计人员专注于用户体验、交互和流程。