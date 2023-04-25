// scrivere una funzione chiamata lessThan che 
// dati due numeri a e b che ritorna true se a e' minore di b
// false altrimenti

let a = 3
let b = 4

function lessThan(a, b) {
    if (a<b) {
        return true
    } else {
        return false
    }
}

lessThan(a, b)
console.log(lessThan(a, b))