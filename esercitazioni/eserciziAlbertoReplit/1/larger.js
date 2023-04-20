// scrivere una funzione chiamata larger che 
// dati due numeri a e b ritorna il maggiore



function larger(a, b) {
    if (a>b) {
        return 'a'
    } 
    else if (a==b){
        return 'i numeri sono uguali'
    } 
    else {
        return 'b'
    }
}

let a = 4
let b = 583
console.log(larger(a, b))