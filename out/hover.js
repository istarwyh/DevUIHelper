"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-04-03 18:06:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\hover.ts
 */
const vscode_1 = require("vscode");
const util_1 = require("./util");
const html_info_1 = require("./html_info");
//TODO:怎么显示icon才比较舒适? V2.0
const util_2 = require("./util");
/**
 * 鼠标悬停提示
 * @param {*} document
 * @param {*} position
 * @param {*} token
 */
const DEVUIREGEX = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
const TITLE = "";
function provideHover(document, position, token) {
    var _a;
    const word = document.getText(document.getWordRangeAtPosition(position));
    const element = html_info_1.htmlSource.findElement(util_1.word2Name(word));
    const hoverContent = new vscode_1.MarkdownString("", true);
    /**
     * 元素提示
     */
    if (element) {
        let attritubesInfo = "";
        const properties = element.getAttributes();
        hoverContent.appendCodeblock(element.getDescription() + "\n", 'typescript');
        for (let api of properties) {
            // attritubesInfo+=(autoIcon(api.getcompletionKind())+'type:'+api.getValueType()+'@params:'+api.getName()+"\n");
            // hoverContent.appendMarkdown(autoIcon(api.getcompletionKind()));
            hoverContent.appendCodeblock(api.getName() + ' :' + api.getSortDescription() + "\n", 'typescript');
        }
        return new vscode_1.Hover(hoverContent);
    }
    /**
     * 属性API提示
     */
    const range = new vscode_1.Range(new vscode_1.Position(0, 0), position);
    const text = document.getText(range);
    if (DEVUIREGEX.test(text)) {
        const element = html_info_1.htmlSource.findElement(util_2.getName(text, DEVUIREGEX));
        // console.log(element);
        const attr = document.getText(document.getWordRangeAtPosition(position));
        // console.log(attr);
        const attribute = (_a = element) === null || _a === void 0 ? void 0 : _a.getAttribute(attr);
        if (attribute) {
            const valueSet = attribute.getValueSet() === [] ? "any" : attribute.getValueSet();
            hoverContent.appendCodeblock("Description:" + attribute.getDescription() + "\nType:" + attribute.getValueType() + "\nDefaultValue:" + attribute.getDefaultValue() + "\nValueSet:" + valueSet, 'typescript');
        }
    }
    return new vscode_1.Hover(hoverContent);
}
module.exports = function (context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode_1.languages.registerHoverProvider('html', {
        provideHover
    }));
};
//# sourceMappingURL=hover.js.map