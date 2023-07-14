# JavaScript DOM

DOM（Document Object Model）是一种用于表示和操作 HTML、XML 等文档结构的编程接口。它将文档表示为一个树状结构，每个节点都是文档中的一个元素、属性、文本或其他类型的内容。

在 JavaScript 中，浏览器将 HTML 文档解析为 DOM 树，并提供了一组 API（应用程序编程接口）来访问和操作 DOM 树中的节点。这使得开发者可以使用 JavaScript 动态地修改网页的内容、样式和结构，以及响应用户的交互事件。

DOM 树的结构是层次化的，由多个节点组成。每个节点都有其特定的属性和方法，可以用于获取或修改节点的信息、添加、删除或移动节点等操作。以下是一些常用的 DOM 操作：

## **获取和修改元素**：

- `getElementById()`: 根据元素的 ID 获取元素节点。
- `getElementsByClassName()`: 根据类名获取元素节点集合。
- `getElementsByTagName()`: 根据标签名获取元素节点集合。
- `querySelector()`: 根据选择器获取匹配的第一个元素节点。
- `querySelectorAll()`: 根据选择器获取匹配的所有元素节点。
- `innerHTML`: 获取或设置元素的 HTML 内容。
- `textContent`: 获取或设置元素的文本内容。

## **创建和操作元素**：

- `createElement()`: 创建新的元素节点。
- `appendChild()`: 将一个节点添加为另一个节点的子节点。
- `removeChild()`: 删除指定的子节点。
- `setAttribute()`: 设置元素的属性值。
- `getAttribute()`: 获取元素的属性值。

## **事件处理**：

- `addEventListener()`: 添加事件监听器。
- `removeEventListener()`: 移除事件监听器。
- 事件处理函数：响应事件的函数，可以通过事件对象获取相关信息。

## **样式和类操作**：

- `style`: 获取或设置元素的样式属性。
- `classList`: 获取元素的类列表，可用于添加、删除或切换类。

DOM 提供了丰富的功能和方法，使开发者能够通过 JavaScript 与网页进行交互和动态操作。通过 DOM，可以实现动态修改网页内容、实时更新页面、处理用户输入和交互等操作，使得 JavaScript 成为了 Web 开发中不可或缺的一部分。
