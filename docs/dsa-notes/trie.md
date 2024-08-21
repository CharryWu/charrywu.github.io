---
link: deep
---
A prefix tree (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

Implement the `PrefixTree` class:

- `PrefixTree()` Initializes the prefix tree object.
- `void insert(String word)` Inserts the string `word` into the prefix tree.
- `boolean search(String word)` Returns `true` if the string word is in the prefix tree (i.e., was inserted before), and false otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.


## Trie Template (lowercase english characters)
The Nodes are slotted into right position of the children of its parent node, which represents the previous character.

Note: all ending node is going to have an empty `children` array, and its `end` flag is set to `True`.
```python
class PrefixTreeNode:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:

    def __init__(self):
        self.root = PrefixTreeNode()

    def insert(self, word: str) -> None:
        curr = self.root
        for c in word:
            if c not in curr.children:
                curr.children[c] = PrefixTreeNode()
            curr = curr.children[c]
        curr.end = True

    def search(self, word: str) -> bool:
        curr = self.root
        for c in word:
            if c not in curr.children:
                return False
            curr = curr.children[c]
        return curr.end

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for c in prefix:
            if c not in curr.children:
                return False
            curr = curr.children[c]
        return True
```

## Trie w/ Recursive Search
```python
class Node:
    def __init__(self):
        self.children = [None] * 26
        self.end = False

class WordDictionary:

    def __init__(self):
        self.root = Node()

    def addWord(self, word: str) -> None:
        curr = self.root
        for c in word:
            i = ord(c) - ord('a')
            if not curr.children[i]:
                curr.children[i] = Node()
            curr = curr.children[i]
        curr.end = True

    def searchAt(self, startNode, word) -> bool:
        if not word:
            return startNode.end
        topc = word[0]
        if topc == '.':
            for child in startNode.children:
                if child and self.searchAt(child, word[1:]):
                    return True
        else:
            idx = ord(topc) - ord('a')
            if not startNode.children[idx]:
                return False
            return self.searchAt(startNode.children[idx], word[1:])
        return False

    def search(self, word: str) -> bool:
        if word == "":
            return self.root.end
        return self.searchAt(self.root, word)
```

## Word search ii
```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

    def addWord(self, word):
        cur = self
        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.end = True

DIR = {(0, -1), (0, 1), (1, 0), (-1, 0)}
class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = TrieNode()
        for w in words:
            root.addWord(w)

        m, n = len(board), len(board[0])
        res, visited = set(), set()

        def dfs(r, c, node, word):
            if board[r][c] not in node.children or (r, c) in visited:
                return

            visited.add((r, c))
            node = node.children[board[r][c]]
            word += board[r][c]
            if node.end:
                res.add(word)

            for (dx, dy) in DIR:
                nx, ny = r+dx, c+dy
                if 0 <= nx < m and 0 <= ny < n:
                    dfs(nx, ny, node, word)
            visited.remove((r, c))

        for r in range(m):
            for c in range(n):
                dfs(r, c, root, "")

        return list(res)
```
