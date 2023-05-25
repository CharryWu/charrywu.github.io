# Iterative Prompt Development
Similar to ML, prompt development is an iterative process. Won't be able to get prompt correct in your first attempt.  
Idea => Implementation(Prompt) => Experimental result => Error Analysis

## Prompt Development Process
Key: A good prompt engineer doesn't need to know the perfect prompt, but need to know an effective process of iteratively developing a prompt.
- Try something
- Analyze where result does not give what you want
- Clarify instructions, give model more time/space to think to deliver the result you want
- Refine prompt with a batch of examples

The important part of prompt engineering is evaluating the result and improve on the prompt. Have a consistent standard to measure the error, how close it is to your expectations, etc.

## Examples
### Limit output length:
```python
fact_sheet_chair = """
OVERVIEW
- Part of a beautiful family of mid-century inspired office furniture, 
including filing cabinets, desks, bookcases, meeting tables, and more.
- Several options of shell color and base finishes.
- Available with plastic back and front upholstery (SWC-100) 
or full upholstery (SWC-110) in 10 fabric and 6 leather options.
- Base finish options are: stainless steel, matte black, 
gloss white, or chrome.
- Chair is available with or without armrests.
- Suitable for home or business settings.
- Qualified for contract use.

CONSTRUCTION
- 5-wheel plastic coated aluminum base.
- Pneumatic chair adjust for easy raise/lower action.

DIMENSIONS
- WIDTH 53 CM | 20.87”
- DEPTH 51 CM | 20.08”
- HEIGHT 80 CM | 31.50”
- SEAT HEIGHT 44 CM | 17.32”
- SEAT DEPTH 41 CM | 16.14”

OPTIONS
- Soft or hard-floor caster options.
- Two choices of seat foam densities: 
 medium (1.8 lb/ft3) or high (2.8 lb/ft3)
- Armless or 8 position PU armrests 

MATERIALS
SHELL BASE GLIDER
- Cast Aluminum with modified nylon PA6/PA66 coating.
- Shell thickness: 10 mm.
SEAT
- HD36 foam

COUNTRY OF ORIGIN
- Italy
"""

prompt = f"""
Your task is to help a marketing team create a 
description for a retail website of a product based 
on a technical fact sheet.

Write a product description based on the information 
provided in the technical specifications delimited by 
triple backticks.

Use at most 3 sentences.

Technical specifications: ```{fact_sheet_chair}```
"""
response = get_completion(prompt)
print(response)
```

### Focus certain certain aspect of input:
```python
prompt = f"""
Your task is to help a marketing team create a 
description for a retail website of a product based 
on a technical fact sheet.

Write a product description based on the information 
provided in the technical specifications delimited by 
triple backticks.

The description is intended for furniture retailers, 
so should be technical in nature and focus on the 
materials the product is constructed from.

Use at most 50 words.

Technical specifications: ```{fact_sheet_chair}```
"""
response = get_completion(prompt)
print(response)
```

### Include Product ID:
```python
prompt = f"""
Your task is to help a marketing team create a 
description for a retail website of a product based 
on a technical fact sheet.

Write a product description based on the information 
provided in the technical specifications delimited by 
triple backticks.

The description is intended for furniture retailers, 
so should be technical in nature and focus on the 
materials the product is constructed from.

Use at most 50 words.

Technical specifications: ```{fact_sheet_chair}```
"""
response = get_completion(prompt)
print(response)
```

### Generate table and format the output into HTML:
```python
prompt = f"""
Your task is to help a marketing team create a 
description for a retail website of a product based 
on a technical fact sheet.

Write a product description based on the information 
provided in the technical specifications delimited by 
triple backticks.

The description is intended for furniture retailers, 
so should be technical in nature and focus on the 
materials the product is constructed from.

At the end of the description, include every 7-character 
Product ID in the technical specification.

After the description, include a table that gives the 
product's dimensions. The table should have two columns.
In the first column include the name of the dimension. 
In the second column include the measurements in inches only.

Give the table the title 'Product Dimensions'.

Format everything as HTML that can be used in a website. 
Place the description in a <div> element.

Technical specifications: ```{fact_sheet_chair}```
"""

response = get_completion(prompt)
print(response)
```
Output:
```html
<div>
<h2>Mid-Century Inspired Office Chair</h2>
<p>Introducing our mid-century inspired office chair, part of a beautiful family of office furniture that includes filing cabinets, desks, bookcases, meeting tables, and more. This chair is available in several options of shell color and base finishes, allowing you to customize it to your liking. You can choose between plastic back and front upholstery or full upholstery in 10 fabric and 6 leather options. The base finish options are stainless steel, matte black, gloss white, or chrome. The chair is also available with or without armrests, making it suitable for both home and business settings. Plus, it's qualified for contract use, ensuring its durability and longevity.</p>
<p>The chair's construction features a 5-wheel plastic coated aluminum base and a pneumatic chair adjust for easy raise/lower action. You can also choose between soft or hard-floor caster options and two choices of seat foam densities: medium (1.8 lb/ft3) or high (2.8 lb/ft3). The armrests are also customizable, with the option of armless or 8 position PU armrests.</p>
<p>The chair's shell base glider is made of cast aluminum with modified nylon PA6/PA66 coating, with a shell thickness of 10 mm. The seat is made of HD36 foam, ensuring comfort and support during long work hours. This chair is made in Italy, ensuring its quality and craftsmanship.</p>
<h3>Product ID(s): SWC-100, SWC-110</h3>
<table>
  <caption>Product Dimensions</caption>
  <tr>
    <th>Width</th>
    <td>53 cm | 20.87"</td>
  </tr>
  <tr>
    <th>Depth</th>
    <td>51 cm | 20.08"</td>
  </tr>
  <tr>
    <th>Height</th>
    <td>80 cm | 31.50"</td>
  </tr>
  <tr>
    <th>Seat Height</th>
    <td>44 cm | 17.32"</td>
  </tr>
  <tr>
    <th>Seat Depth</th>
    <td>41 cm | 16.14"</td>
  </tr>
</table>
</div>
```

```python
from IPython.display import display, HTML
display(HTML(response))
```