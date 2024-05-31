//knoppeling html
let introBtn1 = document.querySelector("#nextBtn1")
let introBtn2 = document.querySelector("#nextBtn2")
let startBtn = document.querySelector("#start")
let mainSong = new Audio("audio/main-audio.mp3")

//intro functions:
function fog() {
    document.querySelector('#start-screen').classList.add('hidden')
    document.querySelector('#intro1').classList.remove('hidden')
}

function fogBtn() {
    document.querySelector('#intro1').classList.add('hidden')
    document.querySelector('#intro2').classList.remove('hidden')
}

function skullBtn() {
    document.querySelector('#intro2').classList.add('hidden')
    document.querySelector('#intro3').classList.remove('hidden')
}

function playSong() {
    mainSong.play()
}

//intro knoppen
introBtn1.addEventListener("click", fogBtn)
introBtn2.addEventListener("click", skullBtn)
startBtn.addEventListener("click", ()=> {
    playSong()
    fog()
})

//let audionaam = new Audio("audio/....mp3")
//audionaam.play()
//bron Thomas

//intro teksten zijn gegenereerd door chatgpt.com