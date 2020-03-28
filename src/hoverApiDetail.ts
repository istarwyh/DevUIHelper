'use strict';
import * as vscode from 'vscode';
import components from './params';
import componentEvent from './params_Event';
import * as _getName from './util/getName';
import { MarkdownString } from 'vscode';
var linelastcomname;
function provideHover(document:any, position:any, token:any) {
    const line = document.lineAt(position);
    const text = line.text.substring(0,position.character);    
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    if (componentRegex.test(text)) {
        const name = _getName.getName(text,componentRegex);
        linelastcomname=name;
        const params = components[name];
        const params_Event = componentEvent[name];
        const word = document.getText(document.getWordRangeAtPosition(position));
        if(params[word]){
            const mark = new MarkdownString("&emsp;参数&emsp;|&emsp;类型&emsp;|&emsp;默认&emsp;|&emsp;说明&emsp;"); 
            const apiDetail = mark.appendCodeblock(params[word],'typescript');
            return new vscode.Hover(apiDetail);

        }else{
            const mark = new MarkdownString("&emsp;事件&emsp;&emsp;|&emsp;&emsp;类型&emsp;&emsp;|&emsp;&emsp;说明&emsp;"); 
            const apiDetail = mark.appendCodeblock(params_Event[word],'typescript');
            return new vscode.Hover(apiDetail);
        }
    }
    else if(linelastcomname){
        const word = document.getText(document.getWordRangeAtPosition(position));
        const params = components[linelastcomname];
        const params_Event = componentEvent[linelastcomname];
        if(params[word]){
            const mark = new MarkdownString("&emsp;参数&emsp;|&emsp;类型&emsp;|&emsp;默认&emsp;|&emsp;说明&emsp;"); 
            const apiDetail = mark.appendCodeblock(params[word],'typescript');
            return new vscode.Hover(apiDetail);

        }else{
            const mark = new MarkdownString("&emsp;事件&emsp;&emsp;|&emsp;&emsp;类型&emsp;&emsp;|&emsp;&emsp;说明&emsp;"); 
            const apiDetail = mark.appendCodeblock(params_Event[word],'typescript');
            return new vscode.Hover(apiDetail);
        }
    }
}

module.exports = function(context: { subscriptions: any[]; }) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('html', {
        provideHover
    }));
};

