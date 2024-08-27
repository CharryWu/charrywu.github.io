---
link: deep
---
## `Promise.all`
> `Promise.all()` is a method that takes an iterable of elements (usually Promises) as an input, and returns a single `Promise` that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

Let's implement our own version of `Promise.all()`, a `promiseAll` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

### Clarification:
There are a few aspects to this question we need to bear in mind and handle:

1. Promises are meant to be chained, so the function needs to return a Promise.
2. If the input array is empty, the returned Promise resolves with an empty array.
3. The returned Promise contains an array of resolved values in the same order as the input if all of them are fulfilled.
4. The returned Promise rejects immediately if any of the input values are rejected or throw an error.
5. The input array can contain non-Promises.

### Example
```js
// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
```

### Solution (Promise.all)
```js
/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      resolve([]);
      return;
    }
    const results = new Array(iterable.length).fill(null);
    let counter = 0;

    iterable.forEach((item, i) => {
      // NOTE: Here we don't use `new Promise(callback)`
      // because constructor accepts a callback function,
      // While Promise.resolve takes in a single value/promise
      Promise.resolve(item).then((val) => {
        results[i] = val;
        counter++;
        if (counter === iterable.length) resolve(results);
      }).catch((reason) => reject(reason));
    })
  });
}
```
### Explanation
Since the function needs to return a Promise, we can construct a Promise at the top level of the function and return it. The bulk of the code will be written within the constructor parameter.


We first check if the input array is empty, and resolve with an empty array if so.


We then need to attempt resolving every item in the input array. This can be achieved using Array.prototype.forEach or Array.prototype.map. As the returned values will need to preserve the order of the input array, we create a results array and slot the value in the right place using its index within the input array. To know when all the input array values have been resolved, we keep track of how many unresolved promises there are by initializing a counter of unresolved values and decrementing it whenever a value is resolved. When the counter reaches 0, we can return the results array.


One thing to note here is that because the input array can contain non-Promise values, if we are not await-ing them, we need to wrap each value with Promise.resolve() which allows us to use .then() on each of them and we don't have to differentiate between Promise vs non-Promise values and whether they need to be resolved.s

## `Promise.any`
> `Promise.any()` takes an iterable of elements (usually `Promises`). It returns a single promise that resolves as soon as any of the elements in the iterable fulfills, with the value of the fulfilled promise. If no promises in the `iterable` fulfill (if all of the given elements are rejected), then the returned promise is rejected with an `AggregateError`, a new subclass of Error that groups together individual errors.

> If an empty iterable is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an `AggregateError` object whose errors property is an empty array.

Let's implement our own version of `Promise.any()`, a `promiseAny` function, with the difference being the function takes in an array instead of an iterable and `AggregateErrors` returned just have to return an array of error reasons, the message doesn't have to be set. Refer to the AggregateError constructor examples on MDN.

### Solution (Promise.any)
```js
/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
      return;
    }

    let counter = 0;
    const result = Array(iterable.length);

    iterable.forEach((item, i) => {
      Promise.resolve(item).then(
        (val) => resolve(val),
        (reason) => {
          result[i] = reason;
          counter++;
          if (counter === iterable.length) {
            reject(new AggregateError(result));
          }
        }
      );
    });

  });
};
```
### Explanation
If any of the items are fulfilled, we resolve the top-level `Promise` immediately with that value without waiting for any other pending promises.

As we encounter rejections, we need to keep them in an errors array in case all the promises turn out to be rejected. As the returned errors will need to preserve the order of the input array, we create an errors array and slot the value in the right place using its `index` within the input array.

To know when all the input array values are no longer pending, we keep track of how many pending promises there are by initializing a counter of pending values and decrementing it whenever a value is rejected. When the counter reaches 0, we can reject with an `AggregateError` using the `errors`. There is no need to modify the pending counter when a value is resolved because the overall promise will be resolved.

## `Promise.allSettled`
> The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

> However, if and only if an empty iterable is passed as an argument, Promise.allSettled() returns a Promise object that has already been resolved as an empty array.

> For each outcome object, a status string is present. If the status is 'fulfilled', then a value is present. If the status is 'rejected', then a reason is present. The value (or reason) reflects what value each promise was fulfilled (or rejected) with.

Let's implement our own version of `Promise.allSettled()`, a `promiseAllSettled` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

### Example
```js
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

await promiseAllSettled([p0, p1, p2]);
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];
```

### Solution
NOTE: One thing to note here is that because the input array can contain non-Promise values, if we are not await-ing them, we need to wrap each value with `Promise.resolve()` which allows us to use `.then()` on each of them and we don't have to differentiate between `Promise` vs non-Promise values and whether they need to be resolved.
```js
export default function promiseAllSettled(iterable) {
  return new Promise((res, rej) => {
    if (iterable.length === 0) {
      res([]);
      return;
    }
    let counter = 0;
    let result = Array(iterable.length).fill(null);
    iterable.forEach((item, i) => {
      Promise.resolve(item).then((value) => {
        result[i] = { value, status: 'fulfilled' }
        counter++;
        if (counter === iterable.length) res(result);
      }, (reason) => {
        result[i] = { reason, status: 'rejected' }
        counter++;
        if (counter === iterable.length) res(result);
      })
    });
  })
}
```

## `Promise.race`
> The `Promise.race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

> If the iterable passed is empty, the promise returned will be forever pending.

> If the iterable contains one or more non-promise value and/or an already settled promise, then `Promise.race()` will resolve to the first of these values found in the iterable.

Let's implement our own version of `Promise.race()`, a `promiseRace` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!
### Example
```js
const p0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 400);
});

await promiseRace([p0, p1]); // 42

```

### Solution
```js
export default function promiseRace(iterable) {
  return new Promise((res, rej) => {
    if (iterable.length === 0) return;
    iterable.forEach((item) => Promise.resolve(item).then(res, rej));
  })
}
```
