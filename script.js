const button = document.querySelector(".button")
const background = document.querySelector(".background")
const ball = document.querySelector(".ball")



button.addEventListener('click', function () {
    background.classList.toggle("dark")
    ball.classList.toggle("ball-right")
})

