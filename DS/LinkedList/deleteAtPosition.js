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

    enQueue(value) {
        let node = new Node(value);
        if (this.head == null) {
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

    delete(pos) {
        let temp = this.head;
        if (this.head  == null) {
            return;
        }
        else if (pos == 0) {
            this.head = temp.next;
            temp.next = null;
        }
        else {
            let position = 1;
            while (temp != null) {
                if (pos == position) {
                    let next = temp.next.next;
                    temp.next.next = null;
                    temp.next = next;
                }
                temp = temp.next;
                position++;
            }
        }
    }

    display() {
        let temp = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let list = new List();

list.enQueue(1);
list.enQueue(2);
list.enQueue(3);
list.enQueue(4);
list.enQueue(5);
list.enQueue(6);

list.delete(5);

list.display();