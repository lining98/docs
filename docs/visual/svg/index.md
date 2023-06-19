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
<svg>
  <!-- 不设置样式属性 style 是看不出效果的 -->
  <line x1="50" x2="50" y1="200" y2="50" style="stroke: #000000;" />
</svg>
```

### 矩形（rect）

```html
<svg>
  <rect x="400" y="200" width="150" height="50" fill="pink"></rect>
</svg>
```

### 圆形（circle）

```html
<svg>
  <circle cx="370" cy="95" r="50" style="stroke:green; fill:none"></circle>
</svg>
```

### 椭圆（cllipse）

```html
<svg>
  <ellipse cx="100" cy="100" rx="100" ry="50" />
</svg>
```

### 多边形（polygon）

```html
<svg>
  <!-- 不设置样式属性style是看不出效果的 并且polygon默认为填充需要把fill属性设置为none -->
  <polygon
    points="0 0, 20 40, 70 80, 100 90, 200 30, 250 50"
    fill="none"
    style="stroke: #000000;"
  />
</svg>
```

### 折线（polyline）

```html
<svg>
  <polyline points="300 300,50 100,120 300,200,30" fill-opacity="0" stroke="cyan"></polyline>
</svg>
```

### 路径（path）

```html
<svg>
  <path
    fill-opacity="0"
    stroke="skyblue"
    d="
        M 10  10
        L 20 300
        L 30 120
        L 40 66
        L 50 99
        L 60 120
        L 70 99
        Z
        "
  ></path>
</svg>
```
