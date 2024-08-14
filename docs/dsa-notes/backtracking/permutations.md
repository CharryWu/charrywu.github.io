There're two methods to generate all permutations of a given list
## Swap

```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        n = len(nums)
        def backtrack(path, i):
            if i == n:
                res.append(path.copy())
                return

            for j in range(i, n):
                nums[i], nums[j] = nums[j], nums[i]
                path.append(nums[i])
                backtrack(path, i+1)
                path.pop()
                nums[i], nums[j] = nums[j], nums[i]

        backtrack([], 0)
        return res
```
Inside the `backtrack` method, we're looping over all `j`s in `range(i, n)`. Why this range?
- Because each recursive call we're building the `path[i]`.
- `nums[i]..nums[n-1]` are elements of the candidate pool that haven't been considered
- Therefore, by using `nums[i], nums[j] = nums[j], nums[i]` we can easily select `nums[j]` from candidate pool, put it in current `i`th position to continue recursive call path. By using `nums[i], nums[j] = nums[j], nums[i]` again we restore nums array to original state for consideration of next `j` element in `nums[i]..nums[n-1]`.

#### Example: Given nums = [5,6,7,8],
- Precondition: we 're currently at `i=1`th position, `path[0] = 5`, we're doing `backtrack([5], 1)`
- Candidate pool = Remaining of list = `nums[1..3] = [6,7,8]`
- `j=1`, `swap(nums[i], nums[j]) = swap(nums[1], nums[1])`. We select 6 from array as `path[1]=6`, the recursive call is `backtrack([5,6], 2)`
- After recursive call, we do the cleanup, pop path and swap back
- `j=2`, `swap(nums[i], nums[j]) = swap(nums[1], nums[2])`. We select 7 from array as `path[1]=7`, the recursive call is `backtrack([5,7], 2)`
- After recursive call, we do the cleanup, pop path and swap back
- `j=3`, `swap(nums[i], nums[j]) = swap(nums[1], nums[3])`. We select 8 from array as `path[1]=8`, the recursive call is `backtrack([5,8], 2)`
- After recursive call, we do the cleanup, pop path and swap back
- All candidates have been considered, we exit the `backtrack([5], 1)`
---
- We consider `nums[1]` as first element of the `path` array, and do `backtrack([6], 1)`
- Repeat above steps for `backtrack([6], 1)`, `backtrack([7], 1)`, `backtrack([8], 1)`

## Extending the result of subproblem
```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # Time complexity: n! * n^2, we have n! permuntations,
        # each permutation takes n^2 operations to create (insert n elements to n positions)
        # Space complexity: n! * n, we have n! permuntations, each permutation has length n
        if len(nums) == 0:
            return [[]]
        res = []
        perms = self.permute(nums[1:])
        # add nums[0] to every position of generated permutations

        for p in perms:
            for i in range(len(p)+1): # could insert at the end of permutation
                pc = p.copy()
                pc.insert(i, nums[0])
                res.append(pc)

        return res
```
The intuition of this algorithm is, each recursive call takes out the head element of current list, and add it to every position of the built permutation generated from the remaining list

#### Example: Given nums = [5,6,7,8],
We're currently doing `self.permute([5,6,7,8])`.
- We take out `5` from beginning of `nums`, call `self.permute([6,7,8])`.
- We yield `perms = [[6,7,8],[6,8,7],[7,6,8],[7,8,6],[8,6,7],[8,7,6]]`
- For each generated permutation, we insert 5 into all possible locations
    - Insert `5` into all locations of `[6,7,8]` gives `[5,6,7,8]`, `[6,5,7,8]`, `[6,7,5,8]`, `[6,7,8,5]`. Note that both front and back positions of the generated permutations are considered, therefore the loop condition is `range(len(p)+1)`
- Add all permutations after insert to `res`, and return `res`
