/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-03-29 18:45:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\hoverCompletion.ts
 */
'use strict';
import {TextDocument,languages, CompletionItem, Position, CompletionItemKind, Range,MarkdownString, SnippetString} from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import { getName } from './util';
import { htmlSource, Attribute } from './html_info';

const completionTriggerChars = [" ", "\n"];  


function  provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
    const start: Position = new Position(0, 0);
    const range: Range = new Range(start, position);
    const text = document.getText(range);
    // 不匹配import方式引入,因为使用devui的时候这两个不在一个文件当中
    // const importRegex = /import[\s\S]*from\s'@angular\/core'/g;

    //devui的使用以d-开头,如d-button.值得一提的是这个在正则表达式的测试中是null.
  
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    
    // console.log(componentRegex);// componentRegex是一个Object?
    if (componentRegex.test(text)) { 
        // console.log(text);
        const element = htmlSource.findElement(getName(text,componentRegex));
        // console.log(getName(text,componentRegex));

        if (element) {
            const properties = element.getAttributes();
            // 回调函数循环将prop对应的details提取出来
            const completionItems = properties.map((prop) => {
                const completionItem = createAttritubeCompletionItems(prop);
                return completionItem;
            });
            return completionItems;
        }
         return createElementCompletionItems(); 

        
    }
    return [];
}

/**
 * 提供元素补全
 * @param prop 
 */
function createElementCompletionItems():CompletionItem[]{
    return Object.keys(htmlSource.schema).map(element=>{
        console.log("d-"+element);
        return new CompletionItem("d-"+element,CompletionItemKind.Class);
    });
}
/**
 * 提供属性补全
 * @param prop 
 */
function createAttritubeCompletionItems(prop:Attribute):CompletionItem{
    /**
     *  CompletionItemKind用于决定提示项前面的icon图标，有多种类型，Class是其中一种
     *   https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItemKind
     */ 
    const completionItem = new CompletionItem(
                                    prop.getName(), 
                                    prop.getcompletionKind());
    // params[prop]就是label对应的api细节部分
    const TITLE = new MarkdownString("|&emsp;类型&emsp;|&emsp;默认&emsp;|&emsp;说明&emsp;"); 
    completionItem.documentation = TITLE.appendCodeblock(prop.getDescription(),'typescript');
    
    console.log(prop);
    /**
     * 依据不同的类型提供不同的提示。
     */
    if(prop.getcompletionKind()!==CompletionItemKind.Function){
        completionItem.insertText =new SnippetString("["+prop.getName()+"]=\"${1:}\"");
    }else{
        completionItem.insertText =new SnippetString("("+prop.getName()+")=\"${1:}\"");
    }
    completionItem.preselect = true;
    return completionItem;
}

const hoverCompletion = languages.registerCompletionItemProvider('html', 
{provideCompletionItems}, ...completionTriggerChars);

module.exports = function(context: { subscriptions: any[]; }) {
    context.subscriptions.push(
        hoverCompletion
    );
};
