class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length++
    }

    pop() {
        if (!this.head) return null
        else if (this.head === this.tail) {
            this.head = null
            this.tail = null
        }
        else {
            let temp = this.head
            this.head = temp.next
            temp.next = null
        }
    }

    peak() {
        console.log(this.head.data)
    }

    display() {
        let temp = this.head
        while (temp) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}

let stack = new List()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

stack.pop()
stack.pop()

stack.display()