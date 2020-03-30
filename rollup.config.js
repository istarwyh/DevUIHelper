/*
 * @Author: your name
 * @Date: 2020-03-14 14:45:36
 * @LastEditTime: 2020-03-30 18:56:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUI-Language-Support\rollup.config.js
 */
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
