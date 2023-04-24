// scrivere una funzione chiamata isDivisible che 
// dato un numero a e un numero b
// ritorni true se a e' divisibile per b, false altrimenti

let a = 10
let b = 5
function isDivisible(a, b) {
    if (a%b==0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isDivisible(a, b)