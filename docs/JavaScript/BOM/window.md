# BOM window 对象

Window 对象是 BOM 的顶级对象，表示浏览器窗口或标签页。它提供了操作浏览器窗口的方法和属性，以及与窗口内容交互的功能。

## 常见属性和方法

- `window.open(url, name, specs)`：打开一个新的浏览器窗口或标签页。
- `window.close()`：关闭当前窗口。
- `window.resizeTo(width, height)`：调整窗口的大小。
- `window.moveTo(x, y)`：将窗口移动到指定的位置。
- `window.document`：当前窗口加载的文档对象。

## 示例

```js
// 打开一个新窗口
window.open('https://www.example.com', '_blank')

// 关闭当前窗口
window.close()

// 调整窗口大小
window.resizeTo(800, 600)

// 将窗口移动到屏幕左上角
window.moveTo(0, 0)
```
