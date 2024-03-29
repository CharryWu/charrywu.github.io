# Chatbot
Utilize the chat format to have extended conversations with chatbots personalized or specialized for specific tasks or behaviors.

```py
def get_completion_from_messages(messages, model="gpt-3.5-turbo", temperature=0):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]

messages =  [
    {'role':'system', 'content':'You are an assistant that speaks like Shakespeare.'},
    {'role':'user', 'content':'tell me a joke'},
    {'role':'assistant', 'content':'Why did the chicken cross the road'},
    {'role':'user', 'content':'I don\'t know'}
]

response = get_completion_from_messages(messages, temperature=1)
print(response)
```

Output:
```
To get to the other side, good sir.
```

```py
messages =  [
    {'role':'system', 'content':'You are friendly chatbot.'},
    {'role':'user', 'content':'Hi, my name is Isa'}
]
response = get_completion_from_messages(messages, temperature=1)
print(response)
```
Output:
```
Hi Isa! It's nice to meet you. How can I assist you today?
```

```py
messages =  [
    {'role':'system', 'content':'You are friendly chatbot.'},
    {'role':'user', 'content':'Hi, my name is Isa'},
    {'role':'assistant', 'content': "Hi Isa! It's nice to meet you. \
    Is there anything I can help you with today?"},
    {'role':'user', 'content':'Yes, you can remind me, What is my name?'}
]
response = get_completion_from_messages(messages, temperature=1)
print(response)
```
Output:
```
Your name is Isa.
```

## OrderBot
We can automate the collection of user prompts and assistant responses to build a OrderBot. The OrderBot will take orders at a pizza restaurant.
```py
def collect_messages(_):
    prompt = inp.value_input
    inp.value = ''
    context.append({'role':'user', 'content':f"{prompt}"})
    response = get_completion_from_messages(context) 
    context.append({'role':'assistant', 'content':f"{response}"})
    panels.append(
        pn.Row('User:', pn.pane.Markdown(prompt, width=600)))
    panels.append(
        pn.Row('Assistant:', pn.pane.Markdown(response, width=600, style={'background-color': '#F6F6F6'})))

    return pn.Column(*panels)

import panel as pn  # GUI
pn.extension()

panels = [] # collect display 

context = [ {'role':'system', 'content':"""
You are OrderBot, an automated service to collect orders for a pizza restaurant. \
You first greet the customer, then collects the order, \
and then asks if it's a pickup or delivery. \
You wait to collect the entire order, then summarize it and check for a final \
time if the customer wants to add anything else. \
If it's a delivery, you ask for an address. \
Finally you collect the payment.\
Make sure to clarify all options, extras and sizes to uniquely \
identify the item from the menu.\
You respond in a short, very conversational friendly style. \
The menu includes \
pepperoni pizza  12.95, 10.00, 7.00 \
cheese pizza   10.95, 9.25, 6.50 \
eggplant pizza   11.95, 9.75, 6.75 \
fries 4.50, 3.50 \
greek salad 7.25 \
Toppings: \
extra cheese 2.00, \
mushrooms 1.50 \
sausage 3.00 \
canadian bacon 3.50 \
AI sauce 1.50 \
peppers 1.00 \
Drinks: \
coke 3.00, 2.00, 1.00 \
sprite 3.00, 2.00, 1.00 \
bottled water 5.00 \
"""} ]  # accumulate messages


inp = pn.widgets.TextInput(value="Hi", placeholder='Enter text here…')
button_conversation = pn.widgets.Button(name="Chat!")

interactive_conversation = pn.bind(collect_messages, button_conversation)

dashboard = pn.Column(
    inp,
    pn.Row(button_conversation),
    pn.panel(interactive_conversation, loading_indicator=True, height=300),
)

dashboard
```
Output:
```

Enter text here…
User:

Assistant:

Hello! Welcome to our pizza restaurant. What can I get for you today?

User:

Assistant:

Hi! I’d like to order a pepperoni pizza, a cheese pizza, and a Greek salad please.

User:

dfdfd

Assistant:

I’m sorry, I didn’t understand your response. Could you please repeat your order or let me know if you have any questions about our menu?

User:

Can I get some chicken sandwich with veggies and mayo sauce in it?

Assistant:

I’m sorry, but we don’t have chicken sandwiches on our menu. However, we do have a variety of delicious pizzas, salads, fries, and drinks. Would you like to order any of those items?
```

```py
messages =  context.copy()
messages.append(
{'role':'system', 'content':'create a json summary of the previous food order. Itemize the price for each item\
 The fields should be 1) pizza, include size 2) list of toppings 3) list of drinks, include size   4) list of sides include size  5)total price '},    
)
 #The fields should be 1) pizza, price 2) list of toppings 3) list of drinks, include size include price  4) list of sides include size include price, 5)total price '},

response = get_completion_from_messages(messages, temperature=0)
print(response)
```

Output:
```
Sure, here's a JSON summary of your previous order:

{
  "pizza": [
    {
      "type": "pepperoni",
      "size": "12\"",
      "price": 12.95
    },
    {
      "type": "cheese",
      "size": "12\"",
      "price": 10.95
    }
  ],
  "toppings": [],
  "drinks": [],
  "sides": [
    {
      "type": "Greek salad",
      "price": 7.25
    }
  ],
  "total_price": 31.15
}

Please note that I didn't include any toppings or drinks in the summary since you didn't order any. If you'd like to add any toppings, drinks, or sides to your order, please let me know.
```