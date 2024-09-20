---
outline: deep
---
## Generate all permutations of given list
The basic intuition is that, for each position i of the generated permutation, we take one from the remaining candidate pool

We're making n-i decisions, therefore making n-i recursive calls

We can use a for loop inside backtrack function to achieve this

There're two methods to generate all permutations of a given list
### Swap

```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        """
        Time Complexity: O(N*N!) | Space: O(N)
        It takes O(N) to add one permutation using `path.copy()`, and there're O(N!) permutations in total

        Space is O(N) because path and max recursion stack takes O(N) space
        """
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

### Extending the result of subproblem
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


## [Variant]: Generate all distinct permutations when the list contains duplicate
Since we only need permutations of the array, the actual "content" does not change, we could find each permutation by swapping the elements in the array.

The idea is for each recursion level, swap the current element at 1st index with each element that comes after it (including itself). For example, `permute([1,2,3])`:

At recursion level 0, current element at 1st index is 1, there are 3 possibilities: `[1] + permute([2,3])`, `[2] + permute[1,3]`, `[3] + permute[2,1]`.

Take `2+permute([1,3])` as the example at recursion level 0. At recursion level 1, current elemenet at 1st index is 1, there are 2 possibilities: `[2,1] + permute([3])`, `[2,3] + permute([1])`.

... and so on.

Let's look at another example, `permute([1,2,3,4,1])`.

At recursion level 0, we have `[1] + permute([2,3,4,1]`, `[2] + permute([1,3,4,1])`, `[3] + permute([2,1,4,1])`, `[4] + permute([2,3,1,1])`, `[1] + permute([2,3,4,1])`.

1 has already been at the 1st index of current recursion level, so the last possibility is redundant. We can use a hash set to mark which elements have been at the 1st index of current recursion level, so that if we meet the element again, we can just skip it.
```python
from collections import Counter
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []
        n = len(nums)
        # nums.sort()
        # used = set()

        def backtrack(content, i):
            """
            Build ith position of the path
            """
            if i == n:
                res.append(content.copy())
                return

            appeared = set()

            for j in range(i, n):
                if content[j] in appeared:
                    continue
                else:
                    appeared.add(content[j])

                content[i], content[j] = content[j], content[i]
                backtrack(content, i+1)
                content[i], content[j] = content[j], content[i]

        backtrack(nums.copy(), 0)
        return res
```

## Generate permutation of 1..N using list concat:
```python
def generate_permutations(n):
    result = []

    def backtrack(current_perm, remaining_nums):
        # Base case: when the permutation is complete
        if len(current_perm) == n:
            result.append(current_perm[:])
            return

        # Try each remaining number in the next position
        for i in range(len(remaining_nums)):
            # Add the number to the current permutation
            current_perm.append(remaining_nums[i])

            # Recurse with the remaining numbers
            backtrack(current_perm, remaining_nums[:i] + remaining_nums[i+1:])

            # Backtrack: remove the number and try the next one
            current_perm.pop()

    # Start backtracking with an empty permutation and the list of numbers from 1 to n
    backtrack([], list(range(1, n + 1)))
    return result
```
