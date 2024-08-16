---
outline: deep
---
## Monotonic Stack
A monotonic stack is a special type of stack that maintains a monotonic (either strictly increasing or strictly decreasing) order of elements. This data structure is particularly useful for solving problems that involve finding next greater/smaller elements, or previous greater/smaller elements in an array or sequence. Here are some types of LeetCode problems that can be efficiently solved using a monotonic stack:

### Increasing monotonic stack template
```python
def increasing_monotonic_stack(nums):
    stack = []  # Initialize an empty stack
    result = []  # Initialize an empty list to store the result

    for num in nums:
        # While the stack is not empty and the top element is greater than or equal to the current number
        while stack and stack[-1] >= num: # stack[-1] >= num is a violation of increasing trend, need to pop until stack[-1] < num
            stack.pop()  # Pop elements from the stack

        # TODO: Custom logic updating result

        stack.append(num)  # Push the current number onto the stack

    return result
```
### Questions that can be solved using monotonic stack
1. **Next Greater Element**:
   - Problems where you need to find the next element in an array that is greater than the current element.
   - Example: "Next Greater Element I" (LeetCode #496), "Daily Temperatures" (LeetCode #739).

2. **Next Smaller Element**:
   - Similar to the next greater element but finding the next smaller element.
   - Example: Custom problem statement, but similar to next greater element problems but with a different condition.

3. **Previous Greater Element**:
   - Finding the previous element in an array that is greater than the current element.
   - Example: Custom problem statement, but similar to next greater element problems but in the reverse direction.

4. **Previous Smaller Element**:
   - Finding the previous element in an array that is smaller than the current element.
   - Example: Custom problem statement, but similar to next greater element problems but with a different condition and in the reverse direction.

5. **Largest Rectangle in Histogram**:
   - Finding the largest rectangle that can be formed in a histogram where the bars have different heights.
   - Example: "Largest Rectangle in Histogram" (LeetCode #84).

6. **Maximal Rectangle**:
   - Extending the largest rectangle in a histogram to a 2D matrix to find the largest rectangle of '1's.
   - Example: "Maximal Rectangle" (LeetCode #85).

7. **Stock Span Problem**:
   - Finding the span of a stock's price for each day, which is the number of consecutive days just before the current day where the price was less than or equal to today's price.
   - Example: "Online Stock Span" (LeetCode #901).

8. **Asteroid Collision**:
   - Simulating the collision of asteroids moving in different directions and determining the final state of the asteroids.
   - Example: "Asteroid Collision" (LeetCode #735).

Using a monotonic stack can significantly reduce the time complexity of these problems from O(n^2) to O(n), making it a very efficient approach for such scenarios.

### Car fleet (increasing monotonic stack)
```python
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        """
        Build a stack of car arrival times
        First sort the position from closest to target to furthest, so can detect collision
        in linear one-pass loop
        Then build stack, if the arrival time of new car is lower than stack end car, but since it's farther away
        Then we know new car is moving too fast and can collide with stack end car before destination
        If the arrival time of new car is greater than stack end car, but since it's farther away
        Then we know new car is NOT going to collide with stack end car before destination, we can safely append it to make itself a car fleet
        """
        pairs = list(zip(position, speed))
        pairs.sort(reverse=True) # sort all cars by position, so we can tell if there's intersect or not
        stack = []

        for p, s in pairs:
            curArrivalTime = (target-p)/s
            # if curArrivalTime <= stack top time, the car (p,s) is moving too fast
            # and is going to intersect stack[-1] before reaching target
            # if curArrivalTime > stack top time, the car (p,s) is moving too slow
            # and is NOT going to intersect, therefore making its own car fleet
            if len(stack) == 0 or (len(stack) > 0 and curArrivalTime > stack[-1]):
                stack.append(curArrivalTime) # push arrival time
        # stack is stictly increasing arrival times of individual car fleets
        # its length is # of car fleets
        return len(stack)
```

### Daily Temperatures (decreasing monotonic stack)
```python
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        res = [0] * len(temperatures)
        for i, t in enumerate(temperatures):
            while stack and stack[-1][0] < t:
                stackT, stackI = stack.pop()
                res[stackI] = i - stackI
            stack.append((t, i))
        return res
```


### Largest Rectangle In Histogram
```python
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # build monotonic stack of increasing heights from input. If encounter a smaller height
        # remove all most recent added higher heights until stack top is smaller than new height
        res = 0
        stack = [] # height, index

        # PRECONDITION: all max areas before i have been computed and considered
        # POSTCONDITION: compute max area with current i as right boundary
        for i, h in enumerate(heights):
            start = i
            while stack and h < stack[-1][0]:
                stackH, stackI = stack.pop()
                # max area boundary [stackI, i-1], inclusive. Width is i-stackI
                res = max(res, (i-stackI) * stackH)
                start = stackI # if new h < height popped (stackH), max area bounded by new h can extend backwards all the way to stackI
            stack.append((h, start))

        for h, i in stack:
            res = max(res, h*(len(heights)-i))
        return res
```
