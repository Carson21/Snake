class Food {
    constructor() {
        this.x = Math.floor(Math.random() * 37) + 1
        this.y = Math.floor(Math.random() * 27) + 1
    }

    update(snake) {
        if (snake.onSnake({ x: this.x, y: this.y })) {
            snake.addLength(3)

            let x = Math.floor(Math.random() * 37) + 1
            let y = Math.floor(Math.random() * 27) + 1

            while (snake.onSnake({ x: x, y: y })) {
                x = Math.floor(Math.random() * 37) + 1
                y = Math.floor(Math.random() * 27) + 1
            }

            this.x = x
            this.y = y
        }
    }

    render(ctx) {
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(this.x * 20, this.y * 20, 20, 20)
    }
}

export default Food
