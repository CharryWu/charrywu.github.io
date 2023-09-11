# What are enterprises most excited about using modern AI for?
- Use AI to improve the products they sell to their customers
- Transoform business, how employees work
    - Sales/Marketing: AI resolve the customer cases, get back to customers quicker
    - Engineering: ai help developers writing unit tests, debug/troubleshooting with AI copilots
- AI Expert systems that help employees, expert that understands the product.
    - Customers don't have to read documentation, but can just talk to AI as solution architect
- A lot of excitement, but people aren't sure of "how"
- A lot ongoing demos/pilots

- Information discovery/synthesis, get deeper insights into data
- Hierarchical summarization use cases, turning data into actionable insights
- Customer support chatbots

## Best use cases:
- Recommended approach: large enterprises first-handedly adopt AI automation by working on **internal** use cases
- Have clear definition of what a success outcome looks like, have measurable goals. Help customers understand what they really want
    - If customer don't know "how", advice them on the common (succesful) use cases that works for other customers, learn quickly and iterate
- low risk/high risk use cases:
    - Low risk: information extraction, summarization
    - Low risk: customer support (internal applications)
        - Bring AI in front of customers
        - Support AI agents
    - High risk: function calling to LLM


# Biggest barrier of adoption
- Customers want to do a lot of research on hundreds of AI tools, afraid that adopting one AI product will miss out another better one
- Data Security: data from one company might leak to public in model training process
- Data governance: knowledge should not be visible to everyone, should only deliver to persons who have permission to view
- Having foundation model hosted on AWS readily available to enterprise customer is very helpful
- The with-in org resistance to adoption of new technologies is that departments might not have enought bandwidth to adopt and explore new technologies
    - Notion AI adopts anthropic foundation model across every product lines, from CEO to frontline engineers, is a prime example but takes them a lot of efforts
- AI is still software, need to do research and iterate, don't work out of the box
- There's a lot of pilots, moving from pilots to adoption (contract) is not easy
- Common technical problems include:
    - hallucination
    - attribution problem (trace back)
    - model update speed
    - data privacy
    - cost-quality tradeoff
- Confidence, generated outputs from LLM rely on user doing verification/fact-checking themselves

# Early adopters
- Very tech forward companies
    - Usually think they can do in-house, but self-implementation is actually more difficult than they thought
- Unviersal adopters
- Chief Information Officer, Sales, marketing, HR, IT automation
- Large bank employees frequently use LLM as more intelligent calculators, which LLM is very good at
- Show to customers that adopting AI can have real ROI, more than just cool demo
    - Org Eng managers might align their OKR goals with AI tech adoption, but need to move beyond that and create real value & use cases

## In-house vs. using third party?
As vendor, should not fight against eng team's desire to implement themselves
- Let customers build themselves
- Your model is constantly changing. Small models customers build themselves, that's ok, but for more powerful models, let them build themselves

## How to make product enterprise grade?
If you need your customers' data, support running your product on customer's cloud so that proprietary data don't leave their premises

Might need very different model in the first place, end-to-end, models can dynamically get updates from real world and verify, so that hallucination can be solved

Copyrighted information? Respect robots.txt

# Should you do fine tuning?
- Retrival Augmented Generation
- Longer context window. No need for fine-tuning, just have all data in the context
- GPT 4 will have 1 million tokens
- Have a unique use case, no body is doing that (Artificial specialized intelligence). In that case, you should think of fine tuning
