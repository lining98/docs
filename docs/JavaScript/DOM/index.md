# JavaScript DOM

## 概念

DOM（Document Object Model）是一种用于表示和操作 HTML、XML 等文档结构的编程接口。它将文档表示为一个树状结构，每个节点都是文档中的一个元素、属性、文本或其他类型的内容。

在 JavaScript 中，浏览器将 HTML 文档解析为 DOM 树，并提供了一组 API（应用程序编程接口）来访问和操作 DOM 树中的节点。这使得开发者可以使用 JavaScript 动态地修改网页的内容、样式和结构，以及响应用户的交互事件。

DOM 树的结构是层次化的，由多个节点组成。每个节点都有其特定的属性和方法，可以用于获取或修改节点的信息、添加、删除或移动节点等操作。以下是一些常用的 DOM 操作：

## DOM 树

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>标题</title>
  </head>
  <body>
    文本
    <a href="">链接名</a>
    <div id="" class="">文本</div>
  </body>
</html>
```

如下图所示，将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM 树，**文档树直观的体现了标签与标签之间的关系。**
![dom](./imgs/web-api.jpg)

## DOM 节点

节点是文档树的组成部分，**每一个节点都是一个 DOM 对象**，主要分为元素节点、属性节点、文本节点等。

1. 【元素节点】其实就是 HTML 标签，如上图中 `head`、`div`、`body` 等都属于元素节点。
2. 【属性节点】是指 HTML 标签中的属性，如上图中 `a` 标签的 `href` 属性、`div` 标签的 `class` 属性。
3. 【文本节点】是指 HTML 标签的文字内容，如 `title` 标签中的文字。
4. 【根节点】特指 `html` 标签。

## document

`document` 是 JavaScript 内置的专门用于 DOM 的对象，该对象包含了若干的属性和方法，`document` 是学习 DOM 的核心。

```html
<script>
  // document 是内置的对象
  // console.log(typeof document);

  // 1. 通过 document 获取根节点
  console.log(document.documentElement) // 对应 html 标签

  // 2. 通过 document 节取 body 节点
  console.log(document.body) // 对应 body 标签

  // 3. 通过 document.write 方法向网页输出内容
  document.write('Hello World!')
</script>
```

::: tip
DOM 提供了丰富的功能和方法，使开发者能够通过 JavaScript 与网页进行交互和动态操作。通过 DOM，可以实现动态修改网页内容、实时更新页面、处理用户输入和交互等操作，使得 JavaScript 成为了 Web 开发中不可或缺的一部分。
:::
