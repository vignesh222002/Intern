class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.sum = 0;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
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

    deleteLeafNode(node, x) {
        if (!node) {
            return;
        }
        node.left = this.deleteLeafNode(node.left, x);
        node.right = this.deleteLeafNode(node.right, x);

        if (node.value == x && !node.left && !node.right) {
            node = null;
        }
        return node;
    }
    
}

let tree = new BinarySearchTree();

let data = 1;
let input = require("readline-sync");
while (data >= 0) {
    data = Number.parseInt(input.question('Enter Data :'));
    if (data < 0) {break;}
    tree.insert(data);
}
tree.inOrder(tree.root);

console.log("abc");

tree.deleteLeafNode(tree.root, 10);

tree.inOrder(tree.root);