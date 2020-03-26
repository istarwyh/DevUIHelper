'use strict';
import * as vscode from 'vscode';
import components from './params';
import * as _getName from './util/getName';
import { MarkdownString } from 'vscode';

function provideHover(document:any, position:any, token:any) {
    const line = document.lineAt(position);
    const text = line.text.substring(0,position.character);    
    const componentRegex = /<(d-[a-zA-Z0-9-]*)\b[^<>]*$/g;
    if (componentRegex.test(text)) {
        const params = components[_getName.getName(text,componentRegex)];
        const properties = Object.keys(params);
        console.log("params: " +params);

        const word = document.getText(document.getWordRangeAtPosition(position));
        const mark = new MarkdownString(""); 
        const apiDetail = mark.appendCodeblock(params[word],'typescript');
        return new vscode.Hover(apiDetail);
    }
}

module.exports = function(context: { subscriptions: any[]; }) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('html', {
        provideHover
    }));
};

