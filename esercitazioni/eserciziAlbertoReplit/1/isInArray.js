// scrivere una funzione chiamata isInArray che 
// dato un array di numeri e un numero in ingresso
// ritorna true se il numero e' presente nell'array
// false altrimenti

//creo un array n di numeri interi
//

let numbers = [4, 6, 56, 47, 367, 23]
let n = 56
let nboolean = false
function isInArray(numbers, n) {
    for (i=0; i<numbers.length; i++)
        if (numbers[i]==n) {
            nboolean = true
        }
    return nboolean
}


console.log(isInArray(numbers, n))



/*
let numbers = [4, 6, 56, 47, 367, 23]
let n = 57
let nboolean = false
function isInArray(numbers, n) {
    for (i=0; i<numbers.length; i++)
        if (numbers[i]!==n) {
            continue
        }
        else {
            nboolean = true
        }
    return nboolean
}


console.log(isInArray(numbers, n))
*/