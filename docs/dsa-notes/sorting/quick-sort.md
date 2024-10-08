---
link: deep
---
Quick sort is an efficient, in-place, recursive sorting algorithm that selects a "pivot" element and partitions all other elements into 2 subarrays:

- Elements that are smaller than the pivot are added in 1 subarray that is placed before the pivot.
- Elements that are larger than the pivot are added in 1 subarray that is placed after the pivot.
- The quick sort is then recursively applied to each subarray. and once the subarrays are sorted they are then merged back with the pivot element between them as per above.
## Python implementation
```python
"""
Like Merge Sort, QuickSort is a Divide and Conquer algorithm.
It picks an element as a pivot and partitions the given array around the picked pivot.
There are many different versions of quickSort that pick pivot in different ways.

- Always pick the first element as a pivot.
- Always pick the last element as a pivot (implemented below)
- Pick a random element as a pivot.
- Pick median as the pivot.

The key process in quickSort is a partition(). The target of partitions is,
given an array and an element x of an array as the pivot, put x at its correct
position in a sorted array and put all smaller elements (smaller than x) before x,
and put all greater elements (greater than x) after x.
All this should be done in linear time.
"""

def partition(A, low, high):
    """
    There can be many ways to do partition, following pseudo-code adopts the
    method given in the CLRS book. The logic is simple, we start from the leftmost
    element and keep track of the index of smaller (or equal to) elements as i.

    While traversing, if we find a smaller element, we swap the current element with arr[i].
    Otherwise, we ignore the current element.

    You may view the input array as divided into four regions:
    LOW | HIGH | UNSORTED | PIVOT
    Initially both LOW and HIGH subarray are empty
    Each iteration consider one element from UNSORTED, moving it either to HIGH or LOW
    UNSORTED occupies A[low..high-1], PIVOT always stays at A[high]
    Each loop grows LOW and HIGH by one element per iteration
    """
    # Choose the rightmost element as pivot
    pivot = A[high]
    # Pointer to end of LOW subarray
    i = low-1
    # Traverse through all elements
    # compare each element with pivot
    for j in range(low, high): # j points to end of HIGH subarray. Each iteration consider one element from UNSORTED
        if A[j] <= pivot: # Found smaller than pivot element, move it into LOW
            i += 1 # grow len(LOW) by one, i now points first element of HIGH, which is greater than pivot
            # PRECONDITION: a[i] > pivot, a[j] <= pivot. The relationship that i points to LOW end and j points to HIGH end is broken.
            # POSTCONDITION: Swapping element at i with element at j moves a[i] to HIGH, a[j] to LOW, a[i] < pivot, a[j] > pivot
            A[i], A[j] = A[j], A[i]
        else: # if A[j] > pivot, it automatically goes to HIGH, no need to swap
            continue
    # LOOP POSTCONDITION: j == high-1, A[0..i] < pivot, A[i+1..high-1] >= pivot. j == high-1, pivot == a[high]
    A[i+1], A[high] = A[high], A[i+1] # SWAP POSTCONDITION: A[i+1..high] >= pivot, (all elements >= pivot stay on its right, all elements < pivot stay on left)

    # Return the position of pivot after swapping
    return i+1

def quickSort(A, low, high):
    if low < high:
        # Find pivot element such that
        # element smaller than pivot are on the left
        # element greater than pivot are on the right
        partition_i = partition(A, low, high)
        quickSort(A, low, partition_i-1) # Recursive call on the left of pivot
        quickSort(A, partition_i+1, high) # Recursive call on the right of pivot

A = [10, 7, 8, 9, 1, 5]
quickSort(A, 0, len(A)-1)
print(f'Sorted Array: {A}')
```

## JS Implementation
```js
/**
 * Partitions an array into two parts according to a pivot.
 * @param {Array<number>} arr The array to be sorted.
 * @param {number} lo Starting index of the array to partition
 * @param {number} hi Ending index (inclusive) of the array to partition
 * @return {number} The pivot index that was chosen.
 */
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i+1;
}

function qSort(arr, low, high) {
  if (low < high) {
    let pivot_i = partition(arr, low, high);
    qSort(arr, low, pivot_i-1);
    qSort(arr, pivot_i+1, high);
  }
}
/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function quickSort(arr) {
  qSort(arr, 0, arr.length-1);
  return arr;
}
```


## Python Implementation (Descending)
To adapt the given Quicksort implementation for ascending order to sort in descending order, we need to modify the partition function so that it places elements greater than the pivot to the left and elements less than the pivot to the right. Here's the revised code with comments for clarity:

Note that the below differs from the ascending version only at the comparison (<= vs. >=) in the `partition` function.
```python
def partition_descending(A, low, high):
    """
    Structure: | HIGH | LOW | UNSORTED | PIVOT |
    Partition function for QuickSort in descending order.
    It places elements greater than the pivot to the left and elements less than the pivot to the right.
    """
    # Choose the rightmost element as pivot
    pivot = A[high]
    # Pointer to end of HIGH subarray (elements greater than pivot)
    i = low - 1
    # Traverse through all elements
    # compare each element with pivot
    for j in range(low, high):
        if A[j] >= pivot:  # Found element greater than or equal to pivot, move it into HIGH (which is before LOW)
            i += 1  # grow len(HIGH) by one, i now points to the first element of LOW
            A[i], A[j] = A[j], A[i]  # Swap the elements to place A[j] in the HIGH subarray
    # Place the pivot element in its correct position
    A[i + 1], A[high] = A[high], A[i + 1]
    # Return the position of pivot after swapping
    return i + 1

def quickSort_descending(A, low, high):
    if low < high:
        # Find pivot element such that
        # element greater than pivot are on the left
        # element less than pivot are on the right
        partition_i = partition_descending(A, low, high)
        quickSort_descending(A, low, partition_i - 1)  # Recursive call on the left of pivot
        quickSort_descending(A, partition_i + 1, high)  # Recursive call on the right of pivot
```
