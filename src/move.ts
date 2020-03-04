import * as vscode from 'vscode';

// export ... 使它成为了一个module
export function moveBeginningOfBuffer(): void {
    vscode.commands.executeCommand('cursorTop');
}