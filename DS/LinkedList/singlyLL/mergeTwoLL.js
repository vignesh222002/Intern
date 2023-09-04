class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    push(value) {
        let node = new Node(value);
        if (this.head == null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    merge(listy) {
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = listy.head;
    }

    display() {
        let temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

let list1 = new List();
let list2 = new List();

list1.push(5);
list1.push(4);
list1.push(3);
list1.push(2);
list1.push(1);

list2.push(0);
list2.push(9);
list2.push(8);
list2.push(7);
list2.push(6);

list1.merge(list2);

list1.display();

