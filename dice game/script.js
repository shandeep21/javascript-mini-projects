'use strict';
// //console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent = "text value is changed"
// //console.log(document.querySelector(".message").textContent)

// document.querySelector(".number").textContent = 35
// document.querySelector(".score").textContent = 10
// document.querySelector(".guess").value = 23

// console.log(document.querySelector(".guess").value)

//let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0
let secretNumber = Math.trunc(Math.random() * 20) + 1
document.querySelector(".again").addEventListener("click", function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector(".number").textContent = "?"
    document.querySelector("body").style.backgroundColor = 'black'
    document.querySelector(".score").textContent = score
    document.querySelector(".message").textContent = "Start guessing.."
    document.querySelector(".guess").value = ""



})

document.querySelector(".check").addEventListener("click", function () {
    let guess = document.querySelector(".guess").value
    console.log(guess)
    if (!guess) {
        document.querySelector(".message").textContent = "Enter the Number pls!"
    }
    else if (guess > 20 | guess < 1) {
        document.querySelector(".message").textContent = "Enter between 1 and 20"
    }
    else if (1 <= guess <= 20) {
        if (guess == secretNumber) {
            document.querySelector(".number").textContent = secretNumber
            document.querySelector(".message").textContent = "Congrats! your guess is correct :)"
            document.querySelector("body").style.backgroundColor = 'green'
            if (score > highScore) {
                highScore = score
                document.querySelector(".highscore").textContent = highScore
            }
        }
        else if (guess != secretNumber) {
            if (score > 1) {
                score--
                document.querySelector(".score").textContent = score
                if (guess < secretNumber) {
                    document.querySelector(".message").textContent = "Too Low"
                }
                else {
                    document.querySelector(".message").textContent = "Too High"
                }
            }
            else {
                document.querySelector(".score").textContent = "Opps! You Lost the Game :("
            }


        }

    }
})