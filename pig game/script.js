'use strict'
const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')
const dice = document.querySelector('.dice');
const role = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const newGame = document.querySelector('.btn--new')
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true


score0.textContent = 0
score1.textContent = 0
dice.classList.add('hidden')
const toggle = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}
role.addEventListener('click', function () {
    if (playing) {
        const randomNumber = Math.floor(Math.random() * 6) + 1
        console.log(randomNumber)
        dice.classList.remove('hidden')
        dice.src = `dice-${randomNumber}.png`
        if (randomNumber !== 1) {
            currentScore += randomNumber
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
            //current0.textContent = currentScore
        }
        else {
            toggle()
        }

    }
})



hold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 20) {
            playing = false
            dice.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            toggle()
        }

    }
})

newGame.addEventListener('click', function () {
    scores[0] = 0
    scores[1] = 0
    currentScore = 0
    activePlayer = 0
    playing = true
    score0.textContent = 0
    score1.textContent = 0
    current0.textContent = 0
    current1.textContent = 0


    document.getElementById(`score--${activePlayer}`).textContent = 0
    document.getElementById(`current--${activePlayer}`).textContent = 0
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    dice.classList.add('hidden')

})
