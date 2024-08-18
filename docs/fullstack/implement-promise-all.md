
> `Promise.all()` is a method that takes an iterable of elements (usually Promises) as an input, and returns a single `Promise` that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.


Let's implement our own version of `Promise.all()`, a `promiseAll` function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

Solution:
There are a few aspects to this question we need to bear in mind and handle:

1. Promises are meant to be chained, so the function needs to return a Promise.
2. If the input array is empty, the returned Promise resolves with an empty array.
3. The returned Promise contains an array of resolved values in the same order as the input if all of them are fulfilled.
4. The returned Promise rejects immediately if any of the input values are rejected or throw an error.
5. The input array can contain non-Promises.


Since the function needs to return a Promise, we can construct a Promise at the top level of the function and return it. The bulk of the code will be written within the constructor parameter.


We first check if the input array is empty, and resolve with an empty array if so.


We then need to attempt resolving every item in the input array. This can be achieved using Array.prototype.forEach or Array.prototype.map. As the returned values will need to preserve the order of the input array, we create a results array and slot the value in the right place using its index within the input array. To know when all the input array values have been resolved, we keep track of how many unresolved promises there are by initializing a counter of unresolved values and decrementing it whenever a value is resolved. When the counter reaches 0, we can return the results array.


One thing to note here is that because the input array can contain non-Promise values, if we are not await-ing them, we need to wrap each value with Promise.resolve() which allows us to use .then() on each of them and we don't have to differentiate between Promise vs non-Promise values and whether they need to be resolved.s

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
      Promise.resolve(item).then((val) => {
        results[i] = val;
        counter++;
        if (counter === iterable.length) resolve(results);
      }).catch((reason) => reject(reason));
    })
  });
}
```
