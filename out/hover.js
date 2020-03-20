"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const path = require("path");
const params_1 = require("./params");
const Collections = require("typescript-collections");
const vscode_1 = require("vscode");
/**
 * 鼠标悬停提示，当鼠标停在package.json的dependencies或者devDependencies时，
 * 自动显示对应包的名称、版本号和许可协议
 * @param {*} document
 * @param {*} position
 * @param {*} token
 */
function provideHover(document, position, token) {
    const fileName = document.fileName;
    const workDir = path.dirname(fileName);
    const word = document.getText(document.getWordRangeAtPosition(position));
    // if (/package\.json$/.test(fileName)) {
    //     const json = document.getText();
    //     if (new RegExp(`"(dependencies|devDependencies)":\\s*?\\{[\\s\\S]*?${word.replace(/\//g, '\\/')}[\\s\\S]*?\\}`, 'gm').test(json)) {
    //         let destPath = `${workDir}/node_modules/${word.replace(/"/g, '')}/package.json`;
    //         if (fs.existsSync(destPath)) {
    //             const content = require(destPath);
    //             console.log('hover已生效');
    //             // hover内容支持markdown语法
    //             return new vscode.Hover(`* **名称**：${content.name}\n* **版本**：${content.version}\n* **许可协议**：${content.license}`);
    //         }
    //     }
    // }
    const n = word.substring(2);
    const nam = n.replace(n[0], n[0].toUpperCase()); //匹配之后对字符串处理然后匹配导出的模块
    let name;
    if (nam.indexOf("-") !== -1) {
        name = capitalize(nam);
    }
    else {
        name = nam;
    }
    // console.log("name: " + name);
    const params = params_1.default[name];
    if (params) {
        var mySet = new Collections.Set();
        console.log('====进入provideHover方法====');
        const properties = Object.keys(params);
        for (let api of properties) {
            mySet.add("\r\t\n" + "- " + api);
        }
        // ts中一切都是对象,hoverContent也不例外
        // 怎么把这个对象完全放进去再打出来?
        const hoverContent = new vscode_1.MarkdownString("\n").value;
        return new vscode.Hover(`* ${mySet}`);
    }
}
function capitalize(string) {
    // split() 方法用于把一个字符串分割成字符串数组。
    var words = string.split("-");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join("");
}
module.exports = function (context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('html', {
        provideHover
    }));
};
//# sourceMappingURL=hover.js.map