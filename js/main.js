import Snake, { SNAKE_SPEED, SNAKE_SIZE } from "./snake.js"
import { didStart } from "./input.js"
import Food from "./food.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let prevTime = 0
const snake = new Snake(SNAKE_SIZE)
const food = new Food()

let isDead

const main = (time) => {
    const call = window.requestAnimationFrame(main)
    const deltaTime = (time - prevTime) / 1000
    if (deltaTime < 1 / SNAKE_SPEED) return

    isDead = update(didStart())
    if (isDead) {
        window.cancelAnimationFrame(call)
        return
    }
    render()

    // Set prevTime but adjust for deltaTime not being a multiple of (1000 / SNAKE_SPEED)
    // which is the fps interval for the game.
    prevTime = time - (deltaTime % (1000 / SNAKE_SPEED))
}

const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    food.render(ctx)
    snake.render(ctx)
}

const update = (started) => {
    let dead = snake.update(started)
    food.update(snake)
    return dead
}

window.requestAnimationFrame(main)
