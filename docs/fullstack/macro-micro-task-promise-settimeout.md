## What's the output of the following JS code execution?
```js
console.log('Start');

setTimeout(() => {
  console.log('Macrotask completed');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask completed');
});

Promise.resolve().then(() => {
  console.log('Microtask 2 completed');
});
new Promise((res, rej) => {
    console.log('Inside Promise');
})
console.log('End');
```

## Answer
```
Start
Inside Promise
End
Microtask completed
Microtask 2 completed
Macrotask completed
```

- Microtasks (Promise.then, Promise.catch, fetch, MutationObserver, queeuMicrotask) are executed before macrotasks (setTimeout, onClick/onScroll handlers, AJAX Request)
- Note in the above code, the callback passed to `new Promise` constructor is executed synchronously
