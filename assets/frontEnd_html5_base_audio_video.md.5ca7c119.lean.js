import{_ as s,v as a,b as n,R as l}from"./chunks/framework.814cacce.js";const u=JSON.parse('{"title":"html5 音视频标签","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/html5/base/audio_video.md","filePath":"frontEnd/html5/base/audio_video.md","lastUpdated":1689841362000}'),o={name:"frontEnd/html5/base/audio_video.md"},p=l(`<h1 id="html5-音视频标签" tabindex="-1">html5 音视频标签 <a class="header-anchor" href="#html5-音视频标签" aria-label="Permalink to &quot;html5 音视频标签&quot;">​</a></h1><p>音视频标签中的资源除了可以用 src 属性来指定外，还可以用 source 标签，而且可以指定多个，可以用来解决某些兼容问题。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\`\`\`html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">音频示例</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">audioPlayer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">controls</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example.mp3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">audio/mpeg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  您的浏览器不支持音频播放。</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">视频示例</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">videoPlayer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">controls</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example.mp4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">video/mp4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  您的浏览器不支持视频播放。</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>control 属性供添加播放、暂停和音量控件。</p><p>在<code>&lt;audio&gt;</code> 与 <code>&lt;/audio&gt;</code> 之间你需要插入浏览器不支持的<code>&lt;audio&gt;</code>元素的提示文本 。</p><p><code>&lt;audio&gt;</code> 元素允许使用多个 <code>&lt;source&gt;</code> 元素. <code>&lt;source&gt;</code> 元素可以链接不同的音频文件，浏览器将使用第一个支持的音频文件</p><h2 id="音视频频格式的-mime-类型" tabindex="-1">音视频频格式的 MIME 类型 <a class="header-anchor" href="#音视频频格式的-mime-类型" aria-label="Permalink to &quot;音视频频格式的 MIME 类型&quot;">​</a></h2><h3 id="音频格式" tabindex="-1">音频格式 <a class="header-anchor" href="#音频格式" aria-label="Permalink to &quot;音频格式&quot;">​</a></h3><table><thead><tr><th>Format</th><th>MIME-type</th></tr></thead><tbody><tr><td>MP3</td><td>audio/mpeg</td></tr><tr><td>Ogg</td><td>audio/ogg</td></tr><tr><td>Wav</td><td>audio/wav</td></tr></tbody></table><h3 id="视频格式" tabindex="-1">视频格式 <a class="header-anchor" href="#视频格式" aria-label="Permalink to &quot;视频格式&quot;">​</a></h3><table><thead><tr><th>格式</th><th>MIME-type</th></tr></thead><tbody><tr><td>MP4</td><td>video/mp4</td></tr><tr><td>WebM</td><td>video/webm</td></tr><tr><td>Ogg</td><td>video/ogg</td></tr></tbody></table><h2 id="音视频标签描述" tabindex="-1">音视频标签描述 <a class="header-anchor" href="#音视频标签描述" aria-label="Permalink to &quot;音视频标签描述&quot;">​</a></h2><h3 id="html5-audio-标签" tabindex="-1">HTML5 Audio 标签 <a class="header-anchor" href="#html5-audio-标签" aria-label="Permalink to &quot;HTML5 Audio 标签&quot;">​</a></h3><table><thead><tr><th>标签</th><th>描述</th></tr></thead><tbody><tr><td><code>&lt;audio&gt;</code></td><td>定义了声音内容</td></tr><tr><td><code>&lt;source&gt;</code></td><td>规定了多媒体资源, 可以是多个，在 <code>&lt;video&gt;</code> 与 <code>&lt;audio&gt;</code>标签中使用</td></tr></tbody></table><h3 id="html5-video-标签" tabindex="-1">HTML5 Video 标签 <a class="header-anchor" href="#html5-video-标签" aria-label="Permalink to &quot;HTML5 Video 标签&quot;">​</a></h3><p>| 标签 | 描述 | |<code>&lt;video&gt;</code> |定义一个视频| |<code>&lt;source&gt;</code>| 定义多种媒体资源,比如 <code>&lt;video&gt;</code> 和<code>&lt;audio&gt;</code>| |<code>&lt;track&gt;</code> |定义在媒体播放器文本轨迹|</p><h2 id="video-标签的属性" tabindex="-1"><code>&lt;video&gt;</code>标签的属性 <a class="header-anchor" href="#video-标签的属性" aria-label="Permalink to &quot;\`&lt;video&gt;\`标签的属性&quot;">​</a></h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>src</td><td>要播放的视频的 URL</td></tr><tr><td>width/height</td><td>视频显示区域的宽高</td></tr><tr><td>controls</td><td>用户控制界面</td></tr><tr><td>poster</td><td>视频封面</td></tr><tr><td>autoplay</td><td>自动播放</td></tr><tr><td>muted</td><td>是否静音</td></tr><tr><td>loop</td><td>循环播放</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">注意</p><p>自动播放(IE 下可以正常使用，chrome，edge 只有在静音下可以使用)</p></div><h2 id="音视频对象的方法" tabindex="-1">音视频对象的方法 <a class="header-anchor" href="#音视频对象的方法" aria-label="Permalink to &quot;音视频对象的方法&quot;">​</a></h2><table><thead><tr><th>方法名</th><th>作用</th></tr></thead><tbody><tr><td>play()</td><td>播放</td></tr><tr><td>psuse()</td><td>暂停</td></tr><tr><td>load()</td><td>重新加载</td></tr></tbody></table><h2 id="代码实例" tabindex="-1">代码实例 <a class="header-anchor" href="#代码实例" aria-label="Permalink to &quot;代码实例&quot;">​</a></h2><h3 id="audio-音频" tabindex="-1">audio 音频 <a class="header-anchor" href="#audio-音频" aria-label="Permalink to &quot;audio 音频&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">controls</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.runoob.com/try/demo_source/horse.ogg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">audio/ogg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  您的浏览器不支持 audio 元素。</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="video-视频" tabindex="-1">video 视频 <a class="header-anchor" href="#video-视频" aria-label="Permalink to &quot;video 视频&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-align:center</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">playPause</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">播放/暂停</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">makeBig</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">放大</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">makeSmall</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">缩小</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">makeNormal</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">普通</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">video1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">420</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.runoob.com/try/demo_source/movie.mp4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">video/mp4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    您的浏览器不支持 HTML5 video 标签。</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myVideo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">video1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">playPause</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">myVideo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">paused</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">myVideo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">myVideo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pause</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">makeBig</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">myVideo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">560</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">makeSmall</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">myVideo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">320</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">makeNormal</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">myVideo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">420</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,27),t=[p];function e(r,c,F,D,y,i){return a(),n("div",null,t)}const b=s(o,[["render",e]]);export{u as __pageData,b as default};
