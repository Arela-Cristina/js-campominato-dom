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

