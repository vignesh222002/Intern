class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
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

    inOrder(node) {
        if (node != null) {
            this.inOrder(node.right);
            console.log(node.data);
            this.inOrder(node.left);
        }
    }
}

let tree = new BinarySearchTree();

tree.insert(1);
tree.insert(2);
tree.insert(16);
tree.insert(15);
tree.insert(27);
tree.insert(4);
tree.insert(34);
tree.insert(32);
tree.insert(80);

tree.inOrder(tree.root);