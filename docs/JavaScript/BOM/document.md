# BOM document 对象

Document 对象代表当前窗口或标签页中加载的文档。它提供了对文档内容进行访问和操作的方法和属性。

## 常见操作

- 获取元素：可以使用`document.getElementById(id)`获取具有指定 id 的元素。
- 修改文档结构：可以使用`document.createElement(tagName)`创建新元素，并使用`element.appendChild(childElement)`将其添加到文档中。
- 修改元素属性：可以使用`element.setAttribute(name, value)`设置元素的属性。

## 示例

```js
// 获取具有id为"myElement"的元素
var element = document.getElementById('myElement')

// 创建一个新的段落元素，并将其添加到文档中
var newParagraph = document.createElement('p')
newParagraph.textContent = '这是新创建的段落。'
element.appendChild(newParagraph)

// 修改元素的属性
element.setAttribute('class', 'highlight')
```
