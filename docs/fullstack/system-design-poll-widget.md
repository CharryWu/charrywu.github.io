## Reference
- https://www.greatfrontend.com/questions/system-design/poll-widget
- https://www.youtube.com/watch?v=lO6GyCvbDm8&list=PLI9W87-Dqn7j_x6QtR6sUjycJR7nQLBqT&index=7

## Requirements Gathering
- Where will this widget be displayed? Is the widget provided by third party used by any website owner or is this widget been used by one company's software products only?
- Must login to vote vs. Anyone can vote (Anonymous voting)
    - Affects architecture/API design: must login to vote poll widget should have two states: read only vs. non-read-only (can vote). See [Data Model](#data-model).
    - Also need to distinguish anonymous user with `uuid` from client-side cookie (see [Optimization/deepdive](#anonymous-voting-persisting-votes-across-sessions))
- Single choice vs. Multi-choice
    - Affects data model, whether to store user choice as single option `option_id` value or an array of `option_id`
- Can users change their vote after submit?
- Max number of options supported?
    - If no limit to maximum number of options, should only display a few and leave the rest to be in a dropdown menu with search - user have to select one to proceed
- How are options ordered?
    - If option order is given by site builder, should have `order` associated with each option
- How are options determined? Can new options be added by user after poll is created?
    - Typically, The poll is created by the website owner in a separate admin portal and the options are determined during poll creation and cannot be modified after that.
- Customizable CSS vs. No CSS customization
    - Affects architecture: whether to use `<iframe>` rendering or direct rendering within the page (using JS render framework)

## Architecture
### Rendering Approach
#### Render as `<iframe>`
`<iframe>` (inline frame) is an HTML tag on a page which accepts a src attribute, which is a URL for a website you want to embed within the host website.
They are essentially websites that only render the contents to be embedded.

Usually you need to provide HTML `<iframe>` code or `<script>` that automatically injects iframe with parameters

Pros:
- An iframe is a separate website and hence a separate browsing context. The contents of the iframe is isolated from the hosting site and vice versa.
    - The styling of the widget will not be affected by any CSS of the host website.
    - The widget's JavaScript environment is not affected by scripts running on the host website, which can contain polyfills or monkeypatching, affecting runtime behavior in an unpredictable manner.
- Simple to set up because adding an `<iframe>` on the page only involves changing HTML. Users do not need much technical knowledge to achieve that.
- If you don't need custom styling of the widget, embedding iframe as HTML directly is the easiest option

Cons:
- It is slower to load a separate website than to render it directly into the page.
- Because of the isolation, the host website cannot use CSS to customize the component internals.
- Need a web server to host a website that renders the widget. This is not a huge deal because the a web server is needed to serve the poll results anyway. Depending on the type of website you build, this setup can range from simple to complex.

#### Render within the page (same browser context)
Pros:
- CSS styling can be controlled by site builders of the widget & customized. Can provide `renderOption` & `renderViewOnlyOption` as prop
- It is fast to render the poll widget within the same page.

Cons:
- The poll widget can be affected by the host website's JavaScript environment and global styling. There's no telling what kind of global styling is present and it is very likely for the widget's appearance to be affected by the website's CSS.

## Data Model
### Poll Entity:
- `poll_id`: Unique identifier for the poll.
- `question`: The text of the poll question.
- `options`: Array of choice objects containing:
    - `option_id`: Unique identifier for each choice.
    - `text`: Choice description.
    - `votes`: Current vote count for the choice.

### Vote Entity (Only exists at the backend):
`vote_id`: Unique identifier for the vote (if tracked).
`poll_id`: The poll being voted on.
`user_choice_option_id`: The chosen (list of) option.
`user_id`: (Optional) Identifier for the user (e.g., IP address, cookie).

### Client-side States:
```json
const state = {
  lastUpdated: 1628634891,
  totalVotes: 421,
  question: 'Which is your favorite JavaScript library/framework?',
  poll_id: 333,
  options: [
    {
      id: 123,
      label: 'React',
      count: 234,
      userVotedForOption: false,
    },
    {
      id: 124,
      label: 'Vue',
      count: 183,
      userVotedForOption: true,
    },
    {
      id: 125,
      label: 'Svelte',
      count: 51,
      userVotedForOption: true,
    },
    // ...
  ],
  // Which option(s) the user has selected.
  selectedOptions: [124, 125],
  readOnly: false,
};
```
Only the `selectedOptions`, `readOnly` field is client-only state, the rest of the fields are server-originated data.

### Event handlers, render functions & other props
```ts
type PollWidgetProp = {
  selectedOptions: Number[];
  readOnly: boolean;
  onVote: (data: Option[]) => void;
  onUnVote: (data: Option[]) => void;
  renderOptionItem: (data: Option, readOnly?: boolean) => HTMLElement;
}
```


## API
### Backend Server API
- Fetch Poll Data:
    - Endpoint: `GET /api/polls/{poll_id}`
    - Response: Poll data with question and choices.
    - Example:
```json
    {
  "totalVotes": 421,
  "question": "Which is your favorite JavaScript library/framework?",
  "options": [
    {
      "id": 123,
      "label": "React",
      "count": 234,
      "userVotedForOption": false
    },
    {
      "id": 124,
      "label": "Vue",
      "count": 183,
      "userVotedForOption": false
    },
    {
      "id": 125,
      "label": "Svelte",
      "count": 51,
      "userVotedForOption": false
    }
  ]
}
```
- Submit Vote:
    - Endpoint: `POST /api/polls/{poll_id}/vote`
    - Request Payload: `{ "choice_id": ["1", "3"] }`
    - Response: Updated poll results.
    - Return data can be same as "Fetch Poll data" (see above example)

- Fetch Results:
    - Endpoint: `GET /api/polls/{poll_id}/results`
    - Response: Poll results with vote counts.


Security Considerations:

- Use tokens or session management to validate vote submissions.
- Ensure APIs are secured against common vulnerabilities like CSRF, XSS, etc.


### Component API (iframe)
```tsx
// Example code in React
<Poll submitUrl="https://greatpollwidget.com/submit/{poll_id}">
  <PollOptionList>
    {options.map((option) => (
      <PollOptionItem
        key={option.id}
        label={option.label}
        count={option.count}
        isSelected={option.userVotedForOption}
        onVote={() => {
          submitVote(option.id);
        }}
        onUnvote={() => {
          removeVote(option.id);
        }}
      />
    ))}
  </PollOptionList>
</Poll>
```

## Optimization/Deepdive

### User Experience
- When the poll is still loading, instead of showing a spinner, use a **shimmer loading** effect in the shape of bars to hint that this is a poll and also reduce layout thrash after the poll is loaded.
- Poll results should be hidden before user has voted, to reduce bias.
- Consider having a "See responses" function for people who just want to see the results without voting.

### Network
- Request responses could be out-of-order if someone votes/unvotes in quick succession
    - Use debounce to prevent spamming vote/unvote if there's no submit button (once user click an option network request is sent)
    - Keep track of the latest response and ignore stale responses.
- Show errors in the UI if the API submission fails.

### Optimistic Update
Optimistic update is a technique where the browser shows the new UI state after a server request is fired, even before a response is received from the server. Because the client has the current results during initial load, it is possible to increment the newly-voted option and compute the new ratio of all the bars on the client side.

The client can render an optimistic update first and render again with the most updated results from the server. In case of the request failure, show an error message on the frontend and scroll back to the polling state.

### Rendering bars of dynamic widths
1. Using CSS width inline style: This is the most common approach and the only small downside is that in case there's a need for animating of the bars expanding/contracting, animation of width property is slower than transform. However, the widget is mostly static so the animating issue is largely not present.

```html
<div style="width: 40%">React</div>
<div style="width: 30%">Vue</div>
```

2. Using transform: scaleX() style: This method involves scaling the element horizonally.
```html
<div style="transform: scaleX(40%)">React</div>
<div style="transform: scaleX(30%)">Vue</div>
```
Note that `scaleX()` will also transform contents within it and make them appear horizontally squished.

### Accessibility
Polling widgets are inherently very visual UI elements and we need to take special care to ensure users relying on screen readers can still understand what is being shown on the screen.

- Screen reader users will not know how long a bar is, hence `aria-label`, `title`, `aria-describedbys` need to be used for the poll options to indicate the option name, the number of votes, and the percentage if they are not in the rendered visual output.
- Use `aria-live` to announce updates for any change in values of the results when the client receives a server response.
- ARIA roles for options: `role="radiogroup"` and `role="radio"` for polls where only one option can be selected.

Keyboard interaction
`<button>`s are preferred for rendering poll options but if there's a reason to use `<div>`s, they should be made focusable by adding the `tabindex="0"` and `role="button"` attributes.


### Anonymous voting: Persisting votes across sessions
Because anyone can vote without having to log in first, we will need a way to identify users across sessions, otherwise the user will not see that they have already voted after the browser tab is closed.

We can use cookies to uniquely identify each user by generating a unique string-based fingerprint (e.g. using uuid) to serve as the user ID cookie during the initial load if there's no existing user ID cookie present.

This helps the poll widget website to identify users to track the options they have already voted and prevent a user from voting for the same option multiple times.

Note that users can work around this by using different browsers or on different

### Internationalization (i18n)
If there's a need for i18n of strings in the poll, especially the strings not from the poll creator (e.g. aria-labels), the iframe embed URL can accept a query parameter for the language and it'll be up to the website owner to provide the right language.
