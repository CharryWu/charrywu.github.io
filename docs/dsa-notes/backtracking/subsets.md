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
