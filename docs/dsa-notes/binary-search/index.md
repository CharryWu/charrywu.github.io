---
outline: deep
---
# Binary Search Topics

# Binary Search Forms:
## Ordinary search (exact match)
```python
def binary_search_exact(nums, target):
    left, right = 0, len(nums)-1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid-1
    return -1

assert binary_search_exact([1,2,3], 2) == 1
```

## Find first occurrence of element in sorted array (left most match)
### Exact match
```python
def binary_search_left(nums, target):
    left, right = 0, len(nums)-1
    while left <= right:
        mid = (left+right) // 2
        if nums[mid] == target:
            if (mid == 0 or target > nums[mid-1]):
                return mid
            else: # found match, but not the first one, so do don't stop searching
                # shrink right boundary (towards left) to find first occurrence
                right = mid - 1
        elif target > nums[mid]:
            left = mid + 1
        else:
            right = mid - 1
    return -1

assert binary_search_left([1,2,2,2,3], 2) == 1
```
### Alternative (bisect left)
```python
def binary_search_left(nums, target):
    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left
assert binary_search_left([1,2,2,2,3], 2) == 1
```

## Find last occurrence of element in sorted array (right most match)
### Exact match
```python
def binary_search_right(nums, target):
    left, right = 0, len(nums)-1
    while left <= right:
        mid = (left+right) // 2
        if nums[mid] == target:
            if  (mid == len(nums)-1 or nums[mid+1] > target):
                return mid
            else: # found match, but not the last one, so do don't stop searching
                # shrink left boundary (towards right) to find last occurrence
                left = mid + 1
        elif target > nums[mid]:
            left = mid + 1
        else:
            right = mid - 1
    return -1

assert binary_search_right([1,2,2,2,3], 2) == 3
```
### Alternative (bisect right)
```python
def binary_search_right(nums, target):
    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if a[mid] > target:
            right = mid
        else:
            left = mid + 1
    return left
assert binary_search_right([1,2,2,2,3], 2) == 4
```
