'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const params_1 = require("./params");
const _getName = require("./util/getName");
const vscode_1 = require("vscode");
function provideHover(document, position, token) {
    const line = document.lineAt(position);
    const text = line.text.substring(0, position.character);
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    if (componentRegex.test(text)) {
        const params = params_1.default[_getName.getName(text, componentRegex)];
        const properties = Object.keys(params);
        console.log("params: " + params);
        const word = document.getText(document.getWordRangeAtPosition(position));
        const mark = new vscode_1.MarkdownString("");
        const apiDetail = mark.appendCodeblock(params[word], 'typescript');
        return new vscode.Hover(apiDetail);
    }
}
module.exports = function (context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('html', {
        provideHover
    }));
};
//# sourceMappingURL=hoverApiDetail.js.map