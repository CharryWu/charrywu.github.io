## Deep Clone
Implement a `deepClone` function that performs a deep clone operation on JavaScript objects. You can assume the input only contains JSON-serializable values (`null`, `boolean`, `number`, `string`, `Array`, `Object`) and will not contain any other objects like `Date`, `Regex`, `Map` or `Set`.


### Implementation
```js
export default function deepClone(value) {
  if (typeof value !== 'object' || value === null) return value;
  if (Array.isArray(value)) return value.map(deepClone);
  return Object.fromEntries(
    Object.entries(value).map(([k, v]) => [k, deepClone(v)]);
  )
}
```

### Explanation
There are generally two ways we can traverse an object:

- Loop through the keys with the good old `for ... in` statement.
- Converting the object into an array of keys with `Object.keys()`, or an array of a key-value tuple with `Object.entries()`.
With the `for ... in` statement, inherited enumerable properties are processed as well. On the other hand, `Object.keys()` and `Object.entries()` only care about the properties directly defined on the object, and this is usually what we want.

### Edge Cases
- Non-enumerable and symbol-keyed properties are ignored.
- Property descriptors are not respected and copied into the cloned object.
- If the object has circular references, the current solution will break and cause a stack overflow by recursing into an infinite loop.
- Prototypes are not copied.

### One-liner Solution
As of writing, all major browsers have native support for performing deep clone via the `structuredClone` API. Check out ["Deep-copying in JavaScript using structuredClone"](https://web.dev/articles/structured-clone) on web.dev if you want to learn more about `structuredClone`'s features and limitations.

```js
const clonedObj = structuredClone(obj);
```
