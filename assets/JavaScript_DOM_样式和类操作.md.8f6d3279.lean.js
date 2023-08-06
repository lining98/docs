import{_ as s,v as a,b as e,R as l}from"./chunks/framework.814cacce.js";const A=JSON.parse('{"title":"DOM 样式和类操作","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/DOM/样式和类操作.md","filePath":"JavaScript/DOM/样式和类操作.md","lastUpdated":1689579676000}'),n={name:"JavaScript/DOM/样式和类操作.md"},o=l(`<h1 id="dom-样式和类操作" tabindex="-1">DOM 样式和类操作 <a class="header-anchor" href="#dom-样式和类操作" aria-label="Permalink to &quot;DOM 样式和类操作&quot;">​</a></h1><p>在 JavaScript 中，可以使用 DOM（文档对象模型）来操作元素的样式和类。以下是一些常用的方法和技巧：</p><h2 id="样式操作" tabindex="-1">样式操作 <a class="header-anchor" href="#样式操作" aria-label="Permalink to &quot;样式操作&quot;">​</a></h2><ul><li><p>修改元素的内联样式：使用 <code>style</code> 对象来访问和修改元素的样式属性。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">backgroundColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这里的 <code>backgroundColor</code> 是你要修改的 CSS 样式属性的名称，例如 <code>&#39;color&#39;</code>、<code>&#39;font-size&#39;</code> 等，而 <code>&#39;red&#39;</code> 是相应的属性值。</p></li><li><p>获取元素的计算样式：使用 <code>getComputedStyle</code> 方法。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> computedStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComputedStyle</span><span style="color:#A6ACCD;">(element)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> propertyValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> computedStyle</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPropertyValue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">propertyName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这将返回元素的计算样式对象，你可以使用 <code>getPropertyValue</code> 方法来获取指定属性的值。</p></li></ul><h2 id="类操作" tabindex="-1">类操作 <a class="header-anchor" href="#类操作" aria-label="Permalink to &quot;类操作&quot;">​</a></h2><ul><li><p>添加类名：使用 <code>classList</code> 属性的 <code>add</code> 方法。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">classList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">className</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>移除类名：使用 <code>classList</code> 属性的 <code>remove</code> 方法。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">classList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">className</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>切换类名：使用 <code>classList</code> 属性的 <code>toggle</code> 方法。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">classList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toggle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">className</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果元素已经具有指定的类名，则移除它；如果元素没有指定的类名，则添加它。</p></li><li><p>检查是否包含类名：使用 <code>classList</code> 属性的 <code>contains</code> 方法。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hasClass </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> element</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">classList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">contains</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">className</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这将返回一个布尔值，指示元素是否具有指定的类名。</p></li></ul><p>上述方法可以用于修改元素的样式和类，以实现动态的样式变化或元素状态的切换。你可以根据需要进行组合和应用，以满足具体的交互需求。</p><p>需要注意的是，类名的操作只会修改元素的类列表，而不会直接修改元素的 <code>class</code> 属性。如果需要直接修改 <code>class</code> 属性，可以使用 <code>setAttribute</code> 方法。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">class</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">className</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9),p=[o];function t(c,r,i,d,D,y){return a(),e("div",null,p)}const F=s(n,[["render",t]]);export{A as __pageData,F as default};
