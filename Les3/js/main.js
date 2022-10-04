const satisfy = document.getElementById("satisfy")
const inter = document.getElementById("inter")
const mono = document.getElementById("mono")

const input = document.getElementById("js--input")


input.oninput = function (event) {
    satisfy.innerText = event.target.value
    inter.innerText = event.target.value
    mono.innerText = event.target.value
}

const hearts = document.getElementsByClassName("heart")

console.log(hearts)
