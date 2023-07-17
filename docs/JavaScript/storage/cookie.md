# JavaScript Cookie

`Cookie` 是一种在客户端浏览器上存储数据的机制，允许开发者在用户计算机中存储和检索有关网站的信息。Cookie 是由服务器发送到浏览器的小型文本文件，然后浏览器会将 Cookie 存储在用户的计算机上。每次用户请求与相同域名下的网页时，浏览器都会将相关 Cookie 自动发送回服务器。

以下是 `Cookie` 的基本用法和一些常见操作：

## 设置 Cookie

可以使用 `document.cookie` 属性来设置 Cookie。`document.cookie` 属性是一个字符串，包含一个或多个以分号分隔的键值对。

```javascript
document.cookie = 'username=John; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/'
document.cookie = 'age=25; path=/'
```

在上述示例中，我们设置了两个 Cookie：`username` 和 `age`。每个 Cookie 由一个键值对组成，使用等号分隔。通过设置 `expires` 属性，可以指定 Cookie 的过期时间。`path` 属性用于指定 Cookie 的可访问路径，默认为当前页面的路径。

## 获取 Cookie

可以使用 `document.cookie` 属性来获取存储在浏览器中的所有 Cookie。

```javascript
var cookies = document.cookie
console.log(cookies)
```

`document.cookie` 返回一个字符串，包含当前域名下的所有 Cookie。

## 删除 Cookie

可以通过将 Cookie 的过期时间设置为过去的时间来删除 Cookie。

```javascript
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
```

在上述示例中，我们将 `username` Cookie 的过期时间设置为过去的时间，浏览器会将其视为已过期并删除该 Cookie。

## 注意事项

- 每个域名下的 Cookie 是相互独立的，不同域名之间的 Cookie 是隔离的。

- `document.cookie` 返回的是一个字符串，包含当前域名下的所有 Cookie。需要自行解析和处理字符串来获取特定 Cookie 的值。

- Cookie 存储的值通常是字符串类型。如果需要存储其他数据类型（如对象或数组），可以使用 JSON.stringify() 方法将其转换为字符串存储，然后在需要时使用 JSON.parse() 方法将其还原。

- 每个域名和浏览器对 Cookie 的存储容量都有限制，通常在几 KB 左右。因此，存储大量数据可能会导致溢出或性能问题。建议谨慎使用并根据实际需求控制数据量。

- Cookie 会在每次请求时自动发送到服务器。因此，不应将敏感信息存储在 Cookie 中，以免遭受安全风险。

`Cookie` 是一种在客户端浏览器上存储数据的常用机制，适用于在用户计算机中存储有关网站的信息。它提供了简单的设置、获取和删除操作，可用于实现用户身份验证、网站首选项等功能。在实际应用中，需要根据具体需求合理使用 Cookie 来增强用户体验和数据交互。
