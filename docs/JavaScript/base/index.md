# JavaScript 基本语法

`JavaScript` 是一种脚本语言，通常用于在 Web 浏览器中编写交互式前端代码。它也可以在服务器端运行，用于编写后端代码。

`JavaScript` 的语法类似于 C 语言，但它是一种解释性语言，不需要编译。`JavaScript` 可以与 HTML 和 CSS 一起使用，用于创建动态网页和 Web 应用程序。

## 输出语句

以下是一个简单的 `JavaScript` 示例：

```js
// 输出Hello, World!
console.log('Hello, World!')

document.write('Hello World!')

alert('Hello World!')
```

## 引入方式

- JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过 `script` 标签将 JavaScript 代码引入到 HTML 中，有两种方式：

### 内部方式

通过 `script` 标签包裹 JavaScript 代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript 基</title>
  </head>
  <body>
    <!-- 内联形式：通过 script 标签包裹 JavaScript 代码 -->
    <script>
      alert('Hello world！')
    </script>
  </body>
</html>
```

### 外部方式

- 一般将 JavaScript 代码写在独立的以 .js 结尾的文件中，然后通过 `script` 标签的 `src` 属性引入
- `script`标签如果带`src`属性，那么内部的 js 代码没有作用

```html
<script src="demo.js">
   // 此处的代码会被忽略掉！！！！
  alert(123);
</script>
```

## 注释

### 单行注释

使用 `// ` 注释单行代码， 快捷键 `Ctrl + /`

```html
<script>
  // 这种是单行注释的语法
  // 一次只能注释一行
  // 可以重复注释

  // document.write('hello！')
  alert(123) // alert()用来弹出一个警告框
</script>
```

### 多行注释

使用`/* */`注释多行代码，快捷键 `Shift+Alt+A`

```html
<script>
  /*
    多行注释
      - 注释中的内容会被解释器忽略
      - 可以通过注释来对代码进行解释说明
      - 也可以通过注释来注释掉不想执行的代码
  */
</script>
```
