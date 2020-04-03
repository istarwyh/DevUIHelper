"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getName(text, componentRegex) {
    text.match(componentRegex);
    const n = RegExp.$1.substring(2);
    // const nam = n.replace(n[0],n[0].toUpperCase());//匹配之后对字符串处理然后匹配导出的模块
    const nam = n; //匹配之后对字符串处理然后匹配导出的模块
    let name;
    if (nam.indexOf("-") !== -1) {
        name = capitalize(nam);
    }
    else {
        name = nam;
    }
    // console.log("name: " + name);
    return name;
}
exports.getName = getName;
function getAttrName(text) {
    var _a, _b;
    if (text.startsWith("[")) {
        return (_a = text.match(/\[(\S*)\]/)) === null || _a === void 0 ? void 0 : _a.toString();
    }
    if (text.startsWith("(")) {
        return (_b = text.match(/\((\S*)\)/)) === null || _b === void 0 ? void 0 : _b.toString();
    }
    else {
        return text;
    }
}
exports.getAttrName = getAttrName;
function word2Name(word) {
    const n = word.substring(2);
    const nam = n.replace(n[0], n[0].toUpperCase()); //匹配之后对字符串处理然后匹配导出的模块
    let name;
    if (nam.indexOf("-") !== -1) {
        name = capitalize(nam);
    }
    else {
        name = nam;
    }
    return name;
}
exports.word2Name = word2Name;
function capitalize(string) {
    // split() 方法用于把一个字符串分割成字符串数组。
    var words = string.split("-");
    for (var i = 0; i < words.length; i++) {
        // charAt() 方法可返回指定位置的字符。
        // slice() 方法可从已有的数组中返回选定的元素。
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        // 第一个单词的第一个字母转化为大写，然后再将该单词的后面字母使用slice()接上即可。
    }
    // join() 方法用于把数组中的所有元素放入一个字符串
    return words.join("");
}
function autoIcon(type) {
    switch (type) {
        default:
            return "$(array)";
    }
}
exports.autoIcon = autoIcon;
//# sourceMappingURL=util.js.map