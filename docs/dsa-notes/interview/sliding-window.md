Here's the Markdown for the problems categorized under the **Sliding Window** topic:

### Sliding Window

## 1004. Max Consecutive Ones III
```python
class Solution:
    """
    O(n) time complexity
    O(1) space complexity
    """
    def longestOnes(self, nums: List[int], k: int) -> int:
        """
        Find the max length of sliding window that may contain up to k zeros
        """
        res = 0
        zero_count = 0
        i = 0
        for j, num in enumerate(nums):
            # NO NEED TO CHECK num == 1 since it doesn't affect window size
            # if num == 1:
            #     pass # don't use continue here, we still want to update `res`!
            # elif num == 0:
            if num == 0:
                zero_count += 1
                while zero_count > k and i <= j:
                    if nums[i] == 0:
                        zero_count -= 1
                    i += 1

            res = max(res, j-i+1)
        return res
```

## 30. Substring with Concatenation of All Words
```python
class Solution:
    """
    O(n) time complexity
    O(n) space complexity
    """
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        """
        Let wordlen = len(words[0])
        Time O(len(s) * wordlen)
        Use two hashmaps + two pointers
        - `need` one hashmap to count all frequencies of each word in words
        - `window` one to count current each substring's frequency in current window s[left:left+wordlen*len(words)]
        - `matched_substrs` count how many words in window has been matched

        We consider all such windows starting from 0, 1, 2, 3, ... wordlen-1, each time moving left/right pointer by wordlen.
        This problem effectively is a combination of wordlen sliding window problems.
         i  ---> i+w ---> i+2w ----> i+3w ----> i+4w
         (i+1)  ---> (i+1)+w ---> (i+1)+2w ----> (i+1)+3w ----> (i+1)+4w
         (i+2)  ---> (i+2)+w ---> (i+2)+2w ----> (i+2)+3w ----> (i+2)+4w
         (i+3)  ---> (i+3)+w ---> (i+3)+2w ----> (i+3)+3w ----> (i+3)+4w

        If there's a mismatch at right pointer, we move left pointer to right of right pointer because
        any window that includes the mismatch is invalid window. Also we need to reset counter to zero

        If advancing right pointer causes excess of substring in current window, we shrink the window size by wordlen and
        update substring count in `window` hashmap accordingly
        """
        need = Counter(words) # substr => frequency in `words`
        res = []
        wordlen = len(words[0])

        for k in range(wordlen):
            window = Counter() # window substr => frequency in s[left:right], right == i + wordlen*len(words)
            left = k
            matched_substrs = 0 # sum of all frequencies in `window`. matched_substrs == sum(window.values())
            for right in range(left, len(s), wordlen):
                if right + wordlen > len(s): # out of bounds, cannot form window
                    break
                nextsubstr = s[right:right+wordlen]
                if nextsubstr in need: # matched
                    window[nextsubstr] += 1
                    matched_substrs += 1
                    while window[nextsubstr] > need[nextsubstr]: # matched, but excess, need move left pointer till no excess
                        oldsubstr = s[left:left+wordlen]
                        window[oldsubstr] -= 1
                        matched_substrs -= 1
                        left += wordlen
                    if matched_substrs == len(words): # yay! we found a permutation of words
                        res.append(left)
                        window[s[left:left+wordlen]] -= 1
                        matched_substrs -= 1
                        left += wordlen
                else: # mismatch, reset counter, and move left
                    window.clear()
                    matched_substrs = 0
                    left = right + wordlen

        return res
```

## 76. Minimum Window Substring
```python
from collections import Counter
class Solution:
    """
    O(n) time complexity
    O(1) space complexity
    """
    def minWindow(self, s: str, t: str) -> str:
        m, n = len(s), len(t)
        if n > m:
            return ""
        window, need = Counter(), Counter(t)
        res = ""
        i = 0
        for j, c in enumerate(s):
            window[c] += 1
            while i <= j and all(window[c] >= need[c] for c in need):
                if j-i+1 < len(res) or res == "":
                    res = s[i:j+1]
                window[s[i]] -= 1
                i += 1
        return res
```

