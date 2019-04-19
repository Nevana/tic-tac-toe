let firtPlayer = true

function totopFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
function resetGame() {
    for (i = 1; i < 10; i++) {
        let element = document.getElementById(i)
        element.setAttribute("onclick", `cardPressed(${i});`)
        element.style.cursor = "pointer"
        element.style.backgroundColor = "gray"
        element.innerHTML = ""
        element.setAttribute("value", "default")
    }
    firtPlayer = true
    document.getElementById("won").innerHTML = "Select to start:"
}
function cardPressed(cardID) {
    let info = document.getElementById("won")
    if (firtPlayer) {
        let element = document.getElementById(cardID)
        info.innerHTML = "Player X has to choos!"
        element.style.backgroundColor = "red"
        element.setAttribute("value", "x")
        element.innerHTML = "X"
        element.style.cursor = "default"
        element.removeAttribute("onclick")
        element.onclick = "#"
        check()
    } else {
        let element = document.getElementById(cardID)
        info.innerHTML = "Player o has to choos!"
        element.style.backgroundColor = "green"
        element.setAttribute("value", "0")
        element.innerHTML = "0"
        element.style.cursor = "default"
        element.removeAttribute("onclick")
        element.onclick = "#"
        check()
    }
    firtPlayer = !firtPlayer
}
function check() {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]
    for (let numbers of matrix) {
        let firstSquare = document.getElementById(numbers[0])
        let secondSquare = document.getElementById(numbers[1])
        let thirdSquare = document.getElementById(numbers[2])
        let winnerBanner = document.getElementById("won")
        if (firstSquare.getAttribute('value') === secondSquare.getAttribute('value') && secondSquare.getAttribute('value') === thirdSquare.getAttribute('value')) {
            if (firstSquare.getAttribute('value') != "default" && secondSquare.getAttribute('value') != "default" && thirdSquare.getAttribute('value') != "default") {
                if (firtPlayer) {
                    blockAllSquares()
                    winnerBanner.innerHTML = "Player 1 won!"
                } else {
                    blockAllSquares()
                    winnerBanner.innerHTML = "Player 2 won!"
                }
            }
        }
    }
}
function blockAllSquares(){
    document.getElementById("won").innerHTML = "HOLD"
    for (i = 1; i < 10; i++) {
        let element = document.getElementById(i)
        element.style.cursor = "default"
        element.removeAttribute("onclick")
        element.onclick = "#"
    }
}