import{_ as a,o as e,c as s,O as t}from"./chunks/framework.786f5604.js";const g=JSON.parse('{"title":"FFmpeg extract frames","description":"","frontmatter":{},"headers":[],"relativePath":"misc/ffmpeg/extract-frames.md","filePath":"misc/ffmpeg/extract-frames.md"}'),r={name:"misc/ffmpeg/extract-frames.md"},p=t('<h1 id="ffmpeg-extract-frames" tabindex="-1">FFmpeg extract frames <a class="header-anchor" href="#ffmpeg-extract-frames" aria-label="Permalink to &quot;FFmpeg extract frames&quot;">​</a></h1><p>Wiki: <a href="https://trac.ffmpeg.org/wiki/Seeking" target="_blank" rel="noreferrer">https://trac.ffmpeg.org/wiki/Seeking</a></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ffmpeg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ss</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">00</span><span style="color:#C3E88D;">:23:00</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">input.mkv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-frames:v</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">out1.jpg</span></span></code></pre></div><p>This command extract a single frame at the exact 23:00 time mark</p>',4),n=[p];function o(c,l,m,i,f,C){return e(),s("div",null,n)}const d=a(r,[["render",o]]);export{g as __pageData,d as default};
