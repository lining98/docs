import{_ as s,v as a,b as n,R as l}from"./chunks/framework.814cacce.js";const A=JSON.parse('{"title":"Canvas 样式控制","description":"","frontmatter":{},"headers":[],"relativePath":"visual/canvas/base/样式控制.md","filePath":"visual/canvas/base/样式控制.md","lastUpdated":1688376695000}'),o={name:"visual/canvas/base/样式控制.md"},e=l(`<h1 id="canvas-样式控制" tabindex="-1">Canvas 样式控制 <a class="header-anchor" href="#canvas-样式控制" aria-label="Permalink to &quot;Canvas 样式控制&quot;">​</a></h1><h2 id="_1-线性" tabindex="-1">1.线性 <a class="header-anchor" href="#_1-线性" aria-label="Permalink to &quot;1.线性&quot;">​</a></h2><p>以下的方法和属性控制线条的视觉特征。</p><ul><li><code>CanvasRenderingContext2D.lineWidth</code>：指定线条的宽度，默认为 1.0。</li><li><code>CanvasRenderingContext2D.lineCap</code>：指定线条末端的样式，有三个可能的值：<code>butt</code>（默认值，末端为矩形）、<code>round</code>（末端为圆形）、<code>square</code>（末端为突出的矩形，矩形宽度不变，高度为线条宽度的一半）。</li><li><code>CanvasRenderingContext2D.lineJoin</code>：指定线段交点的样式，有三个可能的值：<code>round</code>（交点为扇形）、<code>bevel</code>（交点为三角形底边）、<code>miter</code>（默认值，交点为菱形)。</li><li><code>CanvasRenderingContext2D.miterLimit</code>：指定交点菱形的长度，默认为 10。该属性只在<code>lineJoin</code>属性的值等于<code>miter</code>时有效。</li><li><code>CanvasRenderingContext2D.getLineDash()</code>：返回一个数组，表示虚线里面线段和间距的长度。</li><li><code>CanvasRenderingContext2D.setLineDash()</code>：数组，用于指定虚线里面线段和间距的长度。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beginPath</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">moveTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineCap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">round</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineJoin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">round</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setLineDash</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#A6ACCD;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面代码中，线条的宽度为 3，线条的末端和交点都改成圆角，并且设置为虚线。</p><h2 id="_2-渐变色" tabindex="-1">2.渐变色 <a class="header-anchor" href="#_2-渐变色" aria-label="Permalink to &quot;2.渐变色&quot;">​</a></h2><p>以下方法用于设置渐变效果和图像填充效果。</p><ul><li><code>CanvasRenderingContext2D.createLinearGradient()</code>：定义线性渐变样式。</li><li><code>CanvasRenderingContext2D.createRadialGradient()</code>：定义辐射渐变样式。</li><li><code>CanvasRenderingContext2D.createPattern()</code>：定义图像填充样式。</li></ul><p><code>createLinearGradient()</code>方法按照给定直线，生成线性渐变的样式。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createLinearGradient</span><span style="color:#A6ACCD;">(x0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y1)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>context.createLinearGradient(x0, y0, x1, y1)</code>方法接受四个参数：<code>x0</code>和<code>y0</code>是起点的横坐标和纵坐标，<code>x1</code>和<code>y1</code>是终点的横坐标和纵坐标。通过不同的坐标值，可以生成从上至下、从左到右的渐变等等。</p><p>该方法的返回值是一个<code>CanvasGradient</code>对象，该对象只有一个<code>addColorStop()</code>方向，用来指定渐变点的颜色。<code>addColorStop()</code>方法接受两个参数，第一个参数是 0 到 1 之间的一个位置量，0 表示起点，1 表示终点，第二个参数是一个字符串，表示 <code>CSS </code>颜色。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> gradient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createLinearGradient</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">gradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">gradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">skyblue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gradient</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面代码中，定义了渐变样式<code>gradient</code>以后，将这个样式指定给<code>fillStyle</code>属性，然后<code>fillRect()</code>就会生成以这个样式填充的矩形区域。</p><p><code>createRadialGradient()</code>方法定义一个辐射渐变，需要指定两个圆。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRadialGradient</span><span style="color:#A6ACCD;">(x0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r1)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>createRadialGradient()</code>方法接受六个参数，<code>x0</code>和<code>y0</code>是辐射起始的圆的圆心坐标，<code>r0</code>是起始圆的半径，<code>x1</code>和<code>y1</code>是辐射终止的圆的圆心坐标，<code>r1</code>是终止圆的半径。</p><p>该方法的返回值也是一个<code>CanvasGradient</code>对象。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> gradient </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createRadialGradient</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">gradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">white</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">gradient</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addColorStop</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">green</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gradient</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面代码中，生成辐射样式以后，用这个样式填充一个矩形。</p><h2 id="_3-图像填充" tabindex="-1">3.图像填充 <a class="header-anchor" href="#_3-图像填充" aria-label="Permalink to &quot;3.图像填充&quot;">​</a></h2><p><code>createPattern()</code>方法定义一个图像填充样式，在指定方向上不断重复该图像，填充指定的区域。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createPattern</span><span style="color:#A6ACCD;">(image</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> repetition)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该方法接受两个参数，第一个参数是图像数据，它可以是<code>&lt;img&gt;</code>元素，也可以是另一个<code>&lt;canvas&gt;</code>元素，或者一个表示图像的 Blob 对象。第二个参数是一个字符串，有四个可能的值，分别是<code>repeat</code>（双向重复）、<code>repeat-x</code>(水平重复)、<code>repeat-y</code>(垂直重复)、<code>no-repeat</code>(不重复)。如果第二个参数是空字符串或<code>null</code>，则等同于<code>null</code>。</p><p>该方法的返回值是一个<code>CanvasPattern</code>对象。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> img </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Image</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.com/pattern.png</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pattern</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createPattern</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">repeat</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pattern</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">400</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">400</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面代码中，图像加载成功以后，使用<code>createPattern()</code>生成图像样式，然后使用这个样式填充指定区域。</p><h2 id="_4-阴影" tabindex="-1">4.阴影 <a class="header-anchor" href="#_4-阴影" aria-label="Permalink to &quot;4.阴影&quot;">​</a></h2><p>以下属性用于设置阴影。</p><ul><li><code>CanvasRenderingContext2D.shadowBlur</code>：阴影的模糊程度，默认为<code>0</code>。</li><li><code>CanvasRenderingContext2D.shadowColor</code>：阴影的颜色，默认为<code>black</code>。</li><li><code>CanvasRenderingContext2D.shadowOffsetX</code>：阴影的水平位移，默认为<code>0</code>。</li><li><code>CanvasRenderingContext2D.shadowOffsetY</code>：阴影的垂直位移，默认为<code>0</code>。</li></ul><p>下面是一个例子。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowOffsetX </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowOffsetY </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowBlur </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(0,0,0,0.5)</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fillStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">green</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fillRect</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,33),p=[e];function c(t,r,C,D,y,i){return a(),n("div",null,p)}const d=s(o,[["render",c]]);export{A as __pageData,d as default};
