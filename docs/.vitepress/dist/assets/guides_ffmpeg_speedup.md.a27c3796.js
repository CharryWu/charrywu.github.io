import{_ as s,o as a,c as e,O as o}from"./chunks/framework.659f2aa6.js";const y=JSON.parse('{"title":"Speedup videos w/ audio","description":"","frontmatter":{},"headers":[],"relativePath":"guides/ffmpeg/speedup.md","filePath":"guides/ffmpeg/speedup.md"}'),p={name:"guides/ffmpeg/speedup.md"},t=o('<h1 id="speedup-videos-w-audio" tabindex="-1">Speedup videos w/ audio <a class="header-anchor" href="#speedup-videos-w-audio" aria-label="Permalink to &quot;Speedup videos w/ audio&quot;">​</a></h1><p>Reference: <a href="https://superuser.com/a/1394709" target="_blank" rel="noreferrer">https://superuser.com/a/1394709</a><br> Use complex fileter to speed up video w/ audio, where <code>&lt;x&gt;</code> is the speedup ratio</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ffmpeg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input.mkv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-filter_complex</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0:v]setpts=&lt;1/x&gt;*PTS[v];[0:a]atempo=&lt;x&gt;[a]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-map</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[v]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-map</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[a]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output.mkv</span></span></code></pre></div><p>For example, if you want to speed up the video by 1.5 times the original speed, use</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ffmpeg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input.mkv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-filter_complex</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0:v]setpts=0.6667*PTS[v];[0:a]atempo=1.5[a]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-map</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[v]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-map</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[a]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output.mkv</span></span></code></pre></div>',5),l=[t];function n(r,c,i,C,D,u){return a(),e("div",null,l)}const A=s(p,[["render",n]]);export{y as __pageData,A as default};
