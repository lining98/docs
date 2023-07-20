# html5 音视频标签

音视频标签中的资源除了可以用 src 属性来指定外，还可以用 source 标签，而且可以指定多个，可以用来解决某些兼容问题。

````html
```html

<h2>音频示例</h2>
<audio id="audioPlayer" controls>
  <source src="example.mp3" type="audio/mpeg" />
  您的浏览器不支持音频播放。
</audio>

<h2>视频示例</h2>
<video id="videoPlayer" controls width="400">
  <source src="example.mp4" type="video/mp4" />
  您的浏览器不支持视频播放。
</video>
````

control 属性供添加播放、暂停和音量控件。

在`<audio>` 与 `</audio>` 之间你需要插入浏览器不支持的`<audio>`元素的提示文本 。

`<audio>` 元素允许使用多个 `<source>` 元素. `<source>` 元素可以链接不同的音频文件，浏览器将使用第一个支持的音频文件

## 音视频频格式的 MIME 类型

### 音频格式

| Format | MIME-type  |
| ------ | ---------- |
| MP3    | audio/mpeg |
| Ogg    | audio/ogg  |
| Wav    | audio/wav  |

### 视频格式

| 格式 | MIME-type  |
| ---- | ---------- |
| MP4  | video/mp4  |
| WebM | video/webm |
| Ogg  | video/ogg  |

## 音视频标签描述

### HTML5 Audio 标签

| 标签       | 描述                                                              |
| ---------- | ----------------------------------------------------------------- |
| `<audio>`  | 定义了声音内容                                                    |
| `<source>` | 规定了多媒体资源, 可以是多个，在 `<video>` 与 `<audio>`标签中使用 |

### HTML5 Video 标签

| 标签 | 描述 |
|`<video>` |定义一个视频|
|`<source>`| 定义多种媒体资源,比如 `<video>` 和`<audio>`|
|`<track>` |定义在媒体播放器文本轨迹|

## `<video>`标签的属性

| 属性         | 描述               |
| ------------ | ------------------ |
| src          | 要播放的视频的 URL |
| width/height | 视频显示区域的宽高 |
| controls     | 用户控制界面       |
| poster       | 视频封面           |
| autoplay     | 自动播放           |
| muted        | 是否静音           |
| loop         | 循环播放           |

::: warning 注意
自动播放(IE 下可以正常使用，chrome，edge 只有在静音下可以使用)
:::

## 音视频对象的方法

| 方法名  | 作用     |
| ------- | -------- |
| play()  | 播放     |
| psuse() | 暂停     |
| load()  | 重新加载 |

## 代码实例

### audio 音频

```html
<audio controls>
  <source src="https://www.runoob.com/try/demo_source/horse.ogg" type="audio/ogg" />
  您的浏览器不支持 audio 元素。
</audio>
```

### video 视频

```html
<div style="text-align:center">
  <button onclick="playPause()">播放/暂停</button>
  <button onclick="makeBig()">放大</button>
  <button onclick="makeSmall()">缩小</button>
  <button onclick="makeNormal()">普通</button>
  <br />
  <video id="video1" width="420">
    <source src="https://www.runoob.com/try/demo_source/movie.mp4" type="video/mp4" />
    您的浏览器不支持 HTML5 video 标签。
  </video>
</div>
```

```js
var myVideo = document.getElementById('video1')

function playPause() {
  if (myVideo.paused) myVideo.play()
  else myVideo.pause()
}

function makeBig() {
  myVideo.width = 560
}

function makeSmall() {
  myVideo.width = 320
}

function makeNormal() {
  myVideo.width = 420
}
```
