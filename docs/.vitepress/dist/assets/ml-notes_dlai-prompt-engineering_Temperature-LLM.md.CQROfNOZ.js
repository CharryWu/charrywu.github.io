import{_ as a,c as n,o,j as e,a as t}from"./chunks/framework.BHrE6nLq.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ml-notes/dlai-prompt-engineering/Temperature-LLM.md","filePath":"ml-notes/dlai-prompt-engineering/Temperature-LLM.md"}'),i={name:"ml-notes/dlai-prompt-engineering/Temperature-LLM.md"};function s(l,r,p,m,d,u){return o(),n("div",null,r[0]||(r[0]=[e("p",null,"Temperature is the degree of randomness of model.",-1),e("ul",null,[e("li",null,"If temperature=0, it will always choose the same highest frequency word as next generated."),e("li",null,[t("At higher temperature, it will choose less likely words, or less frequent word as next generated."),e("br"),t(" When building models, prefer using temperature=0 for predictability & debugging"),e("br"),t(" When releasing to production, we might want to use higher temperature as higher variety of output")])],-1)]))}const h=a(i,[["render",s]]);export{c as __pageData,h as default};
