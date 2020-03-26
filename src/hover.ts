import * as vscode from 'vscode';
import components from './params';
import * as Collections from 'typescript-collections';
import { MarkdownString } from 'vscode';
import * as _getName from './util/getName';


/**
 * 鼠标悬停提示
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 */
function provideHover(document:any, position:any, token:any) {
    const word = document.getText(document.getWordRangeAtPosition(position));

    const params = components[_getName.word2Name(word)];
    if(params){
        var mySet = new Collections.Set<String>();
        const properties = Object.keys(params);
        for(let api of properties){
            mySet.add(api+"\n");
        }
        // ts中一切都是对象,hoverContent也不例外
        let content = mySet.toString().replace("[", "").replace("]","");
        while(content.indexOf(",") !== -1){
            content = content.replace(",","");
        }
        const hoverContent = new MarkdownString("").appendCodeblock(content,'typescript');
        return new vscode.Hover(hoverContent);
    }
}

module.exports = function(context: { subscriptions: any[]; }) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('html', {
        provideHover
    }));
};