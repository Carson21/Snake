let inputDirection = { x: 0, y: 0 }
let lastDir = { x: 0, y: 0 }
let started = false

window.addEventListener("keydown", (e) => {
    console.log(e.key)
    switch (e.key) {
        case "ArrowUp":
            if (lastDir.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            started = true
            break
        case "ArrowDown":
            if (lastDir.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case "ArrowRight":
            if (lastDir.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            started = true
            break
        case "ArrowLeft":
            if (lastDir.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            started = true
            break
    }
})

export const getInputDirection = () => {
    lastDir = inputDirection
    return inputDirection
}

export const didStart = () => {
    return started
}
