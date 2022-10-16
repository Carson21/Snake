import Node from "./node.js"

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let newNode = new Node(value)

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
    }
}

export default LinkedList
