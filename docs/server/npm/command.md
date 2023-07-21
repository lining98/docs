# npm 与 yarn 的命令对比

下面是一个包含 npm 和 Yarn 命令对比的 Markdown 表格：

| 命令                 | npm                       | Yarn                    |
| -------------------- | ------------------------- | ----------------------- |
| 初始化项目           | `npm init`                | `yarn init`             |
| 安装依赖项           | `npm install`             | `yarn install`          |
| 添加依赖项           | `npm install <pkg>`       | `yarn add <pkg>`        |
| 添加开发依赖项       | `npm install --save-dev`  | `yarn add <pkg> --dev`  |
| 移除依赖项           | `npm uninstall <pkg>`     | `yarn remove <pkg>`     |
| 更新依赖项           | `npm update`              | `yarn upgrade`          |
| 运行脚本命令         | `npm run <script>`        | `yarn run <script>`     |
| 清理缓存             | `npm cache clean`         | `yarn cache clean`      |
| 检查过时的依赖项     | `npm outdated`            | `yarn outdated`         |
| 安装全局依赖项       | `npm install -g`          | `yarn global add`       |
| 移除全局依赖项       | `npm uninstall -g`        | `yarn global remove`    |
| 列出安装的依赖项     | `npm ls`                  | `yarn list`             |
| 显示依赖项树         | `npm ls --tree`           | `yarn list --tree`      |
| 查看包信息           | `npm info <pkg>`          | `yarn info <pkg>`       |
| 搜索包               | `npm search <keyword>`    | `yarn search <keyword>` |
| 清除缓存并重装依赖项 | `npm cache clean --force` | `yarn --force`          |
