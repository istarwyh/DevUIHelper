/*
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-04-03 17:53:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\hover.ts
 */
import {Position,Hover,languages, TextDocument, CancellationToken, ProviderResult,Range,MarkdownString} from 'vscode';
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
const TITLE =""; 
function provideHover(document:TextDocument, 
    position:Position, token:CancellationToken):ProviderResult<Hover> {
    const word = document.getText(document.getWordRangeAtPosition(position));
    const element = htmlSource.findElement(word2Name(word));
    const hoverContent= new MarkdownString("",true);
    /**
     * 元素提示
     */
    if(element){
        let attritubesInfo:string="";
        const properties = element.getAttributes();
        hoverContent.appendCodeblock(element.getDescription()+"\n",'typescript')
        for(let api of properties){
            // attritubesInfo+=(autoIcon(api.getcompletionKind())+'type:'+api.getValueType()+'@params:'+api.getName()+"\n");
            // hoverContent.appendMarkdown(autoIcon(api.getcompletionKind()));
            hoverContent.appendCodeblock(api.getName()+' :'+api.getSortDescription()+"\n",'typescript');
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
        // console.log(element);
        const attr = document.getText(document.getWordRangeAtPosition(position));
        // console.log(attr);

        const attribute = element?.getAttribute(attr);
        if(attribute){
            hoverContent.appendCodeblock("Description:"+ attribute.getDescription()+"\nType:"+attribute.getValueType()+"\nDefaultValue:"+attribute.getDefaultValue(),'typescript');
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