# CSS 文本溢出隐藏

```html
<div class="content">12333333333333333333333333</div>
```

```css
.content {
  width: 100px;
  border: 1px solid #000;
}
```

## 单行溢出隐藏

```css
.content {
  width: 100px; /* 1.设置元素的宽度 */
  border: 1px solid #000;
  white-space: nowrap; /* 2.不换行 */
  overflow: hidden; /* 3.超出的内容溢出隐藏 */

  text-overflow: ellipsis; /* 以省略号显示隐藏的内容 */
}
```

## 多行溢出隐藏-webkit-内核

```html
<div class="text">
  这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容，这里是多行文本内容。
</div>
```

```css
.text {
  width: 400px; /* 1.设置元素的宽度 */
  display: -webkit-box; /* 改变元素为box弹性盒子 */
  -webkit-line-clamp: 2; /* 限定行数 不是一个规范的属性，没有在css规范草案中 */
  -webkit-box-orient: vertical; /* 检索伸缩盒子对象的子元素的排列方式 */
  overflow: hidden; /* 设置溢出隐藏 */
  text-overflow: ellipsis; /* 隐藏的文本以省略号显示 */
  word-break: break-all; /* 强制打断单词换行 */
}
```

::: tip
多行溢出隐藏只能内核是 -webkit- 的浏览器
:::

## 多行溢出隐藏 兼容较好

```css
.text {
  /* 1.限定宽度 */
  width: 400px;
  border: solid;
  margin: auto;
  /* 2.限定高度以及行高，并且行高与高度要成比例 */
  height: 60px;
  line-height: 30px;
  position: relative;
  overflow: hidden;
}
.text:after {
  content: '...';
  position: absolute;
  right: 0px;
  bottom: 0px;
  background: #fff;
  padding-left: 4px;
}
```
