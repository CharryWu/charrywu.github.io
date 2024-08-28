import{_ as e,o as s,c as a,O as o}from"./chunks/framework.786f5604.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"fullstack/implement-deep-clone.md","filePath":"fullstack/implement-deep-clone.md"}'),n={name:"fullstack/implement-deep-clone.md"},l=o(`<h2 id="deep-clone" tabindex="-1">Deep Clone <a class="header-anchor" href="#deep-clone" aria-label="Permalink to &quot;Deep Clone&quot;">​</a></h2><p>Implement a <code>deepClone</code> function that performs a deep clone operation on JavaScript objects. You can assume the input only contains JSON-serializable values (<code>null</code>, <code>boolean</code>, <code>number</code>, <code>string</code>, <code>Array</code>, <code>Object</code>) and will not contain any other objects like <code>Date</code>, <code>Regex</code>, <code>Map</code> or <code>Set</code>.</p><h3 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">deepClone</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">deepClone</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fromEntries</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;font-style:italic;">k</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">v</span><span style="color:#89DDFF;">])</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">deepClone</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#F07178;">)]);</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="explanation" tabindex="-1">Explanation <a class="header-anchor" href="#explanation" aria-label="Permalink to &quot;Explanation&quot;">​</a></h3><p>There are generally two ways we can traverse an object:</p><ul><li>Loop through the keys with the good old <code>for ... in</code> statement.</li><li>Converting the object into an array of keys with <code>Object.keys()</code>, or an array of a key-value tuple with <code>Object.entries()</code>. With the <code>for ... in</code> statement, inherited enumerable properties are processed as well. On the other hand, <code>Object.keys()</code> and <code>Object.entries()</code> only care about the properties directly defined on the object, and this is usually what we want.</li></ul><h3 id="edge-cases" tabindex="-1">Edge Cases <a class="header-anchor" href="#edge-cases" aria-label="Permalink to &quot;Edge Cases&quot;">​</a></h3><ul><li>Non-enumerable and symbol-keyed properties are ignored.</li><li>Property descriptors are not respected and copied into the cloned object.</li><li>If the object has circular references, the current solution will break and cause a stack overflow by recursing into an infinite loop.</li><li>Prototypes are not copied.</li></ul><h3 id="one-liner-solution" tabindex="-1">One-liner Solution <a class="header-anchor" href="#one-liner-solution" aria-label="Permalink to &quot;One-liner Solution&quot;">​</a></h3><p>As of writing, all major browsers have native support for performing deep clone via the <code>structuredClone</code> API. Check out <a href="https://web.dev/articles/structured-clone" target="_blank" rel="noreferrer">&quot;Deep-copying in JavaScript using structuredClone&quot;</a> on web.dev if you want to learn more about <code>structuredClone</code>&#39;s features and limitations.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clonedObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">structuredClone</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,12),t=[l];function p(c,r,i,y,d,F){return s(),a("div",null,t)}const A=e(n,[["render",p]]);export{u as __pageData,A as default};
