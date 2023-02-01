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

    findParent(node) {
        if (!node) {
            return;
        }
        else if ((node.left && !node.right) || (!node.left && node.right)) {
            console.log("parent :" + node.value);
            this.delete(node.value);
        }
        this.findParent(node.left);
        this.findParent(node.right);
    }

    delete(value) {
        this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (!node) {
            return node;
        }
        if (node.value > value) {
            node.left = this.deleteNode(node.left, value);
        }
        else if (node.value < value) {
            node.right = this.deleteNode(node.right, value);
        }
        else {
            // delete leaf node

            if (!node.left && !node.right) {
                node = null;
                return;
            }
            //delete single child

            if (!node.left) {
                return node = node.right;
            }
            else if (!node.right) {
                return node = node.left;
            }

            node.value = this.minValue(node.right);
            node.right = this.deleteNode(node.right, node.value);
        }
        return node;
    }
 
    height(node) {
        if (!node) {return 0;}
        else {
            let lheight = this.height(node.left);
            let rheight = this.height(node.right);

            if(lheight > rheight) {
                return lheight + 1;
            }
            else {
                return rheight + 1;
            }
        }
    }

    printLevelorder() {
        let h = this.height(this.root);
        for (let i = 1; i <= h; i++) {
            this.printCurrentLevel(this.root, i);
        }
    }

    printCurrentLevel(node, level) {
        if (!node) {
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

}

let tree = new BinarySearchTree();

let data = 1;
let input = require("readline-sync");
while (data >= 0) {
    data = Number.parseInt(input.question('Enter Data :'));
    if (data < 0) {break;}
    tree.insert(data);
}

tree.findParent(tree.root);

tree.printLevelorder();