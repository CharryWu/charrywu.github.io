```py
import openai
import os

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

openai.api_key  = os.getenv('OPENAI_API_KEY')

def get_completion(prompt, model="gpt-3.5-turbo"):
    """
    Single ipnut, single output
    """
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]

def get_completion_from_messages(messages, model="gpt-3.5-turbo", temperature=0):
    """
    Allows multiple back-and-forth conversations
    See https://help.openai.com/en/articles/7042661-chatgpt-api-transition-guide
    for using the roles and content field as input message
    """
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature, # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]

# Use following to render HTML string `response`
from IPython.display import display, Markdown, Latex, HTML, JSON
display(HTML(response))

# Use following to show diff between `text` and `response`
from redlines import Redlines

diff = Redlines(text,response)
display(Markdown(diff.output_markdown))
```