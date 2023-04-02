import{_ as s,o as a,c as n,N as p}from"./chunks/framework.8bab7da0.js";const d=JSON.parse('{"title":"input","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/html5/input.md","lastUpdated":1679647745000}'),o={name:"frontEnd/html5/input.md"},l=p(`<h1 id="input" tabindex="-1">input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;input&quot;">​</a></h1><h2 id="input-type-password-浏览器自动填充账号和密码" tabindex="-1">input type=&quot;password&quot; 浏览器自动填充账号和密码 <a class="header-anchor" href="#input-type-password-浏览器自动填充账号和密码" aria-label="Permalink to &quot;input type=&quot;password&quot; 浏览器自动填充账号和密码&quot;">​</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请输入登录密码</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">model.password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再 input 标签上设置属性 type 为 password 很容易被浏览器识别，然后自动填充以前保存的密码。这里推荐一种特别简单的方法解决这个问题。</p><p><strong>在 input 属性 type 为 text 的标签上添加下面的属性</strong> autoComplete=&quot;off&quot;</p><p><strong>在 input 属性 type 为 password 的标签上添加下面的属性</strong> autoComplete=&quot;new-password&quot;</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-input</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">autoComplete</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">new-password</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">请输入登录密码</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">model.password</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,7),t=[l];function e(r,c,i,D,u,F){return a(),n("div",null,t)}const m=s(o,[["render",e]]);export{d as __pageData,m as default};