import{_ as s,c as n,o as a,V as l}from"./chunks/framework.b3911a66.js";const u=JSON.parse('{"title":"JavaScript 闭包","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/core/closure.md","filePath":"JavaScript/core/closure.md","lastUpdated":1689579676000}'),p={name:"JavaScript/core/closure.md"},e=l(`<h1 id="javascript-闭包" tabindex="-1">JavaScript 闭包 <a class="header-anchor" href="#javascript-闭包" aria-label="Permalink to &quot;JavaScript 闭包&quot;">​</a></h1><blockquote><p>闭包（Closure）是 JavaScript 中一种强大且常用的特性。它允许内部函数访问其外部函数的作用域，即使外部函数已经执行完毕，也可以继续访问。闭包可以捕获外部函数的变量和参数，并将其保存在内部函数的词法环境中，使得这些变量在内部函数执行时仍然可用。</p></blockquote><p>以下是闭包的一些关键概念和用法：</p><h2 id="创建闭包" tabindex="-1">创建闭包 <a class="header-anchor" href="#创建闭包" aria-label="Permalink to &quot;创建闭包&quot;">​</a></h2><p>要创建一个闭包，通常需要在一个函数内部定义另一个函数，并将其返回。返回的函数就是闭包，它可以访问其外部函数中的变量和参数。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">outerFunction</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">outerVariable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">innerFunction</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">outerVariable</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">innerFunction</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> closure </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">outerFunction</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">closure</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 输出：Hello</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在上述示例中，<code>outerFunction</code> 内部定义了 <code>innerFunction</code>，并将其返回。<code>innerFunction</code> 可以访问外部函数 <code>outerFunction</code> 中的 <code>outerVariable</code>，即使 <code>outerFunction</code> 已经执行完毕。</p><h2 id="捕获外部变量" tabindex="-1">捕获外部变量 <a class="header-anchor" href="#捕获外部变量" aria-label="Permalink to &quot;捕获外部变量&quot;">​</a></h2><p>闭包可以捕获并访问其外部函数的变量，即使外部函数已经执行完毕。这使得闭包可以在不同的上下文中使用和保留外部变量的状态。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">counter</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">increment</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> incrementCounter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">counter</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">incrementCounter</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 输出：1</span></span>
<span class="line"><span style="color:#82AAFF;">incrementCounter</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 输出：2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在上述示例中，<code>counter</code> 函数返回了 <code>increment</code> 函数，后者可以访问并修改 <code>counter</code> 函数作用域内的 <code>count</code> 变量。每次调用 <code>incrementCounter</code> 时，都会增加 <code>count</code> 的值并打印。</p><h2 id="保护数据" tabindex="-1">保护数据 <a class="header-anchor" href="#保护数据" aria-label="Permalink to &quot;保护数据&quot;">​</a></h2><p>通过使用闭包，可以创建私有变量，这些变量无法从外部访问，只能通过内部函数提供的公共接口访问和修改。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createPerson</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">increaseAge</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getAge</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    getAge</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getAge</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    increaseAge</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">increaseAge</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createPerson</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name) </span><span style="color:#676E95;font-style:italic;">// 输出：John</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAge</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// 输出：0</span></span>
<span class="line"><span style="color:#A6ACCD;">person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">increaseAge</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAge</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;font-style:italic;">// 输出：1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>在上述示例中，<code>createPerson</code> 函数返回了一个包含 <code>name</code>、<code>getAge</code> 和 <code>increaseAge</code> 的对象。<code>age</code> 变量被隐藏在闭包内部，只能通过返回对象的方法来访问和修改。</p><h2 id="实际用途" tabindex="-1">实际用途 <a class="header-anchor" href="#实际用途" aria-label="Permalink to &quot;实际用途&quot;">​</a></h2><ol><li><p><strong>封装私有变量和方法</strong>：通过使用闭包，可以创建私有变量和方法，将其封装在函数内部，只暴露公共接口给外部。这种方式可以避免全局命名冲突，并提供了一种模块化的封装方式。</p></li><li><p><strong>创建工厂函数</strong>：通过使用闭包，可以创建工厂函数，用于生成对象实例。工厂函数可以包含一些内部变量和方法，这些内部变量和方法对外部不可见，只有通过返回的对象实例才能访问。</p></li><li><p><strong>实现模块化</strong>：通过使用闭包，可以实现模块化的代码结构。将相关的功能和状态封装在闭包中，提供公共接口给外部，从而实现代码的隔离和组织。</p></li><li><p><strong>保存状态</strong>：闭包可以用于保存函数的状态。通过捕获外部变量，闭包可以持久化存储函数的状态，并在每次调用时保持该状态。这在处理异步操作、定时器和事件处理等场景中特别有用。</p></li><li><p><strong>实现函数柯里化</strong>：柯里化是一种将多参数函数转化为一系列单参数函数的技术。闭包可以用于实现函数柯里化，使函数能够记住之前传递的参数，并返回一个新的函数等待传递剩余的参数。</p></li><li><p><strong>延迟执行函数</strong>：通过使用闭包，可以延迟执行函数。在某些场景中，可以将函数包裹在闭包中，并在需要时再调用执行，以实现延迟执行的效果。</p></li><li><p><strong>事件处理</strong>：闭包可以用于处理事件回调函数。通过闭包，可以在事件处理函数内部访问外部函数的数据和状态，从而更方便地处理事件相关的逻辑。</p></li></ol><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li><p>闭包会导致内存占用增加，因为外部函数的变量和作用域在闭包中被保留，即使外部函数执行完毕也不会被释放。因此，在使用闭包时要注意内存管理，避免过度使用闭包导致内存泄漏。</p></li><li><p>闭包中的变量是引用传递的，而不是传值。如果在闭包中修改外部变量，那么外部作用域中的变量也会被修改。</p></li><li><p>闭包中的变量是共享的。如果多个闭包引用相同的外部变量，那么它们会共享相同的变量实例，可能会导致意外的行为。</p></li></ul><p>闭包是 JavaScript 中一项强大的特性，可以使得函数更灵活、更具可复用性。合理使用闭包可以创建私有变量、封装代码和状态，并提供模块化的解决方案。在编写复杂的 JavaScript 应用程序时，了解闭包的概念和使用方法是非常有益的。</p>`,20),o=[e];function r(c,t,i,y,F,A){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{u as __pageData,b as default};
