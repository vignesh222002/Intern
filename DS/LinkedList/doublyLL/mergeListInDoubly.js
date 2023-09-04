class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    insertNode(data) {
        let node = new Node(data)

        if (!this.head && !this.tail) {
            this.head = node
            this.tail = node
            this.length++
        }

        else {
            let temp = this.tail
            temp.next = node
            node.prev = temp
            this.tail = node
            this.length++
        }
    }

    merge(newList) {
        if (!this.head && this.tail) {
            this.head = newList.head
            this.tail = newList.tail
            return
        }
        else {
            this.tail.next = newList.head
            newList.head.prev = this.tail
            this.tail = newList.tail

            this.length += newList.length
        }
    }

    display() {
        console.log("Length", this.length)
        let temp = this.head
        while(temp) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}

let list1 = new List()
list1.insertNode(1)
list1.insertNode(2)
list1.insertNode(3)
list1.insertNode(4)
list1.insertNode(5)

let list2 = new List()
list2.insertNode(6)
list2.insertNode(7)
list2.insertNode(8)
list2.insertNode(9)
list2.insertNode(0)

list1.merge(list2)

list1.display()
