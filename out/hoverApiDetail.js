'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const params_1 = require("./params");
const params_accident_1 = require("./params_accident");
const _getName = require("./util/getName");
const vscode_1 = require("vscode");
function provideHover(document, position, token) {
    const line = document.lineAt(position);
    const text = line.text.substring(0, position.character);
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    if (componentRegex.test(text)) {
        const name = _getName.getName(text, componentRegex);
        const params = params_1.default[name];
        const params_accident = params_accident_1.default[name];
        const word = document.getText(document.getWordRangeAtPosition(position));
        if (params[word]) {
            const mark = new vscode_1.MarkdownString("");
            const apiDetail = mark.appendCodeblock(params[word], 'typescript');
            return new vscode.Hover(apiDetail);
        }
        else {
            const mark = new vscode_1.MarkdownString("");
            const apiDetail = mark.appendCodeblock(params_accident[word], 'typescript');
            return new vscode.Hover(apiDetail);
        }
    }
}
module.exports = function (context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('html', {
        provideHover
    }));
};
//# sourceMappingURL=hoverApiDetail.js.map