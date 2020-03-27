'use strict';
import * as vscode from 'vscode';
import components from './params';
import componentAccident from './params_accident';
import * as _getName from './util/getName';
import { MarkdownString } from 'vscode';

function provideHover(document:any, position:any, token:any) {
    const line = document.lineAt(position);
    const text = line.text.substring(0,position.character);    
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    if (componentRegex.test(text)) {
        const name = _getName.getName(text,componentRegex);
        const params = components[name];
        const params_accident = componentAccident[name];
        const word = document.getText(document.getWordRangeAtPosition(position));
        if(params[word]){
            const mark = new MarkdownString(""); 
            const apiDetail = mark.appendCodeblock(params[word],'typescript');
            return new vscode.Hover(apiDetail);

        }else{
            const mark = new MarkdownString(""); 
            const apiDetail = mark.appendCodeblock(params_accident[word],'typescript');
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

