const satisfy = document.getElementById("satisfy")
const inter = document.getElementById("inter")
const mono = document.getElementById("mono")

const input = document.getElementById("js--input")


input.oninput = function (event) {
    satisfy.innerText = event.target.value
    inter.innerText = event.target.value
    mono.innerText = event.target.value
}

const hearts = document.getElementsByClassName("heart__logo")
console.log(hearts)

for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(event){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].classList = "fa-regular fa-heart heart__logo"
        }
        hearts[i].classList = "fa-solid fa-heart heart__logo"
    }
    
}


const header = document.getElementById("js--header");
const showcase = document.getElementById("js--showcase")
const body = document.getElementById("js--body")
const logo = document.getElementById("js--logo")

const toggle = document.getElementById("js--toggle");
console.log(toggle)
toggle.onclick = function(){
    if (toggle.checked == true){
        header.style.background = "#06283D"
        showcase.style.background = "#06283D"
        showcase.style.color = "#eee"
        logo.style.background = "#86a79e"
        input.style.color = "#eee"
        body.style.background = "#86a79e"
    }
    
}

