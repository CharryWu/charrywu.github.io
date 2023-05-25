import{_ as s,o as n,c as a,O as l}from"./chunks/framework.659f2aa6.js";const h=JSON.parse('{"title":"Iterative Prompt Development","description":"","frontmatter":{},"headers":[],"relativePath":"ml-notes/dlai-prompt-engineering/Prompt-Development.md","filePath":"ml-notes/dlai-prompt-engineering/Prompt-Development.md"}'),p={name:"ml-notes/dlai-prompt-engineering/Prompt-Development.md"},o=l(`<h1 id="iterative-prompt-development" tabindex="-1">Iterative Prompt Development <a class="header-anchor" href="#iterative-prompt-development" aria-label="Permalink to &quot;Iterative Prompt Development&quot;">​</a></h1><p>Similar to ML, prompt development is an iterative process. Won&#39;t be able to get prompt correct in your first attempt.<br> Idea =&gt; Implementation(Prompt) =&gt; Experimental result =&gt; Error Analysis</p><h2 id="prompt-development-process" tabindex="-1">Prompt Development Process <a class="header-anchor" href="#prompt-development-process" aria-label="Permalink to &quot;Prompt Development Process&quot;">​</a></h2><p>Key: A good prompt engineer doesn&#39;t need to know the perfect prompt, but need to know an effective process of iteratively developing a prompt.</p><ul><li>Try something</li><li>Analyze where result does not give what you want</li><li>Clarify instructions, give model more time/space to think to deliver the result you want</li><li>Refine prompt with a batch of examples</li></ul><p>The important part of prompt engineering is evaluating the result and improve on the prompt. Have a consistent standard to measure the error, how close it is to your expectations, etc.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="limit-output-length" tabindex="-1">Limit output length: <a class="header-anchor" href="#limit-output-length" aria-label="Permalink to &quot;Limit output length:&quot;">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fact_sheet_chair </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">OVERVIEW</span></span>
<span class="line"><span style="color:#C3E88D;">- Part of a beautiful family of mid-century inspired office furniture, </span></span>
<span class="line"><span style="color:#C3E88D;">including filing cabinets, desks, bookcases, meeting tables, and more.</span></span>
<span class="line"><span style="color:#C3E88D;">- Several options of shell color and base finishes.</span></span>
<span class="line"><span style="color:#C3E88D;">- Available with plastic back and front upholstery (SWC-100) </span></span>
<span class="line"><span style="color:#C3E88D;">or full upholstery (SWC-110) in 10 fabric and 6 leather options.</span></span>
<span class="line"><span style="color:#C3E88D;">- Base finish options are: stainless steel, matte black, </span></span>
<span class="line"><span style="color:#C3E88D;">gloss white, or chrome.</span></span>
<span class="line"><span style="color:#C3E88D;">- Chair is available with or without armrests.</span></span>
<span class="line"><span style="color:#C3E88D;">- Suitable for home or business settings.</span></span>
<span class="line"><span style="color:#C3E88D;">- Qualified for contract use.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">CONSTRUCTION</span></span>
<span class="line"><span style="color:#C3E88D;">- 5-wheel plastic coated aluminum base.</span></span>
<span class="line"><span style="color:#C3E88D;">- Pneumatic chair adjust for easy raise/lower action.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">DIMENSIONS</span></span>
<span class="line"><span style="color:#C3E88D;">- WIDTH 53 CM | 20.87”</span></span>
<span class="line"><span style="color:#C3E88D;">- DEPTH 51 CM | 20.08”</span></span>
<span class="line"><span style="color:#C3E88D;">- HEIGHT 80 CM | 31.50”</span></span>
<span class="line"><span style="color:#C3E88D;">- SEAT HEIGHT 44 CM | 17.32”</span></span>
<span class="line"><span style="color:#C3E88D;">- SEAT DEPTH 41 CM | 16.14”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">OPTIONS</span></span>
<span class="line"><span style="color:#C3E88D;">- Soft or hard-floor caster options.</span></span>
<span class="line"><span style="color:#C3E88D;">- Two choices of seat foam densities: </span></span>
<span class="line"><span style="color:#C3E88D;"> medium (1.8 lb/ft3) or high (2.8 lb/ft3)</span></span>
<span class="line"><span style="color:#C3E88D;">- Armless or 8 position PU armrests </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">MATERIALS</span></span>
<span class="line"><span style="color:#C3E88D;">SHELL BASE GLIDER</span></span>
<span class="line"><span style="color:#C3E88D;">- Cast Aluminum with modified nylon PA6/PA66 coating.</span></span>
<span class="line"><span style="color:#C3E88D;">- Shell thickness: 10 mm.</span></span>
<span class="line"><span style="color:#C3E88D;">SEAT</span></span>
<span class="line"><span style="color:#C3E88D;">- HD36 foam</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">COUNTRY OF ORIGIN</span></span>
<span class="line"><span style="color:#C3E88D;">- Italy</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a </span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based </span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information </span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by </span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Use at most 3 sentences.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="focus-certain-certain-aspect-of-input" tabindex="-1">Focus certain certain aspect of input: <a class="header-anchor" href="#focus-certain-certain-aspect-of-input" aria-label="Permalink to &quot;Focus certain certain aspect of input:&quot;">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a </span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based </span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information </span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by </span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The description is intended for furniture retailers, </span></span>
<span class="line"><span style="color:#C3E88D;">so should be technical in nature and focus on the </span></span>
<span class="line"><span style="color:#C3E88D;">materials the product is constructed from.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Use at most 50 words.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="include-product-id" tabindex="-1">Include Product ID: <a class="header-anchor" href="#include-product-id" aria-label="Permalink to &quot;Include Product ID:&quot;">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a </span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based </span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information </span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by </span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The description is intended for furniture retailers, </span></span>
<span class="line"><span style="color:#C3E88D;">so should be technical in nature and focus on the </span></span>
<span class="line"><span style="color:#C3E88D;">materials the product is constructed from.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Use at most 50 words.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="generate-table-and-format-the-output-into-html" tabindex="-1">Generate table and format the output into HTML: <a class="header-anchor" href="#generate-table-and-format-the-output-into-html" aria-label="Permalink to &quot;Generate table and format the output into HTML:&quot;">​</a></h3><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to help a marketing team create a </span></span>
<span class="line"><span style="color:#C3E88D;">description for a retail website of a product based </span></span>
<span class="line"><span style="color:#C3E88D;">on a technical fact sheet.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Write a product description based on the information </span></span>
<span class="line"><span style="color:#C3E88D;">provided in the technical specifications delimited by </span></span>
<span class="line"><span style="color:#C3E88D;">triple backticks.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">The description is intended for furniture retailers, </span></span>
<span class="line"><span style="color:#C3E88D;">so should be technical in nature and focus on the </span></span>
<span class="line"><span style="color:#C3E88D;">materials the product is constructed from.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">At the end of the description, include every 7-character </span></span>
<span class="line"><span style="color:#C3E88D;">Product ID in the technical specification.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">After the description, include a table that gives the </span></span>
<span class="line"><span style="color:#C3E88D;">product&#39;s dimensions. The table should have two columns.</span></span>
<span class="line"><span style="color:#C3E88D;">In the first column include the name of the dimension. </span></span>
<span class="line"><span style="color:#C3E88D;">In the second column include the measurements in inches only.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Give the table the title &#39;Product Dimensions&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Format everything as HTML that can be used in a website. </span></span>
<span class="line"><span style="color:#C3E88D;">Place the description in a &lt;div&gt; element.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C3E88D;">Technical specifications: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">fact_sheet_chair</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Mid-Century Inspired Office Chair</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Introducing our mid-century inspired office chair, part of a beautiful family of office furniture that includes filing cabinets, desks, bookcases, meeting tables, and more. This chair is available in several options of shell color and base finishes, allowing you to customize it to your liking. You can choose between plastic back and front upholstery or full upholstery in 10 fabric and 6 leather options. The base finish options are stainless steel, matte black, gloss white, or chrome. The chair is also available with or without armrests, making it suitable for both home and business settings. Plus, it&#39;s qualified for contract use, ensuring its durability and longevity.</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">The chair&#39;s construction features a 5-wheel plastic coated aluminum base and a pneumatic chair adjust for easy raise/lower action. You can also choose between soft or hard-floor caster options and two choices of seat foam densities: medium (1.8 lb/ft3) or high (2.8 lb/ft3). The armrests are also customizable, with the option of armless or 8 position PU armrests.</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">The chair&#39;s shell base glider is made of cast aluminum with modified nylon PA6/PA66 coating, with a shell thickness of 10 mm. The seat is made of HD36 foam, ensuring comfort and support during long work hours. This chair is made in Italy, ensuring its quality and craftsmanship.</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Product ID(s): SWC-100, SWC-110</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">caption</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Product Dimensions</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">caption</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Width</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">53 cm | 20.87&quot;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Depth</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">51 cm | 20.08&quot;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Height</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">80 cm | 31.50&quot;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Seat Height</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">44 cm | 17.32&quot;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Seat Depth</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">41 cm | 16.14&quot;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> IPython</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">display </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> display</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> HTML</span></span>
<span class="line"><span style="color:#82AAFF;">display</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">HTML</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">))</span></span></code></pre></div>`,18),e=[o];function t(c,r,i,D,y,F){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{h as __pageData,d as default};
