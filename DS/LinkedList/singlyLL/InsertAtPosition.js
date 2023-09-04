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

    insert(value, pos) {
        let node = new Node(value);
        if (this.head == null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            let position = 0;
            while (temp.next != null) {
                if (position == pos) {
                    node.next = temp.next;
                    temp.next = node;
                }
                temp = temp.next;
                position++;
            }
        }
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

    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let list = new List();

list.push(6);
list.push(4);
list.push(3);
list.push(2);
list.push(1);
list.insert(5, 3);



list.display();
