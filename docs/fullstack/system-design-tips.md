# System Design Tips
## Functional Requirements (Top 3)
Functional requirements are your "Users/Clients should be able to..." statements. Oftentimes this is a back and fourth discussion with your interviewer. Ask targeted questions as if you were talking to a client, customer, or product manager ("does the system need to do X?", "what would happen if Y?") to arrive at a prioritized list of core features.

## Non-functional Requirements (Top 3)
When evaluating non-functional requirements, it's crucial to uncover the distinct characteristics that make this system challenging or unique. To help you identify these, consider the following questions:
- CAP theorem: Does this system prioritize availability or consistency? Note, that in some cases, the answer is different depending on the part of the system -- as you'll see is the case here.
- Read vs write ratio: is this a read heavy system or write heavy? Are either notably heavy for any reason?
- Query access pattern: Is the access pattern of the system regular or are their patterns or bursts that require particular attention. For example, the holidays for shopping sites or popular events for ticket booking.


## API Endpoints
Fullfil Each Functional Requirement

Go one-by-one through your functional requirements and add one, or sometimes several, external API endpoints needed to fulfill that requirement.
