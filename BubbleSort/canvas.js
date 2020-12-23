let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")


canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.border = "1px solid black"






window.addEventListener("resize", () => {
    init()
})


var array = []


function init() {
    array = []
    x = 0
    y = 0
    for(let i = 0; i < canvas.width / 11; i++) {
        array.push(Math.floor(Math.random() * canvas.height))
    }
}


function swap(arr,a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp    
}

let x = 0
let y = 0

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    let a = array[y]
    let b = array[y + 1]

    if(a > b) {
        swap(array, y, y + 1)
    }
    if(x < array.length) {
        y++
        
        if(y >= array.length - 1 - x) {
            y = 0
            x ++
        }
    }
    


    for(let i in array) {
        c.beginPath()
        c.rect(i +9, 0, 7, array[i])

        
        c.strokeStyle = "black"
        c.stroke()
        
    }

}

init()
animate()
