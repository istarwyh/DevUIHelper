'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
// 下面这个语句导入一个文件夹模块,入口在index
const params_1 = require("./params");
const completionTriggerChars = [" ", "\n"];
function provideCompletionItems(document, position) {
    const start = new vscode_1.Position(0, 0);
    const range = new vscode_1.Range(start, position);
    const text = document.getText(range);
    // 暂时只匹配import方式引入,但是使用devui的时候这两个不在一个文件当中
    // const importRegex = /import[\s\S]*from\s'@angular\/core'/g;
    // const componentRegex = /((d-[a-zA-Z0-9]*)\b)+(?=>)/g;
    const componentRegex = /<(d-[a-zA-Z0-9]*)\b[^<>]*$/g;
    // const componentRegex = /<([A-Z][a-zA-Z0-9]*)\b[^<>]*$/g;
    console.log('耶耶耶,我进来了这个方法');
    // console.log(importRegex.test(text));
    // console.log(componentRegex.test(text));
    console.log(text);
    // console.log(componentRegex);// componentRegex是一个Object?
    if (componentRegex.test(text)) {
        console.log('哈哈哈,我进来了这个方法');
        text.match(componentRegex);
        const n = RegExp.$1.substring(2);
        const name = n.replace(n[0], n[0].toUpperCase()); //匹配之后对字符串处理然后匹配导出的模块
        console.log(name + '\n');
        const params = params_1.default[name]; // components相当于是一个数组?
        if (params) {
            const properties = Object.keys(params);
            const completionItems = properties.map((prop) => {
                // CompletionItemKind用于决定提示项前面的icon图标，有多种类型，Class是其中一种
                // https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItemKind
                const completionItem = new vscode_1.CompletionItem(prop, vscode_1.CompletionItemKind.Variable);
                completionItem.detail = params[prop];
                return completionItem;
            });
            return completionItems;
        }
        return [];
    }
    return [];
}
const hoverCompletion = vscode_1.languages.registerCompletionItemProvider('html', {
    provideCompletionItems
}, ...completionTriggerChars);
module.exports = function (context) {
    context.subscriptions.push(hoverCompletion);
};
//# sourceMappingURL=hoverCompletion.js.map