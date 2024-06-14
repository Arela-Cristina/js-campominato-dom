// funzione per creare i cuadratini

function gameStructure(tag, classToAdd) {
    let box = document.createElement(tag);
    box.innerHTML += i;
    box.classList.add(classToAdd);
    return box;
}

// funzione per creare un numero random
function randomNumGenerator(numMin, numMax) {
    let numGen = Math.floor((Math.random() * (numMax - numMin + 1)) + numMin);
    return numGen
}


// funzione per creare un array con  numeri random da x fino a y
function arrayNum(min, max) {
    const arrayNum = [];
    while (arrayNum.length < 16) {
        let arrayRandomNum = randomNumGenerator(min, max);
        if (!arrayNum.includes(arrayRandomNum)) {
            arrayNum.push(arrayRandomNum);
        }
    }
    return arrayNum
}

//funzione per stoppare il gioco
function endGame() {
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        if (!square.classList.contains('squareClick') && !square.classList.contains('squareClickBomb')) {
            square.classList.add('disabled');
        } else if (square.classList.contains('squareClick')) {
            square.classList.add('disableClick');
            square.classList.add('disabled');
        }
    }
}
