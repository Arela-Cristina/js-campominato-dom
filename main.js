const containerMinato = document.getElementById('campoMinato');
// console.log(containerMinato);

const myButton = document.getElementById('myButton');
// console.log(myButton);

//definisco una variabile per il punteggio
const punteggio = document.getElementById('points');
// console.log('sono il', punteggio.innerHTML);


//creiamo un array di 16 numeri random
let bomb = arrayNum(1, 100);
console.log(bomb);

// //aggiungiamo evento al bottone
myButton.addEventListener('click', function () {
    containerMinato.innerHTML = '';

    //creiamo 100 celle con il ciclo for
    for (let i = 1; i <= 100; i++) {
        // console.log(i);


        //creiamo un elemento div che rappresentara ogni cella
        let campoSingolo = document.createElement('div');
        // console.log(campoSingolo);
        //ogni cella ha un numero del 1 al 100
        campoSingolo.innerHTML += i;

        //assegniamo la clasesquare al nostro div
        campoSingolo.classList.add('square');
        // console.log(campoSingolo);

        //appendiamo ogni campo singolo nel caontainerMinato.
        containerMinato.append(campoSingolo);



        //Aggiugiamo un evento. per farsi in modo che quando il utente clicka... 
        campoSingolo.addEventListener('click', function () {
            if (bomb.includes(i)) {
                //condizione: la cella si colora di roso.
                campoSingolo.classList.add('squareClickBomb');
                //funzione per stoppare il gioco
                endGame();
           
            } else {
                 //altrimenti: la cella si colora di verde.
                campoSingolo.classList.add('squareClick');
                //e quando si colora di verde conta i punti, che hanno un valore numerico
                punteggio.innerHTML = parseInt(punteggio.innerHTML) + 1;
            }
            //ed emetto un messaggio in console con il numero  della cella cliccata.
            console.log('Cella clicata', this.innerHTML);
        });
    }
    //Quando re inizio il gioco, il punteggio diventa 0
    punteggio.innerHTML = parseInt(0);

});



