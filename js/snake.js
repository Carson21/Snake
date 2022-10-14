import LinkedList from "./linkedlist.js"
import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 15
export const SNAKE_SIZE = 6

class Snake {
    constructor(size) {
        this.size = size
        this.snake = new LinkedList({ x: 19, y: 14 })

        for (let i = 0; i < size - 1; i++) {
            this.snake.append({ x: 19, y: 15 + i })
        }
    }

    render(ctx) {
        let node = this.snake.head
        ctx.fillStyle = "#00FF00"
        while (node != null) {
            ctx.fillRect(node.value.x * 20, node.value.y * 20, 20, 20)
            node = node.next
        }
    }

    update() {
        let node = this.snake.tail

        while (node != this.snake.head) {
            node.value.x = node.prev.value.x
            node.value.y = node.prev.value.y
            node = node.prev
        }

        let inputDirection = getInputDirection()

        this.snake.head.value.x += inputDirection.x
        this.snake.head.value.y += inputDirection.y
    }
}

export default Snake
