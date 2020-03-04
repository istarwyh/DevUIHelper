"use strict";
const fs = require('fs');
const os = require('os');
const path = require('path');
const vscode = require('vscode');
const exec = require('child_process').exec;
const util = {
    /**
     * 获取当前所在工程根目录，有3种使用方法：<br>
     * getProjectPath(uri) uri 表示工程内某个文件的路径<br>
     * getProjectPath(document) document 表示当前被打开的文件document对象<br>
     * getProjectPath() 会自动从 activeTextEditor 拿document对象，如果没有拿到则报错
     * @param {*} document
     */
    getProjectPath(document) {
        if (!document) {
            document = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.document : null;
        }
        if (!document) {
            this.showError('当前激活的编辑器不是文件或者没有文件被打开！');
            return '';
        }
        const currentFile = (document.uri ? document.uri : document).fsPath;
        let projectPath = null;
        let workspaceFolders = vscode.workspace.workspaceFolders.map((item) => item.uri.path);
        // 由于存在Multi-root工作区，暂时没有特别好的判断方法，先这样粗暴判断
        // 如果发现只有一个根文件夹，读取其子文件夹作为 workspaceFolders
        // tslint:disable-next-line: triple-equals
        if (workspaceFolders.length == 1 && workspaceFolders[0] === vscode.workspace.rootPath) {
            const rootPath = workspaceFolders[0];
            var files = fs.readdirSync(rootPath);
            workspaceFolders = files.filter((name) => !/^\./g.test(name)).map((name) => path.resolve(rootPath, name));
            // vscode.workspace.rootPath会不准确，且已过时
            // return vscode.workspace.rootPath + '/' + this._getProjectName(vscode, document);
        }
        workspaceFolders.forEach((folder) => {
            if (currentFile.indexOf(folder) === 0) {
                projectPath = folder;
            }
        });
        if (!projectPath) {
            this.showError('获取工程根路径异常！');
            return '';
        }
        return projectPath;
    },
    /**
     * 获取当前工程名
     */
    getProjectName: function (projectPath) {
        return path.basename(projectPath);
    },
    getPluginPath() {
    },
    /**
     * 将一个单词首字母大写并返回
     * @param {*} word 某个字符串
     */
    upperFirstLetter: function (word) {
        return (word || '').replace(/^\w/, (m) => m.toUpperCase());
    },
    /**
     * 将一个单词首字母转小写并返回
     * @param {*} word 某个字符串
     */
    lowerFirstLeter: function (word) {
        return (word || '').replace(/^\w/, (m) => m.toLowerCase());
    },
    /**
     * 全局日志开关，发布时可以注释掉日志输出
     */
    log: function (...args) {
        console.log(...args);
    },
    /**
     * 全局日志开关，发布时可以注释掉日志输出
     */
    error: function (...args) {
        console.error(...args);
    },
    /**
     * 弹出错误信息
     */
    showError: function (info) {
        vscode.window.showErrorMessage(info);
    },
    /**
     * 弹出提示信息
     */
    showInfo: function (info) {
        vscode.window.showInformationMessage(info);
    },
    findStrInFolder: function (folderPath, str) {
    }
};
module.exports = util;
//# sourceMappingURL=util.js.map