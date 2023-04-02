import{_ as s,o as a,c as n,N as l}from"./chunks/framework.8bab7da0.js";const A=JSON.parse('{"title":"JavaScript 简介","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/JavaScript/index.md","lastUpdated":1680254975000}'),p={name:"frontEnd/JavaScript/index.md"},o=l(`<h1 id="javascript-简介" tabindex="-1">JavaScript 简介 <a class="header-anchor" href="#javascript-简介" aria-label="Permalink to &quot;JavaScript 简介&quot;">​</a></h1><p><code>JavaScript</code> 是一种脚本语言，通常用于在 Web 浏览器中编写交互式前端代码。它也可以在服务器端运行，用于编写后端代码。</p><p><code>JavaScript</code> 的语法类似于 C 语言，但它是一种解释性语言，不需要编译。<code>JavaScript</code> 可以与 HTML 和 CSS 一起使用，用于创建动态网页和 Web 应用程序。</p><p>以下是一个简单的 <code>JavaScript</code> 示例：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 输出Hello, World!</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在上面的示例中，console.log 函数用于将文本输出到控制台。<code>JavaScript</code> 还有许多其他的内置函数和对象，可以用于处理字符串、数字、数组、日期等数据类型。</p><p><code>JavaScript</code> 也支持面向对象编程，可以使用 class 关键字定义类和对象。以下是一个简单的类定义示例：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sayHello</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello, my name is </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> and I am </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> years old.</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 输出：Hello, my name is Alice and I am 30 years old.</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>JavaScript</code> 还有许多其他的特性和用法，包括异步编程、模块化、函数式编程等。其中，异步编程是 <code>JavaScript</code> 中最重要的特性之一，可以使用 promise、async/await 等语法来处理异步操作。</p>`,9),e=[o];function c(r,t,i,y,D,F){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};