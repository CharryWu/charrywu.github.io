Here is the Markdown for the problems categorized under the **Binary Search** topic:

### Binary Search

## 162. Find Peak Element
```python
class Solution:
    """
    O(log n) time complexity
    O(1) space complexity
    """
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 2 or nums[0] > nums[1]:
            return 0
        if nums[n-1] > nums[n-2]:
            return n-1

        left, right = 1, len(nums)-2
        while left <= right:
            mid = (left+right)//2
            if nums[mid-1] < nums[mid] and nums[mid] > nums[mid+1]:
                return mid
            elif nums[mid] < nums[mid+1]:
                left = mid+1
            else:
                right = mid-1
        return -1
```

## 528. Random Pick with Weight
```python
import random
class Solution:
    """
    Use prefix sum array + binary search to achieve log(n) time
    O(n) time complexity to prepare prefix sum, O(log n) time complexity to search

    Time O(n) | Space O(n)
    """
    def __init__(self, w: List[int]):
        self.prefix = []
        total = 0
        for weight in w:
            total += weight
            self.prefix.append(total)
        self.total = total

    def pickIndex(self):
        rand = random.random()
        cutoff = rand * self.total
        # find first element greater than or equal to cutoff
        low, high = 0, len(self.prefix)
        while low < high:
            mid = (low + high) // 2
            if cutoff > self.prefix[mid]:
                low = mid + 1
            else:
                high = mid
        return low
```

## 658. Find K Closest Elements
```python
class Solution:
    """
    O(log n + k) time complexity
    O(1) space complexity
    """
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        n = len(arr)
        left, right = 0, n
        while left < right:
            mid = (left+right) // 2
            if x <= arr[mid]:
                right = mid
            else:
                left = mid+1
        center = left
        if center == n or (arr[center] != x and center > 0 and abs(x-arr[center-1]) < abs(x-arr[center])):
            center -= 1
        left, right = center, center # [left, right), right exclusive
        for i in range(k):
            if left == 0:
                right += 1
            elif right >= n:
                left -= 1
            elif x-arr[left-1] < arr[right]-x:
                left -= 1
            elif x-arr[left-1] > arr[right]-x:
                right += 1
            else:
                left -= 1
        return arr[left:right]
```

Each of these solutions applies binary search techniques to efficiently solve the respective problems.
