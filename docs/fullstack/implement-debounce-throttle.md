---
link: deep
---
## Debounce
Implement a `debounce` function which accepts a callback function and a `wait` duration. Calling `debounce()` returns a function which has debounced invocations of the callback function following the behavior described above.

## Debounce Solution Code
```js
/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer = null;
  return function (...args) { // don't return arrow function heref
    const context = this;
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }
    timer = window.setTimeout(function() {
      func.apply(context, args);
    }, wait);
  }
}
```
## Explanation
- It invokes the callback function only after a delay of `wait`. This is performed using `setTimeout`. Since we might need to clear the timer if the debounced function is called again while there's a pending invocation, we need to retain a reference to a `timer` ID, which is the returned value of `setTimeout`.
- If the function is called again while there's a pending invocation, we should cancel existing timers and schedule a new timer for the delayed invocation with the full `wait` duration. We can cancel the timer via `clearTimeout(timer)`.

- Debounced functions are used like the original functions, so we should forward the value of `this` and function arguments when invoking the original callback functions.
- You may be tempted to use `func(...args)` but this will be lost if callback functions are invoked that way. Hence we have use `Function.prototype.apply()`/`Function.prototype.call()` which allows us to specify this as the first argument.

`func.apply(thisArg, args)`
`func.call(thisArg, ...args)`

## Throttle
Implement a `debounce` function which accepts a callback function and a `wait` duration. Calling `debounce()` returns a function which has debounced invocations of the callback function following the behavior described above.

## Debounce Solution Code
```js
/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timer = null;
  return function (...args) { // don't return arrow function heref
    const context = this;
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }
    timer = window.setTimeout(function() {
      func.apply(context, args);
    }, wait);
  }
}
```
## Explanation
- It invokes the callback function only after a delay of `wait`. This is performed using `setTimeout`. Since we might need to clear the timer if the debounced function is called again while there's a pending invocation, we need to retain a reference to a `timer` ID, which is the returned value of `setTimeout`.
- If the function is called again while there's a pending invocation, we should cancel existing timers and schedule a new timer for the delayed invocation with the full `wait` duration. We can cancel the timer via `clearTimeout(timer)`.

- Debounced functions are used like the original functions, so we should forward the value of `this` and function arguments when invoking the original callback functions.
- You may be tempted to use `func(...args)` but this will be lost if callback functions are invoked that way. Hence we have use `Function.prototype.apply()`/`Function.prototype.call()` which allows us to specify this as the first argument.

`func.apply(thisArg, args)`

`func.call(thisArg, ...args)`


## Throttle
A throttled function can be in two states: it's either:

- Idle: The throttled function was not invoked in the last `wait` duration. Calling the throttled function will immediately execute the callback function without any need to throttle. After this happens, the function enters the "Active" state.
- Active: The throttled function was invoked within the last `wait` duration. Subsequent calls should not execute the callback function until wait is over.
Given that there's a wait duration before the function can be invoked again, we know that we will need a timer, and `setTimeout` is the first thing that comes to mind. Since there are only two states, we can use a `boolean` variable to model the state.

We can use a boolean variable `shouldThrottle` to model the states.

## Throttle Solution Code
```js
/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function throttle(func, wait) {
  let shouldThrottle = false;
  return function (...args) {
    if (shouldThrottle) return;
    shouldThrottle = true;
    window.setTimeout(function() {
      shouldThrottle = false;
    }, wait);
    func.apply(this, args);
  }
}
```

Invoking the original callback function func has to preserve the reference to this. Therefore:

- Arrow functions cannot be used to declare the inner function due to lexical binding of `this`.
- Invoking the original callback function via `func(...args)` will not forward the correct `this` reference and cannot be used.
Hence we have to use `Function.prototype.apply()`/`Function.prototype.call()` which allows us to specify this as the first argument:

`func.apply(thisArg, args)`

`func.call(thisArg, ...args)`
