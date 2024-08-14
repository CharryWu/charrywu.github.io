import{_ as s,o as a,c as n,O as l}from"./chunks/framework.786f5604.js";const A=JSON.parse('{"title":"Text Transformation using ChatGPT","description":"","frontmatter":{},"headers":[],"relativePath":"ml-notes/dlai-prompt-engineering/Transforming.md","filePath":"ml-notes/dlai-prompt-engineering/Transforming.md"}'),o={name:"ml-notes/dlai-prompt-engineering/Transforming.md"},p=l(`<h1 id="text-transformation-using-chatgpt" tabindex="-1">Text Transformation using ChatGPT <a class="header-anchor" href="#text-transformation-using-chatgpt" aria-label="Permalink to &quot;Text Transformation using ChatGPT&quot;">​</a></h1><p>With ChatGPT, you can arbitrarily transform a piece of text, into whatever content you want</p><h2 id="translation-by-language" tabindex="-1">Translation by Language <a class="header-anchor" href="#translation-by-language" aria-label="Permalink to &quot;Translation by Language&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Translate the following English text to Spanish: \\ </span></span>
<span class="line"><span style="color:#C3E88D;">\`\`\`Hi, I would like to order a blender\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="translation-by-formality" tabindex="-1">Translation by formality <a class="header-anchor" href="#translation-by-formality" aria-label="Permalink to &quot;Translation by formality&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Translate the following text to Spanish in both the </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">formal and informal forms: </span></span>
<span class="line"><span style="color:#C3E88D;">&#39;Would you like to order a pillow?&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Formal: ¿Le gustaría ordenar una almohada?</span></span>
<span class="line"><span style="color:#A6ACCD;">Informal: ¿Te gustaría ordenar una almohada?</span></span></code></pre></div><h2 id="tone-transformation" tabindex="-1">Tone Transformation <a class="header-anchor" href="#tone-transformation" aria-label="Permalink to &quot;Tone Transformation&quot;">​</a></h2><p>Writing can vary based on the intended audience. ChatGPT can produce different tones.</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Translate the following from slang to a business letter: </span></span>
<span class="line"><span style="color:#C3E88D;">&#39;Dude, This is Joe, check out this spec on this standing lamp.&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Dear Sir/Madam,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">I am writing to bring to your attention a standing lamp that I believe may be of interest to you. Please find attached the specifications for your review.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Thank you for your time and consideration.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Sincerely,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Joe</span></span></code></pre></div><h2 id="formation-transformation" tabindex="-1">Formation Transformation <a class="header-anchor" href="#formation-transformation" aria-label="Permalink to &quot;Formation Transformation&quot;">​</a></h2><p>ChatGPT can translate between formats. The prompt should describe the input and output formats.</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">data_json </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resturant employees</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:[</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shyam</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shyamjaiswal@gmail.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bob</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bob32@gmail.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Jai</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jai87@gmail.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Translate the following python dictionary from JSON to an HTML </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">table with column headers and title: </span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">data_json</span><span style="color:#F78C6C;">}</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">caption</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Restaurant Employees</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">caption</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">thead</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Name</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Email</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">thead</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tbody</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Shyam</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">shyamjaiswal@gmail.com</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Bob</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">bob32@gmail.com</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Jai</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">jai87@gmail.com</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tbody</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="grammar-checker" tabindex="-1">Grammar Checker <a class="header-anchor" href="#grammar-checker" aria-label="Permalink to &quot;Grammar Checker&quot;">​</a></h2><p>To signal to the LLM that you want it to proofread your text, you instruct the model to &#39;proofread&#39; or &#39;proofread and correct&#39;.</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Got this for my daughter for her birthday cuz she keeps taking </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">mine from my room.  Yes, adults also like pandas too.  She takes </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">it everywhere with her, and it&#39;s super soft and cute.  One of the </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">ears is a bit lower than the other, and I don&#39;t think that was </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">designed to be asymmetrical. It&#39;s a bit small for what I paid for it </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">though. I think there might be other options that are bigger for </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">the same price.  It arrived a day earlier than expected, so I got </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">to play with it myself before I gave it to my daughter.</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;proofread and correct this review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">I got this for my daughter&#39;s birthday because she keeps taking mine from my room. Yes, adults also like pandas too. She takes it everywhere with her, and it&#39;s super soft and cute. However, one of the ears is a bit lower than the other, and I don&#39;t think that was designed to be asymmetrical. Additionally, it&#39;s a bit small for what I paid for it. I think there might be other options that are bigger for the same price. On the positive side, it arrived a day earlier than expected, so I got to play with it myself before I gave it to my daughter.</span></span></code></pre></div><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">proofread and correct this review. Make it more compelling. </span></span>
<span class="line"><span style="color:#C3E88D;">Ensure it follows APA style guide and targets an advanced reader. </span></span>
<span class="line"><span style="color:#C3E88D;">Output in markdown format.</span></span>
<span class="line"><span style="color:#C3E88D;">Text: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">text</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">display</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">Markdown</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Title: A Soft and Cute Panda Plushie for All Ages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">As an adult, I can attest that pandas are not just for kids. That&#39;s why I got this adorable panda plushie for my daughter&#39;s birthday, after she kept taking mine from my room. And let me tell you, it was a hit!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The plushie is super soft and cuddly, making it the perfect companion for my daughter. She takes it everywhere with her, and it has quickly become her favorite toy. However, I did notice that one of the ears is a bit lower than the other, which I don&#39;t think was designed to be asymmetrical. But that doesn&#39;t take away from its cuteness.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The only downside is that it&#39;s a bit small for the price I paid. I think there might be other options that are bigger for the same price. But overall, I&#39;m happy with my purchase.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">One thing that surprised me was that it arrived a day earlier than expected. This gave me the chance to play with it myself before giving it to my daughter. And I have to say, I was impressed with the quality and attention to detail.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In conclusion, if you&#39;re looking for a soft and cute panda plushie for yourself or a loved one, this is definitely a great option. Just be aware that it might be a bit smaller than expected.</span></span></code></pre></div><h2 id="universal-translator" tabindex="-1">Universal Translator <a class="header-anchor" href="#universal-translator" aria-label="Permalink to &quot;Universal Translator&quot;">​</a></h2><p>Imagine you are in charge of IT at a large multinational e-commerce company. Users are messaging you with IT issues in all their native languages. Your staff is from all over the world and speaks only their native languages. You need a universal translator!</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">user_messages </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">La performance du système est plus lente que d&#39;habitude.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># System performance is slower than normal         </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mi monitor tiene píxeles que no se iluminan.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># My monitor has pixels that are not lighting</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Il mio mouse non funziona</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                                 </span><span style="color:#676E95;font-style:italic;"># My mouse is not working</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Mój klawisz Ctrl jest zepsuty</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">                             </span><span style="color:#676E95;font-style:italic;"># My keyboard has a broken control key</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">我的屏幕在闪烁</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">                                               </span><span style="color:#676E95;font-style:italic;"># My screen is flashing</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> issue </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> user_messages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;Tell me what language this is: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">issue</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    lang </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;Original message (</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">lang</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">): </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">issue</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">    Translate the following  text to English </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">    and Korean: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">issue</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Original message (This is French.): La performance du système est plus lente que d&#39;habitude.</span></span>
<span class="line"><span style="color:#A6ACCD;">English: The system performance is slower than usual.</span></span>
<span class="line"><span style="color:#A6ACCD;">Korean: 시스템 성능이 평소보다 느립니다. </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Original message (This is Spanish.): Mi monitor tiene píxeles que no se iluminan.</span></span>
<span class="line"><span style="color:#A6ACCD;">English: My monitor has pixels that don&#39;t light up.</span></span>
<span class="line"><span style="color:#A6ACCD;">Korean: 내 모니터에는 불이 켜지지 않는 픽셀이 있습니다. </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Original message (This is Italian.): Il mio mouse non funziona</span></span>
<span class="line"><span style="color:#A6ACCD;">English: My mouse is not working.</span></span>
<span class="line"><span style="color:#A6ACCD;">Korean: 내 마우스가 작동하지 않습니다. </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Original message (This is Polish.): Mój klawisz Ctrl jest zepsuty</span></span>
<span class="line"><span style="color:#A6ACCD;">English: My Ctrl key is broken.</span></span>
<span class="line"><span style="color:#A6ACCD;">Korean: 제 Ctrl 키가 고장 났어요. </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Original message (This is Chinese (Simplified).): 我的屏幕在闪烁</span></span>
<span class="line"><span style="color:#A6ACCD;">English: My screen is flickering.</span></span>
<span class="line"><span style="color:#A6ACCD;">Korean: 내 화면이 깜빡입니다.</span></span></code></pre></div>`,30),e=[p];function t(r,c,i,y,D,F){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{A as __pageData,h as default};