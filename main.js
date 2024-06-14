let containerMinato = document.getElementById('campoMinato');
// console.log(containerMinato);

let myButton = document.getElementById('myButton');
// console.log(myButton);



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

        //Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
        campoSingolo.addEventListener('click', function () {


            //creiamo un array di 16 numeri random


            campoSingolo.classList.toggle('squareClick');
            //ed emetto un messaggio in console con il numero  della cella cliccata.
            console.log('Cella clicata', this.innerHTML);



        });
    }
});

let cane = arrayNum(1, 16);
console.log(cane);

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
//In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
//Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
