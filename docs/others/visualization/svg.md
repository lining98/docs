# SVG

## 是什么

1. SVG 是 Scalable Vector Graphics 的缩写 意为可缩放矢量图形
2. SVG 是一个基于文本的开放网络标准，用来定义用于网络的矢量图形
3. SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失，因此能够优雅而简洁地渲染不同大小的图形，并和 CSS，DOM，JavaScript 和 SMIL 等其他网络标准无缝衔接
4. SVG 使用 XML 格式定义图形

> 在不给 `<svg>` 设置宽高时，它的默认宽度是 300px ，默认高度是 150px 。这点和 `<canvas>` 是一样的。

## 基本图形

### 线条（line）

```html
<svg width="300" height="300">
  <!-- 不设置样式属性 style 是看不出效果的 -->
  <line x1="50" x2="50" y1="200" y2="50" style="stroke: #000000;" />
</svg>
```

### 矩形（rect）

### 圆形（circle）

### 椭圆（cllipse）

### 多边形（polygon）

### 折线（polyline）

### 路径（path）
