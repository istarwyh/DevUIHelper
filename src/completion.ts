/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-04-03 18:17:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\hoverCompletion.ts
 */
// 'use strict';
import {TextDocument,languages, CompletionItem, Position, CompletionItemKind, Range,MarkdownString, SnippetString} from 'vscode';
// 下面这个语句导入一个文件夹模块,入口在index
import { getName } from './util';
import { htmlSource, Attribute, Element } from './html_info';

const completionTriggerChars = [" ", "\n"]; 
//devui的使用以d-开头,如d-button.值得一提的是这个在正则表达式的测试中是null.
const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
// TODO:不能稳定识别"
const attributeValue= /^=\"[\s\S]*\"(?! )/;
// const attributeValue1= /=\"[\S*]/g;
// const attributeValue2= /[\S*]\" /g;


function  provideCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
    const start: Position = new Position(0, 0);
    const range: Range = new Range(start, position);
    const text = document.getText(range);
    // 不匹配import方式引入,因为使用devui的时候这两个不在一个文件当中
    // const importRegex = /import[\s\S]*from\s'@angular\/core'/g;

    if (componentRegex.test(text)) { 
        // console.log(text);
        const elementName = getName(text,componentRegex);
        const element = htmlSource.findElement(elementName);

        if (element) {
            const properties = element.getAttributes();
            if(!checkCursorInValue(document,position)){          
            // 回调函数循环将prop对应的details提取出来
                const completionItems = properties.map((prop) => {
                    const completionItem = createAttritubeCompletionItems(prop);
                    return completionItem;
                });
                return completionItems;
            }
            if(checkCursorInValue(document,position)){
                const attr = document.getText(document.getWordRangeAtPosition(position));
                // console.log(attr);
                const attribute = element?.getAttribute(attr);
                // console.log(attribute);
                return attribute.getValueSet().map(word=>{
                    return new CompletionItem(word,CompletionItemKind.Variable);
                });
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
function createElementCompletionItems():CompletionItem[]{
    return Object.keys(htmlSource.schema).map(element=>{
        // console.log("d-"+element);
        return new CompletionItem("d-"+element,CompletionItemKind.Class);
    });
}
//TODO : 将以下两个函数合成一个函数
function checkCursorInValue(document:TextDocument,position : Position):boolean{
    const line = document.lineAt(position);
    const tmp = line.text;
    // let tmp:string  = document.getText(document.getWordRangeAtPosition(position));
    const attrWord = tmp.substring(tmp.indexOf("="));
    console.log("==="+attrWord+"==="+attributeValue.test(attrWord));
    return attributeValue.test(attrWord);
}
function getCurrentAttr(document:TextDocument,position:Position):string{
    const attrWord = document.getText(document.getWordRangeAtPosition(position));
    return attrWord.split("=")[0];
}
// function checkCursorInValue(document:TextDocument,element:Element,position : Position):CompletionItem[]{
//     const attrWord:string  = document.getText(document.getWordRangeAtPosition(position));
//     // console.log(attrWord);
//         if(attributeValue.test(attrWord)){
//             let currentAttr = attrWord;
//             if(attrWord.includes("=")){
//                  currentAttr = attrWord.substring(0,attrWord.indexOf("="))
//             }
//             return element.getAttribute(currentAttr).getValueSet().map(word=>{
//                 return new CompletionItem(word,CompletionItemKind.Variable)
//             });
//     }
//     return [];
// }

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
    const TITLE = new MarkdownString(""); 
    completionItem.documentation = TITLE.appendCodeblock("Description:"+ prop.getSortDescription()+"\nType:"+prop.getValueType()+"\nDefaultValue:"+prop.getDefaultValue(),'typescript');
    
    // console.log("true");
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
