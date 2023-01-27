class Node {
    constructor(value) {
        this.value = value;
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

    height(node) {
        if (!node) {
            return 0;
        }
        else {
            let lheight = this.height(node.left);
            let rheight = this.height(node.right);

            if (lheight > rheight) {
                return (lheight + 1);
            }
            else {
                return (rheight + 1);
            }
        }
    }

    printLevelOrder() {
        let h = this.height(this.root);
        let i;
        for (i = 1; i <= h; i++) {
            this.printCurrentLevel(this.root, i)
        }
    }

    printCurrentLevel(node, level){
        if (node == null) {
            return;
        }
        if (level == 1) {
            console.log(node.value);
            return;
        }
        else if (level > 1) {
            this.printCurrentLevel(node.left, level - 1);
            this.printCurrentLevel(node.right, level - 1);
        }
    
    }

    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

let tree = new BinarySearchTree();

tree.insert(50);
tree.insert(30);
tree.insert(80);
tree.insert(20);
tree.insert(60);
tree.insert(90);
tree.insert(10);
tree.insert(25);
tree.insert(27);

console.log(tree.height(tree.root));
tree.printLevelOrder();