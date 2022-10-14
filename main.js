import Snake, { SNAKE_SPEED, SNAKE_SIZE } from "./snake.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let prevTime = 0
const snake = new Snake(SNAKE_SIZE)

const main = (time) => {
    window.requestAnimationFrame(main)
    const deltaTime = (time - prevTime) / 1000
    if (deltaTime < 1 / SNAKE_SPEED) return

    render()
    update()
    prevTime = time
}

const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snake.render(ctx)
}

const update = () => {
    snake.update()
}

window.requestAnimationFrame(main)
