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

## Find median of two sorted arrays
You are given two integer arrays `nums1` and `nums2` of size `m` and `n` respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.

Your solution must run in O(log(m+n)) time.

- Binary Search Approach:
    -  aim to partition both arrays such that the left partition contains half of the total elements (rounded down if the total number is odd).
    - We need to ensure that all elements in the left partition are less than or equal to all elements in the right partition.

- Partitioning:
    - Let x be the number of elements in nums1 and y be the number of elements in nums2.
    - We need to find a partition such that the number of elements on the left side is (x + y + 1) // 2 (this ensures that if the total number of elements is odd, the left partition has one more element).

- Finding the Correct Partition:
    - Use binary search to find the correct partition in nums1.
    - For each partition in nums1, calculate the corresponding partition in nums2.

    - Check if the partition is correct by comparing the maximum element on the left side with the minimum element on the right side.
```python
class Solution:
    """
    Find the median of two sorted arrays.

    :param nums1: The first sorted array
    :param nums2: The second sorted array
    :return: The median of two sorted arrays
    """
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Make sure nums2 is the longer array
        if len(nums2) < len(nums1):
            nums1, nums2 = nums2, nums1

        m, n = len(nums1), len(nums2) # m < n
        total = m+n
        half = (m+n) // 2

        # search in nums1 array only
        l, r = 0, m-1
        while True:
            i = (l+r) // 2 # i is index of end of left partition, left has i+1 elements
            j = half - i - 2 # half-i-1 is number of left partitions in nums2, half-i-2 is the index of end of left partition

            # Calculate the value of the elements at the boundary of the two partitions
            left1 = nums1[i] if i >= 0 else float('-inf')
            right1 = nums1[i+1] if i+1 < m else float('inf')
            left2 = nums2[j] if j >= 0 else float('-inf')
            right2 = nums2[j+1] if j+1 < n else float('inf')

            # Check whether the current partition is correct
            if left1 <= right2 and left2 <= right1:
                if total % 2 == 0:
                    # If the total number of elements is even, return the average
                    return (max(left1, left2) + min(right1, right2)) / 2
                else:
                    # If the total number of elements is odd, return the smaller one
                    return min(right1, right2)

            # If the left partition is larger, move the right pointer to the left
            elif left1 > right2:
                r = i-1
            # If the left partition is smaller, move the left pointer to the right
            else:
                l = i+1
```
