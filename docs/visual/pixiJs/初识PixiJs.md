# 初识 PixiJs

[官方网站](https://www.pixijs.com/)

## 是什么

> PixiJS 是一个基于 WebGL 和 Canvas 技术的快速、轻量级的 JavaScript 库，用于创建交互式 2D 图形和动画。它提供了简单易用的 API 和强大的渲染能力，使开发者能够轻松构建高性能的图形界面和游戏。本文将介绍 PixiJS 的特点、用法和示例，帮助读者快速上手这个强大的库。

## 特点

### 1. 快速高效

PixiJS 利用 WebGL 技术进行硬件加速渲染，能够处理大量的图形元素并实现流畅的动画效果。它还支持使用 Canvas 进行降级渲染，以确保在不支持 WebGL 的设备上也能正常运行。

### 2. 简单易用

PixiJS 提供了简洁而直观的 API，使开发者能够快速上手并高效地创建图形和动画。它具有一致的接口设计和详细的文档，方便开发者查阅和学习。

### 3. 丰富的功能

PixiJS 提供了一系列强大的功能，包括精灵(Sprite)、纹理(Texture)、滤镜(Filters)、事件处理等。开发者可以通过组合这些功能来创建复杂的交互式图形界面和游戏。

### 4. 跨平台支持

PixiJS 可以在现代浏览器上运行，并提供了针对移动设备的优化。它支持响应式设计，使开发者能够创建适应不同屏幕大小和分辨率的应用。

## 用法示例

下面是一个简单的 PixiJS 示例，展示了如何创建一个基本的场景并添加一个可交互的精灵：

```js
// 创建一个场景
let app = new PIXI.Application({ width: 800, height: 600 })
document.body.appendChild(app.view)

// 加载一个纹理
PIXI.loader.add('image', 'path/to/image.png').load(onAssetsLoaded)

// 当纹理加载完成后执行的回调函数
function onAssetsLoaded() {
  // 创建一个精灵
  let sprite = new PIXI.Sprite(PIXI.loader.resources['image'].texture)
  sprite.interactive = true // 允许交互
  sprite.on('click', onClick) // 点击事件处理函数

  // 将精灵添加到场景
  app.stage.addChild(sprite)
}

// 点击事件处理函数
function onClick() {
  alert('Sprite clicked!')
}
```
