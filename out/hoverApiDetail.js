'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const params_1 = require("./params");
const params_Event_1 = require("./params_Event");
const _getName = require("./util/getName");
const vscode_1 = require("vscode");
var linelastcomname;
function provideHover(document, position, token) {
    const line = document.lineAt(position);
    const text = line.text.substring(0, position.character);
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    if (componentRegex.test(text)) {
        const name = _getName.getName(text, componentRegex);
        linelastcomname = name;
        const params = params_1.default[name];
        const params_Event = params_Event_1.default[name];
        const word = document.getText(document.getWordRangeAtPosition(position));
        if (params[word]) {
            const mark = new vscode_1.MarkdownString("&emsp;参数&emsp;|&emsp;类型&emsp;|&emsp;默认&emsp;|&emsp;说明&emsp;");
            const apiDetail = mark.appendCodeblock(params[word], 'typescript');
            return new vscode.Hover(apiDetail);
        }
        else {
            const mark = new vscode_1.MarkdownString("&emsp;事件&emsp;&emsp;|&emsp;&emsp;类型&emsp;&emsp;|&emsp;&emsp;说明&emsp;");
            const apiDetail = mark.appendCodeblock(params_Event[word], 'typescript');
            return new vscode.Hover(apiDetail);
        }
    }
    else if (linelastcomname) {
        const word = document.getText(document.getWordRangeAtPosition(position));
        const params = params_1.default[linelastcomname];
        const params_Event = params_Event_1.default[linelastcomname];
        if (params[word]) {
            const mark = new vscode_1.MarkdownString("&emsp;参数&emsp;|&emsp;类型&emsp;|&emsp;默认&emsp;|&emsp;说明&emsp;");
            const apiDetail = mark.appendCodeblock(params[word], 'typescript');
            return new vscode.Hover(apiDetail);
        }
        else {
            const mark = new vscode_1.MarkdownString("&emsp;事件&emsp;&emsp;|&emsp;&emsp;类型&emsp;&emsp;|&emsp;&emsp;说明&emsp;");
            const apiDetail = mark.appendCodeblock(params_Event[word], 'typescript');
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