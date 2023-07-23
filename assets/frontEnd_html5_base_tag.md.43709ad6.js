import{_ as e,c as l,o as a,V as s}from"./chunks/framework.b3911a66.js";const F=JSON.parse('{"title":"HTML 标签","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/html5/base/tag.md","filePath":"frontEnd/html5/base/tag.md","lastUpdated":1689841362000}'),t={name:"frontEnd/html5/base/tag.md"},o=s(`<h1 id="html-标签" tabindex="-1">HTML 标签 <a class="header-anchor" href="#html-标签" aria-label="Permalink to &quot;HTML 标签&quot;">​</a></h1><p>HTML 标签用于定义网页的结构和内容，它们由尖括号包围。HTML 标签可以分为两类：块级标签和内联标签。</p><h2 id="块级标签-block-level-elements" tabindex="-1">块级标签（Block-level Elements） <a class="header-anchor" href="#块级标签-block-level-elements" aria-label="Permalink to &quot;块级标签（Block-level Elements）&quot;">​</a></h2><p>块级标签通常用于创建页面的大型结构和组织，它们会单独占据一行，并且在前后都会产生换行。常见的块级标签包括：</p><ul><li><code>&lt;div&gt;</code>：最通用的容器标签，用于将一组元素包裹在一起，方便样式和布局控制。</li><li><code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code>：标题标签，用于定义标题，h1 为最高级别的标题，h6 为最低级别。</li><li><code>&lt;p&gt;</code>：段落标签，用于定义段落文本。</li><li><code>&lt;ul&gt;</code> 和 <code>&lt;li&gt;</code>：无序列表和列表项标签，用于创建无序列表。</li><li><code>&lt;ol&gt;</code> 和 <code>&lt;li&gt;</code>：有序列表和列表项标签，用于创建有序列表。</li><li><code>&lt;table&gt;</code>、<code>&lt;tr&gt;</code>、<code>&lt;th&gt;</code> 和 <code>&lt;td&gt;</code>：表格标签，用于创建表格。</li></ul><h2 id="内联标签-inline-elements" tabindex="-1">内联标签（Inline Elements） <a class="header-anchor" href="#内联标签-inline-elements" aria-label="Permalink to &quot;内联标签（Inline Elements）&quot;">​</a></h2><p>内联标签用于包裹文本的一部分，它们不会独占一行，而是按照文本的自然流动排列。常见的内联标签包括：</p><ul><li><code>&lt;a&gt;</code>：锚链接标签，用于创建超链接到其他网页或文档。</li><li><code>&lt;span&gt;</code>：内联容器标签，类似于<code>&lt;div&gt;</code>，但用于内联元素的包裹。</li><li><code>&lt;strong&gt;</code> 和 <code>&lt;em&gt;</code>：强调标签，分别表示强调和斜体。</li><li><code>&lt;img&gt;</code>：图像标签，用于插入图片到网页中。</li><li><code>&lt;br&gt;</code>：换行标签，用于插入一个换行符。</li><li><code>&lt;input&gt;</code>：输入标签，用于创建各种输入字段，如文本框、单选按钮、复选框等。</li></ul><h2 id="嵌套标签" tabindex="-1">嵌套标签 <a class="header-anchor" href="#嵌套标签" aria-label="Permalink to &quot;嵌套标签&quot;">​</a></h2><p>HTML 标签可以嵌套在其他标签中，形成树状的结构。例如，可以将一段文本包裹在<code>&lt;p&gt;</code>标签中，然后在<code>&lt;div&gt;</code>标签中包裹这个<code>&lt;p&gt;</code>标签，从而形成嵌套的关系。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">This is a paragraph.</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p>HTML 标签可以包含属性，属性用于为标签提供额外的信息或设置。属性以键值对的形式出现，放在标签的开始标签中。例如，<code>&lt;a&gt;</code>标签用<code>href</code>属性来指定链接地址：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.example.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Click here</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>不同的标签可以接受不同的属性，它们有不同的用途和功能，例如设置样式、链接目标、控制元素行为等。</p><h2 id="自定义标签" tabindex="-1">自定义标签 <a class="header-anchor" href="#自定义标签" aria-label="Permalink to &quot;自定义标签&quot;">​</a></h2><p>HTML5 允许开发者创建自定义的标签，这些标签可能在 HTML 规范中没有定义，但可以在特定的应用中使用。自定义标签应以<code>data-</code>为前缀，避免与未来 HTML 版本中的新标签冲突。</p><p>例如：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-custom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">This is a custom tag.</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>自定义标签的功能通常需要通过 JavaScript 来处理和操作。</p><div class="tip custom-block"><p class="custom-block-title">总结</p><p>HTML 标签用于定义网页的结构和内容，通过块级标签和内联标签可以构建丰富多样的网页布局和内容展示。在实际开发中，合理使用标签和属性可以提高网页的可读性、可访问性和用户体验。</p></div>`,21),n=[o];function p(c,r,i,d,h,m){return a(),l("div",null,n)}const u=e(t,[["render",p]]);export{F as __pageData,u as default};
