'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
// 下面这个语句导入一个文件夹模块,入口在index
const params_Event_1 = require("./params_Event");
const _getName = require("./util/getName");
const completionTriggerChars = [" ", "\n"];
function provideCompletionItems(document, position) {
    /* 减少检索范围，仅检索光标所在行 */
    const line = document.lineAt(position);
    const text = line.text.substring(0, position.character);
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    if (componentRegex.test(text)) {
        const params = params_Event_1.default[_getName.getName(text, componentRegex)];
        if (params) {
            const properties = Object.keys(params);
            const completionItems = properties.map((prop) => {
                const completionItem = new vscode_1.CompletionItem(prop, vscode_1.CompletionItemKind.Event);
                const mark = new vscode_1.MarkdownString("");
                completionItem.documentation = mark.appendCodeblock(params[prop], 'typescript');
                completionItem.insertText = "(" + prop + ")=\"\"";
                completionItem.preselect = true;
                return completionItem;
            });
            return completionItems;
        }
        return [];
    }
    return [];
}
const hoverEvent = vscode_1.languages.registerCompletionItemProvider('html', { provideCompletionItems }, ...completionTriggerChars);
module.exports = function (context) {
    context.subscriptions.push(hoverEvent);
};
//# sourceMappingURL=hoverEvent.js.map