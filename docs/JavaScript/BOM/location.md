# BOM location 对象

Location 对象提供了与当前窗口的 URL 相关的信息和操作。它包含了 URL 的各个部分，如协议、主机名、路径和查询参数等。

## 常见属性和方法

- `location.href`：当前窗口的完整 URL。
- `location.protocol`：URL 的协议部分。
- `location.hostname`：URL 的主机名部分。
- `location.pathname`：URL 的路径部分。
- `location.search`：URL 的查询字符串部分。
- `location.assign(url)`：加载一个新的 URL。
- `location.reload()`：重新加载当前页面。

## 示例

```javascript
// 获取当前窗口的URL
console.log(location.href)

// 获取URL的协议
console.log(location.protocol)

// 将页面重定向到新的URL
location.assign('https://www.example.com')

// 重新加载当前页面
location.reload()
```
