# BOM navigator 对象

Navigator 对象提供了关于浏览器的信息，如浏览器的名称、版本、用户代理字符串等。它还可以用于检测浏览器的功能和特性。

## 常见属性

- `navigator.userAgent`：包含用户代理字符串，用于识别浏览器和操作系统。
- `navigator.appName`：浏览器的名称。
- `navigator.appVersion`：浏览器的版本。
- `navigator.platform`：运行浏览器的操作系统平台。

## 示例

```js
// 获取用户代理字符串
console.log(navigator.userAgent)

// 获取浏览器的名称
console.log(navigator.appName)

// 获取浏览器的版本
console.log(navigator.appVersion)

// 获取操作系统平台
console.log(navigator.platform)
```
