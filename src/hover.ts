/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-03-29 18:17:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\hover.ts
 */
import {Position,Hover,languages, TextDocument, CancellationToken, ProviderResult,Range} from 'vscode';
import { MarkdownString } from 'vscode';
import {word2Name, getAttrName} from './util';
import { htmlSource }from './html_info';
//TODO:怎么显示icon才比较舒适? V2.0
import{autoIcon,getName} from './util';


/**
 * 鼠标悬停提示
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 */
const DEVUIREGEX = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
const TITLE ="&emsp;类型&emsp;|&emsp;默认值&emsp;|&emsp;说明&emsp;"; 
function provideHover(document:TextDocument, 
    position:Position, token:CancellationToken):ProviderResult<Hover> {
    const word = document.getText(document.getWordRangeAtPosition(position));
    const params = htmlSource.findElement(word2Name(word));
    const hoverContent= new MarkdownString("",true);
    /**
     * 元素提示
     */
    if(params){
        let attritubesInfo:string="";
        const properties = params.getAttributes();
        for(let api of properties){
            // attritubesInfo+=(autoIcon(api.getcompletionKind())+'type:'+api.getValueType()+'@params:'+api.getName()+"\n");
            // hoverContent.appendMarkdown(autoIcon(api.getcompletionKind()));
            hoverContent.appendCodeblock(api.getName()+' :'+api.getValueType()+"\n",'typescript');
        }
        return new Hover(hoverContent);
    }
    /**
     * 属性API提示
     */
    const range: Range = new Range(new Position(0,0), position);
    const text = document.getText(range);
    if(DEVUIREGEX.test(text)){
        const element = htmlSource.findElement(getName(text,DEVUIREGEX));
        const attr = document.getText(document.getWordRangeAtPosition(position));
        const attrName = getAttrName(attr);
        if(attrName){
            const attribute = element?.getAttribute(attrName);
            if(attribute){
            hoverContent.appendMarkdown(TITLE);
            hoverContent.appendCodeblock(attribute[0].getDescription(),'typescript');
            }
        }

    }
    return new Hover(hoverContent);
}

module.exports = function(context: { subscriptions: any[]; }) {
    // 注册鼠标悬停提示
    context.subscriptions.push(languages.registerHoverProvider('html', {
        provideHover
    }));
};