'use strict';
import {
     TextDocument,languages, CompletionItem, Position, CompletionItemKind, MarkdownString, SnippetString, Range
} from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import components from './params_Event';
import * as _getName from './util/getName';

const completionTriggerChars = [" ", "\n"];  
function  provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {

    const start: Position = new Position(0, 0);
    const range: Range = new Range(start, position);
    const text = document.getText(range);
     
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    
    if (componentRegex.test(text)) {
        const params = components[_getName.getName(text,componentRegex)];
        if (params) {
            const properties = Object.keys(params);
            const completionItems = properties.map((prop) => {
                const completionItem = new CompletionItem(prop, CompletionItemKind.Event);
                const mark = new MarkdownString("&emsp;事件&emsp;&emsp;|&emsp;&emsp;类型&emsp;&emsp;|&emsp;&emsp;说明&emsp;"); 
                completionItem.documentation = mark.appendCodeblock(params[prop],'typescript');
                completionItem.insertText =new SnippetString("("+prop+")=\"${1:}\"");
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