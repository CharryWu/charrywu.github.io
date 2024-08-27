

## `Promise.resolve`
The `Promise.resolve()` static method "resolves" a given value to a Promise. If the value is:

- A native promise, return that promise.
- A non-thenable, return a promise that is already fulfilled with that value.
- A thenable, `Promise.resolve()` will call the `then()` method and pass a pair of resolving functions as arguments. A promise that has the same state as the thenable is returned.

A "thenable" is an interface that implements the `.then()` method, which is called with two callbacks: one for when the promise is fulfilled, one for when it's rejected. Promises are also thenables.

Implement the `Promise.resolve()` function as `promiseResolve`. You can ignore the case where this is referenced within the implemented function.

See also: [Promise.resolve vs new Promise(resolve)](https://stackoverflow.com/a/26711782)
### Example
Resolving a non-promise.
```js
const p = promiseResolve(42);
await p; // 42
```

Resolving a Promise.
```js
const original = new Promise((resolve) => resolve(42));
const cast = promiseResolve(original);
await cast; // 42
```

Resolving a thenable.
```js
const resolvedThenable = promiseResolve({
  then(resolve, reject) {
    resolve(42);
  },
});
await resolvedThenable; // 42
```

### Solution
```js
export default function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  if (typeof value.then === 'function') {
    return new Promise(value.then.bind(value));
  }

  return new Promise((resolve) => resolve(value));
}
```

In fact, the `resolve` function can also handle thenables. So we can simplify the code even further.


```js
export default function promiseResolve(value) {
  if (value instanceof Promise) return value;
  return new Promise((res, rej) => res(value));
}
```

### Explanation

There are three cases to handle within the static Promise.resolve function:

- If the value is a native Promise, return it directly without creating a new instance. We can check for this case using `value instanceof Promise`.
- If the value is not a thenable, return a promise that's fulfilled with the value. We can use a Promise constructor that calls resolve with the value.
- If the value is a thenable, the `then()` method will be called. The `then()` method has the same signature as a Promise constructor.
The first two cases are straightforward. Let's talk a bit about the last case. Since the Promise constructor and then() has the same parameters, one might be tempted to pass value.then to a new Promise e.g. `new Promise(value.then)` and call it a day. However, the then() will lose the value of this. Hence we need to pass in value.then.bind(value) instead.

Nested thenables and promises should also be flattened. This is already handled by the resolve callbacks of a Promise constructor, so we don't have to manually attempt to flatten.


### `Promise.reject`
> The `Promise.reject()` static method returns a `Promise` object that is rejected with a given reason.
Unlike `Promise.resolve()`, `Promise.reject()` always wraps reason in a new `Promise` object, even when `reason` is already a `Promise`.

Implement the `Promise.reject()` function as `promiseReject`. You can ignore the case where this is referenced within the implemented function.

### Example
```js
try {
  await promiseReject('Mayday!');
} catch (err) {
  console.log(err); // Mayday!
}
```

### Solution
`Promise.reject` returns a Promise that is rejected. It is essentially a shorthand for `new Promise((resolve, reject) => reject(reason))`.
The only thing we need to note is to wrap the `reason` value in a new `Promise` object even when reason is already a `Promise`.
```js
export default function promiseReject(reason) {
  return new Promise((res, rej) => rej(reason));
}
```
