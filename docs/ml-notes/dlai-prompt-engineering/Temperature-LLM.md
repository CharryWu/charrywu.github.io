Temperature is the degree of randomness of model.  
- If temperature=0, it will always choose the same highest frequency word as next generated.  
- At higher temperature, it will choose less likely words, or less frequent word as next generated.  
When building models, prefer using temperature=0 for predictability & debugging  
When releasing to production, we might want to use higher temperature as higher variety of output