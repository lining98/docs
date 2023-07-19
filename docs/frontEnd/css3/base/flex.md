# Flex 布局 - 灵活的网页布局解决方案

Flex 布局（也称为弹性盒子布局）是一种用于创建灵活、自适应的网页布局的 CSS 工具。它通过在父元素上设置`display: flex`，将子元素定义为弹性项目，使它们能够在主轴和交叉轴上灵活布局。Flex 布局提供了一种直观而强大的方法，能够轻松地实现复杂的网页布局和响应式设计。

## 如何启用 Flex 布局？

要启用 Flex 布局，只需在要成为 Flex 容器的父元素上设置`display: flex`即可：

```css
.container {
  display: flex;
}
```

一旦容器成为 Flex 容器，其中的子元素就会成为 Flex 项目，可以通过 Flex 属性控制它们的布局行为。

## 主轴和交叉轴

Flex 布局具有一个主轴和一个交叉轴。默认情况下，主轴是水平方向，交叉轴是垂直方向。可以使用`flex-direction`属性更改主轴方向。

`flex-direction` 决定 Flex 项目的排列方向：

- row：水平排列（默认值）。
- row-reverse：水平逆向排列。
- column：垂直排列。
- column-reverse：垂直逆向排列。

```css
.container {
  display: flex;
  flex-direction: row; /* 默认值，主轴为水平方向 */
  /* 或 */
  flex-direction: column; /* 主轴为垂直方向 */
}
```

## 主轴对齐与交叉轴对齐

可以使用`justify-content`属性控制主轴上的对齐方式，`align-items`属性控制交叉轴上的对齐方式。

`justify-content` 定义 Flex 项目在主轴上的对齐方式：

- flex-start：默认值，项目靠主轴起始位置对齐。
- flex-end：项目靠主轴末尾位置对齐。
- center：项目在主轴上居中对齐。
- space-between：项目平均分布在主轴上，两端不留空白。
- space-around：项目平均分布在主轴上，两端留有空白。

`align-items` 定义 Flex 项目在交叉轴上的对齐方式：

- flex-start：项目靠交叉轴起始位置对齐。
- flex-end：项目靠交叉轴末尾位置对齐。
- center：项目在交叉轴上居中对齐。
- baseline：项目的基线对齐。
- stretch：默认值，项目被拉伸以填满交叉轴空间。

```css
.container {
  display: flex;
  justify-content: center; /* 主轴居中对齐 */
  align-items: flex-start; /* 交叉轴顶部对齐 */
}
```

## 换行与排列

默认情况下，Flex 项目会在一行中排列，如果项目超出了容器的宽度，它们会缩小以适应。可以使用`flex-wrap`属性来控制项目是否换行。

`flex-wrap` 指定 Flex 项目是否换行。

- nowrap：不换行（默认值）。
- wrap：换行，项目会自动换行到下一行。
- wrap-reverse：换行，项目逆向换行到上一行。

```css
.container {
  flex-wrap: wrap; /* 允许项目换行 */
}
```

## flex-flow

是`flex-direction`和`flex-wrap`的缩写。

```css
.container {
  display: flex;
  flex-flow: row wrap; /* 水平排列，允许换行 */
}
```

## 弹性增长与缩小

- 使用`flex-grow`属性可以控制项目在剩余空间中的放大比例
- 使用`flex-shrink`属性可以控制项目在空间不足时的缩小比例。

```css
.item {
  flex-grow: 1; /* 弹性增长因子为1 */
  flex-shrink: 0; /* 不缩小 */
}
```

## 弹性基准值

`flex-basis`属性定义了项目的基准尺寸，如果没有设置宽度或高度，则会参考该值进行布局：

```css
.item {
  flex-basis: 200px; /* 项目的基准宽度为200像素 */
}
```

## 嵌套 Flex 容器

在 Flex 项目内部可以再创建一个新的 Flex 容器，嵌套的 Flex 容器有自己的主轴和交叉轴：

```scss
.container {
  display: flex;
  .inner-container {
    display: flex; /* 嵌套的Flex容器 */
  }
}
```

## 多行对齐

在多行 Flex 容器中，可以使用`align-content`属性控制交叉轴上多行的对齐方式。
`align-content`定义多行 Flex 项目在交叉轴上的对齐方式：

- flex-start：多行项目靠交叉轴起始位置对齐。
- flex-end：多行项目靠交叉轴末尾位置对齐。
- center：多行项目在交叉轴上居中对齐。
- space-between：多行项目平均分布在交叉轴上，两端不留空白。
- space-around：多行项目平均分布在交叉轴上，两端留有空白。
- stretch：默认值，多行项目被拉伸以填满交叉轴空间。

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between; /* 多行之间平均分布 */
}
```

## 实现常见布局需求

Flex 布局非常适合实现常见的网页布局需求，例如：

1. **居中对齐**：通过`justify-content`和`align-items`属性实现水平和垂直居中对齐。

2. **两端对齐**：使用`justify-content`属性设置为`space-between`实现两端对齐效果。

3. **平均分布**：通过设置`justify-content`属性为`space-around`实现项目平均分布。

4. **导航栏布局**：使用`flex-direction: row`和`align-items: center`实现水平导航栏布局。

5. **响应式网格**：使用`flex-wrap`和媒体查询创建响应式网格布局。

6. **垂直居中**：设置`align-items`属性为`center`实现垂直居中对齐。

7. **平均分布多行元素**：使用`align-content`属性在多行中平均分布元素。
