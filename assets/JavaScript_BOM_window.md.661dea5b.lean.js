import{_ as s,v as n,b as a,R as l}from"./chunks/framework.814cacce.js";const D=JSON.parse('{"title":"BOM window 对象","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/BOM/window.md","filePath":"JavaScript/BOM/window.md","lastUpdated":1689326952000}'),e={name:"JavaScript/BOM/window.md"},o=l(`<h1 id="bom-window-对象" tabindex="-1">BOM window 对象 <a class="header-anchor" href="#bom-window-对象" aria-label="Permalink to &quot;BOM window 对象&quot;">​</a></h1><p>Window 对象是 BOM 的顶级对象，表示浏览器窗口或标签页。它提供了操作浏览器窗口的方法和属性，以及与窗口内容交互的功能。</p><h2 id="常见属性和方法" tabindex="-1">常见属性和方法 <a class="header-anchor" href="#常见属性和方法" aria-label="Permalink to &quot;常见属性和方法&quot;">​</a></h2><ul><li><code>window.open(url, name, specs)</code>：打开一个新的浏览器窗口或标签页。</li><li><code>window.close()</code>：关闭当前窗口。</li><li><code>window.resizeTo(width, height)</code>：调整窗口的大小。</li><li><code>window.moveTo(x, y)</code>：将窗口移动到指定的位置。</li><li><code>window.document</code>：当前窗口加载的文档对象。</li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 打开一个新窗口</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://www.example.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 关闭当前窗口</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 调整窗口大小</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resizeTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将窗口移动到屏幕左上角</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">moveTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,6),p=[o];function c(t,r,i,d,y,w){return n(),a("div",null,p)}const b=s(e,[["render",c]]);export{D as __pageData,b as default};