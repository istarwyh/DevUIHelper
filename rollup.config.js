import * as fs from 'fs';
import commonjs from 'rollup-plugin-commonjs';

module.exports = [
  {
    input: 'out/extension.js',
    output: {
      file: 'Release/extension.js',
      format: 'amd',
    },
    external: [
      'fs',
      'path',
      'typescript/lib/tsserverlibrary',
      'vscode-languageserver',
      'vscode-uri',
    ],
    plugins: [
      commonjs({
        ignore: [
          'conditional-runtime-dependency',
        ],
      }),
    ],
  },
];
