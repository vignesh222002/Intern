class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    push(value) {
        let node = new Node(value);
        if(this.head == null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    pop() {
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
    }

    peak() {
        console.log(this.head.data);
    }

    display() {
        let temp = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let stack = new List();

stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);



stack.display();

