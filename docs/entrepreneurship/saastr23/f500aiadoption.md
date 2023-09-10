# What are enterprises most excited about using modern AI for?
- Use AI to improve the products they sell to their customers
- Transoform business, how employees work
    - Sales/Marketing: ai resolve the customer cases, get back to customers quicker
    - Engineering: ai help developers writing unit tests, troubleshooting using AI
- Expert system helping employees, expert that understands the product. Customers don't have to read documentation, but can just talk to AI as solution architect
- A lot of excitement, but people aren't sure of "how"
- A lot pilotings

- Information discovery/synthesis, get deeper insights into data
- Hierarchical summarization use cases, how I turn data into actionable insights
- Support chatbots

Best use cases:
- Best to first work on internal use cases for large enterprises
- Define what success look like, have measurable success, do you understand what you want?
    - If customer don't know, give advice on the common (succesful) use cases that works for other customers, learn quickly and iterate
- low risk/high risk use cases:
    - Low risk: information extraction, summarization
    - Low risk: customer support (internal applications)
        - Bring AI in front of customers
        - Support AI agents
    - High risk: function calling to LLM


# Biggest barrier of adoption
- Customers want to do a lot of research on hundreds of AI tools, afraid that adopting one AI product will miss out another better one
- Data Security: data from one company might leaked to public due to model training
- Data governance: knowledge should not be visible to everyone, should only deliver to persons who have permission to view
- Having foundation model hosted on AWS provided to customer is very helpful
- Inside companies, the resistance is that departments might not have enought bandwidth to adopt and explore new technologies
    - Notion AI adopts anthropic llm product, from CEO to frontline engineers is prime example but takes a lot of efforts
- AI is still software, need to do research and iterate, don't work out of the box
- There's a lot of pilots, move from pilots to adoption.
- Hallucination, attribution problem (trace back), update speed, data privacy, cost-quality tradeoff
- Confidence, rely on user verification

# Early adopters
- Very tech forward companies
    - Usually think they can do in-house, but is actually more difficult than they thought
- Unviersal adopters
- Chief Information Officer, Sales, marketing, HR, IT automation
- Use as calculators
- Show to customers that adopting AI can have real ROI, more than just cool demo

## In-house vs. using third party?
As vendor, should not fight against eng team desire to implement themselves
- Let customers build themselves
- Your model is constantly changing. Small models customers build themselves, that's ok, but for more powerful models, let them build themselves

## How to make product enterprise grade?
If you need your customers' data, support running your product on customer's cloud, data don't leave their premises

Might need very different model in the first place, end-to-end, models can dynamically get updates from real world and verify, so that hallucination can be solved

Copyrighted information? Respect robots.txt

# Should you do fine tuning?
- Retrival Augmented Generation
- Longer context window. No need for fine-tuning, just have all data in the context
- GPT 4 will have 1 million tokens
- Have a unique use case, no body is doing that (Artificial specialized intelligence). In that case, you should think of fine tuning
