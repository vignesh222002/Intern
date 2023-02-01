class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left == null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right == null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    height(node) {
        if (!node) {
            return 0;
        }
        else {
            var lheight = this.height(node.left);
            var rheight = this.height(node.right);

            if (lheight > rheight) {
                return (lheight + 1);
            }
            else {
                return (rheight + 1);
            }
        }
    }
    
}

let tree = new BinarySearchTree();

tree.insert(8);
tree.insert(5);
tree.insert(10);
tree.insert(12);
tree.insert(6);
tree.insert(3);
tree.insert(11);
tree.insert(1);
tree.insert(0);

console.log(tree.height(tree.root));

