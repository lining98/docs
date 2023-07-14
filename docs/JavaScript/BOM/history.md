# BOM history 对象

History 对象提供了对浏览器历史记录的操作。可以使用它向前或向后导航，加载历史记录中的不同页面。

## 常见方法

- `history.back()`：导航到上一个页面。
- `history.forward()`：导航到下一个页面。
- `history.go(delta)`：导航到相对于当前页面的偏移量为`delta`的页面。

## 示例

```javascript
// 导航到上一个页面
history.back()

// 导航到下一个页面
history.forward()

// 导航到相对于当前页面的偏移量为2的页面
history.go(2)
```
