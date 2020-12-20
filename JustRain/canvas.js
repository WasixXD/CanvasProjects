let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight


let colors = ["#7787a6", "#a8b0bf", "#e9ecf2", "#4c5d73", "orange"]
canvas.style.backgroundColor = "#263440"


let x = 100
let y = 10


class Pingo {
    constructor(x, y, yspeed, length) {
        this.x = x
        this.y = y
        this.yspeed = yspeed
        this.length = length
        this.color = colors[Math.floor(Math.random() * colors.length)]
    }

    update() {
        this.y += this.yspeed
        this.x -=1
        if(this.y > canvas.height) {
            this.y = 0
        }
        if(this.x < 0) {
            this.x = canvas.width
        }
    }

    draw() {
        c.beginPath()
        c.moveTo(this.x , this.y - this.length)
        c.lineTo(this.x, this.y)
        
        c.strokeStyle = this.color
        c.stroke()
        
        this.update()
        
    }

    
}

let cloud = []

for(let i = 0; i < 800; i++) {
    let x = (Math.random() * canvas.width) + 10
    let y = (Math.random() * canvas.height) - 10
    let yspeed = (Math.random() * 3) + 2
    let length = (Math.random() * 20) + 10
    cloud.push(new Pingo(x, y, yspeed, length))
}
console.log(cloud)

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0, innerWidth, innerHeight)
    for(let RainDrop in cloud) {
        cloud[RainDrop].draw()
    }
    
   
    
}

animate()
