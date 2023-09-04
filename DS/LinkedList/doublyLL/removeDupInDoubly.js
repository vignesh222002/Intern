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

    removeDuplicates() {
        if (!this.head && !this.tail) {
            return
        }
        else {
            let curnt = this.head
            while (curnt && curnt.next) {
                let temp = curnt

                while (temp && temp.next) {
                    if (curnt.data === temp.next.data) {
                        let dup = temp.next.next
                        temp.next = dup
                        if (dup) dup.prev = temp
                    }
                    else {
                        temp = temp.next
                    }
                }

                curnt = curnt.next
            }
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

let list = new List()
list.insertNode(1)
list.insertNode(2)
list.insertNode(3)
list.insertNode(4)
list.insertNode(5)



list.display()
