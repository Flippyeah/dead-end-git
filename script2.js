//connectie html:
let attackBtn = document.querySelector("#btn1")
let talkBtn = document.querySelector("#btn2")
let petBtn = document.querySelector("#btn3")
let blockBtn = document.querySelector("#btn4")
let dodgeBtn = document.querySelector("#btn5")
let attack2Btn = document.querySelector("#btn6")
let pet2Btn = document.querySelector("#btn7")
let nextBtn = document.querySelector("#nextBtn")

let sadSong = new Audio("audio/game-over-audio.mp3")
let story = document.querySelector("p")
let gameOverScreen = document.querySelector("#game-over")
let counter = 6
let counter2 = 9
let timeInterval
let timeInterval2

//TIMER1
function time() {
    timeInterval = setInterval(startTimer, 1000)
}

function startTimer() {
    counter -= 1
    document.querySelector("#timer").textContent = counter
    if (counter <= 0) {
    lose()
    }
}

function stopTimer() {
    clearInterval(timeInterval)
}

//TIMER2
function time2() {
    timeInterval2 = setInterval(startTimer2, 1000)
}

function startTimer2() {
    counter2 -= 1
    document.querySelector("#timer2").textContent = counter2
    if (counter2 <= 0) {
    lose()
    }
}

function stopTimer2() {
    clearInterval(timeInterval2)
}

//functions:
function kill() {
    document.querySelector('#chapter1').classList.add('hidden')
    document.querySelector('#chapter2').classList.remove('hidden')
}

function speak() {
    story.textContent = 'scary knight: ...'
}

function lose() {
    document.querySelector('#youlost').classList.add('hidden')
    gameOverScreen.classList.remove('hidden')
    sadSong.play()
}

function firstTimer() {
    document.querySelector('#chapter2').classList.add('hidden')
    document.querySelector('#chapter3').classList.remove('hidden')
    time()
}

function secondTimer() {
    document.querySelector('#chapter3').classList.add('hidden')
    document.querySelector('#chapter4').classList.remove('hidden')
    time2()
}

function youWon() {
    document.querySelector('#chapter4').classList.add('hidden')
    document.querySelector('#chapter5').classList.remove('hidden')
}

//let audionaam = new Audio("audio/....mp3")
//audionaam.play()
//bron Thomas

//koppeling knoppen met functions:
attackBtn.addEventListener("click", kill)
talkBtn.addEventListener("click", speak)
petBtn.addEventListener("click", lose)
nextBtn.addEventListener("click", firstTimer)
blockBtn.addEventListener("click", lose)
dodgeBtn.addEventListener("click", ()=> {
    stopTimer()
    secondTimer()
})
attack2Btn.addEventListener("click", ()=> {
    stopTimer2()
    youWon()
})
pet2Btn.addEventListener("click", lose)
