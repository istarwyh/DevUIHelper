'use strict';
import {
     TextDocument,languages, CompletionItem, Position, CompletionItemKind, MarkdownString
} from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import components from './params_Event';
import * as _getName from './util/getName';

const completionTriggerChars = [" ", "\n"];  
function  provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {

    /* 减少检索范围，仅检索光标所在行 */ 
    const line = document.lineAt(position);
    const text = line.text.substring(0,position.character);
     
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    
    if (componentRegex.test(text)) {
        const params = components[_getName.getName(text,componentRegex)];
        if (params) {
            const properties = Object.keys(params);
            const completionItems = properties.map((prop) => {
                const completionItem = new CompletionItem(prop, CompletionItemKind.Event);
                const mark = new MarkdownString("&emsp;事件&emsp;&emsp;|&emsp;&emsp;类型&emsp;&emsp;|&emsp;&emsp;说明&emsp;"); 
                completionItem.documentation = mark.appendCodeblock(params[prop],'typescript');
                completionItem.insertText = "("+prop+")=\"\"";
                completionItem.preselect = true;
                return completionItem;
            });

            return completionItems;
        }
        return [];
    }
    return [];
}

const hoverEvent = languages.registerCompletionItemProvider('html', 
{provideCompletionItems}, ...completionTriggerChars);

module.exports = function(context: { subscriptions: any[]; }) {
    context.subscriptions.push(
        hoverEvent
    );
};