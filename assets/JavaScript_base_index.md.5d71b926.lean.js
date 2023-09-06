import{_ as s,v as a,b as n,R as l}from"./chunks/framework.814cacce.js";const b=JSON.parse('{"title":"JavaScript 基本语法","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/base/index.md","filePath":"JavaScript/base/index.md","lastUpdated":1689240653000}'),p={name:"JavaScript/base/index.md"},e=l(`<h1 id="javascript-基本语法" tabindex="-1">JavaScript 基本语法 <a class="header-anchor" href="#javascript-基本语法" aria-label="Permalink to &quot;JavaScript 基本语法&quot;">​</a></h1><p><code>JavaScript</code> 是一种脚本语言，通常用于在 Web 浏览器中编写交互式前端代码。它也可以在服务器端运行，用于编写后端代码。</p><p><code>JavaScript</code> 的语法类似于 C 语言，但它是一种解释性语言，不需要编译。<code>JavaScript</code> 可以与 HTML 和 CSS 一起使用，用于创建动态网页和 Web 应用程序。</p><h2 id="输出语句" tabindex="-1">输出语句 <a class="header-anchor" href="#输出语句" aria-label="Permalink to &quot;输出语句&quot;">​</a></h2><p>以下是一个简单的 <code>JavaScript</code> 示例：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 输出Hello, World!</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="引入方式" tabindex="-1">引入方式 <a class="header-anchor" href="#引入方式" aria-label="Permalink to &quot;引入方式&quot;">​</a></h2><ul><li>JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过 <code>script</code> 标签将 JavaScript 代码引入到 HTML 中，有两种方式：</li></ul><h3 id="内部方式" tabindex="-1">内部方式 <a class="header-anchor" href="#内部方式" aria-label="Permalink to &quot;内部方式&quot;">​</a></h3><p>通过 <code>script</code> 标签包裹 JavaScript 代码</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">JavaScript 基</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- 内联形式：通过 script 标签包裹 JavaScript 代码 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world！</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="外部方式" tabindex="-1">外部方式 <a class="header-anchor" href="#外部方式" aria-label="Permalink to &quot;外部方式&quot;">​</a></h3><ul><li>一般将 JavaScript 代码写在独立的以 .js 结尾的文件中，然后通过 <code>script</code> 标签的 <code>src</code> 属性引入</li><li><code>script</code>标签如果带<code>src</code>属性，那么内部的 js 代码没有作用</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#676E95;font-style:italic;">// 此处的代码会被忽略掉！！！！</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><h3 id="单行注释" tabindex="-1">单行注释 <a class="header-anchor" href="#单行注释" aria-label="Permalink to &quot;单行注释&quot;">​</a></h3><p>使用 <code>// </code> 注释单行代码， 快捷键 <code>Ctrl + /</code></p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 这种是单行注释的语法</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 一次只能注释一行</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 可以重复注释</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// document.write(&#39;hello！&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// alert()用来弹出一个警告框</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="多行注释" tabindex="-1">多行注释 <a class="header-anchor" href="#多行注释" aria-label="Permalink to &quot;多行注释&quot;">​</a></h3><p>使用<code>/* */</code>注释多行代码，快捷键 <code>Shift+Alt+A</code></p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    多行注释</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      - 注释中的内容会被解释器忽略</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      - 可以通过注释来对代码进行解释说明</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      - 也可以通过注释来注释掉不想执行的代码</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  */</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,21),o=[e];function t(r,c,i,y,D,F){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};