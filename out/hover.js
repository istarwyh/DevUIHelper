"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const params_1 = require("./params");
const Collections = require("typescript-collections");
const vscode_1 = require("vscode");
const _getName = require("./util/getName");
/**
 * 鼠标悬停提示
 * @param {*} document
 * @param {*} position
 * @param {*} token
 */
function provideHover(document, position, token) {
    const fileName = document.fileName;
    const workDir = path.dirname(fileName);
    const word = document.getText(document.getWordRangeAtPosition(position));
    const params = params_1.default[_getName.word2Name(word)];
    if (params) {
        console.log('====进入provideHover方法====');
        var mySet = new Collections.Set();
        const properties = Object.keys(params);
        for (let api of properties) {
            mySet.add("\n" + api);
        }
        // ts中一切都是对象,hoverContent也不例外
        // 怎么把这个对象完全放进去再打出来?
        const hoverContent = new vscode_1.MarkdownString("").appendCodeblock(mySet.toString().replace("[", "").replace("]", ""), 'typescript');
        return new vscode.Hover(hoverContent);
    }
}
module.exports = function (context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('html', {
        provideHover
    }));
};
//# sourceMappingURL=hover.js.map