import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
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
    const fileName    = document.fileName;
    const workDir     = path.dirname(fileName);
    const word        = document.getText(document.getWordRangeAtPosition(position));

    const params = components[_getName.word2Name(word)];
    if(params){
        console.log('====进入provideHover方法====');
        var mySet = new Collections.Set<String>();
        const properties = Object.keys(params);
        for(let api of properties){
            mySet.add("\r\t\n"+"- "+api);
        }
        // ts中一切都是对象,hoverContent也不例外
        // 怎么把这个对象完全放进去再打出来?
        const hoverContent = new MarkdownString("\n").value;
        return new vscode.Hover(`${mySet.toString().replace("[", "").replace("]","").replace(",","")}`);
    }
}

module.exports = function(context: { subscriptions: any[]; }) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('html', {
        provideHover
    }));
};