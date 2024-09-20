Here's the Markdown for the problems categorized under the **Tree or Graph Traversals** topic:

### Tree or Graph Traversals

## 314. Binary Tree Vertical Order Traversal
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

from collections import defaultdict, deque

class Solution:
    """
    Use bfs w/ deque to achieve O(n) time complexity

    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    def verticalOrder(self, root: TreeNode) -> List[List[int]]:
        """
        Group nodes by column, while maintaining row order inside each group
        Use bfs w/ deque that guarantees row order across each visit, and a hashmap to store all column groups
        """
        columns = defaultdict(list)
        queue = deque([(root, 0)])

        while queue:
            node, column = queue.popleft()
            if node:
                columns[column].append(node.val)
                queue.append((node.left, column-1))
                queue.append((node.right, column+1))

        res = []
        for col in sorted(list(columns.keys())):
            res.append(columns[col])
        return res
```

## 938. Range Sum of BST
```python
class Solution:
    """
    Time O(n) | Space O(h)
    """
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        res = 0
        def dfs(node):
            nonlocal res
            if not node:
                return
            if low <= node.val <= high:
                res += node.val
                dfs(node.left)
                dfs(node.right)
            elif node.val < low:
                dfs(node.right)
            else:
                dfs(node.left)
        dfs(root)
        return res
```

## 129. Sum Root to Leaf Numbers
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        res = 0
        def dfs(node, parentVal):
            nonlocal res
            if not node.left and not node.right:
                res += (parentVal+node.val)
                return

            if node.left:
                dfs(node.left, (parentVal+node.val)*10)
            if node.right:
                dfs(node.right, (parentVal+node.val)*10)
        dfs(root, 0)
        return res
```

## 236. Lowest Common Ancestor of a Binary Tree
```python
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        """
        情况 1，如果 p 和 q 都在以 root 为根的树中，函数返回的即使 p 和 q 的最近公共祖先节点。

        情况 2，那如果 p 和 q 都不在以 root 为根的树中怎么办呢？函数理所当然地返回 null 呗。

        情况 3，那如果 p 和 q 只有一个存在于 root 为根的树中呢？函数就会返回那个节点。
        """
        if not root:
            return None
        if root == p or root == q:
            return root

        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)

        # 情况 1，如果 p 和 q 都在以 root 为根的树中，那么 left 和 right 一定分别是 p 和 q（从 base case 看出来的）。
        if left and right: # 左右子树存在 p 和 q
            return root
        # 情况 2，左右子树都找不到 p 或 q，直接返回 null 表示当前子树不符合题目条件
        if not left and not right:
            return None
        # 情况 3，如果 p 和 q 只有一个存在于 root 为根的树中，函数返回该节点。
        # Edge case: 如果 p 是 q 的父节点，或 q 是 p 父节点，那么最后返回的也是该父节点
        return left if left else right
```

## 116. Populating Next Right Pointers in Each Node II
```python
class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        def traverse(left, right):
            if not left or not right:
                return
            left.next = right
            traverse(left.left, left.right)
            traverse(left.right, right.left)
            traverse(right.left, right.right)
        if root:
            traverse(root.left, root.right)
        return root
```

## 117. Populating Next Right Pointers in Each Node II
```python
class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return None
        queue = deque([root])
        while queue:
            sz = len(queue)
            for i in range(sz):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

                if i < sz-1: # don't set the next pointer of last node of the same level,
                    # otherwise it will point to first node of next level
                    node.next = queue[0]
        return root
```

## 543. Diameter of Binary Tree
```python
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = 0

        def dfs(node):
            """
            DFS returns the depth of the tree from current root
            Each recursive call updates res with two-way path passing root node
            Leaf node: 0, None node: -1, so adding one to none equals zero (don't contribute to path length)
            """
            nonlocal res
            if not node:
                return -1

            left, right = dfs(node.left), dfs(node.right)
            res = max(res, 2+left+right) # maxlen duo-way path passing current node

            return 1 + max(left, right) # maxlen single-way path from deepest leave up to current node

        dfs(root)
        return res
```

Each of these solutions utilizes tree or graph traversal techniques, such as depth-first search (DFS) or breadth-first search (BFS), to solve problems related to tree structures or node connectivity.
