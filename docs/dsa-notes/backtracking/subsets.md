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

Variant: If the subset contains duplicate, how to remove duplicate?

Well, the answer is, we sort the input list, so if there're any duplicates,
we can easily skip the contiguous region and only select the first one to be considered

```python
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        def backtrack(path, i):
            if i == len(nums):
                res.append(path.copy())
                return

            # All path that include nums[i]
            path.append(nums[i])
            backtrack(path, i+1)

            # All path that does not include nums[i]
            path.pop()
            # since array is sorted, skip all duplicates
            while i < len(nums)-1 and nums[i] == nums[i+1]:
                i += 1

            backtrack(path, i+1)
        backtrack(0, [])
        return res
```
