class Node {
    constructor(value) {
        this.value = +value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (!node.right) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    ansistor(node, a, b) {
        if (!node) {
            return;
        }
        if ((a < node.value) && (b < node.value)) {
            this.ansistor(node.left, a, b);
        }
        else if ((a > node.value) && (b > node.value)) {
            this.ansistor(node.right, a, b);
        }
        else {
            console.log(node.value);
        }
    }
}

let tree = new BinarySearchTree();

tree.insert(8);
tree.insert(7);
tree.insert(9);
tree.insert(5);
tree.insert(10);
tree.insert(4);
tree.insert(6);
tree.insert(11);
tree.insert(2);
tree.insert(12);
tree.insert(1);
tree.insert(3);

tree.inOrder(tree.root);

tree.ansistor(tree.root, 1, 6);