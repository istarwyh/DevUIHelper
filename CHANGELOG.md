<!--
 * @Author: your name
 * @Date: 2020-03-27 19:34:32
 * @LastEditTime: 2020-03-30 18:20:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DevUIHelper\CHANGELOG.md
 -->
# Change Log

# V2.1.0

### 更新的功能点：
- 修复了在属性值引号内也会进行提示的BUG。

### 暂时存在的问题：
- 但引发了一个更为有趣的BUG

# V2.0.0

### 更新的功能点：

- 创建了element 和 attribute对象，现在不需要params文件夹了，在html_info.ts里面一起生成。
- 依据1重写了两个hovercompletion,hoverApiDetails文件，现在他们被放入一个completion.ts文件里面，并且能够对元素（类似d-button）进行提示了。
- 重写了hover和hover.api方法，现在他们合并到了一个hover.ts文件中，并且修改了元素（类似d-button）的提示样式
- 把所有功能函数合并到util.ts里面。还有一些小的优化比如减少代码冗余，减少any类型的使用等等。

### 暂时存在的问题：

- 还是没有拦截器，所有html文件都会提示
- html_info文件是由params文件夹处理来的，所以params提示不准确的地方这个也一样不准确，需要重新爬取
- 建议使用打包工具（rollup这类）直接打包会导致node_modules里面的东西全都打包进去，out和src文件夹也都打包了导致体积很大

# V1.0.4 (Mar 28th, 2020)

- Initial release
All notable changes to the "devui" extension will be documented in this file.
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## Changes between DevUIHelper 1.0.8 and DevUIHelper 1.0.9 (Mar 28th, 2020)
- `Changed` params to the latest version
## Changes between DevUIHelper 1.0.5 and DevUIHelper 1.0.8 (Mar 28th, 2020)
- `Fixed` support Hover when go to the next line
- `Added` Hover title 

## Changes between DevUIHelper 1.0.4 and DevUIHelper 1.0.5 (Mar 28th, 2020)
- `Changed` icon becomes more beautiful
- `Added` after the completion the cursor keeps in the center of ``""``


