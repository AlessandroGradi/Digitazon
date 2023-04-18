// scrivere una funzione chiamata between che 
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b esclusi


//creo la funzione between
//

function between(c, d) {
    const num = []
    for (let i=c + 1; i<d; i++) {
       num.push(i)
    }
    return num
}

let a = 2
let b = 19

console.log(between(a, b))

// function between(c, d) {
//     const array = []
//     for(let i = c + 1; i < d; i++) {
//         array.push(i)
//     }
//     return array
// }

// let a = 5
// let b = 9
// console.log(between(a, b))