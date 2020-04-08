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
export function autoIcon(type:CompletionItemKind):string{
    switch(type){
        default:
            return "$(array)";
    }
}