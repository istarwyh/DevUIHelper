"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
// export ... 使它成为了一个module
function moveBeginning() {
    vscode.commands.executeCommand('cursorTop');
}
function moveEnding() {
    vscode.commands.executeCommand('cursorBottom');
}
const disposable_begin = vscode.commands.registerCommand('extension.moveBeginning', moveBeginning);
const disposable_end = vscode.commands.registerCommand('extension.moveEnding', moveEnding);
module.exports = function (context) {
    context.subscriptions.push(disposable_begin);
    context.subscriptions.push(disposable_end);
};
//# sourceMappingURL=move.js.map