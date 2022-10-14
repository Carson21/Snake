import Snake, { SNAKE_SPEED, SNAKE_SIZE } from "./snake.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let prevTime = 0
const snake = new Snake(SNAKE_SIZE)

const main = (time) => {
    window.requestAnimationFrame(main)
    const deltaTime = (time - prevTime) / 1000
    if (deltaTime < 1 / SNAKE_SPEED) return
    console.log(1 / deltaTime)

    update()
    render()

    // Set prevTime but adjust for deltaTime not being a multiple of (1000 / SNAKE_SPEED)
    // which is the fps interval for the game.
    prevTime = time - (deltaTime % (1000 / SNAKE_SPEED))
}

const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snake.render(ctx)
}

const update = () => {
    snake.update()
}

window.requestAnimationFrame(main)
