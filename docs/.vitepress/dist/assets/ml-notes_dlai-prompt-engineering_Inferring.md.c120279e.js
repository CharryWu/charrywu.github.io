import{_ as s,o as n,c as a,O as p}from"./chunks/framework.786f5604.js";const A=JSON.parse('{"title":"Inferring","description":"","frontmatter":{},"headers":[],"relativePath":"ml-notes/dlai-prompt-engineering/Inferring.md","filePath":"ml-notes/dlai-prompt-engineering/Inferring.md"}'),l={name:"ml-notes/dlai-prompt-engineering/Inferring.md"},o=p(`<h1 id="inferring" tabindex="-1">Inferring <a class="header-anchor" href="#inferring" aria-label="Permalink to &quot;Inferring&quot;">​</a></h1><p>LLMs are very useful in extracting pieces of information out of text</p><h2 id="emotional-analysis" tabindex="-1">Emotional analysis <a class="header-anchor" href="#emotional-analysis" aria-label="Permalink to &quot;Emotional analysis&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lamp_review </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Needed a nice lamp for my bedroom, and this one had </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">additional storage and not too high of a price point. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Got it fast.  The string to our lamp broke during the </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">transit and the company happily sent over a new one. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Came within a few days as well. It was easy to put </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">together.  I had a missing part, so I contacted their </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">support and they very quickly got me the missing piece! </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Lumina seems to me to be a great company that cares </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">about their customers and products!!</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">What is the sentiment of the following product review, </span></span>
<span class="line"><span style="color:#C3E88D;">which is delimited with triple backticks?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Give your answer as a single word, either &quot;positive&quot; </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">or &quot;negative&quot;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Review text: &#39;&#39;&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">lamp_review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output: <code>positive</code></p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Identify a list of emotions that the writer of the </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">following review is expressing. Include no more than </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">five items in the list. Format your answer as a list of </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">lower-case words separated by commas.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Review text: &#39;&#39;&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">lamp_review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output: <code>happy, satisfied, grateful, impressed, content</code></p><h2 id="json-extract-product-and-company-name-from-customer-reviews" tabindex="-1">JSON Extract product and company name from customer reviews <a class="header-anchor" href="#json-extract-product-and-company-name-from-customer-reviews" aria-label="Permalink to &quot;JSON Extract product and company name from customer reviews&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Identify the following items from the review text: </span></span>
<span class="line"><span style="color:#C3E88D;">- Item purchased by reviewer</span></span>
<span class="line"><span style="color:#C3E88D;">- Company that made the item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The review is delimited with triple backticks. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Format your response as a JSON object with </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;Item&quot; and &quot;Brand&quot; as the keys. </span></span>
<span class="line"><span style="color:#C3E88D;">If the information isn&#39;t present, use &quot;unknown&quot; </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">as the value.</span></span>
<span class="line"><span style="color:#C3E88D;">Make your response as short as possible.</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">Review text: &#39;&#39;&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">lamp_review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lamp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Brand</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lumina</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="doing-multiple-tasks-at-once" tabindex="-1">Doing multiple tasks at once <a class="header-anchor" href="#doing-multiple-tasks-at-once" aria-label="Permalink to &quot;Doing multiple tasks at once&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Identify the following items from the review text: </span></span>
<span class="line"><span style="color:#C3E88D;">- Sentiment (positive or negative)</span></span>
<span class="line"><span style="color:#C3E88D;">- Is the reviewer expressing anger? (true or false)</span></span>
<span class="line"><span style="color:#C3E88D;">- Item purchased by reviewer</span></span>
<span class="line"><span style="color:#C3E88D;">- Company that made the item</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The review is delimited with triple backticks. </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Format your response as a JSON object with </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;Sentiment&quot;, &quot;Anger&quot;, &quot;Item&quot; and &quot;Brand&quot; as the keys.</span></span>
<span class="line"><span style="color:#C3E88D;">If the information isn&#39;t present, use &quot;unknown&quot; </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">as the value.</span></span>
<span class="line"><span style="color:#C3E88D;">Make your response as short as possible.</span></span>
<span class="line"><span style="color:#C3E88D;">Format the Anger value as a boolean.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Review text: &#39;&#39;&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">lamp_review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Sentiment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">positive</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Anger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lamp with additional storage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Brand</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lumina</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="inferring-topics" tabindex="-1">Inferring Topics <a class="header-anchor" href="#inferring-topics" aria-label="Permalink to &quot;Inferring Topics&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">story </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">In a recent survey conducted by the government, </span></span>
<span class="line"><span style="color:#C3E88D;">public sector employees were asked to rate their level </span></span>
<span class="line"><span style="color:#C3E88D;">of satisfaction with the department they work at. </span></span>
<span class="line"><span style="color:#C3E88D;">The results revealed that NASA was the most popular </span></span>
<span class="line"><span style="color:#C3E88D;">department with a satisfaction rating of 95%.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">One NASA employee, John Smith, commented on the findings, </span></span>
<span class="line"><span style="color:#C3E88D;">stating, &quot;I&#39;m not surprised that NASA came out on top. </span></span>
<span class="line"><span style="color:#C3E88D;">It&#39;s a great place to work with amazing people and </span></span>
<span class="line"><span style="color:#C3E88D;">incredible opportunities. I&#39;m proud to be a part of </span></span>
<span class="line"><span style="color:#C3E88D;">such an innovative organization.&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The results were also welcomed by NASA&#39;s management team, </span></span>
<span class="line"><span style="color:#C3E88D;">with Director Tom Johnson stating, &quot;We are thrilled to </span></span>
<span class="line"><span style="color:#C3E88D;">hear that our employees are satisfied with their work at NASA. </span></span>
<span class="line"><span style="color:#C3E88D;">We have a talented and dedicated team who work tirelessly </span></span>
<span class="line"><span style="color:#C3E88D;">to achieve our goals, and it&#39;s fantastic to see that their </span></span>
<span class="line"><span style="color:#C3E88D;">hard work is paying off.&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The survey also revealed that the </span></span>
<span class="line"><span style="color:#C3E88D;">Social Security Administration had the lowest satisfaction </span></span>
<span class="line"><span style="color:#C3E88D;">rating, with only 45</span><span style="color:#F78C6C;">% o</span><span style="color:#C3E88D;">f employees indicating they were </span></span>
<span class="line"><span style="color:#C3E88D;">satisfied with their job. The government has pledged to </span></span>
<span class="line"><span style="color:#C3E88D;">address the concerns raised by employees in the survey and </span></span>
<span class="line"><span style="color:#C3E88D;">work towards improving job satisfaction across all departments.</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Determine five topics that are being discussed in the </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">following text, which is delimited by triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Make each item one or two words long. </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Format your response as a list of items separated by commas.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Text sample: &#39;&#39;&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">story</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span></code></pre></div><p>Output: <code>[&#39;government survey&#39;, &#39; job satisfaction&#39;, &#39; NASA&#39;, &#39; Social Security Administration&#39;, &#39; employee concerns&#39;]</code></p><h2 id="make-a-news-alert-for-certain-topics" tabindex="-1">Make a news alert for certain topics <a class="header-anchor" href="#make-a-news-alert-for-certain-topics" aria-label="Permalink to &quot;Make a news alert for certain topics&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Determine whether each item in the following list of </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">topics is a topic in the text below, which</span></span>
<span class="line"><span style="color:#C3E88D;">is delimited with triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Give your answer as list with 0 or 1 for each topic.</span><span style="color:#89DDFF;">\\</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">List of topics: </span><span style="color:#F78C6C;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">topic_list</span><span style="color:#89DDFF;">)</span><span style="color:#F78C6C;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Text sample: &#39;&#39;&#39;</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">story</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">topic_dict </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">sep</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> topic_dict</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nasa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ALERT: New NASA story!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output: <code>ALERT: New NASA story!</code></p>`,19),e=[o];function t(c,r,i,y,D,F){return n(),a("div",null,e)}const u=s(l,[["render",t]]);export{A as __pageData,u as default};
