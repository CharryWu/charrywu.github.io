import{_ as s,o as a,c as n,O as e}from"./chunks/framework.786f5604.js";const h=JSON.parse('{"title":"Summarizing using ChatGPT","description":"","frontmatter":{},"headers":[],"relativePath":"ml-notes/dlai-prompt-engineering/Summarizing.md","filePath":"ml-notes/dlai-prompt-engineering/Summarizing.md"}'),l={name:"ml-notes/dlai-prompt-engineering/Summarizing.md"},p=e(`<h1 id="summarizing-using-chatgpt" tabindex="-1">Summarizing using ChatGPT <a class="header-anchor" href="#summarizing-using-chatgpt" aria-label="Permalink to &quot;Summarizing using ChatGPT&quot;">​</a></h1><h2 id="regular-summaries" tabindex="-1">Regular summaries <a class="header-anchor" href="#regular-summaries" aria-label="Permalink to &quot;Regular summaries&quot;">​</a></h2><p>Regular summaries include topics that are not related to the topic of focus.</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prod_review </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Got this panda plush toy for my daughter&#39;s birthday, </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">who loves it and takes it everywhere. It&#39;s soft and \\ </span></span>
<span class="line"><span style="color:#C3E88D;">super cute, and its face has a friendly look. It&#39;s \\ </span></span>
<span class="line"><span style="color:#C3E88D;">a bit small for what I paid though. I think there \\ </span></span>
<span class="line"><span style="color:#C3E88D;">might be other options that are bigger for the \\ </span></span>
<span class="line"><span style="color:#C3E88D;">same price. It arrived a day earlier than expected, \\ </span></span>
<span class="line"><span style="color:#C3E88D;">so I got to play with it myself before I gave it \\ </span></span>
<span class="line"><span style="color:#C3E88D;">to her.</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span></code></pre></div><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to generate a short summary of a product </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">review from an ecommerce site. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Summarize the review below, delimited by triple </span></span>
<span class="line"><span style="color:#C3E88D;">backticks, in at most 30 words. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">prod_review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output: <code>Soft and cute panda plush toy loved by daughter, but a bit small for the price. Arrived early.</code></p><h2 id="summary-focus-on-particular-aspect" tabindex="-1">Summary focus on particular aspect <a class="header-anchor" href="#summary-focus-on-particular-aspect" aria-label="Permalink to &quot;Summary focus on particular aspect&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to generate a short summary of a product </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">review from an ecommerce site to give feedback to the </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">pricing deparmtment, responsible for determining the </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">price of the product.  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Summarize the review below, delimited by triple </span></span>
<span class="line"><span style="color:#C3E88D;">backticks, in at most 30 words, and focusing on any aspects </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">that are relevant to the price and perceived value. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">prod_review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output: <code>The panda plush toy is soft, cute, and loved by the recipient, but the price may be too high for its size.</code></p><h2 id="try-extract-instead-of-summarize" tabindex="-1">Try &quot;extract&quot; instead of &quot;summarize&quot; <a class="header-anchor" href="#try-extract-instead-of-summarize" aria-label="Permalink to &quot;Try &quot;extract&quot; instead of &quot;summarize&quot;&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to extract relevant information from \\ </span></span>
<span class="line"><span style="color:#C3E88D;">a product review from an ecommerce site to give </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">feedback to the Shipping department. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">From the review below, delimited by triple quotes </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">extract the information relevant to shipping and \\ </span></span>
<span class="line"><span style="color:#C3E88D;">delivery. Limit to 30 words. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">prod_review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output: <code>The product arrived a day earlier than expected.</code></p><h2 id="summarize-multiple-product-reviews" tabindex="-1">Summarize multiple product reviews <a class="header-anchor" href="#summarize-multiple-product-reviews" aria-label="Permalink to &quot;Summarize multiple product reviews&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">review_1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> prod_review </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># review for a standing lamp</span></span>
<span class="line"><span style="color:#A6ACCD;">review_2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Needed a nice lamp for my bedroom, and this one </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">had additional storage and not too high of a price </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">point. Got it fast - arrived in 2 days. The string </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">to the lamp broke during the transit and the company </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">happily sent over a new one. Came within a few days </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">as well. It was easy to put together. Then I had a </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">missing part, so I contacted their support and they </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">very quickly got me the missing piece! Seems to me </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">to be a great company that cares about their customers </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">and products. </span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># review for an electric toothbrush</span></span>
<span class="line"><span style="color:#A6ACCD;">review_3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">My dental hygienist recommended an electric toothbrush, </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">which is why I got this. The battery life seems to be </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">pretty impressive so far. After initial charging and </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">leaving the charger plugged in for the first week to </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">condition the battery, I&#39;ve unplugged the charger and </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">been using it for twice daily brushing for the last </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">3 weeks all on the same charge. But the toothbrush head </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">is too small. I’ve seen baby toothbrushes bigger than </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">this one. I wish the head was bigger with different </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">length bristles to get between teeth better because </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">this one doesn’t.  Overall if you can get this one </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">around the $50 mark, it&#39;s a good deal. The manufactuer&#39;s </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">replacements heads are pretty expensive, but you can </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">get generic ones that&#39;re more reasonably priced. This </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">toothbrush makes me feel like I&#39;ve been to the dentist </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">every day. My teeth feel sparkly clean! </span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># review for a blender</span></span>
<span class="line"><span style="color:#A6ACCD;">review_4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">So, they still had the 17 piece system on seasonal </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">sale for around $49 in the month of November, about </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">half off, but for some reason (call it price gouging) </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">around the second week of December the prices all went </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">up to about anywhere from between $70-$89 for the same </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">system. And the 11 piece system went up around $10 or </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">so in price also from the earlier sale price of $29. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">So it looks okay, but if you look at the base, the part </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">where the blade locks into place doesn’t look as good </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">as in previous editions from a few years ago, but I </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">plan to be very gentle with it (example, I crush </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">very hard items like beans, ice, rice, etc. in the \\ </span></span>
<span class="line"><span style="color:#C3E88D;">blender first then pulverize them in the serving size </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">I want in the blender then switch to the whipping </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">blade for a finer flour, and use the cross cutting blade </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">first when making smoothies, then use the flat blade </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">if I need them finer/less pulpy). Special tip when making </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">smoothies, finely cut and freeze the fruits and </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">vegetables (if using spinach-lightly stew soften the \\ </span></span>
<span class="line"><span style="color:#C3E88D;">spinach then freeze until ready for use-and if making </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">sorbet, use a small to medium sized food processor) \\ </span></span>
<span class="line"><span style="color:#C3E88D;">that you plan to use that way you can avoid adding so </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">much ice if at all-when making your smoothie. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">After about a year, the motor was making a funny noise. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">I called customer service but the warranty expired </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">already, so I had to buy another one. FYI: The overall </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">quality has gone done in these types of products, so </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">they are kind of counting on brand recognition and </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">consumer loyalty to maintain sales. Got it in about </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">two days.</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">reviews </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">review_1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> review_2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> review_3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> review_4</span><span style="color:#89DDFF;">]</span></span></code></pre></div><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">reviews</span><span style="color:#89DDFF;">)):</span></span>
<span class="line"><span style="color:#A6ACCD;">    prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    Your task is to generate a short summary of a product \\ </span></span>
<span class="line"><span style="color:#C3E88D;">    review from an ecommerce site. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    Summarize the review below, delimited by triple </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">    backticks in at most 20 words. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">    Review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">reviews</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> response</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">0 Soft and cute panda plush toy loved by daughter, but a bit small for the price. Arrived early. </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1 Affordable lamp with storage, fast shipping, and excellent customer service. Easy to assemble and missing parts were quickly replaced. </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2 Good battery life, small toothbrush head, but effective cleaning. Good deal if bought around $50. </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3 The product was on sale for $49 in November, but the price increased to $70-$89 in December. The base doesn&#39;t look as good as previous editions, but the reviewer plans to be gentle with it. A special tip for making smoothies is to freeze the fruits and vegetables beforehand. The motor made a funny noise after a year, and the warranty had expired. Overall quality has decreased.</span></span></code></pre></div>`,17),o=[p];function t(r,c,i,y,D,F){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{h as __pageData,d as default};
