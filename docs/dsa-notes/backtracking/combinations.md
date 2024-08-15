---
outline: deep
---
## Find all combinations of fixed length `k` from `1..n`
```python
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res = []
        def backtrack(start, path):
            """
            Diff from permutation: loop doesn't exchange the position of
            not from begin of array
            """
            if len(path) == k:
                res.append(path.copy())

            for i in range(start, n+1):
                path.append(i)
                backtrack(i+1, path)
                path.pop()

        backtrack(1, [])
        return res
```

## Find all combinations (varying length) from `candidates` that sum up to given `target`
```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        n = len(candidates)
        candidates.sort(reverse=True)
        def backtrack(path, i, pathSum):
            if pathSum == target:
                res.append(path.copy())
                return

            if i >= n or pathSum > target:
                return

                # choose to include and not include, not need to use loop
                # include
            path.append(candidates[i])
            backtrack(path, i, pathSum+candidates[i])
            path.pop()
            backtrack(path, i+1, pathSum)

        backtrack([], 0, 0)
        return res
```
