# CSS 水平垂直居中

## 行内元素

- 使用 line-height

```html
<div class="container">
  <span>123</span>
</div>
```

```css
.container {
  width: 400px;
  height: 200px;
  background: skyblue;

  text-align: center; /* 水平居中 */
  line-height: 200px; /* 垂直居中，设置行高和高度一样 */
}
```

## 块级元素

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.box {
  width: 400px;
  height: 200px;
  background: skyblue;
}
```

### 使用 margin

- 父元素使用 `display: flex`

```css
.container {
  display: flex;
  height: 100vh;
}

.box {
  width: 400px;
  height: 200px;
  background: skyblue;

  margin: auto;
}
```

### 使用定位

#### 定宽高

```css
.box {
  width: 400px;
  height: 200px;
  background: skyblue;

  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -100px;
}
```

#### 不定宽高

- 使用 `transform`

```css
.box {
  width: 400px;
  height: 200px;
  background: skyblue;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

- 使用 `position` 和 `margin`

```css
.box {
  width: 400px;
  height: 200px;
  background: skyblue;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  margin: auto;
}
```

### 使用 Flex 布局

```css
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 为了让容器撑满视口高度 */
}
```

### 使用 Grid 布局

```css
.container {
  display: grid;
  place-content: center;
}
```
