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

    enQueue(value) {
        let node = new Node(value);
        if (this.head == null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }

    display() {
        let temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    remove_dup() {
        let temp, curnt, dup;
        temp = this.head;

        while (temp != null & temp.next != null) {
            curnt = temp;

            while(curnt.next) {
                if (temp.value == curnt.next.value) {
                    dup = curnt.next.next;
                    curnt.next.next = null;
                    curnt.next = dup;
                }
                else {
                    curnt = curnt.next;
                }
            }

            temp = temp.next;
        }
    }
}

let list = new List();

list.enQueue(1);
list.enQueue(2);
list.enQueue(1);
list.enQueue(4);
list.enQueue(1);
list.enQueue(1);
list.enQueue(1);
list.enQueue(1);

list.remove_dup();

list.display();