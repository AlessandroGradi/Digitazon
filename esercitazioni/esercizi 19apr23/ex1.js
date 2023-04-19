/*
Ex 1

Creare un array che è composto da 3 oggetti, che rappresentano dei rettangoli, 
e avranno le proprietà base e altezza (numeri).
Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, 
mettili in un array.
Cicla questo array SIA con un foreach PRIMA che con un for DOPO, 
per stampare l'area di ogni rettangolo (ad ogni iterazione)
*/

//creo l'array forme con 3 oggetti
//negli oggetti scrivo le proprieta' base, altezza e relativi prametri

/*
let forme = [
    {
    "id": "rettangolo1",
    "base": 12,
    "altezza": 6
    },

    {
    "id": "rettangolo1",
    "base": 10,
    "altezza": 4
    },

    {
    "id": "rettangolo1",
    "base": 6,
    "altezza": 1
    },
]

//con il forEach...?

//creo un for 
*/

const rettangoli = [ //mi creo un'array di oggetti in questo caso 3 oggetti 'rettangoli'
{ base: 10, altezza: 5 },
{ base: 6, altezza: 3 },
{ base: 8, altezza: 4 }
];

rettangoli.forEach(function (rettangolo) {  //rettangolo prendo singolo elemento cioè base e altezza
const area = rettangolo.base * rettangolo.altezza; //mi creo una costante area per operare su base per altezza
console.log(`L'area del rettangolo con base ${rettangolo.base} e altezza ${rettangolo.altezza} è ${area}`); //mi creo un console.log per visualizzare il risultato del calcolo dell'area
});

for (let i = 0; i < rettangoli.length; i++) {
const rettangolo = rettangoli[i]; //rettangolo prendo singolo elemento cioè base e altezza
const area = rettangolo.base * rettangolo.altezza; //mi creo una costante area per operare su base per altezza
console.log(`L'area del rettangolo con base ${rettangolo.base} e altezza ${rettangolo.altezza} è ${area}`); //mi creo un console.log per visualizzare il risultato del calcolo dell'area
}

