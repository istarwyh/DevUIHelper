"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getName(text, componentRegex) {
    text.match(componentRegex);
    const name = RegExp.$1.substring(2);
    return name;
}
exports.getName = getName;
function getAttrName(text) {
    var _a, _b;
    if (text.startsWith("[")) {
        return (_a = text.match(/\[(\S*)\]/)) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase();
    }
    if (text.startsWith("(")) {
        return (_b = text.match(/\((\S*)\)/)) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
    }
    else {
        return text;
    }
}
exports.getAttrName = getAttrName;
function word2Name(word) {
    const name = word.substring(2);
    return name;
}
exports.word2Name = word2Name;
function autoIcon(type) {
    switch (type) {
        default:
            return "$(array)";
    }
}
exports.autoIcon = autoIcon;
//# sourceMappingURL=util.js.map