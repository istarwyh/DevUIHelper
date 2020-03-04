"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
// export ... 使它成为了一个module
function moveBeginningOfBuffer() {
    vscode.commands.executeCommand('cursorTop');
}
exports.moveBeginningOfBuffer = moveBeginningOfBuffer;
//# sourceMappingURL=move.js.map