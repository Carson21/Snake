import LinkedList from "./linkedlist.js"
import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 15
export const SNAKE_SIZE = 20

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
        ctx.fillStyle = "#00FFFF"
        ctx.fillRect(node.value.x * 20, node.value.y * 20, 20, 20)
        node = node.next
        ctx.fillStyle = "#00FF00"
        while (node != null) {
            ctx.fillRect(node.value.x * 20, node.value.y * 20, 20, 20)
            node = node.next
        }
    }

    update(started) {
        if (!started) return
        let node = this.snake.tail
        let dead

        while (node != this.snake.head) {
            node.value.x = node.prev.value.x
            node.value.y = node.prev.value.y
            node = node.prev
        }

        let inputDirection = getInputDirection()

        this.snake.head.value.x += inputDirection.x
        this.snake.head.value.y += inputDirection.y

        dead = this.#isDead()

        return dead
    }

    onSnake(position) {
        position = { x: 0, y: 0 }
        let headXY = this.snake.head.value
        if (position.x == headXY.x && position.y == headXY.y) {
            return true
        } else {
            return false
        }
    }

    #isDead() {
        let head = this.snake.head
        let node = this.snake.head.next

        while (node != null) {
            if (node.value.x == head.value.x && node.value.y == head.value.y) {
                return true
            }
            node = node.next
        }

        if (head.value.x < 0 || head.value.x > 39) {
            console.log(head.value.x * 20)
            return true
        } else if (head.value.y < 0 || head.value.y > 29) {
            return true
        }

        return false
    }
}

export default Snake
