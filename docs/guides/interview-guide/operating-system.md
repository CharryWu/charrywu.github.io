# Interview Guide - OS related questions
## Tail Recursion vs. Regular Recursion
> [Stack Overflow: What is tail recursion?](https://stackoverflow.com/a/33930)


- In traditional recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result.
    - You don't get the result of your calculation until you have returned from every recursive call.

- In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of `(return (recursive-function params))`.
    - The return value of any given recursive step is the same as the return value of the next recursive call.

The consequence of this is that once you are ready to perform your next recursive step, you **don't** need the current stack frame any more. This allows for some optimization. In fact, with an appropriately written compiler, you should never have a stack overflow snicker with a tail recursive call. Simply reuse the current stack frame for the next recursive step. I'm pretty sure Lisp does this.
