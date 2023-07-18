# yarn 的安装与使用

## 安装 Yarn

在开始之前，请确保你已经安装了 Node.js。然后，可以按照以下步骤安装 Yarn：

**通过包管理器安装 Yarn：**

**使用 npm（全局安装）：** 打开终端并运行以下命令：

```shell
npm install -g yarn
```

以上任一方法都将安装 Yarn 到你的计算机上。

## 使用 Yarn

安装 Yarn 后，你可以使用以下常用命令来管理依赖关系和执行其他操作：

- **初始化项目：** 进入你的项目目录，并运行以下命令来初始化项目：

  ```shell
  yarn init
  ```

  这将引导你提供有关项目的一些信息，并生成一个 `package.json` 文件。

- **安装依赖项：** 在项目目录中，运行以下命令来安装依赖项：

  ```shell
  yarn install
  ```

  Yarn 将读取项目根目录下的 `package.json` 文件，并下载安装所有列出的依赖项。

- **添加依赖项：** 若要添加新的依赖项，可以运行以下命令：

  ```shell
  yarn add <package-name>
  ```

  `<package-name>` 是你要添加的包的名称。

- **移除依赖项：** 如果你想移除不再需要的依赖项，可以运行以下命令：

  ```shell
  yarn remove <package-name>
  ```

  `<package-name>` 是你要移除的包的名称。

- **更新依赖项：** 要更新依赖项到最新版本，可以运行以下命令：

  ```shell
  yarn upgrade
  ```

  这将检查所有依赖项，并将它们更新到最新可用版本。

- **运行脚本命令：** 如果在 `package.json` 文件的 `scripts` 部分定义了一些自定义脚本命令，你可以使用以下命令运行它们：
  ```shell
  yarn run <script-name>
  ```
  `<script-name>` 是你要运行的脚本命令的名称。
