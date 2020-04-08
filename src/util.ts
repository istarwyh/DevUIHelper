/*
 * @Author: your name
 * @Date: 2020-03-29 11:52:31
 * @LastEditTime: 2020-04-03 17:45:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\src\util.ts
 */
import {CompletionItemKind}from 'vscode';
export function getName(text: string,componentRegex: RegExp){
    text.match(componentRegex);
    const name = RegExp.$1.substring(2);
    return name;
}
export function getAttrName(text:string):string|undefined{
    if(text.startsWith("[")){
        return text.match(/\[(\S*)\]/)?.toString().toLowerCase();
    }
    if(text.startsWith("(")){
        return text.match(/\((\S*)\)/)?.toString().toLowerCase();
    }
    else{
        return text;
    }
}
export function word2Name(word: string){
    const name  = word.substring(2);
    return name;
}
function capitalize(string: string){
    // split() 方法用于把一个字符串分割成字符串数组。
    var words =string.split("-");
    for(var i=0;i<words.length;i++)
    {
        // charAt() 方法可返回指定位置的字符。
        // slice() 方法可从已有的数组中返回选定的元素。
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
        // 第一个单词的第一个字母转化为大写，然后再将该单词的后面字母使用slice()接上即可。
    }
    // join() 方法用于把数组中的所有元素放入一个字符串
    return words.join("");
}
export function autoIcon(type:CompletionItemKind):string{
    switch(type){
        default:
            return "$(array)";
    }
}