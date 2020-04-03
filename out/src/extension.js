"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-03-29 16:49:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\extension.ts
 */
const vscode = require("vscode");
function activate(context) {
    // 跳转到定义,angualr已通过语法树实现
    // require('./jump-to-definition')(context);
    // 悬浮提示api
    require('./hover')(context);
    // //悬浮提示api细节
    // require('./hoverApiDetail')(context);
    // API提示与补全
    require('./completion')(context);
    // // 悬浮事件提示
    // require('./hoverEvent')(context);
    // 跳转到文件上部或下部
    require('./move')(context);
    // 从远程获取vscode的相关信息
    // console.log(vscode);
    // 获取vscode所有命令以便调用
    // 也可以通过快捷键设置看到
    // vscode.commands.getCommands().then(allCommands => {
    // 	console.log('所有命令：', allCommands);
    // });
    //获取文件夹路径
    // vscode.commands.registerCommand是注册命令的API，执行后会返回一个disposable对象
    let currentFilePath = vscode.commands.registerCommand('extension.getCurrentFilePath', (uri) => {
        // 当直接按Ctrl+Shift+P执行命令时，这个参数为空；
        vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
    });
    // 所有注册类的API执行后都需要将返回结果放到context.subscriptions中去
    context.subscriptions.push(currentFilePath);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    console.log('Plugin deactivated');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map