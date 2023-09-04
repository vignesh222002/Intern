class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class list {
    constructor() {
        this.head = null;
    }

    enQueue(value) {
        let node = new Node(value);
        if(this.head == null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while(temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }

    deQueue() {
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

let queue = new list();

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);

queue.deQueue();

queue.display();

queue.peak();