---
outline: deep
---
## Generate subsets for given list
Similar to permutation, for each position we're only making two choices: whether to include nums[i] or not include
Therefore, we're making two recursive calls to backtrack funciton
```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        res = []

        def backtrack(path, i):
            if i == n:
                res.append(path.copy())
                return

            path.append(nums[i])
            backtrack(path, i+1)
            path.pop()
            backtrack(path, i+1)

        backtrack([], 0)
        return res
```

## [Variant]: Generate If the generated subset contains duplicate, how to remove duplicate?

Well, the answer is, we sort the input list, so if there're any duplicates,
we can easily skip the contiguous region and only select the first one to be considered

```python
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = []
        n = len(nums)
        nums.sort()

        def backtrack(path, i):
            if i == n:
                res.append(path.copy())
                return

            # include nums[i]
            path.append(nums[i])
            backtrack(path, i+1)
            path.pop()

            # don't include nums[i], before recursive call we need to
            # skip all decision to include duplicate nums[i]
            # Since we've included already
            while i < n-1 and nums[i] == nums[i+1]:
                i += 1

            backtrack(path, i+1)
        backtrack([], 0)
        return res
```
