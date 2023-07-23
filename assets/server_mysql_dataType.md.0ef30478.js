import{_ as e,c as a,o as l,V as o}from"./chunks/framework.b3911a66.js";const p=JSON.parse('{"title":"MySQL 字段的数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"server/mysql/dataType.md","filePath":"server/mysql/dataType.md","lastUpdated":1689925886000}'),i={name:"server/mysql/dataType.md"},d=o('<h1 id="mysql-字段的数据类型" tabindex="-1">MySQL 字段的数据类型 <a class="header-anchor" href="#mysql-字段的数据类型" aria-label="Permalink to &quot;MySQL 字段的数据类型&quot;">​</a></h1><p>MySQL 提供了多种数据类型，用于定义表中列（字段）的数据类型。每个数据类型都有特定的存储需求和可接受的值范围。以下是 MySQL 中常用的数据类型：</p><h2 id="整数类型" tabindex="-1">整数类型 <a class="header-anchor" href="#整数类型" aria-label="Permalink to &quot;整数类型&quot;">​</a></h2><ul><li><code>TINYINT</code>：一个非常小的整数，范围为-128 到 127（有符号）或 0 到 255（无符号）。</li><li><code>SMALLINT</code>：较小的整数，范围为-32,768 到 32,767（有符号）或 0 到 65,535（无符号）。</li><li><code>INT</code>：常用的整数类型，范围为-2,147,483,648 到 2,147,483,647（有符号）或 0 到 4,294,967,295（无符号）。</li><li><code>BIGINT</code>：大整数类型，范围为-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807（有符号）或 0 到 18,446,744,073,709,551,615（无符号）。</li></ul><h2 id="浮点数类型" tabindex="-1">浮点数类型 <a class="header-anchor" href="#浮点数类型" aria-label="Permalink to &quot;浮点数类型&quot;">​</a></h2><ul><li><code>FLOAT</code>：单精度浮点数，范围为-3.402823466E+38 到-1.175494351E-38、0 和 1.175494351E-38 到 3.402823466E+38。</li><li><code>DOUBLE</code>：双精度浮点数，范围为-1.7976931348623157E+308 到-2.2250738585072014E-308、0 和 2.2250738585072014E-308 到 1.7976931348623157E+308。</li></ul><h2 id="字符串类型" tabindex="-1">字符串类型 <a class="header-anchor" href="#字符串类型" aria-label="Permalink to &quot;字符串类型&quot;">​</a></h2><ul><li><code>CHAR</code>：固定长度的字符串，最大长度为 255 个字符。</li><li><code>VARCHAR</code>：可变长度的字符串，最大长度为 65535 个字符。</li><li><code>TEXT</code>：用于存储较长文本数据的字符串类型，最大长度为 65535 个字符。</li></ul><h2 id="日期和时间类型" tabindex="-1">日期和时间类型 <a class="header-anchor" href="#日期和时间类型" aria-label="Permalink to &quot;日期和时间类型&quot;">​</a></h2><ul><li><code>DATE</code>：存储日期，格式为&#39;YYYY-MM-DD&#39;。</li><li><code>TIME</code>：存储时间，格式为&#39;HH:MM:SS&#39;。</li><li><code>DATETIME</code>：存储日期和时间，格式为&#39;YYYY-MM-DD HH:MM:SS&#39;。</li><li><code>TIMESTAMP</code>：存储时间戳，范围从&#39;1970-01-01 00:00:01&#39; UTC 到&#39;2038-01-19 03:14:07&#39; UTC。</li></ul><h2 id="其他常用类型" tabindex="-1">其他常用类型 <a class="header-anchor" href="#其他常用类型" aria-label="Permalink to &quot;其他常用类型&quot;">​</a></h2><ul><li><code>BOOLEAN</code>：存储布尔值（true 或 false）。</li><li><code>ENUM</code>：存储枚举值，从一个预定义的值列表中选择一个值。</li><li><code>SET</code>：存储一个或多个预定义的值。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>除了上述常见的数据类型，MySQL 还提供了其他特定用途的数据类型，如二进制类型（BINARY、VARBINARY、BLOB）、JSON 类型等。在设计表时，根据数据的特性和需求，选择适当的数据类型是非常重要的。</p></div>',13),c=[d];function t(r,s,h,n,u,T){return l(),a("div",null,c)}const m=e(i,[["render",t]]);export{p as __pageData,m as default};
