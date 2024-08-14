import{_ as s,o as n,c as a,O as l}from"./chunks/framework.786f5604.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"dsa-notes/backtracking/subsets.md","filePath":"dsa-notes/backtracking/subsets.md"}'),p={name:"dsa-notes/backtracking/subsets.md"},o=l(`<p>Similar to permutation, for each position we&#39;re only making two choices: whether to include nums[i] or not include Therefore, we&#39;re making two recursive calls to backtrack funciton</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Solution</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">subsets</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;font-style:italic;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">nums</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> List</span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> List</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">List</span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">]]:</span></span>
<span class="line"><span style="color:#A6ACCD;">        n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">backtrack</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">i</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copy</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">nums</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">backtrack</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">backtrack</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">path</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">backtrack</span><span style="color:#89DDFF;">([],</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> res</span></span></code></pre></div>`,2),t=[o];function e(c,r,F,D,y,A){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{C as __pageData,d as default};
