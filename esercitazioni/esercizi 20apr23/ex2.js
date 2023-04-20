/*
Ex 2

Creare un array di 5 parole.
Iterare su questo array in 2 modi.
PRIMA con un while, per stampare tutte le singole parole nell'array MAIUSCOLE. In questo caso, vogliamo ciclare l'array in senso invertito.

DOPO con un foreach, per stampare tutte le parole dell'array in ordine
*/

const words = ['triangolo', 'quadrato', 'pentagono', 'esagono', 'ettagono']

let i = words.length-1
while (i>=0) {
    console.log(words[i].toUpperCase()); 
    i--
}

console.log('-----------------------')

words.forEach(el => console.log(el))

// function print(words) {
//     words.forEach(el => console.log(el))
// }



// words.forEach(function(j) {
//     console.log(j)
// })


