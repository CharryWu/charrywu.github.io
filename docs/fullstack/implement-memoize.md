---
link: deep
---
## Memoize
Implement a function `memoize(func)` that takes in a function parameter `func` and returns a memoized version of the function. You may assume that `func` only accepts a string or number as its only argument.

## Data Structure Used
Cache lookups have to be fast, ideally with a O(1) time complexity. In JavaScript, objects and `Maps` are able to serve the purpose of a fast lookup for a key and a corresponding value. However, we cannot use JavaScript objects here because it only allows string keys, numbers will be converted into strings when used as keys of the object. However, we can use a `Map`, which differentiates between string keys and number keys of the same value (e.g. 1 vs '1').



## Solution (using regular object)
```js
/**
 * @param {Function} func
 * @returns Function
 */

function encode(arglist) {
  return arglist.map(x => typeof x === 'number' ? `#${x}` : x).join(',');
}
export default function memoize(func) {
  let cache = {};
  return function(...args) {
    const key = encode(args);
    if (key in cache) return cache[key];
    let context = this;
    cache[key] = func.apply(context, args);
    return cache[key];
  }
}
```

## Solution (using `Map`)
```js
/**
 * @param {Function} func
 * @returns Function
 */
/**
 * @param {Function} func
 * @returns Function
 */
export default function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);

    return result;
  };
}
```
