import{_ as s,c as a,o as n,V as l}from"./chunks/framework.b3911a66.js";const A=JSON.parse('{"title":"Canvas 使用","description":"","frontmatter":{},"headers":[],"relativePath":"visual/canvas/index/基本使用.md","filePath":"visual/canvas/index/基本使用.md","lastUpdated":1688117356000}'),p={name:"visual/canvas/index/基本使用.md"},o=l(`<h1 id="canvas-使用" tabindex="-1">Canvas 使用 <a class="header-anchor" href="#canvas-使用" aria-label="Permalink to &quot;Canvas 使用&quot;">​</a></h1><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">canvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">600</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">您的浏览器不支持 Canvas</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// /** @type {HTMLCanvasElement} **/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.找到画布</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> canvas </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">canvas</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断是否有getContext</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">canvas</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">getContext) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">当前浏览器不支持canvas，请下载最新的浏览器</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  2.获取画笔</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(context)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.绘制图形</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="属性方法" tabindex="-1">属性方法 <a class="header-anchor" href="#属性方法" aria-label="Permalink to &quot;属性方法&quot;">​</a></h2><ul><li>strokeStyle 设置或返回描边颜色</li><li>fillStyle 设置或返回填充颜色</li><li>stroke() 描边已定义绘图（路径）</li><li>fill() 填充当前绘图（路径）</li><li>moveTo(x,y) 把路径移动到画布中的指定点，不创建线条。</li><li>lineTo(x,y) 添加一个新点,绘制一条从当前位置到指定新点(x,y)位置的直线。</li><li>lineWidth 设置或返回当前的线条宽度</li><li>lineJoin 设置或返回两条线相交时，所创建的拐角类型</li><li>lineCap 设置或返回线条的结束端点样式</li><li>beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。生成路径的第一步- 叫做 beginPath()。</li><li>closePath() 闭合路径之后图形绘制命令又重新指向到上下文中。不是必需的。</li></ul>`,6),e=[o];function t(c,r,i,y,D,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
