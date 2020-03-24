'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
// 下面这个语句导入一个文件夹模块,入口在index
const params_1 = require("./params");
const _getName = require("./util/getName");
const completionTriggerChars = [" ", "\n"];
function provideCompletionItems(document, position) {
    // const start: Position = new Position(0, 0);
    // const range: Range = new Range(start, position);
    // const text = document.getText(range);
    /* 减少检索范围，仅检索光标所在行 */
    const line = document.lineAt(position);
    const text = line.text.substring(0, position.character);
    // 不匹配import方式引入,因为使用devui的时候这两个不在一个文件当中
    // const importRegex = /import[\s\S]*from\s'@angular\/core'/g;
    //devui的使用以d-开头,如d-button.值得一提的是这个在正则表达式的测试中是null.        
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    // console.log(componentRegex);// componentRegex是一个Object?
    if (componentRegex.test(text)) {
        const params = params_1.default[_getName.getName(text, componentRegex)];
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
const hoverCompletion = vscode_1.languages.registerCompletionItemProvider('html', { provideCompletionItems }, ...completionTriggerChars);
module.exports = function (context) {
    context.subscriptions.push(hoverCompletion);
};
//# sourceMappingURL=hoverCompletion.js.map