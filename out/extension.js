"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const move = require("./move");
function activate(context) {
    console.log('恭喜,你的插件已经被激活了!');
    // 跳转到定义
    require('./jump-to-definition')(context);
    // 悬浮提示
    require('./hover')(context);
    // 悬浮API提示
    require('./hoverCompletion')(context);
    // 从远程获取vscode的相关信息
    // console.log(vscode);
    // 获取vscode所有命令以便调用
    // 也可以通过快捷键设置看到
    // vscode.commands.getCommands().then(allCommands => {
    // 	console.log('所有命令：', allCommands);
    // });
    // vscode.commands.registerCommand是注册命令的API，执行后会返回一个disposable对象
    let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });
    // 所有注册类的API执行后都需要将返回结果放到context.subscriptions中去
    context.subscriptions.push(disposable);
    // 报错信息
    const message_warning = 'Warning';
    let warning = vscode.commands.registerCommand('extension.warning', () => {
        vscode.window.showErrorMessage(message_warning);
    });
    context.subscriptions.push(warning);
    //获取文件夹路径
    let currentFilePath = vscode.commands.registerCommand('extension.getCurrentFilePath', (uri) => {
        // 当直接按Ctrl+Shift+P执行命令时，这个参数为空；
        vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
    });
    context.subscriptions.push(currentFilePath);
    // 跳转到代码最上方
    let disposable_begin_buffer = vscode.commands.registerCommand('extension.moveBeginningOfBuffer', move.moveBeginningOfBuffer);
    context.subscriptions.push(disposable_begin_buffer);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    console.log('Plugin deactivated');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map