# html5 音视频标签

音视频标签中的资源除了可以用 src 属性来指定外，还可以用 source 标签，而且可以指定多个，可以用来解决某些兼容问题。

```html
<audio controls="controls">
  <source src="filename.ogg" type="audio/ogg" />
  <source src="filename.mp3" type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>

<video controls>
  <!-- src引入本地媒体文件 -->
  <source src="resource/3.mp4" />
  <source src="resource/e3a.mp4" />
</video>
```

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

```js
    ......html、css部分...........
    //获取
    let v = document.querySelector("video");
    //在视频被重新加载时触发。
    v.onabort = function () {
      console.log(1);
    }
    //播放结束后触发
    v.onended = function(){
      //播放完成后，播放下一个 视频
      v.src = "resource/2.mp4";
      v.play();
    }
    //播放暂停触发
    v.onpause = function () {
      alert("已经暂停")
    }
    //开始播放时触发
    v.onplay = function(){
      console.log("play");
    }
    // 已经开始播放时触发   (开始时，暂停恢复后，结束后重新开始)   都会触发。
    v.onplaying = function(){
      console.log("正在播放，不要眨眼");
    }
    //时间轴时间改变
    v.ontimeupdate = function(){
      console.log("时间改变了");
    }
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
    <source src="mov_bbb.mp4" type="video/mp4" />
    <source src="mov_bbb.ogg" type="video/ogg" />
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
