import Node from "./node.js"

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
    }

    append(value) {
        let newNode = new Node(value)

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }
}

export default LinkedList
