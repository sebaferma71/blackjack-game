var cards = []
var hasBlackJack = false
var isAlive = false
var message = ""
var messageEl = document.getElementById("message-el")
var sumaEl = document.getElementById("suma-el")
var cardsEl = document.getElementById("cards-el")
var playerEl = document.getElementById("player-el")
var player = {
    name: "Sebastian", 
    chips: 0
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    var randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
    
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    var firstCard = getRandomCard()
    var secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    suma = firstCard + secondCard
    playerEl.textContent = player.name + ": $" + player.chips
    player.chips -= 50
    renderGame()
}
 
function renderGame() {
    if (suma <= 20) {
        message = "Queres otra carta?"
        player.chips += 50
    }
    else if (suma === 21) {
        message = "Blackjack!"
        hasBlackJack = true
        player.chips += 500
    }
    else {
        message = "Estas fuera!"
        isAlive = false
        player.chips -= 100
    }
    messageEl.textContent = message

    cardsEl.textContent = "Cartas: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumaEl.textContent = "Suma: " + suma
    playerEl.textContent = player.name + ": $" + player.chips
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        var card = getRandomCard()
        suma = suma + card
        cards.push(card)
        renderGame()
    }
    
}