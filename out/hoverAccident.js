'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
// 下面这个语句导入一个文件夹模块,入口在index
const params_accident_1 = require("./params_accident");
const _getName = require("./util/getName");
const completionTriggerChars = [" ", "\n"];
function provideCompletionItems(document, position) {
    /* 减少检索范围，仅检索光标所在行 */
    const line = document.lineAt(position);
    const text = line.text.substring(0, position.character);
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    if (componentRegex.test(text)) {
        const params = params_accident_1.default[_getName.getName(text, componentRegex)];
        if (params) {
            const properties = Object.keys(params);
            const completionItems = properties.map((prop) => {
                const completionItem = new vscode_1.CompletionItem(prop, vscode_1.CompletionItemKind.Event);
                const mark = new vscode_1.MarkdownString("");
                // params[prop]就是label对应的api细节部分
                completionItem.documentation = mark.appendCodeblock(params[prop], 'typescript');
                console.log("<>" + params[prop]);
                return completionItem;
            });
            return completionItems;
        }
        return [];
    }
    return [];
}
const hoverAccident = vscode_1.languages.registerCompletionItemProvider('html', { provideCompletionItems }, ...completionTriggerChars);
module.exports = function (context) {
    context.subscriptions.push(hoverAccident);
};
//# sourceMappingURL=hoverAccident.js.map