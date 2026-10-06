import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Extension activates and registers its editor commands', async () => {
		const extension = vscode.extensions.getExtension('sspkuDevUI.devuihelper');
		assert.ok(extension, 'Development extension must be installed');
		await extension!.activate();
		assert.ok(extension!.isActive);
		const commands = await vscode.commands.getCommands(true);
		for (const command of ['extension.getCurrentFilePath', 'extension.moveBeginning', 'extension.moveEnding']) {
			assert.ok(commands.includes(command), `Missing command: ${command}`);
		}
	});
});
