# 常用标签及用法

当描述 HTML 标签时，代码块会被渲染成 HTML 标记，为了避免这种情况，我将在每个代码示例中添加特殊字符，以确保它们不会被渲染。请在复制代码时将特殊字符删除。

## 标题标签 `<h1>` 到 `<h6>`

```html
<h1>这是h1级别的标题</h1>
<h2>这是h2级别的标题</h2>
<h3>这是h3级别的标题</h3>
<h4>这是h4级别的标题</h4>
<h5>这是h5级别的标题</h5>
<h6>这是h6级别的标题</h6>
```

## 段落标签 `<p>`

```html
<p>这是一个段落文本。</p>
```

## 超链接标签 `<a>`

```html
<a href="https://www.example.com">点击这里跳转到示例网站</a>
```

## 图像标签 `<img>`

```html
<img src="example.jpg" alt="示例图片" />
```

## 无序列表和列表项标签 `<ul>` 和 `<li>`

```html
<ul>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
</ul>
```

## 有序列表和列表项标签 `<ol>` 和 `<li>`

```html
<ol>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
</ol>
```

## 容器标签 `<div>`

```html
<div>
  这是一个div容器。
  <p>包含一段文本。</p>
</div>
```

## 内联容器标签 `<span>`

```html
这是一个
<span style="color: blue;">内联容器</span>
标签。
```

## 表格标签 `<table>`、`<tr>`、`<th>` 和 `<td>`

```html
<table>
  <tr>
    <th>表头1</th>
    <th>表头2</th>
  </tr>
  <tr>
    <td>单元格1</td>
    <td>单元格2</td>
  </tr>
</table>
```

## 换行标签 `<br>`

```html
这是一行文本。
<br />
这是另一行文本。
```

## 输入标签 `<input>`

```html
<input type="text" placeholder="输入文本" />
<input type="checkbox" id="checkbox" />
<label for="checkbox">复选框</label>
```

## 按钮标签 `<button>`

```html
<button>点击我</button>
```

## 表单标签 `<form>`

```html
<form action="/submit" method="post">
  <label for="username">用户名：</label>
  <input type="text" id="username" />
  <input type="submit" value="提交" />
</form>
```

## 标题、脚注和导航标签 `<header>`、`<footer>` 和 `<nav>`

```html
<header>
  <h1>网站标题</h1>
  <nav>
    <ul>
      <li><a href="/home">首页</a></li>
      <li><a href="/about">关于我们</a></li>
      <li><a href="/contact">联系方式</a></li>
    </ul>
  </nav>
</header>

<footer>版权所有 &copy; 2023 公司名</footer>
```

## 多媒体标签 `<video>` 和 `<audio>`

```html
<video src="example.mp4" controls>您的浏览器不支持视频播放。</video>

<audio src="example.mp3" controls>您的浏览器不支持音频播放。</audio>
```
