import{_ as s,v as n,b as a,R as l}from"./chunks/framework.814cacce.js";const i=JSON.parse('{"title":"Map 数据结构","description":"","frontmatter":{},"headers":[],"relativePath":"ECMAScript/es6/Map数据结构.md","filePath":"ECMAScript/es6/Map数据结构.md","lastUpdated":1690267185000}'),p={name:"ECMAScript/es6/Map数据结构.md"},o=l(`<h1 id="map-数据结构" tabindex="-1">Map 数据结构 <a class="header-anchor" href="#map-数据结构" aria-label="Permalink to &quot;Map 数据结构&quot;">​</a></h1><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>Map 是 ES6 中一种强大的数据结构，它是一种用于存储键值对的集合。</p><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><p>在 ES6 中，Map 数据结构提供了以下常用的方法：</p><ol><li><code>set(key, value)</code>: 向 Map 中添加键值对，如果键已存在，则更新对应的值。</li><li><code>get(key)</code>: 获取指定键对应的值，如果键不存在则返回<code>undefined</code>。</li><li><code>has(key)</code>: 判断 Map 中是否包含指定的键，返回布尔值。</li><li><code>delete(key)</code>: 从 Map 中删除指定键及其对应的值，返回一个布尔值，表示是否删除成功。</li><li><code>clear()</code>: 清空 Map 中的所有键值对。</li><li><code>size</code>: 属性，用于获取 Map 中键值对的数量。</li><li><code>keys()</code>: 返回一个包含 Map 中所有键的迭代器。</li><li><code>values()</code>: 返回一个包含 Map 中所有值的迭代器。</li><li><code>entries()</code>: 返回一个包含 Map 中所有键值对的迭代器。</li><li><code>forEach(callbackFn[, thisArg])</code>: 遍历 Map 中的所有键值对，对每个键值对执行回调函数。</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 添加键值对</span></span>
<span class="line"><span style="color:#A6ACCD;">myMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">myMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取值</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// &quot;John&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 判断键是否存在</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">city</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 删除键值对</span></span>
<span class="line"><span style="color:#A6ACCD;">myMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 清空Map</span></span>
<span class="line"><span style="color:#A6ACCD;">myMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myMap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size) </span><span style="color:#676E95;font-style:italic;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 初始化Map</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> initialMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 遍历Map</span></span>
<span class="line"><span style="color:#A6ACCD;">initialMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用迭代器遍历Map的键</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> keysIterator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initialMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> keysIterator) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用迭代器遍历Map的值</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> valuesIterator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initialMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">values</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> valuesIterator) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用迭代器遍历Map的键值对</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> entriesIterator </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> initialMap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> entriesIterator) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="对象操作" tabindex="-1">对象操作 <a class="header-anchor" href="#对象操作" aria-label="Permalink to &quot;对象操作&quot;">​</a></h2><h3 id="转换" tabindex="-1">转换 <a class="header-anchor" href="#转换" aria-label="Permalink to &quot;转换&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> kvArray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可以将 二维 键值对数组转换 Map 对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">(kvArray) </span><span style="color:#676E95;font-style:italic;">// {&quot;key1&quot; =&gt; &quot;value1&quot;, &quot;key2&quot; =&gt; &quot;value2&quot;}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Array.from 函数将 Map 对象转回去</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> outArray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">(myMap) </span><span style="color:#676E95;font-style:italic;">// [[&quot;key1&quot;, &quot;value1&quot;], [&quot;key2&quot;, &quot;value2&quot;]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="克隆" tabindex="-1">克隆 <a class="header-anchor" href="#克隆" aria-label="Permalink to &quot;克隆&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myMap1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myMap2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">(myMap1)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* {&quot;key1&quot; =&gt; &quot;value1&quot;, &quot;key2&quot; =&gt; &quot;value2&quot;} */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(myMap1 </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> myMap2) </span><span style="color:#676E95;font-style:italic;">// false 新地址</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="合并" tabindex="-1">合并 <a class="header-anchor" href="#合并" aria-label="Permalink to &quot;合并&quot;">​</a></h3><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> first </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> second </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">uno</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dos</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 合并两个 Map 对象时，有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> merged </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">first</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">second]) </span><span style="color:#676E95;font-style:italic;">// 解构传参</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(merged) </span><span style="color:#676E95;font-style:italic;">// {1 =&gt; &quot;uno&quot;, 2 =&gt; &quot;dos&quot;, 3 =&gt; &quot;three&quot;}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,14),e=[o];function r(c,t,y,D,A,C){return n(),a("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
