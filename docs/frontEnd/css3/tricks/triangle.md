# CSS 绘制三角形

## 方法 1：使用边框

```css
/* 朝上的三角形 */
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
}

/* 朝下的三角形 */
.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #f00;
}

/* 朝右的三角形 */
.arrow-right {
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  border-left: 60px solid green;
}

/* 朝左的三角形 */
.arrow-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid blue;
}
```

## 方法 2：使用 clip-path 属性

```css
.content {
  width: 175px;
  height: 175px;
  margin: auto;
  object-fit: cover;
  background-image: url('图片路径');
  background-size: cover;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
}
```
