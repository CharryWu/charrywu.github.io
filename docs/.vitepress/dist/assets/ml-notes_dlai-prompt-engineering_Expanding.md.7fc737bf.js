import{_ as s,o as n,c as a,O as e}from"./chunks/framework.786f5604.js";const C=JSON.parse('{"title":"Expanding","description":"","frontmatter":{},"headers":[],"relativePath":"ml-notes/dlai-prompt-engineering/Expanding.md","filePath":"ml-notes/dlai-prompt-engineering/Expanding.md"}'),o={name:"ml-notes/dlai-prompt-engineering/Expanding.md"},l=e(`<h1 id="expanding" tabindex="-1">Expanding <a class="header-anchor" href="#expanding" aria-label="Permalink to &quot;Expanding&quot;">​</a></h1><p>Use LLM to generate longer piece of text based on shorter piece of input</p><h2 id="customize-the-automated-reply-to-a-customer-email" tabindex="-1">Customize the automated reply to a customer email <a class="header-anchor" href="#customize-the-automated-reply-to-a-customer-email" aria-label="Permalink to &quot;Customize the automated reply to a customer email&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># given the sentiment from the lesson on &quot;inferring&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># and the original customer message, customize the email</span></span>
<span class="line"><span style="color:#A6ACCD;">sentiment </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">negative</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># review for a blender</span></span>
<span class="line"><span style="color:#A6ACCD;">review </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
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
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">You are a customer service AI assistant.</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to send an email reply to a valued customer.</span></span>
<span class="line"><span style="color:#C3E88D;">Given the customer email delimited by \`\`\`, </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Generate a reply to thank the customer for their review.</span></span>
<span class="line"><span style="color:#C3E88D;">If the sentiment is positive or neutral, thank them for </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">their review.</span></span>
<span class="line"><span style="color:#C3E88D;">If the sentiment is negative, apologize and suggest that </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">they can reach out to customer service. </span></span>
<span class="line"><span style="color:#C3E88D;">Make sure to use specific details from the review.</span></span>
<span class="line"><span style="color:#C3E88D;">Write in a concise and professional tone.</span></span>
<span class="line"><span style="color:#C3E88D;">Sign the email as \`AI customer agent\`.</span></span>
<span class="line"><span style="color:#C3E88D;">Customer review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">Review sentiment: </span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">sentiment</span><span style="color:#F78C6C;">}</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Dear Valued Customer,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Thank you for taking the time to leave a review about our product. We are sorry to hear that you experienced an issue with the motor after a year of use. We apologize for any inconvenience this may have caused you.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">We would like to suggest that you reach out to our customer service team for further assistance with this issue. They will be able to provide you with more information on how to resolve this problem.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">We appreciate your feedback regarding the pricing of our product. We understand that the price increase may have been frustrating for you. We would like to assure you that we always strive to offer our products at a fair price.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Thank you again for your review and for choosing our product. We hope to have the opportunity to serve you again in the future.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Best regards,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">AI customer agent</span></span></code></pre></div><h2 id="remind-the-model-to-use-details-from-the-customer-s-email-tuned-using-temperature" tabindex="-1">Remind the model to use details from the customer&#39;s email, tuned using temperature. <a class="header-anchor" href="#remind-the-model-to-use-details-from-the-customer-s-email-tuned-using-temperature" aria-label="Permalink to &quot;Remind the model to use details from the customer&#39;s email, tuned using temperature.&quot;">​</a></h2><p>Temperature is the degree of randomness of model.<br> If temperature=0, it will always choose the same highest frequency word as next generated.<br> At higher temperature, it will choose less likely words, or less frequent word as next generated.</p><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">prompt </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#C3E88D;">You are a customer service AI assistant.</span></span>
<span class="line"><span style="color:#C3E88D;">Your task is to send an email reply to a valued customer.</span></span>
<span class="line"><span style="color:#C3E88D;">Given the customer email delimited by \`\`\`, </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">Generate a reply to thank the customer for their review.</span></span>
<span class="line"><span style="color:#C3E88D;">If the sentiment is positive or neutral, thank them for </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">their review.</span></span>
<span class="line"><span style="color:#C3E88D;">If the sentiment is negative, apologize and suggest that </span><span style="color:#89DDFF;">\\</span></span>
<span class="line"><span style="color:#C3E88D;">they can reach out to customer service. </span></span>
<span class="line"><span style="color:#C3E88D;">Make sure to use specific details from the review.</span></span>
<span class="line"><span style="color:#C3E88D;">Write in a concise and professional tone.</span></span>
<span class="line"><span style="color:#C3E88D;">Sign the email as \`AI customer agent\`.</span></span>
<span class="line"><span style="color:#C3E88D;">Customer review: \`\`\`</span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">review</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">\`\`\`</span></span>
<span class="line"><span style="color:#C3E88D;">Review sentiment: </span><span style="color:#F78C6C;">{</span><span style="color:#A6ACCD;">sentiment</span><span style="color:#F78C6C;">}</span></span>
<span class="line"><span style="color:#C3E88D;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_completion</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">prompt</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;font-style:italic;">temperature</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0.7</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>Output:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Dear valued customer,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">We appreciate you taking the time to leave a review for our product. We apologize for any inconvenience you may have experienced due to the increase in price of the 17 piece system. We assure you that our prices are competitive and reflect the quality of our products.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">We are sorry to hear that you faced issues with the motor of the product after a year. We suggest that you reach out to our customer service team for further assistance. They will be happy to help you with any issues you may have.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Thank you for your feedback regarding the quality of our products. We are constantly looking for ways to improve and provide the best possible products to our customers.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">We appreciate your business and hope to continue to serve you in the future.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Sincerely,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">AI customer agent</span></span></code></pre></div>`,11),p=[l];function t(r,c,i,y,u,D){return n(),a("div",null,p)}const m=s(o,[["render",t]]);export{C as __pageData,m as default};
