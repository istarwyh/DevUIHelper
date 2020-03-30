/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-03-30 20:03:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\hoverCompletion.ts
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
// 下面这个语句导入一个文件夹模块,入口在index
const util_1 = require("./util");
const html_info_1 = require("./html_info");
const completionTriggerChars = [" ", "\n"];
const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
const attributeValue = /=\"[\s\S]*?\"/g;
// const attributeValue1= /=\"[\S*]/g;
// const attributeValue2= /[\S*]\" /g;
function provideCompletionItems(document, position) {
    const start = new vscode_1.Position(0, 0);
    const range = new vscode_1.Range(start, position);
    const text = document.getText(range);
    // 不匹配import方式引入,因为使用devui的时候这两个不在一个文件当中
    // const importRegex = /import[\s\S]*from\s'@angular\/core'/g;
    //devui的使用以d-开头,如d-button.值得一提的是这个在正则表达式的测试中是null.
    // console.log(componentRegex);// componentRegex是一个Object?
    if (componentRegex.test(text)) {
        // console.log(text);
        const element = html_info_1.htmlSource.findElement(util_1.getName(text, componentRegex));
        // console.log(getName(text,componentRegex));
        if (element) {
            const properties = element.getAttributes();
            if (checkCursorInValue(document, position)) {
                // 回调函数循环将prop对应的details提取出来
                const completionItems = properties.map((prop) => {
                    const completionItem = createAttritubeCompletionItems(prop);
                    return completionItem;
                });
                return completionItems;
            }
            else {
                return [];
            }
        }
        return createElementCompletionItems();
    }
    return [];
}
/**
 * 提供元素补全
 * @param prop
 */
function createElementCompletionItems() {
    return Object.keys(html_info_1.htmlSource.schema).map(element => {
        console.log("d-" + element);
        return new vscode_1.CompletionItem("d-" + element, vscode_1.CompletionItemKind.Class);
    });
}
function checkCursorInValue(document, position) {
    const attrWord = document.getText(document.getWordRangeAtPosition(position));
    // console.log(attrWord);
    if (attributeValue.test(attrWord)) {
        return false;
    }
    return true;
}
/**
 * 提供属性补全
 * @param prop
 */
function createAttritubeCompletionItems(prop) {
    /**
     *  CompletionItemKind用于决定提示项前面的icon图标，有多种类型，Class是其中一种
     *   https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItemKind
     */
    const completionItem = new vscode_1.CompletionItem(prop.getName(), prop.getcompletionKind());
    // params[prop]就是label对应的api细节部分
    const TITLE = new vscode_1.MarkdownString("|&emsp;类型&emsp;|&emsp;默认&emsp;|&emsp;说明&emsp;");
    completionItem.documentation = TITLE.appendCodeblock(prop.getDescription(), 'typescript');
    // console.log("true");
    /**
     * 依据不同的类型提供不同的提示。
     */
    if (prop.getcompletionKind() !== vscode_1.CompletionItemKind.Function) {
        completionItem.insertText = new vscode_1.SnippetString("[" + prop.getName() + "]=\"${1:}\"");
    }
    else {
        completionItem.insertText = new vscode_1.SnippetString("(" + prop.getName() + ")=\"${1:}\"");
    }
    completionItem.preselect = true;
    return completionItem;
}
const hoverCompletion = vscode_1.languages.registerCompletionItemProvider('html', { provideCompletionItems }, ...completionTriggerChars);
module.exports = function (context) {
    context.subscriptions.push(hoverCompletion);
};
//# sourceMappingURL=completion.js.map