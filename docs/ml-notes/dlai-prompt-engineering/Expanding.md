# Expanding
Use LLM to generate longer piece of text based on shorter piece of input
## Customize the automated reply to a customer email
```py
# given the sentiment from the lesson on "inferring",
# and the original customer message, customize the email
sentiment = "negative"
# review for a blender
review = f"""
So, they still had the 17 piece system on seasonal \
sale for around $49 in the month of November, about \
half off, but for some reason (call it price gouging) \
around the second week of December the prices all went \
up to about anywhere from between $70-$89 for the same \
system. And the 11 piece system went up around $10 or \
so in price also from the earlier sale price of $29. \
So it looks okay, but if you look at the base, the part \
where the blade locks into place doesn’t look as good \
as in previous editions from a few years ago, but I \
plan to be very gentle with it (example, I crush \
very hard items like beans, ice, rice, etc. in the \ 
blender first then pulverize them in the serving size \
I want in the blender then switch to the whipping \
blade for a finer flour, and use the cross cutting blade \
first when making smoothies, then use the flat blade \
if I need them finer/less pulpy). Special tip when making \
smoothies, finely cut and freeze the fruits and \
vegetables (if using spinach-lightly stew soften the \ 
spinach then freeze until ready for use-and if making \
sorbet, use a small to medium sized food processor) \ 
that you plan to use that way you can avoid adding so \
much ice if at all-when making your smoothie. \
After about a year, the motor was making a funny noise. \
I called customer service but the warranty expired \
already, so I had to buy another one. FYI: The overall \
quality has gone done in these types of products, so \
they are kind of counting on brand recognition and \
consumer loyalty to maintain sales. Got it in about \
two days.
"""

prompt = f"""
You are a customer service AI assistant.
Your task is to send an email reply to a valued customer.
Given the customer email delimited by ```, \
Generate a reply to thank the customer for their review.
If the sentiment is positive or neutral, thank them for \
their review.
If the sentiment is negative, apologize and suggest that \
they can reach out to customer service. 
Make sure to use specific details from the review.
Write in a concise and professional tone.
Sign the email as `AI customer agent`.
Customer review: ```{review}```
Review sentiment: {sentiment}
"""
response = get_completion(prompt)
print(response)
```

Output:
```
Dear Valued Customer,

Thank you for taking the time to leave a review about our product. We are sorry to hear that you experienced an issue with the motor after a year of use. We apologize for any inconvenience this may have caused you.

We would like to suggest that you reach out to our customer service team for further assistance with this issue. They will be able to provide you with more information on how to resolve this problem.

We appreciate your feedback regarding the pricing of our product. We understand that the price increase may have been frustrating for you. We would like to assure you that we always strive to offer our products at a fair price.

Thank you again for your review and for choosing our product. We hope to have the opportunity to serve you again in the future.

Best regards,

AI customer agent
```

## Remind the model to use details from the customer's email, tuned using temperature.
Temperature is the degree of randomness of model.  
If temperature=0, it will always choose the same highest frequency word as next generated.  
At higher temperature, it will choose less likely words, or less frequent word as next generated.
```py
prompt = f"""
You are a customer service AI assistant.
Your task is to send an email reply to a valued customer.
Given the customer email delimited by ```, \
Generate a reply to thank the customer for their review.
If the sentiment is positive or neutral, thank them for \
their review.
If the sentiment is negative, apologize and suggest that \
they can reach out to customer service. 
Make sure to use specific details from the review.
Write in a concise and professional tone.
Sign the email as `AI customer agent`.
Customer review: ```{review}```
Review sentiment: {sentiment}
"""
response = get_completion(prompt, temperature=0.7)
print(response)
```
Output:
```
Dear valued customer,

We appreciate you taking the time to leave a review for our product. We apologize for any inconvenience you may have experienced due to the increase in price of the 17 piece system. We assure you that our prices are competitive and reflect the quality of our products.

We are sorry to hear that you faced issues with the motor of the product after a year. We suggest that you reach out to our customer service team for further assistance. They will be happy to help you with any issues you may have.

Thank you for your feedback regarding the quality of our products. We are constantly looking for ways to improve and provide the best possible products to our customers.

We appreciate your business and hope to continue to serve you in the future.

Sincerely,

AI customer agent
```
