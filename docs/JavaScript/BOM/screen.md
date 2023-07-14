# BOM screen 对象

Screen 对象提供了关于用户屏幕的信息，如屏幕的尺寸、分辨率等。可以使用它来调整页面在不同屏幕上的显示。

## 常见属性

- `screen.width`：屏幕的宽度。
- `screen.height`：屏幕的高度。
- `screen.availWidth`：屏幕的可用宽度，不包括系统任务栏或工具栏。
- `screen.availHeight`：屏幕的可用高度，不包括系统任务栏或工具栏。
- `screen.pixelDepth`：屏幕的颜色深度。

## 示例

```js
// 获取屏幕的宽度
console.log('屏幕宽度：' + screen.width + ' 像素')

// 获取屏幕的高度
console.log('屏幕高度：' + screen.height + ' 像素')

// 获取屏幕的可用宽度
console.log('屏幕可用宽度：' + screen.availWidth + ' 像素')

// 获取屏幕的可用高度
console.log('屏幕可用高度：' + screen.availHeight + ' 像素')

// 获取屏幕的颜色深度
console.log('屏幕颜色深度：' + screen.pixelDepth + ' 位')
```
